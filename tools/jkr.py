#!/usr/bin/env python3
"""jkr.py - convert between Balatro save files (.jkr) and readable text.

A .jkr is a raw DEFLATE stream wrapped around a single Lua table literal of the form
`return { ... }`. This reads that in both directions:

    python3 tools/jkr.py decode save.jkr [save.json]   .jkr -> JSON
    python3 tools/jkr.py lua    save.jkr [save.txt]    .jkr -> the Lua text as-is
    python3 tools/jkr.py encode save.json [save.jkr]   JSON or Lua text -> .jkr
    python3 tools/jkr.py roundtrip save.jkr            decode, re-encode, compare

With no output path, decode/lua write alongside the input and encode writes <input>.jkr.
`encode` takes either the JSON this tool emits or a raw Lua table literal, so a .txt
dumped with `lua`, hand-edited, goes straight back in.

Lua has three values JSON cannot hold. They survive as tagged strings:

    inf -> "@lua:inf"    -inf -> "@lua:-inf"    nan -> "@lua:nan"

A long enough run overflows a stat into one of these, which is what makes many parsers
fail on late-game saves. A real string of that exact form would be misread on the way
back; nothing in a Balatro save looks like one.

Lua table keys are either strings or integers, and `t[4]` and `t["4"]` are different slots.
Balatro uses both - card ranks in GAME.cards_played are string keys - so a key that was a
string but looks like an integer is tagged "@lua:str:4" to keep the two apart.

Key order is preserved throughout: Python dicts keep insertion order and so does the JSON
written from them, so a decode/encode round trip reproduces the original byte for byte
except where Lua and Python print a float differently.
"""

import json
import os
import re
import sys
import zlib

STR_KEY_TAG = "@lua:str:"   # a Lua string key that would otherwise read as an integer
LUA_INF = "@lua:inf"
LUA_NEG_INF = "@lua:-inf"
LUA_NAN = "@lua:nan"

INTEGER_KEY = re.compile(r"^-?(0|[1-9][0-9]*)$")


# ---- reading ------------------------------------------------------------

_WS = " \t\r\n"
_NUMBER = re.compile(r"-?(?:0[xX][0-9a-fA-F]+|[0-9]+(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?)")
_BAREWORD = re.compile(r"[A-Za-z_]\w*")
# Longest first, so "-inf" is never read as "-" followed by "inf".
_WORDS = (
    ("-inf", float("-inf")),
    ("inf", float("inf")),
    ("-nan", float("nan")),
    ("nan", float("nan")),
    ("true", True),
    ("false", False),
    ("nil", None),
)
_ESCAPES = {"n": "\n", "t": "\t", "r": "\r", "a": "\a", "b": "\b",
            "f": "\f", "v": "\v", '"': '"', "'": "'", "\\": "\\", "/": "/", "\n": "\n"}


class LuaSyntaxError(ValueError):
    pass


