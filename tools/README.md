# tools/jkr.py

Converts Balatro save files between `.jkr` and readable text. Standalone Python 3 script,
standard library only, not used by the site.

A `.jkr` is a raw DEFLATE stream around one Lua table literal (`return { ... }`).

```bash
python3 tools/jkr.py decode save.jkr [save.json]   # .jkr -> JSON
python3 tools/jkr.py lua    save.jkr [save.txt]    # .jkr -> the Lua text as-is
python3 tools/jkr.py encode save.json [save.jkr]   # JSON or Lua text -> .jkr
python3 tools/jkr.py roundtrip save.jkr            # decode, re-encode, compare
```

Output paths are optional: `decode` and `lua` write next to the input, `encode` writes
`<input>.jkr`.

`encode` takes either the JSON this tool emits or a raw Lua table literal, so a `.txt`
dumped with `lua`, edited by hand, goes straight back in.

## Round trip

`decode` then `encode` reproduces the original Lua text **byte for byte** — Python dicts
keep insertion order, and so does the JSON written from them, so nothing gets reshuffled.
`roundtrip` checks this and also compares every value structurally.

The `.jkr` itself comes out smaller than the game's (this compresses at level 9). The
bytes differ; the content does not.

## Things worth knowing

**Non-finite numbers.** Lua writes `inf`, `-inf` and `nan` as bare words, and a long enough
run overflows a stat into one — `GAME.round_scores.hand.amt` is the usual first casualty.
That is what makes most parsers fail on late-game saves. JSON has no way to hold them, so
they survive as tagged strings:

| Lua | JSON |
| --- | --- |
| `inf` | `"@lua:inf"` |
| `-inf` | `"@lua:-inf"` |
| `nan` | `"@lua:nan"` |

A genuine string of that exact form would be misread on the way back; nothing in a Balatro
save looks like one.

**Table keys.** Lua keys are strings or integers, and `t[4]` and `t["4"]` are different
slots. Balatro uses both — card ranks in `GAME.cards_played` are string keys — so a key that
was a string but looks like an integer is tagged:

| Lua | JSON |
| --- | --- |
| `[4]=` | `"4"` |
| `["4"]=` | `"@lua:str:4"` |

Everything else keeps its own name.

**Integers stay integers.** A literal written without a decimal point comes back without
one, so `5` never becomes `5.0`.