class _Reader:
    """Recursive-descent reader for the subset of Lua that Balatro writes: tables,
    strings, numbers (decimal, exponent, hex, and the non-finite words), booleans, nil."""

    def __init__(self, text):
        self.t = text
        self.i = 0
        self.n = len(text)

    def fail(self, msg):
        line = self.t.count("\n", 0, self.i) + 1
        raise LuaSyntaxError("%s at offset %d (line %d): %r"
                             % (msg, self.i, line, self.t[self.i:self.i + 40]))

    def ws(self):
        t, i, n = self.t, self.i, self.n
        while i < n and t[i] in _WS:
            i += 1
        self.i = i

    def read_string(self):
        t = self.t
        quote = t[self.i]
        i = self.i + 1
        parts = []
        while i < self.n and t[i] != quote:
            if t[i] != "\\":
                j = i
                while j < self.n and t[j] != quote and t[j] != "\\":
                    j += 1
                parts.append(t[i:j])
                i = j
                continue
            i += 1
            c = t[i]
            if c.isdigit():                       # \ddd decimal escape, up to three digits
                digits = ""
                while len(digits) < 3 and i < self.n and t[i].isdigit():
                    digits += t[i]
                    i += 1
                parts.append(chr(int(digits)))
                continue
            if c == "x":
                parts.append(chr(int(t[i + 1:i + 3], 16)))
                i += 3
                continue
            parts.append(_ESCAPES.get(c, c))
            i += 1
        if i >= self.n:
            self.fail("Unterminated string")
        self.i = i + 1
        return "".join(parts)

    def read_value(self):
        self.ws()
        t, i = self.t, self.i
        if i >= self.n:
            self.fail("Unexpected end of input")
        c = t[i]
        if c == "{":
            return self.read_table()
        if c == '"' or c == "'":
            return self.read_string()
        for word, value in _WORDS:
            if t.startswith(word, i):
                self.i = i + len(word)
                return value
        m = _NUMBER.match(t, i)
        if m:
            self.i = m.end()
            return _to_number(m.group(0))
        self.fail("Unexpected token")

    def read_table(self):
        self.i += 1                               # {
        out = {}
        array_index = 1                           # bare values take 1, 2, 3, ...
        t = self.t
        while True:
            self.ws()
            if self.i >= self.n:
                self.fail("Unterminated table")
            if t[self.i] == "}":
                self.i += 1
                return out
            if t[self.i] == "[":
                self.i += 1
                key = self.read_value()
                self.ws()
                if t[self.i] != "]":
                    self.fail("Expected ]")
                self.i += 1
                self.ws()
                if t[self.i] != "=":
                    self.fail("Expected = after key")
                self.i += 1
                # Tag a string key that looks like an integer, so it is not written back
                # as one: t[4] and t["4"] are different slots in Lua.
                if isinstance(key, str) and INTEGER_KEY.match(key):
                    out[STR_KEY_TAG + key] = self.read_value()
                else:
                    out[_key_text(key)] = self.read_value()
            else:
                m = _BAREWORD.match(t, self.i)
                if m:
                    after = m.end()
                    while after < self.n and t[after] in _WS:
                        after += 1
                    if after < self.n and t[after] == "=":
                        self.i = after + 1
                        out[m.group(0)] = self.read_value()
                    else:
                        out[str(array_index)] = self.read_value()
                        array_index += 1
                else:
                    out[str(array_index)] = self.read_value()
                    array_index += 1
            self.ws()
            if self.i < self.n and t[self.i] in ",;":
                self.i += 1


def _to_number(literal):
    """Keep integers as int and floats as float, so each prints back the way it came in."""
    if literal[:2].lower() in ("0x", "-0") and "x" in literal.lower():
        return int(literal, 16)
    if "." in literal or "e" in literal or "E" in literal:
        return float(literal)
    return int(literal)


def _key_text(key):
    if isinstance(key, bool):
        return "true" if key else "false"
    if isinstance(key, float) and key.is_integer():
        return str(int(key))
    return str(key)


def parse_lua(text):
    reader = _Reader(text)
    reader.ws()
    if text.startswith("return", reader.i):
        reader.i += len("return")
    return reader.read_value()


def to_json_safe(value):
    """Non-finite numbers become tagged strings, so the result is valid JSON."""
    if isinstance(value, float):
        if value == float("inf"):
            return LUA_INF
        if value == float("-inf"):
            return LUA_NEG_INF
        if value != value:
            return LUA_NAN
        return value
    if isinstance(value, dict):
        return {k: to_json_safe(v) for k, v in value.items()}
    return value


# ---- writing ------------------------------------------------------------

_ESCAPE_OUT = {"\\": "\\\\", '"': '\\"', "\n": "\\n", "\r": "\\r", "\t": "\\t"}


def escape_lua_string(s):
    out = []
    for ch in s:
        if ch in _ESCAPE_OUT:
            out.append(_ESCAPE_OUT[ch])
        elif ch < " ":
            out.append("\\%d" % ord(ch))
        else:
            out.append(ch)
    return "".join(out)


def write_lua_number(x):
    if isinstance(x, bool):
        return "true" if x else "false"
    if isinstance(x, int):
        return str(x)
    if x != x:
        return "nan"
    if x == float("inf"):
        return "inf"
    if x == float("-inf"):
        return "-inf"
    return repr(x)


def write_lua_value(value):
    if value is None:
        return "nil"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return write_lua_number(value)
    if isinstance(value, str):
        if value == LUA_INF:
            return "inf"
        if value == LUA_NEG_INF:
            return "-inf"
        if value == LUA_NAN:
            return "nan"
        return '"' + escape_lua_string(value) + '"'
    if isinstance(value, list):
        # A JSON array is a Lua table keyed 1..n.
        return "{" + "".join("[%d]=%s," % (i + 1, write_lua_value(v))
                             for i, v in enumerate(value)) + "}"
    if isinstance(value, dict):
        # Balatro puts a comma after every entry, the last one included.
        parts = []
        for k, v in value.items():
            if k.startswith(STR_KEY_TAG):
                key = '["' + escape_lua_string(k[len(STR_KEY_TAG):]) + '"]'
            elif INTEGER_KEY.match(k):
                key = "[" + k + "]"
            else:
                key = '["' + escape_lua_string(k) + '"]'
            parts.append(key + "=" + write_lua_value(v) + ",")
        return "{" + "".join(parts) + "}"
    raise TypeError("Cannot write %r" % type(value))


def write_lua(root):
    return "return " + write_lua_value(root)


# ---- file helpers -------------------------------------------------------

def read_jkr(path):
    with open(path, "rb") as fh:
        return zlib.decompress(fh.read(), -zlib.MAX_WBITS).decode("utf-8")


def write_jkr(path, lua_text):
    compressor = zlib.compressobj(9, zlib.DEFLATED, -zlib.MAX_WBITS)
    blob = compressor.compress(lua_text.encode("utf-8")) + compressor.flush()
    with open(path, "wb") as fh:
        fh.write(blob)


def load_for_encode(path):
    """`encode` accepts either the JSON this tool emits or a raw Lua table literal."""
    with open(path, "r", encoding="utf-8") as fh:
        text = fh.read()
    try:
        return json.loads(text), "JSON"
    except json.JSONDecodeError:
        return parse_lua(text), "Lua text"


def swap_ext(path, ext):
    return os.path.join(os.path.dirname(path), os.path.splitext(os.path.basename(path))[0] + ext)


def diff(a, b, at="$", out=None):
    """Structural comparison, so a round trip is checked on values rather than byte order."""
    if out is None:
        out = []
    if len(out) > 20:
        return out
    if not (isinstance(a, dict) and isinstance(b, dict)):
        same = a == b or (isinstance(a, float) and isinstance(b, float) and a != a and b != b)
        if not same:
            out.append("%s: %r -> %r" % (at, a, b))
        return out
    for key in set(a) | set(b):
        if key not in a:
            out.append("%s.%s: missing before" % (at, key))
        elif key not in b:
            out.append("%s.%s: missing after" % (at, key))
        else:
            diff(a[key], b[key], at + "." + key, out)
    return out


# ---- CLI ----------------------------------------------------------------

def main(argv):
    if len(argv) < 2:
        print(__doc__.strip(), file=sys.stderr)
        return 1
    command, source = argv[0], argv[1]
    target = argv[2] if len(argv) > 2 else None

    if command == "decode":
        out = target or swap_ext(source, ".json")
        root = to_json_safe(parse_lua(read_jkr(source)))
        with open(out, "w", encoding="utf-8") as fh:
            json.dump(root, fh, indent=2, ensure_ascii=False, allow_nan=False)
        print("decoded %s -> %s" % (source, out))
        return 0

    if command == "lua":
        out = target or swap_ext(source, ".txt")
        with open(out, "w", encoding="utf-8") as fh:
            fh.write(read_jkr(source))
        print("decompressed %s -> %s" % (source, out))
        return 0

    if command == "encode":
        out = target or swap_ext(source, ".jkr")
        root, kind = load_for_encode(source)
        write_jkr(out, write_lua(root))
        print("encoded %s (%s) -> %s (%d bytes)" % (source, kind, out, os.path.getsize(out)))
        return 0

    if command == "roundtrip":
        original_text = read_jkr(source)
        before = parse_lua(original_text)
        via_json = json.loads(json.dumps(to_json_safe(before), allow_nan=False))
        rebuilt_text = write_lua(via_json)
        problems = diff(to_json_safe(before), to_json_safe(parse_lua(rebuilt_text)))
        print("original Lua text : %d chars" % len(original_text))
        print("rebuilt Lua text  : %d chars" % len(rebuilt_text))
        print("byte identical    : %s" % (original_text == rebuilt_text))
        print("values identical  : %s" % (not problems))
        if problems:
            print("differences:")
            for p in problems:
                print("  " + p)
            return 1
        return 0

    print("Unknown command: %s" % command, file=sys.stderr)
    return 1


if __name__ == "__main__":
    sys.setrecursionlimit(20000)
    sys.exit(main(sys.argv[1:]))
