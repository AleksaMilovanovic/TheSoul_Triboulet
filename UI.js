//UI additions by Aquila
//Only thing I want to add later is images/searching for bosses
const jokers = [
    { "name": "Joker", "pos": { "x": 0, "y": 0 } }, { "name": "Greedy Joker", "pos": { "x": 6, "y": 1 } }, { "name": "Lusty Joker", "pos": { "x": 7, "y": 1 } }, { "name": "Wrathful Joker", "pos": { "x": 8, "y": 1 } }, { "name": "Gluttonous Joker", "pos": { "x": 9, "y": 1 } }, { "name": "Jolly Joker", "pos": { "x": 2, "y": 0 } }, { "name": "Zany Joker", "pos": { "x": 3, "y": 0 } }, { "name": "Mad Joker", "pos": { "x": 4, "y": 0 } }, { "name": "Crazy Joker", "pos": { "x": 5, "y": 0 } }, { "name": "Droll Joker", "pos": { "x": 6, "y": 0 } }, { "name": "Sly Joker", "pos": { "x": 0, "y": 14 } }, { "name": "Wily Joker", "pos": { "x": 1, "y": 14 } }, { "name": "Clever Joker", "pos": { "x": 2, "y": 14 } }, { "name": "Devious Joker", "pos": { "x": 3, "y": 14 } }, { "name": "Crafty Joker", "pos": { "x": 4, "y": 14 } }, { "name": "Half Joker", "pos": { "x": 7, "y": 0 } }, { "name": "Joker Stencil", "pos": { "x": 2, "y": 5 } }, { "name": "Four Fingers", "pos": { "x": 6, "y": 6 } }, { "name": "Mime", "pos": { "x": 4, "y": 1 } }, { "name": "Credit Card", "pos": { "x": 5, "y": 1 } }, { "name": "Ceremonial Dagger", "pos": { "x": 5, "y": 5 } }, { "name": "Banner", "pos": { "x": 1, "y": 2 } }, { "name": "Mystic Summit", "pos": { "x": 2, "y": 2 } }, { "name": "Marble Joker", "pos": { "x": 3, "y": 2 } }, { "name": "Loyalty Card", "pos": { "x": 4, "y": 2 } }, { "name": "8 Ball", "pos": { "x": 0, "y": 5 } }, { "name": "Misprint", "pos": { "x": 6, "y": 2 } }, { "name": "Dusk", "pos": { "x": 4, "y": 7 } }, { "name": "Raised Fist", "pos": { "x": 8, "y": 2 } }, { "name": "Chaos the Clown", "pos": { "x": 1, "y": 0 } }, { "name": "Fibonacci", "pos": { "x": 1, "y": 5 } }, { "name": "Steel Joker", "pos": { "x": 7, "y": 2 } }, { "name": "Scary Face", "pos": { "x": 2, "y": 3 } }, { "name": "Abstract Joker", "pos": { "x": 3, "y": 3 } }, { "name": "Delayed Gratification", "pos": { "x": 4, "y": 3 } }, { "name": "Hack", "pos": { "x": 5, "y": 2 } }, { "name": "Pareidolia", "pos": { "x": 6, "y": 3 } }, { "name": "Gros Michel", "pos": { "x": 7, "y": 6 } }, { "name": "Even Steven", "pos": { "x": 8, "y": 3 } }, { "name": "Odd Todd", "pos": { "x": 9, "y": 3 } }, { "name": "Scholar", "pos": { "x": 3, "y": 6 } }, { "name": "Business Card", "pos": { "x": 1, "y": 4 } }, { "name": "Supernova", "pos": { "x": 2, "y": 4 } }, { "name": "Ride the Bus", "pos": { "x": 1, "y": 6 } }, { "name": "Space Joker", "pos": { "x": 3, "y": 5 } }, { "name": "Egg", "pos": { "x": 0, "y": 10 } }, { "name": "Burglar", "pos": { "x": 1, "y": 10 } }, { "name": "Blackboard", "pos": { "x": 2, "y": 10 } }, { "name": "Runner", "pos": { "x": 3, "y": 10 } }, { "name": "Ice Cream", "pos": { "x": 4, "y": 10 } }, { "name": "DNA", "pos": { "x": 5, "y": 10 } }, { "name": "Splash", "pos": { "x": 6, "y": 10 } }, { "name": "Blue Joker", "pos": { "x": 7, "y": 10 } }, { "name": "Sixth Sense", "pos": { "x": 8, "y": 10 } }, { "name": "Constellation", "pos": { "x": 9, "y": 10 } }, { "name": "Hiker", "pos": { "x": 0, "y": 11 } }, { "name": "Faceless Joker", "pos": { "x": 1, "y": 11 } }, { "name": "Green Joker", "pos": { "x": 2, "y": 11 } }, { "name": "Superposition", "pos": { "x": 3, "y": 11 } }, { "name": "To Do List", "pos": { "x": 4, "y": 11 } }, { "name": "Cavendish", "pos": { "x": 5, "y": 11 } }, { "name": "Card Sharp", "pos": { "x": 6, "y": 11 } }, { "name": "Red Card", "pos": { "x": 7, "y": 11 } }, { "name": "Madness", "pos": { "x": 8, "y": 11 } }, { "name": "Square Joker", "pos": { "x": 9, "y": 11 } }, { "name": "Seance", "pos": { "x": 0, "y": 12 } }, { "name": "Riff-raff", "pos": { "x": 1, "y": 12 } }, { "name": "Vampire", "pos": { "x": 2, "y": 12 } }, { "name": "Shortcut", "pos": { "x": 3, "y": 12 } }, { "name": "Hologram", "pos": { "x": 4, "y": 12 } }, { "name": "Vagabond", "pos": { "x": 5, "y": 12 } }, { "name": "Baron", "pos": { "x": 6, "y": 12 } }, { "name": "Cloud 9", "pos": { "x": 7, "y": 12 } }, { "name": "Rocket", "pos": { "x": 8, "y": 12 } }, { "name": "Obelisk", "pos": { "x": 9, "y": 12 } }, { "name": "Midas Mask", "pos": { "x": 0, "y": 13 } }, { "name": "Luchador", "pos": { "x": 1, "y": 13 } }, { "name": "Photograph", "pos": { "x": 2, "y": 13 } }, { "name": "Gift Card", "pos": { "x": 3, "y": 13 } }, { "name": "Turtle Bean", "pos": { "x": 4, "y": 13 } }, { "name": "Erosion", "pos": { "x": 5, "y": 13 } }, { "name": "Reserved Parking", "pos": { "x": 6, "y": 13 } }, { "name": "Mail In Rebate", "pos": { "x": 7, "y": 13 } }, { "name": "To the Moon", "pos": { "x": 8, "y": 13 } }, { "name": "Hallucination", "pos": { "x": 9, "y": 13 } }, { "name": "Fortune Teller", "pos": { "x": 7, "y": 5 } }, { "name": "Juggler", "pos": { "x": 0, "y": 1 } }, { "name": "Drunkard", "pos": { "x": 1, "y": 1 } }, { "name": "Stone Joker", "pos": { "x": 9, "y": 0 } }, { "name": "Golden Joker", "pos": { "x": 9, "y": 2 } }, { "name": "Lucky Cat", "pos": { "x": 5, "y": 14 } }, { "name": "Baseball Card", "pos": { "x": 6, "y": 14 } }, { "name": "Bull", "pos": { "x": 7, "y": 14 } }, { "name": "Diet Cola", "pos": { "x": 8, "y": 14 } }, { "name": "Trading Card", "pos": { "x": 9, "y": 14 } }, { "name": "Flash Card", "pos": { "x": 0, "y": 15 } }, { "name": "Popcorn", "pos": { "x": 1, "y": 15 } }, { "name": "Spare Trousers", "pos": { "x": 4, "y": 15 } }, { "name": "Ancient Joker", "pos": { "x": 7, "y": 15 } }, { "name": "Ramen", "pos": { "x": 2, "y": 15 } }, { "name": "Walkie Talkie", "pos": { "x": 8, "y": 15 } }, { "name": "Seltzer", "pos": { "x": 3, "y": 15 } }, { "name": "Castle", "pos": { "x": 9, "y": 15 } }, { "name": "Smiley Face", "pos": { "x": 6, "y": 15 } }, { "name": "Campfire", "pos": { "x": 5, "y": 15 } }, { "name": "Golden Ticket", "pos": { "x": 5, "y": 3 } }, { "name": "Mr. Bones", "pos": { "x": 3, "y": 4 } }, { "name": "Acrobat", "pos": { "x": 2, "y": 1 } }, { "name": "Sock and Buskin", "pos": { "x": 3, "y": 1 } }, { "name": "Swashbuckler", "pos": { "x": 9, "y": 5 } }, { "name": "Troubadour", "pos": { "x": 0, "y": 2 } }, { "name": "Certificate", "pos": { "x": 8, "y": 8 } }, { "name": "Smeared Joker", "pos": { "x": 4, "y": 6 } }, { "name": "Throwback", "pos": { "x": 5, "y": 7 } }, { "name": "Hanging Chad", "pos": { "x": 9, "y": 6 } }, { "name": "Rough Gem", "pos": { "x": 9, "y": 7 } }, { "name": "Bloodstone", "pos": { "x": 0, "y": 8 } }, { "name": "Arrowhead", "pos": { "x": 1, "y": 8 } }, { "name": "Onyx Agate", "pos": { "x": 2, "y": 8 } }, { "name": "Glass Joker", "pos": { "x": 1, "y": 3 } }, { "name": "Showman", "pos": { "x": 6, "y": 5 } }, { "name": "Flower Pot", "pos": { "x": 0, "y": 6 } }, { "name": "Blueprint", "pos": { "x": 0, "y": 3 } }, { "name": "Wee Joker", "pos": { "x": 0, "y": 4 } }, { "name": "Merry Andy", "pos": { "x": 8, "y": 0 } }, { "name": "Oops! All 6s", "pos": { "x": 5, "y": 6 } }, { "name": "The Idol", "pos": { "x": 6, "y": 7 } }, { "name": "Seeing Double", "pos": { "x": 4, "y": 4 } }, { "name": "Matador", "pos": { "x": 4, "y": 5 } }, { "name": "Hit the Road", "pos": { "x": 8, "y": 5 } }, { "name": "The Duo", "pos": { "x": 5, "y": 4 } }, { "name": "The Trio", "pos": { "x": 6, "y": 4 } }, { "name": "The Family", "pos": { "x": 7, "y": 4 } }, { "name": "The Order", "pos": { "x": 8, "y": 4 } }, { "name": "The Tribe", "pos": { "x": 9, "y": 4 } }, { "name": "Stuntman", "pos": { "x": 8, "y": 6 } }, { "name": "Invisible Joker", "pos": { "x": 1, "y": 7 } }, { "name": "Brainstorm", "pos": { "x": 7, "y": 7 } }, { "name": "Satellite", "pos": { "x": 8, "y": 7 } }, { "name": "Shoot the Moon", "pos": { "x": 2, "y": 6 } }, { "name": "Drivers License", "pos": { "x": 0, "y": 7 } }, { "name": "Cartomancer", "pos": { "x": 7, "y": 3 } }, { "name": "Astronomer", "pos": { "x": 2, "y": 7 } }, { "name": "Burnt Joker", "pos": { "x": 3, "y": 7 } }, { "name": "Bootstraps", "pos": { "x": 9, "y": 8 } }, { "name": "Canio", "pos": { "x": 3, "y": 8 } }, { "name": "Triboulet", "pos": { "x": 4, "y": 8 } }, { "name": "Yorick", "pos": { "x": 5, "y": 8 } }, { "name": "Chicot", "pos": { "x": 6, "y": 8 } }, { "name": "Perkeo", "pos": { "x": 7, "y": 8 } }

];
const tarotsAndPlanets = [
    { "name": "The Fool", "pos": { "x": 0, "y": 0 } }, { "name": "The Magician", "pos": { "x": 1, "y": 0 } }, { "name": "The High Priestess", "pos": { "x": 2, "y": 0 } }, { "name": "The Empress", "pos": { "x": 3, "y": 0 } }, { "name": "The Emperor", "pos": { "x": 4, "y": 0 } }, { "name": "The Hierophant", "pos": { "x": 5, "y": 0 } }, { "name": "The Lovers", "pos": { "x": 6, "y": 0 } }, { "name": "The Chariot", "pos": { "x": 7, "y": 0 } }, { "name": "Justice", "pos": { "x": 8, "y": 0 } }, { "name": "The Hermit", "pos": { "x": 9, "y": 0 } }, { "name": "The Wheel of Fortune", "pos": { "x": 0, "y": 1 } }, { "name": "Strength", "pos": { "x": 1, "y": 1 } }, { "name": "The Hanged Man", "pos": { "x": 2, "y": 1 } }, { "name": "Death", "pos": { "x": 3, "y": 1 } }, { "name": "Temperance", "pos": { "x": 4, "y": 1 } }, { "name": "The Devil", "pos": { "x": 5, "y": 1 } }, { "name": "The Tower", "pos": { "x": 6, "y": 1 } }, { "name": "The Star", "pos": { "x": 7, "y": 1 } }, { "name": "The Moon", "pos": { "x": 8, "y": 1 } }, { "name": "The Sun", "pos": { "x": 9, "y": 1 } }, { "name": "Judgement", "pos": { "x": 0, "y": 2 } }, { "name": "The World", "pos": { "x": 1, "y": 2 } }, { "name": "Mercury", "pos": { "x": 0, "y": 3 } }, { "name": "Venus", "pos": { "x": 1, "y": 3 } }, { "name": "Earth", "pos": { "x": 2, "y": 3 } }, { "name": "Mars", "pos": { "x": 3, "y": 3 } }, { "name": "Jupiter", "pos": { "x": 4, "y": 3 } }, { "name": "Saturn", "pos": { "x": 5, "y": 3 } }, { "name": "Uranus", "pos": { "x": 6, "y": 3 } }, { "name": "Neptune", "pos": { "x": 7, "y": 3 } }, { "name": "Pluto", "pos": { "x": 8, "y": 3 } }, { "name": "Planet X", "pos": { "x": 9, "y": 2 } }, { "name": "Ceres", "pos": { "x": 8, "y": 2 } }, { "name": "Eris", "pos": { "x": 3, "y": 2 } }, { "name": "Familiar", "pos": { "x": 0, "y": 4 } }, { "name": "Grim", "pos": { "x": 1, "y": 4 } }, { "name": "Incantation", "pos": { "x": 2, "y": 4 } }, { "name": "Talisman", "pos": { "x": 3, "y": 4 } }, { "name": "Aura", "pos": { "x": 4, "y": 4 } }, { "name": "Wraith", "pos": { "x": 5, "y": 4 } }, { "name": "Sigil", "pos": { "x": 6, "y": 4 } }, { "name": "Ouija", "pos": { "x": 7, "y": 4 } }, { "name": "Ectoplasm", "pos": { "x": 8, "y": 4 } }, { "name": "Immolate", "pos": { "x": 9, "y": 4 } }, { "name": "Ankh", "pos": { "x": 0, "y": 5 } }, { "name": "Deja Vu", "pos": { "x": 1, "y": 5 } }, { "name": "Hex", "pos": { "x": 2, "y": 5 } }, { "name": "Trance", "pos": { "x": 3, "y": 5 } }, { "name": "Medium", "pos": { "x": 4, "y": 5 } }, { "name": "Cryptid", "pos": { "x": 5, "y": 5 } }, { "name": "The Soul", "pos": { "x": 2, "y": 2 } }, { "name": "Black Hole", "pos": { "x": 9, "y": 3 } }

];
const tags = [
    { "name": "Uncommon Tag", "pos": { "x": 0, "y": 0 } }, { "name": "Rare Tag", "pos": { "x": 1, "y": 0 } }, { "name": "Negative Tag", "pos": { "x": 2, "y": 0 } }, { "name": "Foil Tag", "pos": { "x": 3, "y": 0 } }, { "name": "Holographic Tag", "pos": { "x": 0, "y": 1 } }, { "name": "Polychrome Tag", "pos": { "x": 1, "y": 1 } }, { "name": "Investment Tag", "pos": { "x": 2, "y": 1 } }, { "name": "Voucher Tag", "pos": { "x": 3, "y": 1 } }, { "name": "Boss Tag", "pos": { "x": 0, "y": 2 } }, { "name": "Standard Tag", "pos": { "x": 1, "y": 2 } }, { "name": "Charm Tag", "pos": { "x": 2, "y": 2 } }, { "name": "Meteor Tag", "pos": { "x": 3, "y": 2 } }, { "name": "Buffoon Tag", "pos": { "x": 4, "y": 2 } }, { "name": "Handy Tag", "pos": { "x": 1, "y": 3 } }, { "name": "Garbage Tag", "pos": { "x": 2, "y": 3 } }, { "name": "Ethereal Tag", "pos": { "x": 3, "y": 3 } }, { "name": "Coupon Tag", "pos": { "x": 4, "y": 0 } }, { "name": "Double Tag", "pos": { "x": 5, "y": 0 } }, { "name": "Juggle Tag", "pos": { "x": 5, "y": 1 } }, { "name": "D6 Tag", "pos": { "x": 5, "y": 3 } }, { "name": "Top-up Tag", "pos": { "x": 4, "y": 1 } }, { "name": "Speed Tag", "pos": { "x": 0, "y": 3 } }, { "name": "Orbital Tag", "pos": { "x": 5, "y": 2 } }, { "name": "Economy Tag", "pos": { "x": 4, "y": 3 } }
];
const vouchers = [
    { "name": "Overstock", "pos": { "x": 0, "y": 0 } }, { "name": "Clearance Sale", "pos": { "x": 3, "y": 0 } }, { "name": "Hone", "pos": { "x": 4, "y": 0 } }, { "name": "Reroll Surplus", "pos": { "x": 0, "y": 2 } }, { "name": "Crystal Ball", "pos": { "x": 2, "y": 2 } }, { "name": "Telescope", "pos": { "x": 3, "y": 2 } }, { "name": "Grabber", "pos": { "x": 5, "y": 0 } }, { "name": "Wasteful", "pos": { "x": 6, "y": 0 } }, { "name": "Tarot Merchant", "pos": { "x": 1, "y": 0 } }, { "name": "Planet Merchant", "pos": { "x": 2, "y": 0 } }, { "name": "Seed Money", "pos": { "x": 1, "y": 2 } }, { "name": "Blank", "pos": { "x": 7, "y": 0 } }, { "name": "Magic Trick", "pos": { "x": 4, "y": 2 } }, { "name": "Hieroglyph", "pos": { "x": 5, "y": 2 } }, { "name": "Director's Cut", "pos": { "x": 6, "y": 2 } }, { "name": "Paint Brush", "pos": { "x": 7, "y": 2 } }, { "name": "Overstock Plus", "pos": { "x": 0, "y": 1 } }, { "name": "Liquidation", "pos": { "x": 3, "y": 1 } }, { "name": "Glow Up", "pos": { "x": 4, "y": 1 } }, { "name": "Reroll Glut", "pos": { "x": 0, "y": 3 } }, { "name": "Omen Globe", "pos": { "x": 2, "y": 3 } }, { "name": "Observatory", "pos": { "x": 3, "y": 3 } }, { "name": "Nacho Tong", "pos": { "x": 5, "y": 1 } }, { "name": "Recyclomancy", "pos": { "x": 6, "y": 1 } }, { "name": "Tarot Tycoon", "pos": { "x": 1, "y": 1 } }, { "name": "Planet Tycoon", "pos": { "x": 2, "y": 1 } }, { "name": "Money Tree", "pos": { "x": 1, "y": 3 } }, { "name": "Antimatter", "pos": { "x": 7, "y": 1 } }, { "name": "Illusion", "pos": { "x": 4, "y": 3 } }, { "name": "Petroglyph", "pos": { "x": 5, "y": 3 } }, { "name": "Retcon", "pos": { "x": 6, "y": 3 } }, { "name": "Palette", "pos": { "x": 7, "y": 3 } }
];

const bosses = [
    { "name": "Small Blind", "pos": { "x": 0, "y": 0 } }, { "name": "Big Blind", "pos": { "x": 0, "y": 1 } }, { "name": "The Ox", "pos": { "x": 0, "y": 2 } }, { "name": "The Hook", "pos": { "x": 0, "y": 7 } }, { "name": "The Mouth", "pos": { "x": 0, "y": 18 } }, { "name": "The Fish", "pos": { "x": 0, "y": 5 } }, { "name": "The Club", "pos": { "x": 0, "y": 4 } }, { "name": "The Manacle", "pos": { "x": 0, "y": 8 } }, { "name": "The Tooth", "pos": { "x": 0, "y": 22 } }, { "name": "The Wall", "pos": { "x": 0, "y": 9 } }, { "name": "The House", "pos": { "x": 0, "y": 3 } }, { "name": "The Mark", "pos": { "x": 0, "y": 23 } }, { "name": "Cerulean Bell", "pos": { "x": 0, "y": 26 } }, { "name": "The Wheel", "pos": { "x": 0, "y": 10 } }, { "name": "The Arm", "pos": { "x": 0, "y": 11 } }, { "name": "The Psychic", "pos": { "x": 0, "y": 12 } }, { "name": "The Goad", "pos": { "x": 0, "y": 13 } }, { "name": "The Water", "pos": { "x": 0, "y": 14 } }, { "name": "The Eye", "pos": { "x": 0, "y": 17 } }, { "name": "The Plant", "pos": { "x": 0, "y": 19 } }, { "name": "The Needle", "pos": { "x": 0, "y": 20 } }, { "name": "The Head", "pos": { "x": 0, "y": 21 } }, { "name": "Verdant Leaf", "pos": { "x": 0, "y": 28 } }, { "name": "Violet Vessel", "pos": { "x": 0, "y": 29 } }, { "name": "The Window", "pos": { "x": 0, "y": 6 } }, { "name": "The Serpent", "pos": { "x": 0, "y": 15 } }, { "name": "The Pillar", "pos": { "x": 0, "y": 16 } }, { "name": "The Flint", "pos": { "x": 0, "y": 24 } }, { "name": "Amber Acorn", "pos": { "x": 0, "y": 27 } }, { "name": "Crimson Heart", "pos": { "x": 0, "y": 25 } }
];
const editionMap = {
    "Foil": 1,
    "Holographic": 2,
    "Polychrome": 3
};
const stickerMap = {
    "Eternal": { x: 0, y: 0 },
    "Perishable": { x: 0, y: 2 },
    "Rental": { x: 1, y: 2 }
};

// Sprite sheets. Tiles are plain divs with a CSS background-position into the
// sheet, so the browser holds one decoded copy of each sheet no matter how many
// tiles exist. (The previous per-tile canvas + Image approach ran out of memory
// on long runs.)
const SHEETS = {
    jokers:    { src: 'images/Jokers.png',     cols: 10, rows: 16 },
    tarots:    { src: 'images/Tarots.png',     cols: 10, rows: 6 },
    editions:  { src: 'images/Editions.png',   cols: 5,  rows: 1 },
    stickers:  { src: 'images/stickers.png',   cols: 5,  rows: 3 },
    deck:      { src: 'images/8BitDeck.png',   cols: 13, rows: 4 },
    enhancers: { src: 'images/Enhancers.png',  cols: 7,  rows: 5 },
    bosses:    { src: 'images/BlindChips.png', cols: 21, rows: 31 },
    tags:      { src: 'images/tags.png',       cols: 6,  rows: 5 },
    vouchers:  { src: 'images/Vouchers.png',   cols: 9,  rows: 4 },
};

function spriteLayer(sheet, x, y, w, h) {
    const el = document.createElement('div');
    el.className = 'spriteLayer';
    el.style.backgroundImage = 'url(' + sheet.src + ')';
    el.style.backgroundSize = (sheet.cols * w) + 'px ' + (sheet.rows * h) + 'px';
    el.style.backgroundPosition = (-x * w) + 'px ' + (-y * h) + 'px';
    return el;
}

function spriteStack(w, h) {
    const el = document.createElement('div');
    el.className = 'sprite';
    el.style.width = w + 'px';
    el.style.height = h + 'px';
    return el;
}

// Joker / tarot / planet / spectral tile with optional edition and stickers
function makeCardSprite(itemName, type, itemModifiers, itemStickers) {
    const stack = spriteStack(71, 95);
    let itemData, sheet;
    if (type === 'joker') {
        itemData = jokers.find(j => j.name === itemName);
        sheet = SHEETS.jokers;
    } else {
        itemData = tarotsAndPlanets.find(t => t.name === itemName);
        sheet = SHEETS.tarots;
    }
    if (!itemData) {
        console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} not found:`, itemName);
        return stack;
    }

    stack.appendChild(spriteLayer(sheet, itemData.pos.x, itemData.pos.y, 71, 95));

    const edition = itemModifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
    if (edition) stack.appendChild(spriteLayer(SHEETS.editions, editionMap[edition], 0, 71, 95));

    itemStickers.forEach(stick => {
        if (stickerMap[stick]) stack.appendChild(spriteLayer(SHEETS.stickers, stickerMap[stick].x, stickerMap[stick].y, 71, 95));
    });

    if (itemModifiers.includes("Negative")) stack.style.filter = 'invert(0.8)';
    return stack;
}

function makeStandardCardSprite(rank, suit, modifiers, seal) {
    const stack = spriteStack(71, 95);
    const enhancerPos = getEnhancerPosition(modifiers);
    stack.appendChild(spriteLayer(SHEETS.enhancers, enhancerPos.x, enhancerPos.y, 71, 95));

    const { x, y } = getStandardCardPosition(rank, suit);
    if (x !== undefined && y !== undefined) stack.appendChild(spriteLayer(SHEETS.deck, x, y, 71, 95));

    const edition = modifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
    if (edition) stack.appendChild(spriteLayer(SHEETS.editions, editionMap[edition], 0, 71, 95));

    if (seal) {
        const sealPos = getSealPosition(seal);
        if (sealPos) stack.appendChild(spriteLayer(SHEETS.enhancers, sealPos.x, sealPos.y, 71, 95));
    }
    return stack;
}

function makeBossSprite(bossName) {
    const stack = spriteStack(34, 34);
    const bossData = bosses.find(boss => boss.name === bossName);
    if (!bossData) { console.error("Boss not found:", bossName); return stack; }
    stack.appendChild(spriteLayer(SHEETS.bosses, bossData.pos.x, bossData.pos.y, 34, 34));
    return stack;
}

function makeTagSprite(tagName) {
    const stack = spriteStack(34, 34);
    const tagData = tags.find(tag => tag.name === tagName);
    if (!tagData) { console.error("Tag not found:", tagName); return stack; }
    stack.appendChild(spriteLayer(SHEETS.tags, tagData.pos.x, tagData.pos.y, 34, 34));
    return stack;
}

function makeVoucherSprite(voucherName) {
    const stack = spriteStack(71, 95);
    const voucherData = vouchers.find(voucher => voucher.name === voucherName);
    if (!voucherData) { console.error("Voucher not found:", voucherName); return stack; }
    stack.appendChild(spriteLayer(SHEETS.vouchers, voucherData.pos.x, voucherData.pos.y, 71, 95));
    return stack;
}

function getStandardCardName(cardName) {
    return cardName.replace(/\b(Purple|Red|Blue|Gold) Seal\b/g, '').replace(/\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g, '').replace(/\b(Foil|Holographic|Polychrome)\b/g, '').trim();
}

function getStandardCardModifiers(cardName) {
    const sealRegex = /\b(Purple Seal|Red Seal|Blue Seal|Gold Seal)\b/g;
    const enhancementRegex = /\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g;
    const editionRegex = /\b(Foil|Holographic|Polychrome)\b/g;

    const seals = [];
    let sealMatch;
    while ((sealMatch = sealRegex.exec(cardName)) !== null) {
        seals.push(sealMatch[0]);
    }

    // Remove the seal text from the card name
    const cardNameWithoutSeals = cardName.replace(sealRegex, '').trim();

    const enhancements = cardNameWithoutSeals.match(enhancementRegex) || [];
    const editions = cardNameWithoutSeals.match(editionRegex) || [];

    return [...seals, ...enhancements, ...editions];
}

function getStandardCardPosition(rank, suit) {
    const rankMap = {
        '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, '10': 8, 'Jack': 9, 'Queen': 10, 'King': 11, 'Ace': 12
    };
    const suitMap = {
        'Hearts': 0, 'Clubs': 1, 'Diamonds': 2, 'Spades': 3
    };

    const x = rankMap[rank];
    const y = suitMap[suit];

    return { x, y };
}

function getEnhancerPosition(modifiers) {
    const enhancerMap = {
        'Bonus': { x: 1, y: 1 },
        'Mult': { x: 2, y: 1 },
        'Wild': { x: 3, y: 1 },
        'Glass': { x: 5, y: 1 },
        'Steel': { x: 6, y: 1 },
        'Stone': { x: 5, y: 0 },
        'Gold': { x: 6, y: 0 },
        'Lucky': { x: 4, y: 1 }
    };

    const enhancer = modifiers.find(mod => Object.keys(enhancerMap).includes(mod));
    return enhancer ? enhancerMap[enhancer] : { x: 1, y: 0 };
}

function getSealPosition(seal) {
    const sealMap = {
        'Gold Seal': { x: 2, y: 0 },
        'Purple Seal': { x: 4, y: 4 },
        'Red Seal': { x: 5, y: 4 },
        'Blue Seal': { x: 6, y: 4 }
    };

    return sealMap[seal];
}

function parseStandardCardName(cardName) {
    const sealRegex = /(Purple|Red|Blue|Gold) Seal/;
    const sealMatch = cardName.match(sealRegex);
    const seal = sealMatch ? sealMatch[0] : null;

    let cleanedCardName = seal ? cardName.replace(sealRegex, '').trim() : cardName;

    const modifierRegex = /(Foil|Holographic|Polychrome|Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)/g;
    const modifiers = cleanedCardName.match(modifierRegex) || [];

    // Remove all modifiers from the cleaned card name
    cleanedCardName = cleanedCardName.replace(modifierRegex, '').trim();

    const parts = cleanedCardName.split(' of ');
    if (parts.length !== 2) {
        console.error('Invalid card name format:', cardName);
        return null;
    }

    const suit = parts[1].trim();
    const rankPart = parts[0].trim();
    const rank = rankPart.split(' ').pop(); // Get the last word as rank

    return { rank, suit, modifiers, seal };
}

function getModifierColor(modifier) {
    if (modifier.includes('Seal')) {
        return '#ff80ff'; // Light Purple
    } else if (modifier.includes('Bonus') || modifier.includes('Mult') || modifier.includes('Wild')) {
        return '#ff8080'; // Light Red
    } else if (modifier.includes('Glass') || modifier.includes('Steel') || modifier.includes('Stone') || modifier.includes('Gold') || modifier.includes('Lucky')) {
        return '#8080ff'; // Light Blue
    } else if (modifier.includes('Foil') || modifier.includes('Holographic') || modifier.includes('Polychrome')) {
        return '#80ff80'; // Light Green
    }
    return '#ffffff'; // White (default)
}

function searchAndHighlight() {
    const searchInput = document.getElementById('searchInput');
    const searchTerms = searchInput.value.split(',')
        .map(term => term.trim().toLowerCase())
        .filter(term => term.length >= 4); // Filter out terms less than 4 letters

    const queueItems = document.querySelectorAll('.queueItem, .packItem > div, .voucherContainer, .tagContainer, .sixthContainer, .bossContainer');

    queueItems.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const shouldHighlight = searchTerms.some(term => itemText.includes(term));
        if (shouldHighlight) {
            item.classList.add('highlight');
        } else {
            item.classList.remove('highlight');
        }
    });

    // Ante headers glow when anything inside the ante matches, even while collapsed
    document.querySelectorAll('.queueContainer').forEach(box => {
        const header = box.querySelector('.anteTitle');
        if (!header) return;
        const text = box.dataset.search || '';
        header.classList.toggle('anteMatch', searchTerms.some(term => text.includes(term)));
    });
}

(function () {
    // Create a style element to add CSS for the side-scrolling list and additional info
    const style = document.createElement('style');
    style.innerHTML = `
    body {
        background-color: #1e1e1e;
        color: #ffffff;
    }

    .container {
        background-color: #2b2b2b;
        color: #ffffff;
    }

    .input-section,
    .output-section {
        background-color: #333333;
        color: #ffffff;
    }

    h1 {
        color: #ffffff;
        background-color: #444444;
    }
    h2 {
        color: #ffffff;
        background-color: #444444;
    }

    label {
        color: #cccccc;
    }

    input,
    select,
    textarea {
        background-color: #444444;
        color: #ffffff;
        border: 1px solid #555555;
    }

    button {
        background-color: #555555;
        color: #ffffff;
        border: none;
    }

    button:hover {
        background-color: #666666;
    }

    #checkboxesOverlay {
        background-color: rgba(0, 0, 0, 0.8);
    }

    #checkboxesPopup {
        background-color: #333333;
        color: #ffffff;
    }

    #scrollingContainer {
        display: block;
        padding: 10px;
        border: 1px solid #444444;
        margin-top: 20px;
        background-color: #2b2b2b;
    }

    .queueContainer {
        display: block;
        margin-bottom: 20px;
        border: 1px solid #555555;
        padding: 10px;
        background-color: #333333;
    }

    .queueTitle {
        font-weight: bold;
        margin-bottom: 5px;
        color: #ffffff;
    }

    .collapsibleTitle {
        margin-top: 12px;
        cursor: pointer;
        user-select: none;
        display: inline-block;
        padding: 4px 8px;
        border: 1px solid #555555;
        border-radius: 3px;
        background-color: #3a3a3a;
    }

    .anteTitle {
        display: block;
        margin-top: 0;
        font-size: 14px;
        background-color: #444444;
    }

    .anteTitle.anteMatch {
        box-shadow: inset 0 0 0 2px rgba(150, 237, 121, 0.6);
    }

    .collapsibleTitle:hover {
        background-color: #4a4a4a;
    }

    /* Joker / Consumable Generation groups: indent the per-source rows inside */
    .generatorGroupTitle {
        display: block;
        margin-top: 14px;
        background-color: #2f3f33;
        border-color: #5a7a62;
    }
    /* A Negative Joker inside: yellow outline on the row and its group */
    .collapsibleTitle.hasNegative {
        border-color: #ffd54a;
        box-shadow: 0 0 0 1px #ffd54a, 0 0 8px rgba(255, 213, 74, 0.45);
    }
    .generatorGroupTitle:hover {
        background-color: #3a4f40;
    }
    .generatorGroup {
        margin-left: 16px;
        padding-left: 10px;
        border-left: 1px solid #555555;
    }

    /* Owned Cards panel and held-card outlines */
    .ownedPanel {
        margin-left: 16px;
        padding-left: 10px;
        border-left: 1px solid #555555;
    }
    .ownable.owned {
        outline: 2px solid #96ed79;
        outline-offset: -2px;
        border-radius: 3px;
    }
    .ownedTile {
        width: 90px;
        position: relative;
    }
    .ownedCount {
        position: absolute;
        top: 2px;
        right: 4px;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 3px;
        padding: 1px 4px;
    }
    .ownedActions {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 3px;
    }
    .ownedActions .smallButton {
        font-size: 9px;
        padding: 2px 5px;
    }
    .ownedPosSel {
        font-size: 9px;
        max-width: 90px;
    }
    .ownedNameInput {
        font-size: 12px;
        width: 180px;
    }
    .ownedNameInput.badName {
        outline: 2px solid #ff8080;
    }
    .ownedShowman {
        font-size: 12px;
        cursor: pointer;
    }

    /* Deck & Draw Order panel */
    .deckPanel {
        margin-left: 16px;
        padding-left: 10px;
        border-left: 1px solid #555555;
    }
    .deckControls {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin: 8px 0;
        font-size: 12px;
    }
    .deckControls select, .deckHandInput {
        font-size: 12px;
    }
    .deckHandInput {
        width: 50px;
        margin-left: 4px;
    }
    .deckNote {
        font-size: 11px;
        margin-bottom: 6px;
        max-width: 700px;
    }
    .deckOps {
        font-size: 11px;
        color: #cccccc;
        margin-bottom: 6px;
    }
    .deckOps > div {
        margin: 2px 0;
    }
    .deckCard {
        display: inline-block;
        text-align: center;
        margin-right: 6px;
        padding: 3px;
        font-size: 10px;
        white-space: normal;
        color: #ffffff;
        width: 71px;
        border-radius: 3px;
        flex-shrink: 0;
    }
    .deckCard.inHand {
        background-color: rgba(150, 237, 121, 0.18);
        box-shadow: inset 0 0 0 1px rgba(150, 237, 121, 0.5);
    }
    .deckCard.clickable:hover {
        background-color: #3a3a3a;
    }
    /* Cards making up the hand found by "Find first" */
    .deckCard.handHit {
        background-color: rgba(255, 179, 71, 0.18);
        box-shadow: inset 0 0 0 2px #ffb347;
    }
    .handResult {
        flex-basis: 100%;
        color: #cccccc;
    }
    .handResult.noHit {
        color: #999999;
    }
    .holdResult {
        flex-basis: 100%;
        color: #cccccc;
    }
    .holdResult.noHit {
        color: #999999;
    }
    .holdChips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }
    .holdChip {
        font-size: 11px;
        padding: 2px 7px;
    }
    .windowHit {
        box-shadow: inset 0 0 0 2px #7fd3ff;
    }
    .windowSpan {
        background-color: rgba(127, 211, 255, 0.10);
    }
    .editionRow {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
    }
    .editionList {
        flex-basis: 100%;
        color: #cccccc;
        white-space: normal;
    }
    .editionList b {
        color: #ffd479;
    }
    .enhRow {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
    }
    .enhToggle {
        font-size: 11px;
        padding: 2px 8px;
        opacity: 0.55;
    }
    .enhToggle.on {
        opacity: 1;
        color: #ffd479;
        outline: 1px solid #ffd479;
    }
    .deckPos {
        font-weight: bold;
        color: #ffffff;
    }
    .deckAddMenu {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 4px;
    }
    /* Action menu on a draw-order card. The strip clips overflow, so the tile widens to
       hold the menu instead of floating it over its neighbours. */
    .deckCardMenu {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 4px;
        text-align: left;
    }
    .deckCard.menuOpen {
        width: 170px;
        background-color: #3a3a3a;
        outline: 1px solid #777777;
    }
    .deckCardEdit {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin-top: 3px;
        padding-top: 4px;
        border-top: 1px solid #555555;
    }
    .deckCardEdit select {
        font-size: 11px;
        width: 100%;
    }
    .deckCardPreview {
        color: #ffd67f;
        white-space: normal;
    }

    .collapsibleTitle::before {
        content: "▾";
        display: inline-block;
        width: 1em;
        margin-right: 4px;
    }

    .collapsibleTitle.collapsed::before {
        content: "▸";
    }

    /* Collapsible bodies set their own display (flex etc.), which would otherwise beat the UA hidden rule */
    [hidden] {
        display: none !important;
    }

    .clickable {
        cursor: pointer;
    }

    /* Seen marks: a slight grey tint on cards you have already passed */
    .seenable.seen {
        filter: grayscale(0.7);
        opacity: 0.5;
    }
    .seenable.seen:hover {
        opacity: 0.75;
    }
    .queueItem {
        position: relative;
    }
    /* Joker rarity, shown above the card in the game's rarity colours */
    .rarityLabel {
        font-size: 10px;
        font-weight: bold;
        line-height: 1.1;
        margin-bottom: 2px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .rarityNone      { visibility: hidden; }
    .rarityCommon    { color: #009dff; }
    .rarityUncommon  { color: #4bc292; }
    .rarityRare      { color: #fe5f55; }
    .rarityLegendary { color: #b26cbb; }
    .seenUpTo {
        position: absolute;
        top: 2px;
        left: 2px;
        font-size: 11px;
        line-height: 1;
        padding: 2px 5px;
        opacity: 0;
        transition: opacity 0.1s;
    }
    .queueItem:hover .seenUpTo {
        opacity: 1;
    }
    .seenStub {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 95px;
        margin-right: 10px;
        border: 1px dashed #777777;
        border-radius: 4px;
        color: #aaaaaa;
        font-size: 10px;
        text-align: center;
        white-space: normal;
        flex-shrink: 0;
    }
    .seenStub:hover {
        background-color: #3a3a3a;
    }
    .seenControls {
        flex-wrap: wrap;
        margin-bottom: 6px;
        font-size: 11px;
    }

    /* Reroll planner, shown above the shop strip while the seen run is collapsed */
    .rerollPlan {
        margin: 2px 0 8px;
        padding: 6px 10px;
        border: 1px solid #d5a021;
        border-left-width: 3px;
        border-radius: 4px;
        background-color: rgba(213, 160, 33, 0.1);
        font-size: 12px;
        max-width: 760px;
    }
    .rerollPlanHead {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
        font-weight: bold;
        color: #ffd67f;
        margin-bottom: 4px;
    }
    .rerollShopsLabel {
        font-weight: normal;
        font-size: 11px;
        color: #cccccc;
        cursor: pointer;
    }
    .rerollShopsInput {
        width: 50px;
        margin-left: 4px;
        font-size: 11px;
    }
    .rerollPlanBody > div {
        margin: 2px 0;
        color: #cccccc;
    }
    .rerollPlanTotal {
        margin-top: 4px !important;
        font-weight: bold;
        font-size: 13px;
        color: #96ed79 !important;
    }

    /* Random-Joker-effect planner inside the Owned Cards panel */
    .effectPanel {
        margin-top: 10px;
        padding-top: 8px;
        border-top: 1px solid #555555;
    }
    .effectPoolTitle {
        font-size: 12px;
        font-weight: bold;
        color: #ffd67f;
        margin: 6px 0 4px;
    }
    .effectPoolTile {
        display: inline-block;
        text-align: center;
        width: 82px;
        margin-right: 8px;
        padding: 4px;
        font-size: 10px;
        white-space: normal;
        border-radius: 3px;
        outline: 1px solid #4b7a4b;
        flex-shrink: 0;
    }
    .effectPoolTile.outOfPool {
        outline-color: #666666;
        filter: grayscale(0.7);
        opacity: 0.55;
    }
    .effectEdSel {
        font-size: 10px;
        width: 100%;
        margin-top: 3px;
    }
    .effectPoolTile .ownedActions {
        justify-content: center;
        gap: 3px;
    }
    .effectResults {
        margin: 8px 0 4px;
        font-size: 12px;
        color: #cccccc;
    }
    .effectResultRow {
        margin: 2px 0;
    }
    .effectResultRow.effectNext {
        color: #96ed79;
        font-weight: bold;
    }
    .effectUseNum {
        display: inline-block;
        min-width: 72px;
        color: #aaaaaa;
        font-weight: normal;
    }
    .effectMiss {
        color: #999999;
    }
    .effectPoolNote {
        font-size: 11px;
        max-width: 700px;
        margin-bottom: 5px;
    }

    .packControls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
    }

    .smallButton {
        font-size: 0.9em;
        padding: 4px 10px;
    }

    .voucherContainer.clickable:hover,
    .voucherTile.clickable:hover {
        background-color: #3a3a3a;
        border-radius: 3px;
    }

    .voucherContainer.owned,
    .voucherTile.owned {
        outline: 2px solid #96ed79;
        border-radius: 3px;
    }

    .boughtLabel {
        font-size: 10px;
        color: #96ed79;
    }

    .voucherPanel {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
        border: 1px solid #444444;
        margin-bottom: 10px;
    }

    .voucherSection {
        flex: 1 1 300px;
    }

    .voucherSectionTitle {
        font-weight: bold;
        margin-bottom: 6px;
        color: #cccccc;
    }

    .voucherGrid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .voucherTile {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 10px;
        width: 80px;
        padding: 4px;
    }


    .voucherTile.unavailable {
        opacity: 0.35;
    }

    /* Visual break between shop frames in the queue */
    .queueItem.frameStart {
        border-left: 1px solid #666666;
        padding-left: 8px;
        margin-left: 4px;
    }
    /* Jump bar: hop straight to a position or a shop frame instead of dragging */
    .jumpBar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
        font-size: 12px;
    }
    .jumpLabel {
        color: #999999;
    }
    .jumpInput {
        width: 58px;
        font-size: 12px;
        padding: 2px 4px;
    }
    .jumpBar .frameBtn {
        font-size: 11px;
        padding: 2px 7px;
        min-width: 24px;
    }
    .jumpBar .frameBtn.currentFrame {
        color: #ffd479;
        outline: 1px solid #ffd479;
    }
    /* Position number on a tile, so the number you type is the number you can read */
    .queuePos {
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 9px;
        line-height: 1;
        padding: 1px 3px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.45);
        color: #aaaaaa;
        pointer-events: none;
    }
    .jumpFlash {
        animation: jumpFlash 1.1s ease-out;
    }
    @keyframes jumpFlash {
        from { box-shadow: 0 0 0 3px #ffd479; }
        to   { box-shadow: 0 0 0 3px rgba(255, 212, 121, 0); }
    }
    /* The shop you are standing in, taken from an imported save */
    .queueItem.currentShop, .packItem.currentShop {
        background-color: rgba(120, 180, 255, 0.10);
        box-shadow: inset 0 0 0 1px rgba(120, 180, 255, 0.55);
        border-radius: 3px;
    }
    .currentShopBadge {
        color: #9ec5ff;
        font-weight: bold;
    }

    /* Perkeo copies: gap between shops, marker under extra triggers */
    .perkeoCopy.perkeoShopStart {
        margin-left: 10px;
    }
    .perkeoTrigger {
        color: #96ed79;
        font-weight: bold;
    }
    .perkeoCopy.perkeoHeld {
        outline: 2px solid #96ed79;
        outline-offset: -2px;
        border-radius: 3px;
    }
    .perkeoUndo {
        font-size: 9px;
        padding: 1px 5px;
        margin-top: 2px;
    }
    .perkeoBtns {
        display: flex;
        gap: 3px;
        justify-content: center;
    }

    /* Visual break between each set of 3 Sixth Sense rolls */
    .sixthContainer.sixthSetStart {
        border-left: 1px solid #666666;
        padding-left: 8px;
        margin-left: 4px;
    }

    .queueInfo {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        font-size: 12px;
        margin-bottom: 10px;
        color: #cccccc;
        text-align: center;
    }

    .scrollable {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        cursor: grab;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .scrollable:active {
        cursor: grabbing;
    }

    /* Hover-to-scroll zones flanking each scrollable row */
    .scrollWrap {
        display: flex;
        align-items: stretch;
    }
    .scrollWrap > .scrollable {
        flex: 1 1 auto;
        min-width: 0;
    }
    .scrollZone {
        flex: 0 0 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #bbbbbb;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
        border-radius: 3px;
        background: linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0));
    }
    .scrollZoneRight {
        background: linear-gradient(to left, rgba(255,255,255,0.08), rgba(255,255,255,0));
    }
    .scrollZone:hover {
        color: #ffffff;
        background-color: rgba(255,255,255,0.08);
    }
    .scrollZone.atEnd {
        opacity: 0.25;
        cursor: default;
    }
    .scrollWrap.noOverflow > .scrollZone {
        visibility: hidden;
    }

    .scrollable::-webkit-scrollbar {
        display: none;
    }

    .queueItem {
        display: inline-block;
        text-align: center;
        margin-right: 10px;
        font-size: 10px;
        white-space: normal;
        color: #ffffff;
    }

    .sprite {
        position: relative;
        display: block;
        margin: 0 auto 3px;
        pointer-events: none;
        overflow: hidden;
    }

    .spriteLayer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
    }

    .queueItem div {
        margin-top: 3px;
        line-height: 1.2;
    }

    .modifier {
        color: #aaaaaa;
    }

    .sticker {
        color: #ffcc00;
    }

    .additionalInfo {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: 12px;
    }

    .additionalInfo div {
        margin-bottom: 5px;
    }

    .no-select {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    .packContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    }

    .packItem {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 10px;
        color: #ffffff;
    }

    .packItem > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 10px;
        width: 71px;
        margin-right: 5px;
    }


    /* Hand an Arcana / Spectral pack deals, collapsible, to the right of the pack's cards */
    .packItem > .packHand {
        width: auto;
        min-height: 95px;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        margin-left: 6px;
        padding-left: 8px;
        border-left: 1px solid #555555;
    }
    .packHandTitle {
        margin-top: 0;
        font-weight: normal;
        font-size: 11px;
        padding: 2px 6px;
    }
    .packHandBody {
        margin-top: 4px;
    }
    .packHandCards {
        display: flex;
        flex-wrap: wrap;
        row-gap: 4px;
        margin-bottom: 4px;
    }
    .deckCard.shopRemoved > :not(.shopChange):not(.deckCardMenu) {
        opacity: 0.35;
    }
    .shopChange {
        color: #ffb347 !important;
    }
    .shopChange .smallButton {
        margin-left: 4px;
        font-size: 9px;
        padding: 0 3px;
    }
    .packHandLabel {
        margin: 2px 0;
        max-width: 480px;
    }

    /* Pick-order hint under a pack whose cards can be clicked into the deck */
    .packItem > .packAddHint {
        flex-basis: 100%;
        width: auto;
        align-items: flex-start;
        text-align: left;
        margin-top: 2px;
        font-size: 10px;
        color: #8a8a8a;
    }

    .packItem .cardName {
        font-size: 10px;
        margin-bottom: 3px;
        word-wrap: break-word;
        color: #ffffff;
    }

    .packItem .standardCardName {
        font-size: 10px;
        margin-bottom: 3px;
        word-wrap: break-word;
        color: #ffffff;
    }

    .packItem .modifier {
        font-size: 10px;
        color: #aaaaaa;
    }
    .packItem > .packName {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 10px;
        margin-right: 5px;
        height: 95px; /* Adjust this value to match the height of the cards */
        justify-content: center;
    }
.voucherContainer,
.tagContainer,
.sixthContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    margin-right: 5px;
}


.voucherName,
.tagName,
.sixthName {
    font-size: 10px;
    margin-bottom: 3px;
    word-wrap: break-word;
    color: #ffffff;
}

.tagsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.search-container {
    margin-bottom: 10px;
}

#searchInput {
    width: 100%;
    padding: 5px;
    font-size: 14px;
}
.highlight {
    background-color: rgba(150, 237, 121, 0.3);
    border-radius: 3px;
    box-shadow: 0px 0px 20px 15px rgba(150, 237, 121, 0.3);
}
.bossContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 10px;
    margin-right: 5px;
}


.bossName {
    font-size: 10px;
    margin-bottom: 3px;
    word-wrap: break-word;
    color: #ffffff;
}


/* Resample history: a badge on any card whose first roll was thrown away, and the popover
   it opens with every discarded roll in order. Only drawn with the setting on. */
.rsSprite {
    position: relative;
    display: block;
    margin: 0 auto !important;
}
.rsBadge {
    position: absolute;
    left: -6px;
    bottom: 4px;
    z-index: 2;
    min-width: 20px;
    height: 17px;
    padding: 0 5px;
    margin: 0 !important;
    border: 1px solid #ffb13b;
    border-radius: 9px;
    background-color: #1e1e1e;
    color: #ffcf7a;
    font-family: inherit;
    font-size: 10px;
    line-height: 15px;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    transition: transform 0.1s, background-color 0.1s;
}
.rsBadge:hover, .rsBadge:focus-visible, .rsBadge.open {
    background-color: #ffb13b;
    color: #1e1e1e;
    transform: scale(1.1);
    outline: none;
}
.rsPop {
    position: fixed;
    z-index: 1000;
    max-width: calc(100vw - 32px);
    padding: 10px 12px 12px;
    border: 1px solid #555555;
    border-top: 3px solid #ffb13b;
    border-radius: 6px;
    background-color: #262626;
    color: #ffffff;
    font-size: 11px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
    animation: rsPopIn 0.12s ease-out;
}
@keyframes rsPopIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: none; }
}
.rsPopHead {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
}
.rsPopTitle {
    font-size: 13px;
    color: #ffcf7a;
}
.rsPopSub {
    color: #aaaaaa;
}
.rsChain {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    overflow-x: auto;
    padding-bottom: 2px;
}
.rsStep {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 58px;
    text-align: center;
    line-height: 1.15;
}
.rsThumb {
    position: relative;
    width: 44px;
    height: 59px;
    margin-bottom: 4px;
    overflow: hidden;
    border-radius: 3px;
}
.rsThumb.small {
    width: 34px;
    height: 34px;
    margin: 12px 0 17px;
}
.rsThumb > .sprite {
    margin: 0 !important;
    transform: scale(0.62);
    transform-origin: top left;
}
.rsThumb.small > .sprite {
    transform: none;
}
.rsThumb.text {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #666666;
    font-size: 9px;
    color: #cccccc;
}
.rsStep.rejected .rsThumb {
    filter: grayscale(0.85) brightness(0.7);
}
.rsStep.rejected .rsThumb::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top right, transparent calc(50% - 1px), #ff6b5e calc(50% - 1px), #ff6b5e calc(50% + 1px), transparent calc(50% + 1px));
}
.rsStep.kept .rsThumb {
    outline: 2px solid #96ed79;
    outline-offset: 1px;
}
.rsName {
    font-size: 10px;
    word-wrap: break-word;
}
.rsStep.rejected .rsName {
    color: #bbbbbb;
}
.rsWhy {
    margin-top: 2px;
    padding: 0 4px;
    border-radius: 3px;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
}
.rsWhy.h { background-color: rgba(255, 107, 94, 0.2); color: #ff9b91; }
.rsWhy.l { background-color: rgba(170, 170, 170, 0.2); color: #cccccc; }
.rsWhy.r { background-color: rgba(122, 162, 255, 0.2); color: #a9c1ff; }
.rsWhy.k { background-color: rgba(150, 237, 121, 0.2); color: #96ed79; }
.rsArrow {
    flex-shrink: 0;
    align-self: flex-start;
    margin-top: 22px;
    color: #777777;
    font-size: 12px;
}
`;
    document.head.appendChild(style);

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'Enter search terms (comma-separated)';

    const searchLabel = document.createElement('label');
    searchLabel.setAttribute('for', 'searchInput');
    searchLabel.textContent = 'Press enter to search (comma separated values, min length 4 char)';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.appendChild(searchLabel);
    searchContainer.appendChild(searchInput);

    document.body.appendChild(searchContainer);
    document.getElementById('searchInput').addEventListener('input', searchAndHighlight);

    const scrollingContainer = document.createElement('div');
    scrollingContainer.id = 'scrollingContainer';
    document.body.appendChild(scrollingContainer);

    document.getElementById('searchInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const highlightedItem = document.querySelector('.highlight');
            if (highlightedItem) {
                highlightedItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.log('No highlighted item found');
            }
        }
    });

    // Function to extract shop queues from the textarea content
    function extractShopQueues(text) {
        const shopQueues = [];
        const regex = /==ANTE \d+==[\s\S]*?(?=(?:==ANTE \d+==|$))/g;
        const matches = text.match(regex);

        if (matches) {
            matches.forEach(match => {
                const titleMatch = match.match(/==ANTE \d+==/);
                const title = titleMatch ? titleMatch[0] : 'Untitled';
                const bossMatch = match.match(/Boss: (.+)/);
                const voucherMatch = match.match(/Voucher: (.+)/);
                const resumedMatch = match.match(/^Resumed from save: (.+)/m);
                const tagsMatch = match.match(/Tags: (.+)/);
                const sixthMatch = match.match(/Sixth Sense: (.+)/);
                const perkeoMatch = match.match(/^Perkeo: (.+)/m);
                // Generator rows are defined once in index.html (window.GENERATORS); each
                // shows up in the output as a "Label: a, b, c" line.
                const generatorDefs = (window.GENERATORS || []).map(g => ({ key: g.label, label: g.label, group: g.group, hint: g.hint }));
                const generators = [];
                generatorDefs.forEach(def => {
                    const genMatch = match.match(new RegExp('^' + def.key.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&') + ': (.*)', 'm'));
                    if (genMatch) {
                        const cards = genMatch[1].trim() === '' ? [] : genMatch[1].trim().split(',').map(card => card.trim());
                        generators.push({ label: def.label, group: def.group, hint: def.hint, cards });
                    }
                });
                const queueMatch = match.match(/Shop Queue[^:\n]*:([\s\S]*?)(?=Packs:|$)/);
                const currentShopMatch = match.match(/^Current Shop: (.*)$/m);
                const packsMatch = match.match(/Packs:([\s\S]*?)(?=(?:==ANTE \d+==|$))/);

                const boss = bossMatch ? bossMatch[1].trim() : '';
                // One roll per ante normally; more when the ante is replayed (Hieroglyph).
                const anteVouchers = voucherMatch ? voucherMatch[1].trim().split(',').map(v => v.trim()).filter(v => v !== '') : [];
                const tags = tagsMatch ? tagsMatch[1].trim().split(',').map(tag => tag.trim()) : [];
                const sixthSense = sixthMatch ? sixthMatch[1].trim().split(',').map(card => card.trim()) : [];
                // Each Perkeo entry is "card@shop/trigger" (see index.html).
                const perkeo = perkeoMatch ? perkeoMatch[1].trim().split(',').map(e => {
                    const m = e.trim().match(/^(.*)@(\d+)\/(\d+)$/);
                    return m ? { card: m[1], shop: parseInt(m[2], 10), trigger: parseInt(m[3], 10) } : { card: e.trim(), shop: 0, trigger: 1 };
                }) : [];
                const queue = queueMatch ? queueMatch[1].trim().split('\n').filter(item => item.trim() !== '' && !item.startsWith('Current Shop:')) : [];
                const currentShopCount = currentShopMatch ? currentShopMatch[1].split(',').filter(x => x.trim()).length : 0;
                const packs = packsMatch ? packsMatch[1].trim().split('\n').filter(item => item.trim() !== '') : [];

                shopQueues.push({ title, queue, boss, anteVouchers, tags, sixthSense, perkeo, generators, packs, resumed: resumedMatch ? resumedMatch[1].trim() : null, currentShopCount, raw: match });
            });
        }

        return shopQueues;
    }

    // Function to separate card names, modifiers, and stickers
    function parseCardItem(item) {
        const modifiers = ['Foil', 'Holographic', 'Polychrome', 'Negative'];
        const stickers = ['Perishable', 'Rental', 'Eternal'];
        let cardName = item.replace(/^\d+\)/, '').trim();
        let itemModifiers = [];
        let itemStickers = [];

        modifiers.forEach(mod => {
            const regex = new RegExp(`\\b${mod}\\b`, 'i');
            if (regex.test(cardName)) {
                itemModifiers.push(mod);
                cardName = cardName.replace(regex, '').trim();
            }
        });

        stickers.forEach(stick => {
            const regex = new RegExp(`\\b${stick}\\b`, 'i');
            if (regex.test(cardName)) {
                itemStickers.push(stick);
                cardName = cardName.replace(regex, '').trim();
            }
        });

        return { cardName, itemModifiers, itemStickers };
    }

    // Function to determine item type (joker, tarot, or planet)
    function determineItemType(itemName) {
        if (jokers.find(j => j.name === itemName)) {
            return 'joker';
        } else if (tarotsAndPlanets.find(tp => tp.name === itemName)) {
            return 'tarot';
        } else {
            return 'unknown';
        }
    }

    // "Seen" marks: cards you have already passed in the game, greyed out on click. Kept
    // per seed + deck in localStorage, never in the share link. Shop queues can also
    // collapse their leading run of seen cards into a stub.
    const seenState = { key: null, seen: new Set(), shopCollapsed: new Set() };
    function seenStoreKey() {
        const seed = (document.getElementById('seed').value || '').toUpperCase().replace(/0/g, 'O');
        return 'theSoulSeen:' + seed + ':' + document.getElementById('deck').value;
    }
    function loadSeenState() {
        const key = seenStoreKey();
        if (key === seenState.key) return;
        seenState.key = key; seenState.seen.clear(); seenState.shopCollapsed.clear();
        try {
            const st = JSON.parse(localStorage.getItem(key));
            if (st) { (st.seen || []).forEach(k => seenState.seen.add(k)); (st.shopCollapsed || []).forEach(a => seenState.shopCollapsed.add(a)); }
        } catch (e) { /* unavailable or corrupt: start clean */ }
    }
    function saveSeenState() {
        try { localStorage.setItem(seenState.key, JSON.stringify({ seen: [...seenState.seen], shopCollapsed: [...seenState.shopCollapsed] })); } catch (e) { /* page-only state */ }
    }
    function setSeen(tile, key, on) { if (on) seenState.seen.add(key); else seenState.seen.delete(key); tile.classList.toggle('seen', on); }
    // Right-click toggles the seen tint (left click keeps its existing meaning per tile).
    // onContext(e) may return true to take the event over; afterToggle() runs after a
    // toggle (the shop uses it to recompute its collapsed run).
    function attachSeenToggle(tile, key, onContext, afterToggle) {
        tile.classList.add('seenable');
        tile.classList.toggle('seen', seenState.seen.has(key));
        tile.addEventListener('contextmenu', (e) => {
            if (e.target.closest('button, select, input, .deckAddMenu')) return;
            e.preventDefault();
            if (onContext && onContext(e)) return;
            setSeen(tile, key, !seenState.seen.has(key));
            saveSeenState();
            if (afterToggle) afterToggle();
        });
    }

    // Left-click on a Joker / consumable tile marks it as acquired in this ante; the queues
    // then reroll around it from that ante on, as the game does. Already-held cards are
    // outlined. Ownership is modelled per name, so any copy of a held card is outlined.
    // Where in an ante a card can arrive, labelled by effect on Perkeo's pools. Position p
    // means "in hand by shop p"; one past the last shop means "only from the next ante".
    function posOptions(anteNum) {
        const os = window.ownedState;
        const shops = os ? os.shopsInAnte(anteNum) : 3;
        const opts = [];
        if (anteNum > 1) opts.push({ pos: 1, label: 'Shop 1 (start of ante)' });
        for (let r = 1; r <= 3; r++) {
            const pos = os ? os.posForRound(anteNum, r) : r;
            opts.push({ pos, label: pos <= shops ? 'Round ' + r + ' / shop ' + pos : 'Round ' + r + ' (after last shop)' });
        }
        return opts;
    }
    function posLabel(anteNum, pos) {
        const o = posOptions(anteNum).find(x => x.pos === pos);
        return o ? o.label : 'Position ' + pos;
    }

    // Left-click marks a Joker / consumable as acquired in this ante. `pos` fixes where in
    // the ante (Sixth Sense trigger, pack pair); when null a small chooser asks, since a shop
    // queue or generator row does not say which shop or round you got it in.
    function attachOwnToggle(tile, cardName, anteNum, pos) {
        const os = window.ownedState;
        if (!os || determineItemType(cardName) === 'unknown') return;
        const held = os.items.filter(o => o.name === cardName && os.heldAt(o, anteNum));
        tile.classList.add('ownable', 'clickable');
        if (held.length > 0) {
            tile.classList.add('owned');
            tile.title = 'Held x' + held.length + ' (since ante ' + Math.min(...held.map(o => o.from)) + '). Click to add another copy this ante.';
        } else {
            tile.title = 'Click if you acquire this card in this ante';
        }
        tile.addEventListener('click', (e) => {
            if (e.target.closest('button, select, input, .deckAddMenu')) return;
            if (pos) { os.add(cardName, anteNum, pos); return; }
            const existing = tile.querySelector('.deckAddMenu');
            if (existing) { existing.remove(); return; }
            const menu = document.createElement('div');
            menu.className = 'deckAddMenu';
            posOptions(anteNum).forEach(o => {
                const b = document.createElement('button');
                b.className = 'smallButton';
                b.textContent = o.label;
                b.addEventListener('click', (ev) => { ev.stopPropagation(); os.add(cardName, anteNum, o.pos); });
                menu.appendChild(b);
            });
            tile.appendChild(menu);
        });
    }

    // Form values that must survive the full re-render every analysis triggers.
    const formMemory = {};
    function remember(el, key) {
        if (formMemory[key] !== undefined) el.value = formMemory[key];
        el.addEventListener('input', () => { formMemory[key] = el.value; });
        el.addEventListener('change', () => { formMemory[key] = el.value; });
        return el;
    }

    // Remembers which collapsible panels are open so a re-analysis doesn't close them.
    const expandedPanels = new Set();
    // Panels that default to open remember an explicit collapse the same way.
    const collapsedPanels = new Set();

    // Collapsible section. renderBody(body) runs once, the first time the panel is expanded.
    function createCollapsible(parent, key, label, renderBody, titleClass, defaultOpen) {
        const title = document.createElement('div');
        title.className = 'queueTitle collapsibleTitle' + (titleClass ? ' ' + titleClass : '');
        title.textContent = label;
        title.setAttribute('role', 'button');
        title.tabIndex = 0;
        parent.appendChild(title);

        const body = document.createElement('div');
        body.hidden = true;
        parent.appendChild(body);

        let rendered = false;
        const setExpanded = (expanded) => {
            if (expanded && !rendered) {
                renderBody(body);
                rendered = true;
                searchAndHighlight();
            }
            body.hidden = !expanded;
            title.classList.toggle('collapsed', !expanded);
            title.setAttribute('aria-expanded', String(expanded));
            if (expanded) { expandedPanels.add(key); collapsedPanels.delete(key); }
            else { expandedPanels.delete(key); collapsedPanels.add(key); }
        };
        title.addEventListener('click', () => setExpanded(body.hidden));
        title.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setExpanded(body.hidden);
            }
        });
        setExpanded(expandedPanels.has(key) || (!!defaultOpen && !collapsedPanels.has(key)));
        return body;
    }

    const CARD_SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
    const CARD_RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const CARD_ENHANCEMENTS = ['', 'Bonus', 'Mult', 'Wild', 'Glass', 'Steel', 'Stone', 'Gold', 'Lucky'];
    const CARD_EDITIONS = ['', 'Foil', 'Holographic', 'Polychrome'];
    const CARD_SEALS = ['', 'Gold Seal', 'Red Seal', 'Blue Seal', 'Purple Seal'];

    // One card in a round's draw order: sprite, position, and whether it is in the opening hand.
    function makeDeckCardTile(card, pos, inHand) {
        const tile = document.createElement('div');
        tile.className = 'deckCard' + (inHand ? ' inHand' : '');
        const parsed = parseStandardCardName(card.name);
        if (parsed) tile.appendChild(makeStandardCardSprite(parsed.rank, parsed.suit, parsed.modifiers, parsed.seal));
        const posEl = document.createElement('div');
        posEl.className = 'modifier deckPos';
        posEl.textContent = inHand ? pos + ' (hand)' : String(pos);
        tile.appendChild(posEl);
        const nameEl = document.createElement('div');
        nameEl.className = 'standardCardName';
        nameEl.textContent = getStandardCardName(card.name);
        tile.appendChild(nameEl);
        if (parsed) {
            parsed.modifiers.concat(parsed.seal ? [parsed.seal] : []).forEach(mod => {
                const m = document.createElement('div');
                m.className = 'modifier';
                m.textContent = mod;
                m.style.color = getModifierColor(mod);
                tile.appendChild(m);
            });
        }
        return tile;
    }

    // Card:get_nominal(), which the hand's default 'desc' sort orders by: rank, then face,
    // then suit (Spades high). A Stone Card's suit weight is scaled by -1000, so it sinks.
    const RANK_NOMINAL = { Jack: 10.1, Queen: 10.2, King: 10.3, Ace: 11.4 };
    const SUIT_NOMINAL = { Diamonds: 0.01, Clubs: 0.02, Hearts: 0.03, Spades: 0.04 };
    function handNominal(name) {
        const p = parseStandardCardName(name);
        if (!p) return -Infinity;
        const base = RANK_NOMINAL[p.rank] || parseInt(p.rank, 10) || 0;
        return base + (SUIT_NOMINAL[p.suit] || 0) * (p.modifiers.includes('Stone') ? -1000 : 1);
    }

    // Tag a pack-hand tile with what was recorded against it in this shop, with an undo.
    function markShopChanges(tile, card, shopOps) {
        const ops = shopOps.filter(op => op.target === card.id);
        ops.forEach(op => {
            const tag = document.createElement('div');
            tag.className = 'modifier shopChange';
            if (op.type === 'remove') { tile.classList.add('shopRemoved'); tag.textContent = 'Removed'; }
            else if (op.type === 'modify') tag.textContent = '→ ' + getStandardCardName(op.name);
            const undo = document.createElement('button');
            undo.className = 'smallButton';
            undo.textContent = 'Undo';
            undo.addEventListener('click', (e) => { e.stopPropagation(); window.deckState.undo(op.seq); });
            tag.appendChild(undo);
            tile.appendChild(tag);
        });
    }

    // Collapsible section to the right of an Arcana / Spectral pack: the hand it deals, as
    // the game lays it out (sorted by rank), each tile keeping its draw position. When the
    // shop's other pack deals a hand too, whichever you open second gets the next cards down.
    function appendPackHand(packItem, key, info) {
        const wrap = document.createElement('div');
        wrap.className = 'packHand';
        packItem.appendChild(wrap);
        // Changes already recorded in this shop, shown on the cards they touch.
        const shopOps = window.deckState.ops.filter(op => op.inShop
            && op.ante === info.next.ante && op.round === info.next.round);
        const changed = shopOps.filter(op => op.type !== 'add').length;
        createCollapsible(wrap, key, 'Hand (' + info.first.length + ')' + (changed ? ' – ' + changed + ' changed' : ''), (body) => {
            body.className = 'packHandBody';
            const rows = [{ label: info.second ? 'Opened first' : null, cards: info.first, from: 1 }];
            if (info.second) rows.push({ label: 'Opened after the other pack', cards: info.second, from: info.hand + 1 });
            rows.forEach(row => {
                if (row.label) {
                    const lbl = document.createElement('div');
                    lbl.className = 'modifier packHandLabel';
                    lbl.textContent = row.label;
                    body.appendChild(lbl);
                }
                const strip = document.createElement('div');
                strip.className = 'packHandCards';
                if (row.cards.length === 0) {
                    const none = document.createElement('div');
                    none.className = 'modifier';
                    none.textContent = 'Deck runs out before this pack.';
                    strip.appendChild(none);
                }
                row.cards.map((card, i) => ({ card, pos: row.from + i }))
                    .sort((x, y) => handNominal(y.card.name) - handNominal(x.card.name))
                    .forEach(({ card, pos }) => {
                        const tile = makeDeckCardTile(card, pos, false);
                        markShopChanges(tile, card, shopOps);
                        attachDeckCardMenu(tile, card, null, info.next.ante, info.next.round, true);
                        strip.appendChild(tile);
                    });
                body.appendChild(strip);
            });
            const note = document.createElement('div');
            note.className = 'modifier packHandLabel';
            note.textContent = 'Dealt off the cash-out shuffle (shop ' + info.shop + ' this ante); numbers are draw positions. Click a card to record what the pack’s cards did to it: it changes the deck from round ' + info.next.round + ' of ante ' + info.next.ante + ' on, while this hand stays as dealt. Only as right as the Deck & Draw Order record.';
            body.appendChild(note);
        }, 'packHandTitle');
    }

    // Consumables and Jokers that pick one of your Jokers at random, modelled against the
    // game's own card.lua / misc_functions.lua.
    //
    // Ordering. pseudorandom_element(_t, seed) sorts the pool before indexing into it, and
    // when its elements are tables carrying a sort_id - which every Card is - it sorts by
    // THAT, not by the table key:
    //     if keys[1] and keys[1].v and type(keys[1].v) == 'table' and keys[1].v.sort_id then
    //       table.sort(keys, function (a, b) return a.v.sort_id < b.v.sort_id end)
    // sort_id is a global counter stamped at Card creation, so the pool is in the order the
    // Jokers were created: the order you acquired them. Dragging Jokers along the row
    // reorders G.jokers.cards but not the sorted pool, so it cannot steer these effects.
    //
    // Eligibility. The Wheel of Fortune's eligible_strength_jokers and Ectoplasm/Hex's
    // eligible_editionless_jokers are built by the same filter, `set == 'Joker' and not
    // v.edition`: editionless, eternal included. Ankh and Invisible Joker pick from every
    // Joker (Invisible excludes only itself).
    //
    // Pulls per use. Each effect rolls one run-wide stream. The Wheel of Fortune is the only
    // one that rolls more than once, and all three rolls are on the same key: the odds check
    // gates the rest, so a failed use spends one pull and a passing use spends three
    // (odds, target, edition). poll_edition('wheel_of_fortune', nil, true, true) turns that
    // third roll into Polychrome above 0.85, Holographic above 0.5, else Foil - the 15/35/50
    // split, negative excluded by _no_neg.
    const JOKER_EFFECTS = [
        { id: 'hex', label: 'Hex (Spectral)', pool: 'editionless', grants: 'Polychrome',
          destroysOthers: true,
          roll: (pull, n) => ({ hit: true, idx: pull('hex', n - 1) }),
          note: 'Adds Polychrome to one editionless Joker, then destroys every other Joker. Eternal Jokers survive.' },
        { id: 'ectoplasm', label: 'Ectoplasm (Spectral)', pool: 'editionless', grants: 'Negative',
          roll: (pull, n) => ({ hit: true, idx: pull('ectoplasm', n - 1) }),
          note: 'Adds Negative to one editionless Joker. Hand size drops by 1 for the first Ectoplasm of the run, 2 for the next, and so on.' },
        { id: 'wheel', label: 'The Wheel of Fortune (Tarot)', pool: 'editionless', odds: true,
          roll: (pull, n, ctx) => {
              const threshold = Math.pow(2, ctx.oops) / 4;
              const roll = pull('wheel_of_fortune');
              if (roll >= threshold) return { hit: false, roll, threshold };
              const idx = pull('wheel_of_fortune', n - 1);
              const ed = pull('wheel_of_fortune');
              return { hit: true, roll, threshold, idx,
                       grants: ed > 0.85 ? 'Polychrome' : ed > 0.5 ? 'Holographic' : 'Foil' };
          },
          note: '1 in 4 to add an edition to one editionless Joker: Foil 50%, Holographic 35%, Polychrome 15%.' },
        { id: 'ankh', label: 'Ankh (Spectral)', pool: 'all', copies: true, destroysOthers: true,
          roll: (pull, n) => ({ hit: true, idx: pull('ankh_choice', n - 1) }),
          note: 'Copies one Joker - any Joker, edition or not - then destroys the others. Eternal Jokers survive, and the copy is Negative only if the original was.' },
        { id: 'invisible', label: 'Invisible Joker (sold)', pool: 'others', copies: true,
          excludeName: 'Invisible Joker',
          roll: (pull, n) => ({ hit: true, idx: pull('invisible', n - 1) }),
          note: 'Sold after 2 rounds held: duplicates one of your OTHER Jokers, keeping Negative if the original had it.' },
    ];
    const EFFECT_EDITIONS = ['Foil', 'Holographic', 'Polychrome', 'Negative'];

    // The Jokers a random effect can land on, in acquisition order. pseudorandom_element
    // sorts the pool before indexing into it, so the order is the Jokers' own sort_id -
    // the order they were created, i.e. the order you picked them up. Dragging Jokers
    // around the row does NOT change it, and cannot be used to steer these effects; the
    // only lever is which Jokers are eligible at all. Same ordering the Perkeo pool uses:
    // earlier antes first, then by position in the ante, then by record order.
    function jokerPool(os, anteNum) {
        const slotKey = o => o.perkeo ? ((o.shop || 0) + 0.5) : (o.pos || 1);
        return os.items
            .filter(o => os.heldAt(o, anteNum) && determineItemType(o.name) === 'joker')
            .slice()
            .sort((x, y) => (x.from - y.from) || (slotKey(x) - slotKey(y))
                || (parseInt(x.id.slice(1), 10) - parseInt(y.id.slice(1), 10)));
    }
    function jokerEdition(o) { return o.edition || (o.perkeo || o.negative ? 'Negative' : ''); }

    // Panel under Owned Cards: pick an effect, see the Joker each of your next uses lands
    // on, and record the result on your owned cards.
    function renderEffectPlanner(body, os, anteNum) {
        const board = jokerPool(os, anteNum);

        const controls = document.createElement('div');
        controls.className = 'deckControls';
        const effSel = document.createElement('select');
        JOKER_EFFECTS.forEach(e => { const o = document.createElement('option'); o.value = e.id; o.textContent = e.label; effSel.appendChild(o); });
        remember(effSel, 'effect:which');
        const usedLabel = document.createElement('label');
        usedLabel.textContent = 'Already used this run:';
        usedLabel.title = 'Uses of this effect earlier in the run. Each one spent a pull of its stream, so the next use is not the first.';
        const usedInput = document.createElement('input');
        usedInput.type = 'number'; usedInput.min = 0; usedInput.max = 99; usedInput.value = 0;
        usedInput.className = 'deckHandInput';
        usedLabel.appendChild(usedInput);
        // Counted per effect, and remembered across the re-render every analysis triggers.
        const usedKey = () => 'effect:used:' + effSel.value;
        const loadUsed = () => { usedInput.value = formMemory[usedKey()] !== undefined ? formMemory[usedKey()] : 0; };
        const saveUsed = () => { formMemory[usedKey()] = usedInput.value; };
        const aheadLabel = document.createElement('label');
        aheadLabel.textContent = 'Uses to show:';
        const aheadInput = document.createElement('input');
        aheadInput.type = 'number'; aheadInput.min = 1; aheadInput.max = 20; aheadInput.value = 5;
        aheadInput.className = 'deckHandInput';
        remember(aheadInput, 'effect:ahead');
        aheadLabel.appendChild(aheadInput);
        // Oops! All 6s doubles every listed probability per copy, so it moves the Wheel's
        // 1 in 4 gate and changes which uses spend a target pull at all.
        const oopsLabel = document.createElement('label');
        oopsLabel.textContent = 'Oops! All 6s held:';
        oopsLabel.title = 'Each copy doubles listed probabilities, so the Wheel goes 1 in 4, then 1 in 2, then certain.';
        const oopsInput = document.createElement('input');
        oopsInput.type = 'number'; oopsInput.min = 0; oopsInput.max = 4; oopsInput.value = 0;
        oopsInput.className = 'deckHandInput';
        remember(oopsInput, 'effect:oops');
        oopsLabel.appendChild(oopsInput);
        controls.appendChild(effSel);
        controls.appendChild(usedLabel);
        controls.appendChild(aheadLabel);
        controls.appendChild(oopsLabel);
        body.appendChild(controls);

        const note = document.createElement('div');
        note.className = 'modifier deckNote';
        body.appendChild(note);

        const poolWrap = document.createElement('div');
        body.appendChild(poolWrap);
        const results = document.createElement('div');
        body.appendChild(results);

        const render = () => {
            const eff = JOKER_EFFECTS.find(e => e.id === effSel.value) || JOKER_EFFECTS[0];
            note.textContent = eff.note;
            poolWrap.innerHTML = '';
            results.innerHTML = '';

            // Who is eligible. Board order is what the game indexes, so it is shown as a
            // numbered row you can reorder to match your actual Joker row.
            const eligible = board.filter(o => {
                if (eff.excludeName && o.name === eff.excludeName) return false;
                if (eff.pool === 'editionless' && jokerEdition(o)) return false;
                return true;
            });

            const poolTitle = document.createElement('div');
            poolTitle.className = 'effectPoolTitle';
            poolTitle.textContent = 'Pool in acquisition order (' + eligible.length + ' eligible of ' + board.length + ' Jokers)';
            poolWrap.appendChild(poolTitle);
            const poolNote = document.createElement('div');
            poolNote.className = 'modifier effectPoolNote';
            poolNote.textContent = 'The pick is a slot number in this list. pseudorandom_element sorts the pool by '
                + 'sort_id, the counter stamped on a card when it is created, so the order is the order you acquired '
                + 'these Jokers \u2014 not where they sit in your row. Dragging Jokers around in game cannot steer '
                + 'these effects; the only lever is who is eligible, so sell a Joker or give one an edition.';
            poolWrap.appendChild(poolNote);

            const row = document.createElement('div');
            row.className = 'scrollable no-select';
            board.forEach((o) => {
                const inPool = eligible.indexOf(o) >= 0;
                const tile = document.createElement('div');
                tile.className = 'effectPoolTile' + (inPool ? '' : ' outOfPool');
                tile.appendChild(makeCardSprite(o.name, 'joker', [], []));
                const nm = document.createElement('div');
                nm.className = 'voucherName';
                nm.textContent = o.name;
                tile.appendChild(nm);
                const pos = document.createElement('div');
                pos.className = 'modifier';
                pos.textContent = inPool ? 'Pool #' + (eligible.indexOf(o) + 1) : 'Not eligible';
                tile.appendChild(pos);

                const edSel = document.createElement('select');
                edSel.className = 'effectEdSel';
                edSel.title = 'Edition on this Joker. Hex, Ectoplasm and the Wheel only hit Jokers with no edition.';
                [''].concat(EFFECT_EDITIONS).forEach(v => {
                    const opt = document.createElement('option');
                    opt.value = v; opt.textContent = v === '' ? 'No edition' : v;
                    edSel.appendChild(opt);
                });
                edSel.value = jokerEdition(o);
                edSel.addEventListener('change', () => os.setEdition(o.id, edSel.value));
                tile.appendChild(edSel);

                row.appendChild(tile);
            });
            if (board.length === 0) {
                const none = document.createElement('div');
                none.className = 'modifier';
                none.textContent = 'No Jokers held this ante.';
                row.appendChild(none);
            }
            poolWrap.appendChild(row);
            attachDragScroll(row);

            if (eligible.length === 0) {
                const none = document.createElement('div');
                none.className = 'modifier';
                none.textContent = board.length === 0
                    ? 'Mark the Jokers you hold to see what this effect would hit.'
                    : 'Nothing is eligible, so the game will not let you use this.';
                results.appendChild(none);
                return;
            }

            // Replayed in order rather than indexed into: how many pulls a use spends can
            // depend on the use itself (a Wheel that fails its odds check never rolls a
            // target or an edition), so use N's place in the stream follows from uses 1..N-1.
            const used = Math.max(0, parseInt(usedInput.value, 10) || 0);
            const ahead = Math.max(1, Math.min(20, parseInt(aheadInput.value, 10) || 1));
            const ctx = { oops: Math.max(0, Math.min(4, parseInt(oopsInput.value, 10) || 0)) };
            const rolls = window.jokerEffects.run(used + ahead, (pull) => eff.roll(pull, eligible.length, ctx));

            const list = document.createElement('div');
            list.className = 'effectResults';
            for (let i = used; i < used + ahead; i++) {
                const r = rolls[i];
                const line = document.createElement('div');
                line.className = 'effectResultRow' + (i === used ? ' effectNext' : '');
                const when = document.createElement('span');
                when.className = 'effectUseNum';
                when.textContent = (i === used ? 'Next use' : 'Use #' + (i + 1)) + ':';
                line.appendChild(when);
                const what = document.createElement('span');
                if (!r.hit) {
                    what.textContent = 'odds fail (' + r.roll.toFixed(3) + ' ≥ ' + r.threshold + ') — nothing happens';
                    what.className = 'effectMiss';
                } else {
                    // The slot number is the part the seed decides; which Joker sits in that
                    // slot follows from sort_id order, so both are shown.
                    what.textContent = (eff.copies ? 'copies ' : (r.grants || eff.grants) + ' on ')
                        + 'slot ' + (r.idx + 1) + ' of ' + eligible.length + ' \u2014 ' + eligible[r.idx].name
                        + (eff.odds ? '  (odds pass, ' + r.roll.toFixed(3) + ' < ' + r.threshold + ')' : '');
                }
                line.appendChild(what);
                list.appendChild(line);
            }
            results.appendChild(list);

            // Apply the next use to the owned cards, so every later queue rerolls around it.
            const next = rolls[used];
            const hit = next.hit;
            const target = hit ? eligible[next.idx] : null;
            const grants = next.grants || eff.grants;
            const applyRow = document.createElement('div');
            applyRow.className = 'deckControls';
            const apply = document.createElement('button');
            apply.className = 'smallButton';
            apply.textContent = hit ? 'Apply to ' + target.name : 'Nothing to apply';
            apply.disabled = !hit;
            apply.title = 'Record the result on your owned cards for this ante';
            apply.addEventListener('click', () => {
                const others = board.filter(o => o.id !== target.id);
                let msg = eff.copies
                    ? 'Add a copy of ' + target.name + ' from this ante'
                    : 'Mark ' + target.name + ' as ' + grants;
                // Eternal Jokers survive a Hex or an Ankh, and this tool does not track the
                // sticker, so the confirm names the count and leaves the call to you.
                if (eff.destroysOthers && others.length > 0) {
                    msg += ', and lose ' + others.length + ' other Joker' + (others.length === 1 ? '' : 's')
                        + ' this ante (keep any Eternal ones: say no and release them by hand)';
                }
                if (!confirm(msg + '?')) return;
                if (eff.copies) os.add(target.name, anteNum, target.pos || 1);
                else os.setEdition(target.id, grants);
                if (eff.destroysOthers) others.forEach(o => os.release(o.id, anteNum));
                if (eff.id === 'invisible') {
                    const inv = board.find(o => o.name === 'Invisible Joker');
                    if (inv) os.release(inv.id, anteNum);
                }
                usedInput.value = String(used + 1);
                saveUsed();
            });
            applyRow.appendChild(apply);
            const bump = document.createElement('button');
            bump.className = 'smallButton';
            bump.textContent = 'Used it (skip a pull)';
            bump.title = 'Count this use without changing your owned cards';
            bump.addEventListener('click', () => { usedInput.value = String(used + 1); saveUsed(); render(); });
            applyRow.appendChild(bump);
            results.appendChild(applyRow);
        };

        effSel.addEventListener('change', () => { loadUsed(); render(); });
        usedInput.addEventListener('input', () => { saveUsed(); render(); });
        aheadInput.addEventListener('input', render);
        oopsInput.addEventListener('input', render);
        loadUsed();
        render();
    }

    // Clicking a card in a round's draw order asks what happens to it during that round,
    // rather than assuming it was destroyed. Shift+click keeps the old one-click shortcut.
    // Remove and Duplicate both take effect from the next shuffle (nextA / nextR), as does
    // Modify — a tarot sealing or enhancing a card edits it in place, so it keeps its
    // position in the deck order, while a duplicate is a new card at the end of it.
    // With `inShop` the card is in an Arcana / Spectral pack's hand: changes are recorded from
    // the next round like any other, but flagged so the pack keeps showing the hand as dealt.
    function attachDeckCardMenu(tile, card, roundNum, nextA, nextR, inShop) {
        const ds = window.deckState;
        if (!ds) return;
        const when = inShop ? 'in this shop' : 'during round ' + roundNum;
        tile.classList.add('clickable');
        tile.title = 'Click for what happens to this card ' + when
            + ' (shift+click removes it straight away)';

        const closeMenu = () => {
            const open = tile.querySelector('.deckCardMenu');
            if (open) open.remove();
            tile.classList.remove('menuOpen');
        };

        tile.addEventListener('click', (e) => {
            if (e.target.closest('.deckCardMenu')) return;
            if (e.shiftKey) { ds.remove(card.id, card.name, nextA, nextR, inShop); return; }
            if (tile.querySelector('.deckCardMenu')) { closeMenu(); return; }
            // One menu at a time, so the draw-order strip doesn't fill up with panels.
            document.querySelectorAll('.deckCard.menuOpen').forEach(t => {
                const m = t.querySelector('.deckCardMenu');
                if (m) m.remove();
                t.classList.remove('menuOpen');
            });

            const menu = document.createElement('div');
            menu.className = 'deckCardMenu';
            tile.classList.add('menuOpen');

            const mkBtn = (parent, label, hint, fn) => {
                const b = document.createElement('button');
                b.className = 'smallButton';
                b.textContent = label;
                if (hint) b.title = hint;
                b.addEventListener('click', (ev) => { ev.stopPropagation(); fn(); });
                parent.appendChild(b);
                return b;
            };

            mkBtn(menu, 'Remove', 'Destroyed, sold, or removed ' + when + (inShop ? ' (Hanged Man, Immolate, Familiar...)' : ''),
                () => ds.remove(card.id, card.name, nextA, nextR, inShop));
            mkBtn(menu, 'Duplicate', 'A copy is created ' + when + (inShop ? ' (Cryptid...)' : ' (Death, DNA, Hanging Chad...)') + '. New cards join the end of the deck order.',
                () => ds.add(card.name, nextA, nextR, inShop));

            // In a pack's hand the tile shows the card as dealt, so build on whatever was already
            // recorded for it in this shop (two Strengths on one card go up two ranks).
            const shopEdit = inShop && ds.ops.filter(op => op.type === 'modify' && op.inShop && op.target === card.id
                && op.ante === nextA && op.round === nextR).pop();
            const curName = shopEdit ? shopEdit.name : card.name;

            // Modify only makes sense for a card the name parser understands.
            const parsed = parseStandardCardName(curName);
            if (!parsed) { tile.appendChild(menu); return; }

            // Strength: card:set_base to the next rank up, Ace wrapping to 2. Seal, edition and
            // enhancement stay, and so does the card's place in the deck order.
            const rankIdx = CARD_RANKS.indexOf(parsed.rank);
            if (rankIdx >= 0) {
                const upRank = CARD_RANKS[(rankIdx + 1) % CARD_RANKS.length];
                const upName = curName.replace(/(\S+)( of \S+)$/, upRank + '$2');
                mkBtn(menu, 'Rank +1', 'Strength ' + when + ': ' + getStandardCardName(curName) + ' becomes ' + getStandardCardName(upName) + ', from round ' + nextR + '.',
                    () => ds.modify(card.id, curName, upName, nextA, nextR, inShop));
            }

            const form = document.createElement('div');
            form.className = 'deckCardEdit';
            form.hidden = true;
            mkBtn(menu, 'Modify...', 'Give it a seal, edition, or enhancement. The card keeps its place in the deck order.',
                () => { form.hidden = !form.hidden; });

            const mkSelect = (values, current, labelFn) => {
                const sel = document.createElement('select');
                values.forEach(v => {
                    const o = document.createElement('option');
                    o.value = v;
                    o.textContent = labelFn(v);
                    sel.appendChild(o);
                });
                sel.value = current || '';
                return sel;
            };
            const has = list => list.find(v => v && parsed.modifiers.includes(v)) || '';
            const sealSel = mkSelect(CARD_SEALS, parsed.seal || '', v => v === '' ? 'No seal' : v);
            const edSel = mkSelect(CARD_EDITIONS, has(CARD_EDITIONS), v => v === '' ? 'No edition' : v);
            const enhSel = mkSelect(CARD_ENHANCEMENTS, has(CARD_ENHANCEMENTS), v => v === '' ? 'No enhancement' : v);
            [sealSel, edSel, enhSel].forEach(el => form.appendChild(el));

            // Same token order as the Add card control, so both produce comparable names.
            const editedName = () => (sealSel.value ? sealSel.value + ' ' : '')
                + (edSel.value ? edSel.value + ' ' : '')
                + (enhSel.value ? enhSel.value + ' ' : '')
                + parsed.rank + ' of ' + parsed.suit;

            const preview = document.createElement('div');
            preview.className = 'modifier deckCardPreview';
            const syncPreview = () => { preview.textContent = editedName(); };
            [sealSel, edSel, enhSel].forEach(el => el.addEventListener('change', syncPreview));
            syncPreview();
            form.appendChild(preview);

            mkBtn(form, 'Apply from round ' + nextR, 'Record the change; it shows from the next shuffle on.',
                () => ds.modify(card.id, curName, editedName(), nextA, nextR, inShop));
            menu.appendChild(form);
            tile.appendChild(menu);
        });
    }

    // Mini chooser under a Standard Pack card: add it to the tracked deck from a chosen round.
    // `packShop` is the pack's entry in deckState.packShops: the card can only join from the
    // round after that shop (shop 1 of antes 2+ comes before round 1).
    function attachDeckAddChooser(container, cardName, anteNum, packShop) {
        const ds = window.deckState;
        if (!ds) return;
        container.classList.add('clickable');
        container.title = 'Click to add this card to your deck';
        container.addEventListener('click', (e) => {
            if (e.target.closest('.deckAddMenu')) return;
            const existing = container.querySelector('.deckAddMenu');
            if (existing) { existing.remove(); return; }
            const menu = document.createElement('div');
            menu.className = 'deckAddMenu';
            const roundNums = (ds.rounds[anteNum] || []).map((rd, i) => rd.round || (i + 1));
            const opts = [];
            const firstRound = packShop ? packShop.next.round : (anteNum === 1 ? 2 : 1);
            (roundNums.length ? roundNums : [1, 2, 3]).filter(r => r >= firstRound).forEach(r => opts.push({ label: 'From round ' + r, a: anteNum, r }));
            opts.push({ label: 'From ante ' + (anteNum + 1), a: anteNum + 1, r: 1 });
            opts.forEach(o => {
                const b = document.createElement('button');
                b.className = 'smallButton';
                b.textContent = o.label;
                b.addEventListener('click', (ev) => { ev.stopPropagation(); ds.add(cardName, o.a, o.r); });
                menu.appendChild(b);
            });
            container.appendChild(menu);
        });
    }

    // Text box backed by the shared Joker / consumable name list.
    function makeNameInput(placeholder) {
        if (!document.getElementById('ownedNames')) {
            const dl = document.createElement('datalist');
            dl.id = 'ownedNames';
            jokers.concat(tarotsAndPlanets).forEach(c => { const o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
            document.body.appendChild(dl);
        }
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder;
        input.setAttribute('list', 'ownedNames');
        input.className = 'ownedNameInput';
        return input;
    }

    // What the hold test is trying in each ante, kept across re-renders. Not persisted:
    // it is a scratch question, not part of the run.
    const holdTestState = new Map();

    // Densest-window settings per ante, kept across re-renders.
    const windowFinderState = new Map();

    function makeVoucherTile(name) {
        const tile = document.createElement('div');
        tile.className = 'voucherTile';

        tile.appendChild(makeVoucherSprite(name));

        const nameElement = document.createElement('div');
        nameElement.textContent = name;
        nameElement.classList.add('voucherName');
        tile.appendChild(nameElement);

        return tile;
    }

    // Rarity of a Joker straight from the engine's pools, or null for anything else.
    const RARITIES = ['Common', 'Uncommon', 'Rare', 'Legendary'];
    let rarityPools = null;
    function rarityOf(name) {
        if (!rarityPools) {
            if (typeof Immolate === 'undefined' || !Immolate.COMMON_JOKERS) return null;
            const vec = (v) => { const out = []; for (let i = 0; i < v.size(); i++) out.push(v.get(i)); return out; };
            rarityPools = {
                Common: new Set(vec(Immolate.COMMON_JOKERS)),
                Uncommon: new Set(vec(Immolate.UNCOMMON_JOKERS)),
                Rare: new Set(vec(Immolate.RARE_JOKERS)),
                Legendary: new Set(vec(Immolate.LEGENDARY_JOKERS)),
            };
        }
        return RARITIES.find(r => rarityPools[r].has(name)) || null;
    }

    // Build one card tile (sprite + name + modifiers + stickers) from a queue line like "3) Foil Blueprint"
    // Joker rarity from the engine's pools (version-independent lists: a Joker's rarity never
    // changed between patches, only pool membership did).
    let jokerRarityMap = null;
    function jokerRarity(name) {
        if (!jokerRarityMap) {
            if (typeof Immolate === 'undefined' || !Immolate.COMMON_JOKERS) return null;
            jokerRarityMap = new Map();
            [['Common', Immolate.COMMON_JOKERS], ['Uncommon', Immolate.UNCOMMON_JOKERS], ['Rare', Immolate.RARE_JOKERS], ['Legendary', Immolate.LEGENDARY_JOKERS]]
                .forEach(([r, vec]) => { for (let i = 0; i < vec.size(); i++) jokerRarityMap.set(vec.get(i), r); });
        }
        return jokerRarityMap.get(name) || null;
    }

    function createQueueItem(item) {
        const { cardName, itemModifiers, itemStickers } = parseCardItem(item);

        const queueItem = document.createElement('div');
        queueItem.className = 'queueItem';

        const itemType = determineItemType(cardName);
        // Rarity row above every tile. Jokers show Common / Uncommon / Rare / Legendary;
        // consumables get an empty row of the same height so all sprites line up.
        const rarity = itemType === 'joker' ? jokerRarity(cardName) : null;
        const rarityEl = document.createElement('div');
        rarityEl.className = 'rarityLabel' + (rarity ? ' rarity' + rarity : ' rarityNone');
        rarityEl.textContent = rarity || '\u00A0';
        queueItem.appendChild(rarityEl);
        queueItem.appendChild(itemType !== 'unknown'
            ? makeCardSprite(cardName, itemType, itemModifiers, itemStickers)
            : spriteStack(71, 95));

        const itemText = document.createElement('div');
        itemText.textContent = cardName;
        queueItem.appendChild(itemText);

        itemModifiers.forEach(mod => {
            const modifierText = document.createElement('div');
            modifierText.className = 'modifier';
            modifierText.textContent = mod;
            queueItem.appendChild(modifierText);
        });

        itemStickers.forEach(stick => {
            const stickerText = document.createElement('div');
            stickerText.className = 'sticker';
            stickerText.textContent = stick;
            queueItem.appendChild(stickerText);
        });

        return queueItem;
    }

    // Function to create and display the side-scrolling list
    function displayShopQueues() {
        const textarea = document.getElementById('outputBox');
        const text = textarea.value;
        const shopQueues = extractShopQueues(text);

        scrollingContainer.innerHTML = ''; // Clear previous content
        loadSeenState();

        shopQueues.forEach(({ title, queue, boss, anteVouchers, tags, sixthSense, perkeo, generators, packs, resumed, currentShopCount, raw }) => {
            const anteNum = parseInt((title.match(/\d+/) || ['0'])[0], 10);
            const os = window.ownedState;
            const vs = window.voucherState;
            const deckVouchers = vs ? vs.deckVouchers : [];
            // Owned at this ante = granted by the deck, or marked bought in this ante or earlier
            const isOwnedAt = (name) => deckVouchers.includes(name) || (vs && vs.purchases[name] !== undefined && vs.purchases[name] <= anteNum);
            // Shop card slots: 2 base, +1 Overstock, +1 Overstock Plus
            const shopSlots = 2 + (isOwnedAt('Overstock') ? 1 : 0) + (isOwnedAt('Overstock Plus') ? 1 : 0);

            const anteBox = document.createElement('div');
            anteBox.className = 'queueContainer';
            anteBox.dataset.search = raw.toLowerCase();

            // Whole ante is collapsible; its contents are only built on first expand.
            const anteLabel = title.replace(/=/g, '').trim()
                + (boss ? '  |  Boss: ' + boss : '')
                + (anteVouchers.length > 0 ? '  |  Voucher' + (anteVouchers.length > 1 ? 's' : '') + ': ' + anteVouchers.join(', ') : '')
                + (tags.length > 0 ? '  |  Tags: ' + tags.join(', ') : '')
                + (resumed ? '  |  \u23EF Resumed from save' : '');
            // A Negative Joker anywhere in this ante's generation paths also highlights the
            // ante's own collapsible title, so it's visible before expanding into it.
            const anteHasNegative = generators.some(g => g.cards.some(c => parseCardItem(c).itemModifiers.includes('Negative')));
            const anteBody = createCollapsible(anteBox, title, anteLabel, (queueContainer) => {

            const queueInfo = document.createElement('div');
            queueInfo.className = 'queueInfo';

            const voucherElement = document.createElement('div');
            voucherElement.innerHTML = '<b><u>Voucher' + (anteVouchers.length > 1 ? 's' : '') + '</u></b>';
            voucherElement.style = "font-size: 16px";

            const vouchersContainer = document.createElement('div');
            vouchersContainer.className = 'tagsContainer';
            anteVouchers.forEach((voucherName, idx) => {
                const voucherContainer = document.createElement('div');
                voucherContainer.className = 'voucherContainer';

                voucherContainer.appendChild(makeVoucherSprite(voucherName));

                const voucherNameElement = document.createElement('div');
                voucherNameElement.textContent = voucherName;
                voucherNameElement.classList.add('voucherName');
                voucherContainer.appendChild(voucherNameElement);
                attachResampleBadge(voucherContainer, anteNum + ':voucher:' + idx, voucherName, 'voucher', 'Ante ' + anteNum + ' voucher' + (idx > 0 ? ', roll ' + (idx + 1) : ''));

                // Anything past the first only shows up if this ante gets replayed.
                if (idx > 0) {
                    const rollLabel = document.createElement('div');
                    rollLabel.className = 'modifier';
                    rollLabel.textContent = 'Roll ' + (idx + 1);
                    voucherContainer.appendChild(rollLabel);
                }

                if (vs) {
                    const bought = vs.purchases[voucherName];
                    voucherContainer.classList.add('clickable');
                    voucherContainer.title = bought !== undefined
                        ? 'Click to mark as not bought'
                        : 'Click to mark as bought in this ante';
                    if (bought !== undefined) {
                        voucherContainer.classList.add('owned');
                        const boughtLabel = document.createElement('div');
                        boughtLabel.className = 'boughtLabel';
                        boughtLabel.textContent = bought === anteNum ? 'Bought' : 'Bought ante ' + bought;
                        voucherContainer.appendChild(boughtLabel);
                    }
                    voucherContainer.addEventListener('click', () => {
                        if (vs.purchases[voucherName] !== undefined) vs.unbuy(voucherName);
                        else vs.buy(voucherName, anteNum);
                    });
                }

                vouchersContainer.appendChild(voucherContainer);
            });
            voucherElement.appendChild(vouchersContainer);

            // Reveal the next roll of this ante's voucher. Hieroglyph and Petroglyph drop the
            // ante, so this ante's Boss can be beaten again, and each time it is the voucher
            // is rolled once more from the same per-ante stream.
            if (vs && vs.extra) {
                const voucherControls = document.createElement('div');
                voucherControls.className = 'packControls';

                const moreBtn = document.createElement('button');
                moreBtn.className = 'smallButton';
                moreBtn.textContent = 'Reveal next voucher';
                moreBtn.title = 'For a replayed ante: Hieroglyph / Petroglyph drop the ante, and beating this ante\u2019s Boss again rolls the next voucher. Mark this ante\u2019s voucher as bought first so it leaves the pool.';
                moreBtn.addEventListener('click', () => vs.more(anteNum));
                voucherControls.appendChild(moreBtn);

                const extra = vs.extra[anteNum] || 0;
                if (extra > 0) {
                    const extraNote = document.createElement('span');
                    extraNote.className = 'modifier';
                    extraNote.textContent = '+' + extra + ' extra';
                    voucherControls.appendChild(extraNote);

                    const resetBtn = document.createElement('button');
                    resetBtn.className = 'smallButton';
                    resetBtn.textContent = 'Reset';
                    resetBtn.addEventListener('click', () => vs.reset(anteNum));
                    voucherControls.appendChild(resetBtn);
                }

                voucherElement.appendChild(voucherControls);
            }
            queueInfo.appendChild(voucherElement);

            const bossElement = document.createElement('div');
            bossElement.innerHTML = '<b><u>Boss</u></b>';
            bossElement.style = "font-size: 16px";

            if (boss) {
                const bossContainer = document.createElement('div');
                bossContainer.className = 'bossContainer';

                bossContainer.appendChild(makeBossSprite(boss));

                const bossNameElement = document.createElement('div');
                bossNameElement.textContent = boss;
                bossNameElement.classList.add('bossName');
                bossContainer.appendChild(bossNameElement);
                attachResampleBadge(bossContainer, anteNum + ':boss', boss, 'boss', 'Ante ' + anteNum + ' boss');

                bossElement.appendChild(bossContainer);
            }

            queueInfo.appendChild(bossElement);

            const tagsElement = document.createElement('div');
            tagsElement.innerHTML = '<b><u>Tags</u></b>';
            tagsElement.style = "font-size: 16px";

            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tagsContainer';

            tags.forEach((tag, idx) => {
                const tagContainer = document.createElement('div');
                tagContainer.className = 'tagContainer';
                attachSeenToggle(tagContainer, anteNum + ':tag:' + idx);

                tagContainer.appendChild(makeTagSprite(tag));

                const tagNameElement = document.createElement('div');
                tagNameElement.textContent = tag;
                tagNameElement.classList.add('tagName');
                tagContainer.appendChild(tagNameElement);
                attachResampleBadge(tagContainer, anteNum + ':tag:' + idx, tag, 'tag', 'Ante ' + anteNum + ' tag ' + (idx + 1));

                tagsContainer.appendChild(tagContainer);
            });

            tagsElement.appendChild(tagsContainer);

            // Reveal tags beyond the game's default two, one at a time
            const ts = window.tagState;
            if (ts) {
                const tagControls = document.createElement('div');
                tagControls.className = 'packControls';

                const moreBtn = document.createElement('button');
                moreBtn.className = 'smallButton';
                moreBtn.textContent = 'Reveal another tag';
                moreBtn.addEventListener('click', () => ts.more(anteNum));
                tagControls.appendChild(moreBtn);

                const extra = ts.extra[anteNum] || 0;
                if (extra > 0) {
                    const extraNote = document.createElement('span');
                    extraNote.className = 'modifier';
                    extraNote.textContent = '+' + extra + ' extra';
                    tagControls.appendChild(extraNote);

                    const resetBtn = document.createElement('button');
                    resetBtn.className = 'smallButton';
                    resetBtn.textContent = 'Reset';
                    resetBtn.addEventListener('click', () => ts.reset(anteNum));
                    tagControls.appendChild(resetBtn);
                }

                tagsElement.appendChild(tagControls);
            }

            queueInfo.appendChild(tagsElement);

            if (sixthSense.length > 0) {
                const sixthElement = document.createElement('div');
                sixthElement.innerHTML = '<b><u>Sixth Sense</u></b>';
                sixthElement.style = "font-size: 16px";

                const sixthCardsContainer = document.createElement('div');
                sixthCardsContainer.className = 'tagsContainer';

                sixthSense.forEach((cardName, idx) => {
                    const sixthContainer = document.createElement('div');
                    sixthContainer.className = 'sixthContainer';
                    attachSeenToggle(sixthContainer, anteNum + ':sixth:' + idx);
                    attachOwnToggle(sixthContainer, cardName, anteNum, os && os.posForRound(anteNum, (idx % 3) + 1));

                    sixthContainer.appendChild(determineItemType(cardName) !== 'unknown'
                        ? makeCardSprite(cardName, 'tarot', [], [])
                        : spriteStack(71, 95));

                    const nameElement = document.createElement('div');
                    nameElement.textContent = cardName;
                    nameElement.classList.add('sixthName');
                    sixthContainer.appendChild(nameElement);

                    // Sixth Sense fires at most once per round (first hand a lone 6), but the
                    // RNG stream only advances on a trigger, so label by trigger, not round.
                    const roundElement = document.createElement('div');
                    roundElement.textContent = 'Trigger ' + (idx + 1);
                    if (idx % 3 === 0 && idx > 0) sixthContainer.classList.add('sixthSetStart');
                    roundElement.classList.add('modifier');
                    sixthContainer.appendChild(roundElement);
                    attachResampleBadge(sixthContainer, anteNum + ':sixth:' + idx, cardName, 'card', 'Ante ' + anteNum + ' Sixth Sense, trigger ' + (idx + 1));

                    sixthCardsContainer.appendChild(sixthContainer);
                });

                sixthElement.appendChild(sixthCardsContainer);

                // Reveal another ante's worth (3) of Sixth Sense rolls
                const ss = window.sixthState;
                if (ss) {
                    const sixthControls = document.createElement('div');
                    sixthControls.className = 'packControls';

                    const moreBtn = document.createElement('button');
                    moreBtn.className = 'smallButton';
                    moreBtn.textContent = 'Reveal 3 more';
                    moreBtn.addEventListener('click', () => ss.more(anteNum));
                    sixthControls.appendChild(moreBtn);

                    const extra = ss.extra[anteNum] || 0;
                    if (extra > 0) {
                        const extraNote = document.createElement('span');
                        extraNote.className = 'modifier';
                        extraNote.textContent = '+' + (extra * 3) + ' extra';
                        sixthControls.appendChild(extraNote);

                        const resetBtn = document.createElement('button');
                        resetBtn.className = 'smallButton';
                        resetBtn.textContent = 'Reset';
                        resetBtn.addEventListener('click', () => ss.reset(anteNum));
                        sixthControls.appendChild(resetBtn);
                    }

                    sixthElement.appendChild(sixthControls);
                }

                queueInfo.appendChild(sixthElement);
            }

            // Perkeo: the held consumable copied (as a Negative) at the end of each shop of
            // this ante. Only present when Perkeo and at least one consumable are held.
            // Clicking a copy means Perkeo fired again in that shop (Blueprint/Brainstorm):
            // the copy joins your slots and the next pick is rolled from the bigger pool.
            // Extra triggers are labelled "Trigger 2", "Trigger 3", ... under the card.
            if (perkeo.length > 0) {
                const os2 = window.ownedState;
                const perkeoElement = document.createElement('div');
                perkeoElement.innerHTML = '<b><u>Perkeo</u></b>';
                perkeoElement.style = "font-size: 16px";
                perkeoElement.title = 'Copy created at the end of each shop, based on the consumables held this ante. Click a copy if Perkeo fired again in that shop.';

                const perkeoCards = document.createElement('div');
                perkeoCards.className = 'tagsContainer';
                perkeo.forEach((p, idx) => {
                    const c = document.createElement('div');
                    c.className = 'sixthContainer perkeoCopy';
                    attachSeenToggle(c, anteNum + ':perkeo:' + p.shop + '/' + p.trigger);
                    c.appendChild(determineItemType(p.card) !== 'unknown'
                        ? makeCardSprite(p.card, 'tarot', ['Negative'], [])
                        : spriteStack(71, 95));
                    const nameEl = document.createElement('div');
                    nameEl.textContent = 'Negative ' + p.card;
                    nameEl.classList.add('sixthName');
                    c.appendChild(nameEl);
                    const shopEl = document.createElement('div');
                    shopEl.textContent = 'Shop ' + p.shop;
                    shopEl.classList.add('modifier');
                    c.appendChild(shopEl);
                    if (p.trigger > 1) {
                        const trigEl = document.createElement('div');
                        trigEl.textContent = 'Trigger ' + p.trigger;
                        trigEl.classList.add('modifier', 'perkeoTrigger');
                        c.appendChild(trigEl);
                    }
                    // Visual break at the start of each shop's group, and between replayed sets
                    if (idx > 0 && perkeo[idx - 1].shop !== p.shop) c.classList.add('perkeoShopStart');
                    if (p.trigger === 1 && (p.shop - 1) % 3 === 0 && p.shop > 1) c.classList.add('sixthSetStart');
                    if (os2) {
                        const isLastInShop = idx === perkeo.length - 1 || perkeo[idx + 1].shop !== p.shop;
                        c.classList.add('clickable');
                        c.title = 'Click if Perkeo fired again in shop ' + p.shop + ': this copy joins your slots and the next pick is rolled';
                        // Only the newest copy in a shop is the one to click: it is what Perkeo
                        // would hand you if it fired again, and clicking records that copy as held.
                        c.addEventListener('click', (e) => {
                            if (e.target.closest('button')) return;
                            if (!isLastInShop) return;
                            os2.perkeoAgain(p.card, anteNum, p.shop);
                        });
                        if (!isLastInShop) { c.classList.remove('clickable'); c.title = 'Held copy from shop ' + p.shop + ' (in your Owned Cards)'; c.classList.add('perkeoHeld'); }
                        if (isLastInShop) {
                            const keptRec = os2.items.find(o => o.perkeo && o.kept && o.from === anteNum && o.shop === p.shop);
                            const btnRow = document.createElement('div');
                            btnRow.className = 'perkeoBtns';
                            if (keptRec) {
                                c.classList.add('perkeoHeld');
                                c.title = 'Kept copy (in your Owned Cards). Click if Perkeo fired again after it.';
                                const unkeep = document.createElement('button');
                                unkeep.className = 'smallButton perkeoUndo';
                                unkeep.textContent = 'Unkeep';
                                unkeep.title = 'This copy was used or lost before the next shop';
                                unkeep.addEventListener('click', (e) => { e.stopPropagation(); os2.perkeoUnkeep(anteNum, p.shop); });
                                btnRow.appendChild(unkeep);
                            } else {
                                const keep = document.createElement('button');
                                keep.className = 'smallButton perkeoUndo';
                                keep.textContent = 'Keep';
                                keep.title = 'Hold this copy into later shops without Perkeo firing again';
                                keep.addEventListener('click', (e) => { e.stopPropagation(); os2.perkeoKeep(p.card, anteNum, p.shop); });
                                btnRow.appendChild(keep);
                            }
                            if (p.trigger > 1) {
                                const undo = document.createElement('button');
                                undo.className = 'smallButton perkeoUndo';
                                undo.textContent = 'Undo';
                                undo.title = 'Remove this extra trigger';
                                undo.addEventListener('click', (e) => { e.stopPropagation(); os2.perkeoFewer(anteNum, p.shop); });
                                btnRow.appendChild(undo);
                            }
                            c.appendChild(btnRow);
                        }
                    }
                    perkeoCards.appendChild(c);
                });
                perkeoElement.appendChild(perkeoCards);
                queueInfo.appendChild(perkeoElement);
            }

            queueContainer.appendChild(queueInfo);

            // Per-ante voucher ownership panel. Owned = bought in this ante or earlier.
            if (vs) {
                const pairs = vs.pairs;
                const ownedCount = pairs.flat().filter(isOwnedAt).length;

                createCollapsible(queueContainer, title + ':vouchers', 'Vouchers (owned ' + ownedCount + ')', (body) => {
                    body.className = 'voucherPanel';

                    const makeSection = (heading) => {
                        const section = document.createElement('div');
                        section.className = 'voucherSection';
                        const h = document.createElement('div');
                        h.className = 'voucherSectionTitle';
                        h.textContent = heading;
                        section.appendChild(h);
                        const grid = document.createElement('div');
                        grid.className = 'voucherGrid';
                        section.appendChild(grid);
                        body.appendChild(section);
                        return grid;
                    };
                    const ownedGrid = makeSection('Owned');
                    const unownedGrid = makeSection('Unowned');

                    pairs.forEach(([t1, t2]) => {
                        [t1, t2].forEach((name, tier) => {
                            const bought = vs.purchases[name];
                            const fromDeck = deckVouchers.includes(name);

                            const tile = makeVoucherTile(name);
                            const note = document.createElement('div');
                            note.className = 'modifier';

                            if (fromDeck) {
                                tile.classList.add('owned');
                                note.textContent = 'From deck';
                                ownedGrid.appendChild(tile);
                            } else if (isOwnedAt(name)) {
                                tile.classList.add('owned', 'clickable');
                                note.textContent = bought === anteNum ? 'Bought this ante' : 'Bought ante ' + bought;
                                tile.title = 'Click to mark as not bought';
                                tile.addEventListener('click', () => vs.unbuy(name));
                                ownedGrid.appendChild(tile);
                            } else {
                                const prereqOk = tier === 0 || isOwnedAt(t1);
                                if (prereqOk) {
                                    tile.classList.add('clickable');
                                    note.textContent = 'Click to buy';
                                    tile.title = 'Click to mark as bought in this ante';
                                    tile.addEventListener('click', () => vs.buy(name, anteNum));
                                } else {
                                    tile.classList.add('unavailable');
                                    note.textContent = 'Needs ' + t1;
                                }
                                unownedGrid.appendChild(tile);
                            }
                            tile.appendChild(note);
                        });
                    });

                    if (ownedGrid.children.length === 0) {
                        const none = document.createElement('div');
                        none.className = 'modifier';
                        none.textContent = 'None';
                        ownedGrid.appendChild(none);
                    }
                });
            }

            // Owned Jokers / consumables, collapsed by default. Held cards are locked out of
            // every queue from the ante you get them until the ante you let them go.
            if (os) {
                const heldHere = os.items.filter(o => os.heldAt(o, anteNum));
                createCollapsible(queueContainer, title + ':owned', 'Owned Cards (' + heldHere.length + (os.showman ? ', Showman' : '') + ')', (body) => {
                    body.className = 'ownedPanel';

                    const controls = document.createElement('div');
                    controls.className = 'deckControls';
                    const nameInput = makeNameInput('Joker / consumable name');
                    remember(nameInput, 'owned:name');
                    const addBtn = document.createElement('button');
                    addBtn.className = 'smallButton';
                    addBtn.textContent = 'Add (this ante)';
                    addBtn.addEventListener('click', () => {
                        const name = nameInput.value.trim();
                        if (determineItemType(name) === 'unknown') { nameInput.classList.add('badName'); return; }
                        nameInput.classList.remove('badName');
                        os.add(name, anteNum, parseInt(addPosSel.value, 10));
                    });
                    nameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addBtn.click(); });
                    const addPosSel = document.createElement('select');
                    addPosSel.title = 'Where in this ante you got it (decides which shops\' Perkeo pools include it)';
                    posOptions(anteNum).forEach(o => { const opt = document.createElement('option'); opt.value = o.pos; opt.textContent = o.label; addPosSel.appendChild(opt); });
                    remember(addPosSel, 'owned:pos:' + anteNum);
                    controls.appendChild(nameInput);
                    controls.appendChild(addPosSel);
                    controls.appendChild(addBtn);

                    const showmanLabel = document.createElement('label');
                    showmanLabel.className = 'ownedShowman';
                    const showmanBox = document.createElement('input');
                    showmanBox.type = 'checkbox';
                    showmanBox.checked = os.showman;
                    showmanBox.title = 'Showman: held cards can appear again, so nothing rerolls';
                    showmanBox.addEventListener('change', () => os.setShowman(showmanBox.checked));
                    showmanLabel.appendChild(showmanBox);
                    showmanLabel.appendChild(document.createTextNode(' Showman'));
                    controls.appendChild(showmanLabel);

                    if (os.items.length > 0) {
                        const clearBtn = document.createElement('button');
                        clearBtn.className = 'smallButton';
                        clearBtn.textContent = 'Clear all owned';
                        clearBtn.addEventListener('click', () => { if (confirm('Forget every owned card for this seed?')) os.clear(); });
                        controls.appendChild(clearBtn);
                    }
                    body.appendChild(controls);

                    const note = document.createElement('div');
                    note.className = 'modifier deckNote';
                    note.textContent = 'Click a Joker or consumable in any queue to mark it acquired this ante. Held cards leave every pool, and any draw that would have produced one rerolls (the game\'s _resample keys), so later queue entries can shift.';
                    body.appendChild(note);

                    // Jokers gated on an enhancement being in the deck. Not profile unlocks:
                    // they are out of the pool until the deck holds a card with that
                    // enhancement, and they stay in once it has, even if the card goes.
                    if (os.enhancementJokers) {
                        const enhRow = document.createElement('div');
                        enhRow.className = 'enhRow';
                        const enhLabel = document.createElement('span');
                        enhLabel.className = 'jumpLabel';
                        enhLabel.textContent = 'In the pool:';
                        enhRow.appendChild(enhLabel);
                        os.enhancementJokers.forEach(({ joker, enhancement }) => {
                            const on = !!os.enhancementOn[joker];
                            const btn = document.createElement('button');
                            btn.className = 'smallButton enhToggle' + (on ? ' on' : '');
                            btn.textContent = joker;
                            btn.title = (on ? 'In every pool. Click to take it back out.' : 'Out of every pool. Click to put it in.')
                                + ' It switches itself on the moment a ' + enhancement + ' card is added to the tracked deck, and stays on after that card goes.';
                            btn.addEventListener('click', () => os.setEnhancementJoker(joker, !on));
                            enhRow.appendChild(btn);
                        });
                        const enhNote = document.createElement('div');
                        enhNote.className = 'modifier deckNote';
                        enhNote.textContent = 'These five need their enhancement in your deck before the game will offer them. Adding an enhanced card in Deck & Draw Order turns the matching one on by itself.';
                        enhRow.appendChild(enhNote);
                        body.appendChild(enhRow);
                    }

                    // Editions held, and every card that is NOT Negative. With hundreds of
                    // Negative Jokers in the row a plain one is easy to lose; this names them
                    // and gives the slot each sits in, counting in acquisition order.
                    const allHeld = os.items.filter(o => os.heldAt(o, anteNum));
                    if (allHeld.length > 0) {
                        const edRow = document.createElement('div');
                        edRow.className = 'editionRow';
                        const counts = new Map();
                        allHeld.forEach(o => {
                            const ed = o.edition || (o.negative ? 'Negative' : 'No edition');
                            counts.set(ed, (counts.get(ed) || 0) + 1);
                        });
                        const summary = document.createElement('span');
                        summary.className = 'jumpLabel';
                        summary.textContent = 'Editions: ' + [...counts.entries()].map(([k, v]) => k + ' \u00D7' + v).join(' \u00B7 ');
                        edRow.appendChild(summary);

                        const plain = allHeld.map((o, i) => ({ o: o, slot: i + 1 }))
                            .filter(x => !(x.o.edition === 'Negative' || x.o.negative));
                        const list = document.createElement('div');
                        list.className = 'modifier editionList';
                        if (plain.length === 0) {
                            list.textContent = 'Every held card is Negative.';
                        } else {
                            list.innerHTML = 'Not Negative (' + plain.length + '), by slot: '
                                + plain.map(x => '<b>#' + x.slot + '</b> ' + x.o.name
                                    + (x.o.edition ? ' (' + x.o.edition + ')' : '')).join(', ');
                        }
                        edRow.appendChild(list);
                        body.appendChild(edRow);
                    }

                    // One tile per distinct card, with a copy count. Actions apply to one copy
                    // at a time: the most recently acquired copy that is still open.
                    const grid = document.createElement('div');
                    grid.className = 'voucherGrid';
                    if (heldHere.length === 0) {
                        const none = document.createElement('div');
                        none.className = 'modifier';
                        none.textContent = 'Nothing held this ante';
                        grid.appendChild(none);
                    }
                    const byName = new Map();
                    heldHere.forEach(o => { if (!byName.has(o.name)) byName.set(o.name, []); byName.get(o.name).push(o); });
                    byName.forEach((copies, name) => {
                        const isOpen = o => o.to === null || o.to === undefined;
                        const open = copies.filter(isOpen), closing = copies.filter(o => !isOpen(o));
                        const tile = document.createElement('div');
                        tile.className = 'voucherTile owned ownedTile';
                        tile.appendChild(makeCardSprite(name, determineItemType(name), [], []));
                        if (copies.length > 1) {
                            const badge = document.createElement('div');
                            badge.className = 'ownedCount';
                            badge.textContent = 'x' + copies.length;
                            tile.appendChild(badge);
                        }
                        const nm = document.createElement('div');
                        nm.className = 'voucherName';
                        nm.textContent = name;
                        tile.appendChild(nm);
                        const since = document.createElement('div');
                        since.className = 'modifier';
                        const earliest = Math.min(...copies.map(o => o.from));
                        const perkeoCopies = copies.filter(o => o.perkeo).length;
                        since.textContent = (earliest === anteNum ? 'Got this ante' : 'Since ante ' + earliest)
                            + (perkeoCopies > 0 ? ', ' + perkeoCopies + ' Negative from Perkeo' : '')
                            + (closing.length > 0 ? ', ' + (copies.length > 1 ? closing.length + ' gone' : 'gone') + ' after this ante' : '')
                            + (closing.some(o => o.extinct) ? ' \u2014 extinct' : '');
                        tile.appendChild(since);
                        const row = document.createElement('div');
                        row.className = 'ownedActions';
                        const more = document.createElement('button');
                        more.className = 'smallButton';
                        more.textContent = '+1 copy';
                        more.addEventListener('click', () => os.add(name, anteNum, (copies[copies.length - 1].pos || 1)));
                        row.appendChild(more);
                        // Copies acquired this ante: where in the ante each arrived
                        copies.filter(o => o.from === anteNum && !o.perkeo).forEach(o => {
                            const sel = document.createElement('select');
                            sel.className = 'ownedPosSel';
                            sel.title = 'Where in this ante this copy arrived';
                            posOptions(anteNum).forEach(x => { const opt = document.createElement('option'); opt.value = x.pos; opt.textContent = x.label; sel.appendChild(opt); });
                            sel.value = String(o.pos || 1);
                            sel.addEventListener('change', () => os.setPos(o.id, parseInt(sel.value, 10)));
                            row.appendChild(sel);
                        });
                        if (open.length > 0) {
                            const rel = document.createElement('button');
                            rel.className = 'smallButton';
                            rel.textContent = copies.length > 1 ? 'Lose one this ante' : 'Lose this ante';
                            rel.title = 'Sold, used, or destroyed during this ante: back in the pools from the next ante';
                            rel.addEventListener('click', () => os.release(open[open.length - 1].id, anteNum));
                            row.appendChild(rel);
                        }
                        // An extinct copy is only reversible through "Undo extinct": putting it
                        // back in your Jokers while the species stays locked out makes no sense.
                        const closingKeepable = closing.filter(o => !o.extinct);
                        if (closingKeepable.length > 0) {
                            const keep = document.createElement('button');
                            keep.className = 'smallButton';
                            keep.textContent = copies.length > 1 ? 'Keep one' : 'Still held';
                            keep.addEventListener('click', () => os.unrelease(closingKeepable[closingKeepable.length - 1].id));
                            row.appendChild(keep);
                        }
                        // Gros Michel and Cavendish can pop instead of being sold: gone from your
                        // Jokers and out of every pool for the rest of the run.
                        if (os && (os.extinctable || []).indexOf(name) >= 0) {
                            const ext = document.createElement('button');
                            ext.className = 'smallButton';
                            const isExtinct = (os.extinct || {})[name] !== undefined;
                            ext.textContent = isExtinct ? 'Undo extinct' : 'Extinct';
                            ext.title = isExtinct
                                ? 'Put it back in your Jokers and back in the pools'
                                : 'Went extinct this ante: every copy goes, and it never shows up in a shop or pack again (Showman does not bring it back)';
                            ext.addEventListener('click', () => isExtinct ? os.unextinguish(name) : os.extinguish(name, anteNum));
                            row.appendChild(ext);
                        }
                        const del = document.createElement('button');
                        del.className = 'smallButton';
                        del.textContent = copies.length > 1 ? 'Undo one' : 'Undo';
                        del.title = 'Never had it: remove the record entirely';
                        del.addEventListener('click', () => os.remove(copies[copies.length - 1].id));
                        row.appendChild(del);
                        tile.appendChild(row);
                        grid.appendChild(tile);
                    });
                    body.appendChild(grid);

                    // Extinct Jokers are gone from the grid from the next ante on, so list them
                    // here in every ante: it is the only place the record can be undone.
                    const extinctNames = os ? Object.keys(os.extinct || {}) : [];
                    if (extinctNames.length > 0) {
                        const extinctRow = document.createElement('div');
                        extinctRow.className = 'packControls';
                        const extinctLabel = document.createElement('span');
                        extinctLabel.className = 'modifier';
                        extinctLabel.textContent = 'Extinct: ' + extinctNames.map(n => n + ' (ante ' + os.extinct[n] + ')').join(', ')
                            + ' \u2014 out of every shop and pack from then on.';
                        extinctRow.appendChild(extinctLabel);
                        extinctNames.forEach(n => {
                            const undo = document.createElement('button');
                            undo.className = 'smallButton';
                            undo.textContent = 'Undo ' + n;
                            undo.addEventListener('click', () => os.unextinguish(n));
                            extinctRow.appendChild(undo);
                        });
                        body.appendChild(extinctRow);
                    }

                    // Effects that hit one of your Jokers at random, and what they would hit.
                    const fx = document.createElement('div');
                    fx.className = 'effectPanel';
                    const fxTitle = document.createElement('div');
                    fxTitle.className = 'voucherSectionTitle';
                    fxTitle.textContent = 'Random Joker effects';
                    fx.appendChild(fxTitle);
                    renderEffectPlanner(fx, os, anteNum);
                    body.appendChild(fx);
                }, 'generatorGroupTitle');
            }

            // Deck & draw order, collapsed by default. Each round lists the full shuffled
            // deck in draw order with the opening hand marked; clicking a card records it as
            // destroyed during that round (gone from the next round on).
            const ds = window.deckState;
            const anteRounds = ds && ds.rounds[anteNum];
            if (anteRounds && anteRounds.length > 0) {
                const deckLabel = 'Deck & Draw Order (' + anteRounds[0].cards.length + ' cards, hand ' + anteRounds[0].hand + ')';
                createCollapsible(queueContainer, title + ':deck', deckLabel, (body) => {
                    body.className = 'deckPanel';

                    // Controls: add a card, hand-size adjustment, extra rounds, clear.
                    const controls = document.createElement('div');
                    controls.className = 'deckControls';
                    const mkSelect = (values, labelFn) => {
                        const sel = document.createElement('select');
                        values.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = labelFn ? labelFn(v) : v; sel.appendChild(o); });
                        return sel;
                    };
                    const sealSel = remember(mkSelect(CARD_SEALS, v => v === '' ? 'No seal' : v), 'deck:seal');
                    const edSel = remember(mkSelect(CARD_EDITIONS, v => v === '' ? 'No edition' : v), 'deck:ed');
                    const enhSel = remember(mkSelect(CARD_ENHANCEMENTS, v => v === '' ? 'No enhancement' : v), 'deck:enh');
                    const rankSel = remember(mkSelect(CARD_RANKS), 'deck:rank');
                    const suitSel = remember(mkSelect(CARD_SUITS), 'deck:suit');
                    const fromOpts = [];
                    anteRounds.forEach((rd, i) => { const r = rd.round || (i + 1); fromOpts.push({ v: anteNum + ':' + r, t: 'From round ' + r }); });
                    fromOpts.push({ v: (anteNum + 1) + ':1', t: 'From ante ' + (anteNum + 1) });
                    const fromSel = document.createElement('select');
                    fromOpts.forEach(o => { const opt = document.createElement('option'); opt.value = o.v; opt.textContent = o.t; fromSel.appendChild(opt); });
                    fromSel.value = fromOpts.length > 1 ? fromOpts[Math.min(1, fromOpts.length - 2)].v : fromOpts[0].v;
                    remember(fromSel, 'deck:from:' + anteNum);
                    const addBtn = document.createElement('button');
                    addBtn.className = 'smallButton';
                    addBtn.textContent = 'Add card';
                    addBtn.addEventListener('click', () => {
                        // Same token order as the pack output: seal, edition, enhancement, rank of suit
                        const name = (sealSel.value ? sealSel.value + ' ' : '') + (edSel.value ? edSel.value + ' ' : '')
                            + (enhSel.value ? enhSel.value + ' ' : '') + rankSel.value + ' of ' + suitSel.value;
                        const [a, r] = fromSel.value.split(':').map(x => parseInt(x, 10));
                        ds.add(name, a, r);
                    });
                    [sealSel, edSel, enhSel, rankSel, suitSel, fromSel, addBtn].forEach(el => controls.appendChild(el));

                    const handLabel = document.createElement('label');
                    handLabel.textContent = 'Hand size adjust:';
                    handLabel.title = 'Manual +/- for Jokers like Juggler, Stuntman, Turtle Bean';
                    const handInput = document.createElement('input');
                    handInput.type = 'number'; handInput.min = -7; handInput.max = 20; handInput.value = ds.handAdjust;
                    handInput.className = 'deckHandInput';
                    handInput.addEventListener('change', () => ds.setHandAdjust(handInput.value));
                    handLabel.appendChild(handInput);
                    controls.appendChild(handLabel);

                    const moreBtn = document.createElement('button');
                    moreBtn.className = 'smallButton';
                    moreBtn.textContent = 'Reveal another round';
                    moreBtn.title = 'For replaying this ante after Hieroglyph / Petroglyph';
                    moreBtn.addEventListener('click', () => ds.moreRounds(anteNum));
                    controls.appendChild(moreBtn);
                    if ((ds.extra[anteNum] || 0) > 0) {
                        const resetBtn = document.createElement('button');
                        resetBtn.className = 'smallButton';
                        resetBtn.textContent = 'Reset rounds';
                        resetBtn.addEventListener('click', () => ds.resetRounds(anteNum));
                        controls.appendChild(resetBtn);
                    }
                    if (ds.ops.length > 0) {
                        const clearBtn = document.createElement('button');
                        clearBtn.className = 'smallButton';
                        clearBtn.textContent = 'Clear all deck changes';
                        clearBtn.addEventListener('click', () => { if (confirm('Remove every recorded deck change for this seed?')) ds.clear(); });
                        controls.appendChild(clearBtn);
                    }
                    body.appendChild(controls);

                    const note = document.createElement('div');
                    note.className = 'modifier deckNote';
                    note.textContent = 'Rounds count blinds actually played: a skipped blind does not shuffle. Plays and discards never change the order; only adding or removing cards does. Click a card if it is destroyed during that round.';
                    body.appendChild(note);

                    // Changes that take effect in this ante, each with an undo.
                    const anteOpsAll = ds.ops.filter(op => op.ante === anteNum);
                    const saveOps = anteOpsAll.filter(op => op.save), anteOps = anteOpsAll.filter(op => !op.save);
                    if (anteOpsAll.length > 0) {
                        const opsList = document.createElement('div');
                        opsList.className = 'deckOps';
                        if (saveOps.length > 0) {
                            const row = document.createElement('div');
                            row.textContent = 'Deck loaded from save: ' + saveOps.filter(o => o.type === 'add').length + ' cards from round ' + saveOps[0].round + ' (replaces the starting deck)';
                            opsList.appendChild(row);
                        }
                        anteOps.forEach(op => {
                            const row = document.createElement('div');
                            const what = op.type === 'add' ? 'Added ' + op.name
                                : op.type === 'modify' ? 'Changed ' + op.was + ' to ' + op.name
                                : 'Removed ' + op.name;
                            row.textContent = what + (op.inShop ? ' in the shop before round ' : ' from round ') + op.round + ' ';
                            const undo = document.createElement('button');
                            undo.className = 'smallButton';
                            undo.textContent = 'Undo';
                            undo.addEventListener('click', () => ds.undo(op.seq));
                            row.appendChild(undo);
                            opsList.appendChild(row);
                        });
                        body.appendChild(opsList);
                    }

                    anteRounds.forEach((rd, ri) => {
                        const r = rd.round || (ri + 1);
                        const roundLabel = 'Round ' + r + (rd.blind ? ' / ' + rd.blind + ' Blind' : '') + ' (' + rd.cards.length + ' cards, hand ' + rd.hand + ')';
                        createCollapsible(body, title + ':deck:' + r, roundLabel, (rb) => {
                            const scroll = document.createElement('div');
                            scroll.className = 'scrollable no-select';
                            // A card destroyed during round r is gone from the next round on.
                            const nextA = ri < anteRounds.length - 1 ? anteNum : anteNum + 1;
                            const nextR = ri < anteRounds.length - 1 ? (anteRounds[ri + 1].round || (ri + 2)) : 1;
                            const deckTiles = [];
                            rd.cards.forEach((card, idx) => {
                                const tile = makeDeckCardTile(card, idx + 1, idx < rd.hand);
                                attachDeckCardMenu(tile, card, r, nextA, nextR);
                                scroll.appendChild(tile);
                                deckTiles.push(tile);
                            });
                            appendJumpBar(rb, scroll, deckTiles, { min: 8 });
                            appendHandFinder(rb, scroll, deckTiles, rd.cards, rd.hand);
                            rb.appendChild(scroll);
                            attachDragScroll(scroll);
                        }, null, true);
                    });
                }, 'generatorGroupTitle');
            }

            // Shop queue, collapsed by default. Dividers mark each shop "frame" of
            // shopSlots cards, so you can read the queue visit by visit.
            const shopFrames = Math.ceil(queue.length / shopSlots);
            // Right-click a card to grey it out as seen. Shift+right-click (or the corner
            // button) marks it and everything to its left as seen and collapses that run.
            createCollapsible(queueContainer, title + ':shop', 'Shop Queue (' + shopFrames + ' frames, ' + shopSlots + ' cards per frame)', (body) => {
                const controls = document.createElement('div');
                controls.className = 'packControls seenControls';
                const collapseBtn = document.createElement('button');
                collapseBtn.className = 'smallButton';
                const clearBtn = document.createElement('button');
                clearBtn.className = 'smallButton';
                clearBtn.textContent = 'Clear seen (this ante)';
                const hint = document.createElement('span');
                hint.className = 'modifier';
                hint.textContent = 'Right-click a card to mark it seen. Shift+right-click marks it and everything left of it as seen and collapses them.';
                controls.appendChild(collapseBtn);
                controls.appendChild(clearBtn);
                controls.appendChild(hint);
                body.appendChild(controls);

                // Reroll planner, shown while the seen run is collapsed: how deep the first
                // unseen card sits and what it costs to reroll down to it this ante.
                appendHoldTest(body, anteNum, os);

                const plan = document.createElement('div');
                plan.className = 'rerollPlan';
                plan.hidden = true;
                const planHead = document.createElement('div');
                planHead.className = 'rerollPlanHead';
                const planTitle = document.createElement('span');
                planTitle.textContent = 'Reroll plan to the first unseen card';
                planHead.appendChild(planTitle);
                const shopsLabel = document.createElement('label');
                shopsLabel.className = 'rerollShopsLabel';
                shopsLabel.textContent = 'Shops left this ante:';
                shopsLabel.title = 'Each shop shows one frame for free; every frame after that costs a reroll.';
                const shopsInput = document.createElement('input');
                shopsInput.type = 'number';
                shopsInput.min = 1;
                shopsInput.max = 30;
                shopsInput.value = 3;
                shopsInput.className = 'rerollShopsInput';
                remember(shopsInput, 'rerollShops:' + anteNum);
                shopsLabel.appendChild(shopsInput);
                planHead.appendChild(shopsLabel);
                const planBody = document.createElement('div');
                planBody.className = 'rerollPlanBody';
                plan.appendChild(planHead);
                plan.appendChild(planBody);
                body.appendChild(plan);

                // Reroll n of a shop costs $5 + (n-1), less $2 per reroll voucher, floored at $1.
                const rerollVouchers = (isOwnedAt('Reroll Surplus') ? 1 : 0) + (isOwnedAt('Reroll Glut') ? 1 : 0);
                const rerollPrice = (n) => Math.max(1, 5 + n - 2 * rerollVouchers);
                const shopCost = (k) => { let c = 0; for (let i = 0; i < k; i++) c += rerollPrice(i); return c; };

                const renderPlan = (seenCount) => {
                    const shops = Math.max(1, Math.min(30, parseInt(shopsInput.value, 10) || 1));
                    const wholeFrames = Math.floor(seenCount / shopSlots);
                    const spare = seenCount % shopSlots;
                    // The first unseen card sits in the next frame along, 1-based.
                    const framesNeeded = wholeFrames + 1;
                    const rerolls = Math.max(0, framesNeeded - shops);
                    // Rerolls get dearer within a shop, so spreading them evenly is the cheapest split.
                    const base = Math.floor(rerolls / shops), extra = rerolls % shops;
                    const perShop = [];
                    for (let i = 0; i < shops; i++) perShop.push(base + (i < extra ? 1 : 0));
                    const total = perShop.reduce((sum, k) => sum + shopCost(k), 0);

                    planBody.innerHTML = '';
                    const line = (text, cls) => {
                        const d = document.createElement('div');
                        if (cls) d.className = cls;
                        d.textContent = text;
                        planBody.appendChild(d);
                        return d;
                    };
                    line(seenCount + ' card' + (seenCount === 1 ? '' : 's') + ' collapsed = ' + wholeFrames + ' full frame' + (wholeFrames === 1 ? '' : 's')
                        + (spare > 0 ? ' + ' + spare + ' card' + (spare === 1 ? '' : 's') : '')
                        + ' at ' + shopSlots + ' cards per frame.');
                    line('The first unseen card is in frame ' + framesNeeded + '.');
                    if (rerolls === 0) {
                        line(shops + ' shop' + (shops === 1 ? '' : 's') + ' show ' + shops + ' frame'
                            + (shops === 1 ? '' : 's') + ' for free, so no rerolls are needed.');
                        line('Total: $0', 'rerollPlanTotal');
                        return;
                    }
                    line(framesNeeded + ' frame' + (framesNeeded === 1 ? '' : 's') + ' \u2212 ' + shops
                        + ' free frame' + (shops === 1 ? '' : 's') + ' = ' + rerolls + ' reroll'
                        + (rerolls === 1 ? '' : 's') + ', spread as ' + perShop.join(' + ') + ' per shop.');
                    line('A shop\'s first reroll costs $' + rerollPrice(0) + ', +$1 for each one after it'
                        + (rerollVouchers > 0 ? ' (' + rerollVouchers + ' reroll voucher' + (rerollVouchers === 1 ? '' : 's') + ' owned)' : '') + '.');
                    line('Cost per shop: ' + perShop.map(k => '$' + shopCost(k)).join(' + ') + '.');
                    line('Total: $' + total + ' this ante', 'rerollPlanTotal');
                };

                const scrollable = document.createElement('div');
                scrollable.className = 'scrollable no-select';
                const stub = document.createElement('div');
                stub.className = 'seenStub clickable';
                stub.title = 'Show the seen cards';
                scrollable.appendChild(stub);

                const tiles = [];
                const shopKey = (i) => anteNum + ':shop:' + i;
                const refresh = () => {
                    let n = 0;
                    while (n < tiles.length && seenState.seen.has(shopKey(n))) n++;
                    const collapsed = n > 0 && seenState.shopCollapsed.has(anteNum);
                    tiles.forEach((t, i) => { t.hidden = collapsed && i < n; });
                    stub.hidden = !collapsed;
                    stub.textContent = n + ' seen \u25B8';
                    collapseBtn.textContent = (collapsed ? 'Show seen' : 'Collapse seen') + ' (' + n + ')';
                    collapseBtn.disabled = n === 0;
                    plan.hidden = !collapsed;
                    if (collapsed) renderPlan(n);
                };
                shopsInput.addEventListener('input', () => { if (!plan.hidden) refresh(); });
                const markUpTo = (idx) => {
                    for (let i = 0; i <= idx; i++) setSeen(tiles[i], shopKey(i), true);
                    seenState.shopCollapsed.add(anteNum);
                    saveSeenState();
                    refresh();
                };
                queue.forEach((item, idx) => {
                    const tile = createQueueItem(item);
                    tile.appendChild(makePosBadge(idx + 1, 'Card ' + (idx + 1) + ', frame ' + (Math.floor(idx / shopSlots) + 1)));
                    if (idx > 0 && idx % shopSlots === 0) tile.classList.add('frameStart');
                    if (currentShopCount && idx < currentShopCount) {
                        tile.classList.add('currentShop');
                        if (idx === 0) { const badge = document.createElement('div'); badge.className = 'modifier currentShopBadge'; badge.textContent = 'On screen now'; tile.appendChild(badge); }
                    }
                    attachSeenToggle(tile, shopKey(idx), (e) => { if (e.shiftKey) { markUpTo(idx); return true; } return false; }, refresh);
                    attachOwnToggle(tile, parseCardItem(item).cardName, anteNum);
                    const upTo = document.createElement('button');
                    upTo.className = 'seenUpTo';
                    upTo.textContent = '\u21E4';
                    upTo.title = 'Mark this card and everything left of it as seen and collapse them';
                    upTo.addEventListener('click', (e) => { e.stopPropagation(); markUpTo(idx); });
                    tile.appendChild(upTo);
                    attachResampleBadge(tile, shopKey(idx), parseCardItem(item).cardName, 'card', 'Ante ' + anteNum + ' shop, card ' + (idx + 1));
                    tiles.push(tile);
                    scrollable.appendChild(tile);
                });
                stub.addEventListener('click', () => { seenState.shopCollapsed.delete(anteNum); saveSeenState(); refresh(); });
                collapseBtn.addEventListener('click', () => {
                    if (seenState.shopCollapsed.has(anteNum)) seenState.shopCollapsed.delete(anteNum); else seenState.shopCollapsed.add(anteNum);
                    saveSeenState(); refresh();
                });
                clearBtn.addEventListener('click', () => {
                    [...seenState.seen].filter(k => k.startsWith(anteNum + ':')).forEach(k => seenState.seen.delete(k));
                    seenState.shopCollapsed.delete(anteNum);
                    queueContainer.querySelectorAll('.seenable.seen').forEach(t => t.classList.remove('seen'));
                    saveSeenState(); refresh();
                });
                // Jumping into a collapsed run of seen cards has to open it first.
                const revealSeen = () => {
                    if (!seenState.shopCollapsed.has(anteNum)) return;
                    seenState.shopCollapsed.delete(anteNum);
                    saveSeenState();
                    refresh();
                };
                appendJumpBar(body, scrollable, tiles, { frameSize: shopSlots, reveal: revealSeen });
                appendWindowFinder(body, anteNum, tiles, queue, scrollable);
                body.appendChild(scrollable);
                attachDragScroll(scrollable);

                // Roll further down this ante's shop stream. Nothing already listed changes;
                // the queue just runs on past frames x slots.
                const qs = window.shopQueueState;
                if (qs) {
                    const moreRow = document.createElement('div');
                    moreRow.className = 'packControls';
                    const countInput = document.createElement('input');
                    countInput.type = 'number'; countInput.min = 1; countInput.max = 2000;
                    countInput.value = 40; countInput.className = 'jumpInput';
                    countInput.title = 'How many more cards to roll';
                    remember(countInput, 'shopMore:' + anteNum);
                    const moreBtn = document.createElement('button');
                    moreBtn.className = 'smallButton';
                    moreBtn.textContent = 'Extend queue';
                    moreBtn.title = 'Roll this many more cards at the end of the queue';
                    moreBtn.addEventListener('click', () => qs.more(anteNum, countInput.value));
                    moreRow.appendChild(countInput);
                    moreRow.appendChild(moreBtn);
                    const extraNow = qs.extra[anteNum] || 0;
                    if (extraNow > 0) {
                        const note = document.createElement('span');
                        note.className = 'modifier';
                        note.textContent = '+' + extraNow + ' extra card' + (extraNow === 1 ? '' : 's');
                        moreRow.appendChild(note);
                        const resetBtn = document.createElement('button');
                        resetBtn.className = 'smallButton';
                        resetBtn.textContent = 'Reset';
                        resetBtn.addEventListener('click', () => qs.reset(anteNum));
                        moreRow.appendChild(resetBtn);
                    }
                    body.appendChild(moreRow);
                }
                refresh();
            });

            // Card generator rows, split into two collapsible groups: Joker Generation
            // (Judgement, Riff-Raff, The Soul, Wraith, tags) and Consumable Generation
            // (Cartomancer, 8 Ball / Purple Seal, Emperor, Vagabond, ...). Each source
            // inside a group is its own collapsible; tiles are only built on first expand.
            [
                { group: 'joker', heading: 'Joker Generation' },
                { group: 'consumable', heading: 'Consumable Generation' },
            ].forEach(({ group, heading }) => {
                const rows = generators.filter(g => g.group === group && g.cards.length > 0);
                if (rows.length === 0) return;
                // A Negative Joker anywhere in a row highlights that row and its group, so a
                // collapsed panel still tells you it is worth expanding.
                const hasNegative = cards => cards.some(c => parseCardItem(c).itemModifiers.includes('Negative'));
                const negativeRows = rows.filter(r => hasNegative(r.cards)).length;
                const groupLabel = heading + ' (' + rows.length + ')' + (negativeRows > 0 ? ' \u2605 Negative' : '');
                const groupBodyEl = createCollapsible(queueContainer, title + ':gen:' + group, groupLabel, (groupBody) => {
                    groupBody.className = 'generatorGroup';
                    rows.forEach(({ label, hint, cards }) => {
                        const negCount = cards.filter(c => parseCardItem(c).itemModifiers.includes('Negative')).length;
                        const rowLabel = label + ' (' + cards.length + ')' + (negCount > 0 ? ' \u2605 ' + negCount + ' Negative' : '');
                        const rowBody = createCollapsible(groupBody, title + ':' + label, rowLabel, (body) => {
                            const generatorScrollable = document.createElement('div');
                            generatorScrollable.className = 'scrollable no-select';
                            const genTiles = [];
                            cards.forEach((card, idx) => {
                                const genTile = createQueueItem((idx + 1) + ') ' + card);
                                genTile.appendChild(makePosBadge(idx + 1));
                                attachSeenToggle(genTile, anteNum + ':gen:' + label + ':' + idx);
                                attachOwnToggle(genTile, parseCardItem(card).cardName, anteNum);
                                attachResampleBadge(genTile, anteNum + ':gen:' + label + ':' + idx, parseCardItem(card).cardName, 'card', 'Ante ' + anteNum + ' ' + label + ' #' + (idx + 1));
                                generatorScrollable.appendChild(genTile);
                                genTiles.push(genTile);
                            });
                            appendJumpBar(body, generatorScrollable, genTiles, { min: 8 });
                            body.appendChild(generatorScrollable);
                            attachDragScroll(generatorScrollable);
                        });
                        if (hint) rowBody.previousSibling.title = hint;
                        if (negCount > 0) rowBody.previousSibling.classList.add('hasNegative');
                    });
                }, 'generatorGroupTitle');
                if (negativeRows > 0) groupBodyEl.previousSibling.classList.add('hasNegative');
            });

            if (packs.length > 0) {
                const packsTitle = document.createElement('div');
                packsTitle.className = 'queueTitle';
                packsTitle.textContent = '==Packs==';
                queueContainer.appendChild(packsTitle);

                const packsContainer = document.createElement('div');
                queueContainer.appendChild(packsContainer);

                packs.forEach((pack, pi) => {
                    const packItems = pack.split(' - ');
                    const packName = packItems[0];
                    const packCards = packItems[1] ? packItems[1].split(', ') : [];

                    const packItem = document.createElement('div');
                    packItem.className = 'packItem';

                    const packNameElement = document.createElement('div');
                    packNameElement.textContent = packName + ': ';
                    if (packCards.length === 1 && /^\(on screen now/.test(packCards[0])) {
                        packItem.classList.add('currentShop');
                        const note = document.createElement('div'); note.className = 'modifier currentShopBadge'; note.textContent = packCards[0].replace(/[()]/g, ''); packItem.appendChild(packNameElement); packItem.appendChild(note); packsContainer.appendChild(packItem); return;
                    }
                    packNameElement.classList.add('packName');
                    packItem.appendChild(packNameElement);

                    // Playing cards are the ones with a click-to-add chooser, and the only
                    // ones whose pick order matters.
                    let addableCards = 0;
                    packCards.forEach((cardName, ci) => {
                        const { cardName: parsedCardName, itemModifiers, itemStickers } = parseCardItem(cardName);
                        const itemType = determineItemType(parsedCardName);

                        const cardContainer = document.createElement('div');
                        attachSeenToggle(cardContainer, anteNum + ':pack:' + pi + ':' + ci);

                        if (itemType !== 'unknown') {
                            cardContainer.appendChild(makeCardSprite(parsedCardName, itemType, itemModifiers, itemStickers));
                            attachOwnToggle(cardContainer, parsedCardName, anteNum, Math.floor(pi / 2) + 1);

                            const itemText = document.createElement('div');
                            itemText.textContent = parsedCardName;
                            itemText.classList.add('cardName');
                            cardContainer.appendChild(itemText);

                            itemModifiers.forEach(mod => {
                                const modifierText = document.createElement('div');
                                modifierText.classList.add('modifier');
                                modifierText.textContent = mod;
                                cardContainer.appendChild(modifierText);
                            });

                            itemStickers.forEach(stick => {
                                const stickerText = document.createElement('div');
                                stickerText.classList.add('sticker');
                                stickerText.textContent = stick;
                                cardContainer.appendChild(stickerText);
                            });
                        } else {
                            const { rank, suit, modifiers, seal } = parseStandardCardName(cardName);
                            addableCards++;

                            cardContainer.appendChild(makeStandardCardSprite(rank, suit, modifiers, seal));
                            attachDeckAddChooser(cardContainer, cardName, anteNum, window.deckState && (window.deckState.packShops[anteNum] || [])[pi]);

                            const cardText = document.createElement('div');
                            cardText.textContent = getStandardCardName(cardName);
                            cardText.classList.add('standardCardName');
                            cardContainer.appendChild(cardText);

                            modifiers.forEach(modifier => {
                                const modifierText = document.createElement('div');
                                modifierText.textContent = modifier;
                                modifierText.classList.add('modifier');
                                modifierText.style.color = getModifierColor(modifier);
                                cardContainer.appendChild(modifierText);
                            });

                            if (seal) {
                                const sealText = document.createElement('div');
                                sealText.textContent = seal;
                                sealText.classList.add('seal');
                                sealText.style.color = getModifierColor(seal);
                                cardContainer.appendChild(sealText);
                            }
                        }

                        attachResampleBadge(cardContainer, anteNum + ':pack:' + pi + ':' + ci, itemType !== 'unknown' ? parsedCardName : getStandardCardName(cardName), 'card', 'Ante ' + anteNum + ' ' + packName + ', card ' + (ci + 1));
                        packItem.appendChild(cardContainer);
                    });

                    // A card's sort_id is stamped when the pack is created, so two cards taken
                    // from one pack sort in the pack's own order however you pick them. The
                    // tracker appends adds in click order, so clicking out of order shifts the
                    // draw order of every round after it.
                    const packHand = window.deckState && (window.deckState.packHands[anteNum] || {})[pi];
                    if (packHand) appendPackHand(packItem, title + ':packhand:' + pi, packHand);

                    if (addableCards > 1) {
                        const hint = document.createElement('div');
                        hint.className = 'packAddHint';
                        hint.textContent = 'Taking more than one? Click them left to right \u2014 new cards keep the pack\u2019s order, not the order you buy them.';
                        packItem.appendChild(hint);
                    }

                    packsContainer.appendChild(packItem);
                });

                // Reveal packs beyond the game's default count, one at a time
                const ps = window.packState;
                if (ps) {
                    const packControls = document.createElement('div');
                    packControls.className = 'packControls';

                    const moreBtn = document.createElement('button');
                    moreBtn.className = 'smallButton';
                    moreBtn.textContent = 'Reveal another pack';
                    moreBtn.addEventListener('click', () => ps.more(anteNum));
                    packControls.appendChild(moreBtn);

                    const extra = ps.extra[anteNum] || 0;
                    if (extra > 0) {
                        const extraNote = document.createElement('span');
                        extraNote.className = 'modifier';
                        extraNote.textContent = '+' + extra + ' extra';
                        packControls.appendChild(extraNote);

                        const resetBtn = document.createElement('button');
                        resetBtn.className = 'smallButton';
                        resetBtn.textContent = 'Reset';
                        resetBtn.addEventListener('click', () => ps.reset(anteNum));
                        packControls.appendChild(resetBtn);
                    }

                    queueContainer.appendChild(packControls);
                }
            }

            }, 'anteTitle');
            if (anteHasNegative) anteBody.previousSibling.classList.add('hasNegative');

            scrollingContainer.appendChild(anteBox);
        });

        // Add draggable scrolling functionality
        document.querySelectorAll('.scrollable').forEach(attachDragScroll);
        searchAndHighlight();
    }

    // Hover zones on either side of a scrollable row: resting the cursor on one scrolls
    // that way, faster the closer the cursor is to the outer edge. A zone dims when the
    // row cannot move further in its direction.
    function attachHoverScroll(scrollable) {
        if (!scrollable.parentNode || scrollable.parentNode.classList.contains('scrollWrap')) return;
        const wrap = document.createElement('div');
        wrap.className = 'scrollWrap';
        scrollable.parentNode.insertBefore(wrap, scrollable);
        const mkZone = (dir) => {
            const z = document.createElement('div');
            z.className = 'scrollZone scrollZone' + (dir < 0 ? 'Left' : 'Right');
            z.textContent = dir < 0 ? '\u25C2' : '\u25B8';
            z.title = 'Hover to scroll';
            let raf = null, speed = 0;
            const step = () => {
                scrollable.scrollLeft += dir * speed;
                updateZones();
                raf = requestAnimationFrame(step);
            };
            z.addEventListener('mouseenter', () => { if (!raf) raf = requestAnimationFrame(step); });
            z.addEventListener('mousemove', (e) => {
                const r = z.getBoundingClientRect();
                const t = dir < 0 ? (r.right - e.clientX) / r.width : (e.clientX - r.left) / r.width;
                speed = 4 + 16 * Math.max(0, Math.min(1, t));
            });
            z.addEventListener('mouseleave', () => { if (raf) cancelAnimationFrame(raf); raf = null; });
            z.addEventListener('click', () => { scrollable.scrollBy({ left: dir * scrollable.clientWidth * 0.8, behavior: 'smooth' }); });
            return z;
        };
        const left = mkZone(-1), right = mkZone(1);
        const updateZones = () => {
            const max = scrollable.scrollWidth - scrollable.clientWidth;
            left.classList.toggle('atEnd', scrollable.scrollLeft <= 0);
            right.classList.toggle('atEnd', scrollable.scrollLeft >= max - 1);
            wrap.classList.toggle('noOverflow', max <= 1);
        };
        wrap.appendChild(left);
        wrap.appendChild(scrollable);
        wrap.appendChild(right);
        scrollable.addEventListener('scroll', updateZones);
        if (window.ResizeObserver) new ResizeObserver(updateZones).observe(scrollable);
        requestAnimationFrame(updateZones);
    }

    // ---- "First X hand" search over a round's draw order ---------------------
    // Answers "how deep into this round before a Straight Flush exists?" by growing the
    // prefix of the draw order one card at a time and testing it, so the first prefix
    // that contains the hand is the earliest draw position it can be made at. Everything
    // drawn is assumed to still be reachable: you keep what the hand needs and throw the
    // rest, which is what the discard count reports on.
    const RANK_VALUE = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14 };

    function groupByRank(pool) {
        const byRank = new Map();
        pool.forEach(c => { const l = byRank.get(c.v) || []; l.push(c); byRank.set(c.v, l); });
        return [...byRank.values()];
    }
    function handOfAKind(pool, n) {
        const hit = groupByRank(pool).find(l => l.length >= n);
        return hit ? hit.slice(0, n) : null;
    }
    function handTwoPair(pool) {
        const pairs = groupByRank(pool).filter(l => l.length >= 2);
        return pairs.length >= 2 ? pairs[0].slice(0, 2).concat(pairs[1].slice(0, 2)) : null;
    }
    function handFullHouse(pool) {
        const groups = groupByRank(pool);
        const three = groups.find(l => l.length >= 3);
        if (!three) return null;
        const two = groups.find(l => l !== three && l.length >= 2);
        return two ? three.slice(0, 3).concat(two.slice(0, 2)) : null;
    }
    // Five consecutive ranks, with the Ace running both ends (A-2-3-4-5 and 10-J-Q-K-A).
    // Jokers that loosen this - Shortcut's gaps, Four Fingers' four-card straights - are
    // not modelled, so this is the straight the base game would score.
    function handStraight(pool) {
        const first = new Map();
        pool.forEach(c => { if (!first.has(c.v)) first.set(c.v, c); });
        const runs = [];
        for (let lo = 2; lo <= 10; lo++) runs.push([lo, lo + 1, lo + 2, lo + 3, lo + 4]);
        runs.push([14, 2, 3, 4, 5]);
        const hit = runs.find(run => run.every(v => first.has(v)));
        return hit ? hit.map(v => first.get(v)) : null;
    }
    // A Wild card counts as every suit, so it joins any suit's pool.
    function suitPool(pool, suit) { return pool.filter(c => c.wild || c.suit === suit); }
    function bySuit(pool, fn) {
        for (const suit of CARD_SUITS) {
            const hit = fn(suitPool(pool, suit));
            if (hit) return hit;
        }
        return null;
    }

    const POKER_HANDS = [
        { name: 'High Card',        find: (p) => p.length ? [p[0]] : null },
        { name: 'Pair',             find: (p) => handOfAKind(p, 2) },
        { name: 'Two Pair',         find: handTwoPair },
        { name: 'Three of a Kind',  find: (p) => handOfAKind(p, 3) },
        { name: 'Straight',         find: handStraight },
        { name: 'Flush',            find: (p) => bySuit(p, (q) => q.length >= 5 ? q.slice(0, 5) : null) },
        { name: 'Full House',       find: handFullHouse },
        { name: 'Four of a Kind',   find: (p) => handOfAKind(p, 4) },
        { name: 'Straight Flush',   find: (p) => bySuit(p, handStraight) },
        { name: 'Five of a Kind',   find: (p) => handOfAKind(p, 5) },
        { name: 'Flush House',      find: (p) => bySuit(p, handFullHouse) },
        { name: 'Flush Five',       find: (p) => bySuit(p, (q) => handOfAKind(q, 5)) },
    ];

    // `skip` is a set of card indices to leave out of the search - the cards an earlier
    // answer used, when you want the same hand out of different cards.
    function findFirstHand(cards, handName, skip) {
        const spec = POKER_HANDS.find(h => h.name === handName);
        if (!spec) return null;
        const pool = [];
        for (let i = 0; i < cards.length; i++) {
            if (skip && skip.has(i)) continue;
            const parsed = parseStandardCardName(cards[i].name);
            // A Stone card has no rank and no suit, so it can never be part of the hand.
            if (parsed && !parsed.modifiers.includes('Stone') && RANK_VALUE[parsed.rank]) {
                pool.push({ i: i, v: RANK_VALUE[parsed.rank], suit: parsed.suit, wild: parsed.modifiers.includes('Wild') });
            }
            const hit = spec.find(pool);
            if (hit) return { at: i + 1, indices: hit.map(c => c.i).sort((a, b) => a - b) };
        }
        return null;
    }

    // Cheapest route to draw position `at`: hold the cards the hand needs, throw the rest
    // five at a time. Returns the number of discards, or null when the hand fills up with
    // cards it cannot afford to throw.
    function discardsToReach(at, needed, handSize, alsoKeep) {
        const keep = new Set(needed);
        (alsoKeep || []).forEach(i => keep.add(i));
        let drawn = Math.min(handSize, at);
        let held = new Set();
        for (let i = 0; i < drawn; i++) held.add(i);
        let discards = 0;
        while (drawn < at) {
            const spare = [...held].filter(i => !keep.has(i));
            if (spare.length === 0) return null;
            const n = Math.min(5, spare.length, at - drawn);
            spare.slice(0, n).forEach(i => held.delete(i));
            for (let k = 0; k < n; k++) held.add(drawn + k);
            drawn += n;
            discards++;
        }
        return discards;
    }

    // "Find first <hand>" control for one round of the draw order.
    function appendHandFinder(parent, scrollable, tiles, cards, handSize) {
        const bar = document.createElement('div');
        bar.className = 'jumpBar';
        const label = document.createElement('span');
        label.className = 'jumpLabel';
        label.textContent = 'Find first';
        bar.appendChild(label);

        const sel = document.createElement('select');
        POKER_HANDS.forEach(h => {
            const o = document.createElement('option');
            o.value = h.name; o.textContent = h.name;
            sel.appendChild(o);
        });
        sel.value = 'Straight Flush';
        remember(sel, 'deck:findHand');
        bar.appendChild(sel);

        const result = document.createElement('div');
        result.className = 'modifier handResult';

        const clear = () => tiles.forEach(t => t.classList.remove('handHit'));
        // Cards spent by the answers already shown, so "Next" has to build the hand out of
        // something else. ORDINALS[n] names which answer you are looking at.
        const ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
        let used = [];   // indices spent by earlier answers
        let nth = 0;

        const run = (again) => {
            clear();
            if (!again) { used = []; nth = 0; }
            const skip = new Set(used);
            const hit = findFirstHand(cards, sel.value, skip);
            if (!hit) {
                result.className = 'modifier handResult noHit';
                result.textContent = again
                    ? 'No further ' + sel.value + ' once cards ' + used.map(i => i + 1).sort((a, b) => a - b).join(', ') + ' are set aside.'
                    : 'No ' + sel.value + ' anywhere in this round\u2019s ' + cards.length + ' cards.';
                nextBtn.disabled = true;
                return;
            }
            nth++;
            result.className = 'modifier handResult';
            hit.indices.forEach(i => tiles[i].classList.add('handHit'));
            scrollTileIntoView(scrollable, tiles[hit.indices[hit.indices.length - 1]]);
            const ord = ORDINALS[nth - 1] || (nth + 'th');
            const at = [ord + ' ' + sel.value + ' completes at card ' + hit.at
                + ' (position' + (hit.indices.length === 1 ? ' ' : 's ') + hit.indices.map(i => i + 1).join(', ') + ').'];
            if (used.length) at.push('Leaving card' + (used.length === 1 ? ' ' : 's ')
                + used.map(i => i + 1).sort((a, b) => a - b).join(', ') + ' free for something else.');
            if (hit.at <= handSize) {
                at.push('Already in the opening hand.');
            } else {
                // The plain answer first: what this hand alone costs.
                const d = discardsToReach(hit.at, hit.indices, handSize);
                at.push(d === null
                    ? 'Not reachable by discarding: the hand fills with cards it has to keep.'
                    : d + ' discard' + (d === 1 ? '' : 's') + ' to get there, keeping those cards and throwing the rest'
                        + (d > 3 ? ' \u2014 more than the usual 3.' : '.'));
                // Then whether you could still be sitting on the earlier answer at the time.
                if (used.length) {
                    const both = discardsToReach(hit.at, hit.indices, handSize, used);
                    if (both === null) {
                        at.push('Holding the earlier cards as well needs ' + (used.length + hit.indices.length)
                            + ' slots against a hand of ' + handSize + ', so you cannot keep both.');
                    } else if (both !== d) {
                        at.push(both + ' discard' + (both === 1 ? '' : 's') + ' if you hold the earlier cards too.');
                    }
                }
            }
            result.textContent = at.join(' ');
            used = used.concat(hit.indices);
            nextBtn.disabled = false;
        };

        const btn = document.createElement('button');
        btn.className = 'smallButton';
        btn.textContent = 'Find';
        btn.title = 'The earliest one in this round';
        btn.addEventListener('click', () => run(false));
        bar.appendChild(btn);
        const nextBtn = document.createElement('button');
        nextBtn.className = 'smallButton';
        nextBtn.textContent = 'Next';
        nextBtn.title = 'The same hand again, out of different cards: everything an earlier answer used is set aside';
        nextBtn.disabled = true;
        nextBtn.addEventListener('click', () => run(true));
        bar.appendChild(nextBtn);
        sel.addEventListener('change', () => { clear(); result.textContent = ''; used = []; nth = 0; nextBtn.disabled = true; });
        bar.appendChild(result);
        parent.appendChild(bar);
        return bar;
    }

    // ---- Hold test ----------------------------------------------------------
    // "If I parked these Jokers in my hand, how much more often would that one show up?"
    // Holding a card takes it out of its pool, and every roll that would have produced it
    // resamples, so with a nearly-complete collection - where a rarity pool can be down to a
    // handful - holding a few cards measurably changes how often a given one comes up. The
    // held cards are hypothetical: they are applied to this ante's rolls and never recorded
    // as owned. Each check replays the analysis twice (with and without), off-page.
    function appendHoldTest(parent, anteNum, os) {
        const ht = window.holdTest;
        if (!ht) return null;
        const state = holdTestState.get(anteNum) || { holds: [], target: '' };
        holdTestState.set(anteNum, state);

        const bar = document.createElement('div');
        bar.className = 'jumpBar holdTest';
        const addLabel = (text) => {
            const el = document.createElement('span');
            el.className = 'jumpLabel';
            el.textContent = text;
            bar.appendChild(el);
        };
        const addButton = (text, title, onClick, cls) => {
            const b = document.createElement('button');
            b.className = 'smallButton' + (cls ? ' ' + cls : '');
            b.textContent = text;
            b.title = title;
            b.addEventListener('click', onClick);
            bar.appendChild(b);
            return b;
        };

        const result = document.createElement('div');
        result.className = 'modifier holdResult';

        const chips = document.createElement('span');
        chips.className = 'holdChips';

        const stale = () => {
            result.className = 'modifier holdResult noHit';
            result.textContent = state.holds.length === 0 && !state.target ? '' : 'Press Check.';
        };

        const renderChips = () => {
            chips.innerHTML = '';
            state.holds.forEach((name, i) => {
                const chip = document.createElement('button');
                chip.className = 'smallButton holdChip';
                chip.textContent = name + ' \u00D7';
                chip.title = 'Stop pretending to hold ' + name;
                chip.addEventListener('click', () => { state.holds.splice(i, 1); renderChips(); stale(); });
                chips.appendChild(chip);
            });
        };

        addLabel('Hold');
        const holdInput = makeNameInput('Joker to hold');
        bar.appendChild(holdInput);
        const addHold = () => {
            const name = holdInput.value.trim();
            if (determineItemType(name) === 'unknown') { holdInput.classList.add('badName'); return; }
            holdInput.classList.remove('badName');
            if (state.holds.indexOf(name) < 0) state.holds.push(name);
            holdInput.value = '';
            renderChips();
            stale();
        };
        holdInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addHold(); } });
        addButton('Add', 'Pretend to hold this card for this ante', addHold);
        bar.appendChild(chips);

        addLabel('to find');
        const targetInput = makeNameInput('Joker to look for');
        targetInput.value = state.target || '';
        targetInput.addEventListener('input', () => { state.target = targetInput.value.trim(); stale(); });
        bar.appendChild(targetInput);

        const nameOf = (line) => parseCardItem(line).cardName;
        const check = () => {
            const target = targetInput.value.trim();
            state.target = target;
            if (determineItemType(target) === 'unknown') {
                targetInput.classList.add('badName');
                result.className = 'modifier holdResult noHit';
                result.textContent = 'Pick a Joker or consumable to look for.';
                return;
            }
            targetInput.classList.remove('badName');
            if (state.holds.length === 0) {
                result.className = 'modifier holdResult noHit';
                result.textContent = 'Add at least one card to hold.';
                return;
            }
            const spots = (lines) => lines.map((l, i) => nameOf(l) === target ? i + 1 : 0).filter(Boolean);
            const before = spots(ht.queue(anteNum, []));
            // Each card is bought the first time the shop offers it, and only leaves the pool
            // from the next frame: pretending you hold it earlier than you could predicts a
            // queue you can never reach.
            const run = ht.buyFirstSeen(anteNum, state.holds);
            const after = spots(run.queue);
            const delta = after.length - before.length;
            const at = (list) => list.length ? ' (card' + (list.length === 1 ? ' ' : 's ') + list.join(', ') + ')' : '';
            const parts = [target + ' in this ante\u2019s queue: ' + before.length + at(before)
                + ' \u2192 ' + after.length + at(after) + '.'];
            parts.push(delta > 0 ? '+' + delta + ' extra.' : delta < 0 ? delta + ' fewer.' : 'No change.');
            if (run.schedule.length) {
                parts.push('Bought: ' + run.schedule.map(h => h.name + ' at card ' + h.boughtSlot
                    + ' (frame ' + h.boughtFrame + ', out of the pool from card ' + h.fromSlot + ')').join('; ') + '.');
            }
            if (run.neverOffered.length) parts.push('Never offered this ante: ' + run.neverOffered.join(', ') + '.');
            if (os && os.showman) parts.push('Showman is held, so nothing rerolls around held cards \u2014 untick it to see an effect.');
            result.className = 'modifier holdResult';
            result.textContent = parts.join(' ');
        };

        addButton('Check', 'Replay this ante with and without those cards held', check);
        addButton('Clear', 'Drop the held cards and the target', () => {
            state.holds.length = 0; state.target = ''; targetInput.value = '';
            targetInput.classList.remove('badName'); holdInput.classList.remove('badName');
            renderChips(); stale();
        });
        bar.appendChild(result);
        renderChips();
        stale();
        parent.appendChild(bar);
        return bar;
    }

    // ---- Densest window in the shop queue ------------------------------------
    // "Between cards 230 and 340, which run of 10 Jokers holds the most Rare ones?" The
    // window is measured in Jokers, not queue slots: Tarots, Planets, Spectrals and playing
    // cards sit in the queue but are not what you are shopping for, so they do not use up
    // the window. A run of 3 Jokers spread over 7 cards beats a denser-looking stretch that
    // only reaches 3 of the rarity you want by spending 4 Joker slots on it.
    function appendWindowFinder(parent, anteNum, tiles, lines, scrollable) {
        const state = windowFinderState.get(anteNum) || { from: 1, to: Math.min(lines.length, 200), len: 10, rarity: 'Rare', names: [] };
        windowFinderState.set(anteNum, state);
        state.to = Math.min(state.to || lines.length, lines.length);

        const bar = document.createElement('div');
        bar.className = 'jumpBar windowFinder';
        const addLabel = (text) => { const el = document.createElement('span'); el.className = 'jumpLabel'; el.textContent = text; bar.appendChild(el); };
        const addButton = (text, title, onClick, cls) => {
            const b = document.createElement('button');
            b.className = 'smallButton' + (cls ? ' ' + cls : '');
            b.textContent = text; b.title = title;
            b.addEventListener('click', onClick);
            bar.appendChild(b); return b;
        };
        const num = (value, title, onChange) => {
            const el = document.createElement('input');
            el.type = 'number'; el.min = 1; el.max = lines.length;
            el.value = value; el.className = 'jumpInput'; el.title = title;
            el.addEventListener('change', () => onChange(parseInt(el.value, 10) || 1));
            bar.appendChild(el); return el;
        };

        const result = document.createElement('div');
        result.className = 'modifier holdResult';
        const chips = document.createElement('span');
        chips.className = 'holdChips';

        addLabel('Densest window: cards');
        num(state.from, 'First card of the range', v => { state.from = v; });
        addLabel('to');
        num(state.to, 'Last card of the range', v => { state.to = v; });
        addLabel('window of');
        num(state.len, 'How many Jokers wide the window is. Tarots, Planets, Spectrals and playing cards in between do not count against it.', v => { state.len = v; });
        addLabel('jokers');

        addLabel('of');
        const raritySel = document.createElement('select');
        RARITIES.forEach(r => { const o = document.createElement('option'); o.value = r; o.textContent = r; raritySel.appendChild(o); });
        raritySel.value = state.rarity;
        raritySel.title = 'Counted when no specific Jokers are listed';
        raritySel.addEventListener('change', () => { state.rarity = raritySel.value; });
        bar.appendChild(raritySel);

        addLabel('or');
        const nameInput = makeNameInput('specific Joker');
        bar.appendChild(nameInput);
        const renderChips = () => {
            chips.innerHTML = '';
            state.names.forEach((n, i) => {
                const chip = document.createElement('button');
                chip.className = 'smallButton holdChip';
                chip.textContent = n + ' \u00D7';
                chip.title = 'Stop looking for ' + n;
                chip.addEventListener('click', () => { state.names.splice(i, 1); renderChips(); });
                chips.appendChild(chip);
            });
        };
        const addName = () => {
            const n = nameInput.value.trim();
            if (determineItemType(n) === 'unknown') { nameInput.classList.add('badName'); return; }
            nameInput.classList.remove('badName');
            if (state.names.indexOf(n) < 0) state.names.push(n);
            nameInput.value = ''; renderChips();
        };
        nameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addName(); } });
        addButton('Add', 'Count this Joker instead of a whole rarity', addName);
        bar.appendChild(chips);

        const nameOf = (line) => String(line).replace(/^\d+\)/, '').trim()
            .replace(/^(Eternal |Perishable |Rental )+/, '')
            .replace(/^(Foil|Holographic|Polychrome|Negative) /, '');
        const clear = () => tiles.forEach(t => t.classList.remove('windowHit', 'windowSpan'));

        const find = () => {
            clear();
            const from = Math.max(1, Math.min(lines.length, state.from));
            const to = Math.max(from, Math.min(lines.length, state.to));
            const wanted = state.names.slice();
            const label = (n) => wanted.length ? wanted.join(' / ')
                : raritySel.value + ' Joker' + (n === 1 ? '' : 's');

            // Every Joker in the range, in queue order. Only these use up the window.
            const jokers = [];
            for (let i = from - 1; i <= to - 1; i++) {
                const n = nameOf(lines[i]);
                if (rarityOf(n) === null) continue;   // Tarot, Planet, Spectral, playing card
                jokers.push({ pos: i + 1, hit: wanted.length ? wanted.indexOf(n) >= 0 : rarityOf(n) === raritySel.value });
            }
            if (jokers.length === 0) {
                result.className = 'modifier holdResult noHit';
                result.textContent = 'No Jokers at all between cards ' + from + ' and ' + to + '.';
                return;
            }
            const totalHits = jokers.filter(j => j.hit).length;
            if (totalHits === 0) {
                result.className = 'modifier holdResult noHit';
                result.textContent = 'No ' + label(0) + ' among the ' + jokers.length
                    + ' Jokers between cards ' + from + ' and ' + to + '.';
                return;
            }

            // Slide a window of `len` consecutive Jokers, ignoring everything between them.
            const len = Math.max(1, Math.min(jokers.length, state.len));
            let best = { at: 0, count: -1 };
            for (let i = 0; i + len <= jokers.length; i++) {
                let count = 0;
                for (let k = i; k < i + len; k++) if (jokers[k].hit) count++;
                if (count > best.count) best = { at: i, count: count };
            }
            const run = jokers.slice(best.at, best.at + len);
            const startCard = run[0].pos, endCard = run[run.length - 1].pos;
            const inWindow = run.filter(j => j.hit).map(j => j.pos);
            for (let i = startCard; i <= endCard; i++) if (tiles[i - 1]) tiles[i - 1].classList.add('windowSpan');
            inWindow.forEach(m => { if (tiles[m - 1]) tiles[m - 1].classList.add('windowHit'); });
            scrollTileIntoView(scrollable, tiles[startCard - 1]);

            result.className = 'modifier holdResult';
            const clamped = len !== state.len ? ' (only ' + len + ' Jokers in range)' : '';
            result.textContent = 'Best run of ' + len + ' Joker' + (len === 1 ? '' : 's') + clamped
                + ': cards ' + startCard + '\u2013' + endCard
                + ' (' + (endCard - startCard + 1) + ' cards) with ' + best.count + ' ' + label(best.count)
                + ' (at ' + inWindow.join(', ') + '). '
                + totalHits + ' ' + label(totalHits) + ' among ' + jokers.length
                + ' Jokers in cards ' + from + '\u2013' + to + ' altogether.';
        };

        addButton('Find', 'Search the range for the densest window', find);
        addButton('Clear', 'Drop the highlight and the Joker list', () => {
            clear(); state.names.length = 0; renderChips();
            result.textContent = ''; result.className = 'modifier holdResult';
        });
        bar.appendChild(result);
        renderChips();
        parent.appendChild(bar);
        return bar;
    }

    // ---- Jumping around a side-scrolling row --------------------------------
    // Rows get long (a 40-card shop queue, a 54-card deck order) and dragging to
    // "frame 6" or "joker 23" is slow and easy to overshoot. Every long row gets a bar
    // that scrolls straight to a position, to a shop frame, or back to the start.

    // Bring `tile` to the left edge of its row. `reveal` runs first when the tile is
    // hidden, so a collapsed run of seen cards opens before we jump into it.
    function scrollTileIntoView(scrollable, tile, reveal) {
        if (!tile) return;
        if (tile.hidden && reveal) reveal();
        if (tile.hidden) return;
        const left = Math.max(0, scrollable.scrollLeft + tile.getBoundingClientRect().left - scrollable.getBoundingClientRect().left - 6);
        // Gliding across 40 cards is slow and hard to follow, so only short hops animate.
        const far = Math.abs(left - scrollable.scrollLeft) > 2 * scrollable.clientWidth;
        scrollable.scrollTo({ left: left, behavior: far ? 'auto' : 'smooth' });
        tile.classList.remove('jumpFlash');
        void tile.offsetWidth;  // restart the flash when the same tile is picked twice
        tile.classList.add('jumpFlash');
        tile.addEventListener('animationend', () => tile.classList.remove('jumpFlash'), { once: true });
    }

    // ---- Resample history ---------------------------------------------------
    // index.html fills window.resampleHistory (only with "Show resample history" on) with
    // the rolls randchoice() discarded for each card, keyed like the seen marks. A card with
    // any gets a small badge on its sprite; clicking it lists every roll in order.
    const RS_WHY = {
        h: { label: 'Held', title: 'Already held (or earlier in the same pack), so the game rerolled' },
        l: { label: 'Locked', title: 'Not in the pool: not unlocked, gated by ante, already bought, or extinct' },
        r: { label: 'Retry', title: 'The pool\u2019s placeholder slot, which always rerolls' },
    };
    let rsOpen = null;
    function closeResamplePop() {
        if (!rsOpen) return;
        rsOpen.pop.remove();
        rsOpen.badge.classList.remove('open');
        rsOpen.badge.setAttribute('aria-expanded', 'false');
        rsOpen = null;
    }
    document.addEventListener('mousedown', (e) => { if (rsOpen && !rsOpen.pop.contains(e.target) && e.target !== rsOpen.badge) closeResamplePop(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && rsOpen) { const b = rsOpen.badge; closeResamplePop(); b.focus(); } });
    document.addEventListener('scroll', (e) => { if (rsOpen && !rsOpen.pop.contains(e.target)) closeResamplePop(); }, true);
    window.addEventListener('resize', closeResamplePop);
    document.addEventListener('analysisComplete', closeResamplePop);

    function resampleThumb(name, kind) {
        const box = document.createElement('div');
        box.className = 'rsThumb';
        if (kind === 'tag' || kind === 'boss') {
            box.classList.add('small');
            box.appendChild(kind === 'tag' ? makeTagSprite(name) : makeBossSprite(name));
        } else if (kind === 'voucher') {
            box.appendChild(makeVoucherSprite(name));
        } else if (determineItemType(name) !== 'unknown') {
            box.appendChild(makeCardSprite(name, determineItemType(name), [], []));
        } else {
            box.classList.add('text');
            box.textContent = name === 'RETRY' ? '?' : name;
        }
        return box;
    }
    function resampleStep(thumb, name, whyKey, whyLabel, whyTitle, rollNo) {
        const step = document.createElement('div');
        step.className = 'rsStep ' + (whyKey === 'k' ? 'kept' : 'rejected');
        step.title = 'Roll ' + rollNo + ': ' + name + ' \u2014 ' + whyTitle;
        step.appendChild(thumb);
        const nm = document.createElement('div');
        nm.className = 'rsName';
        nm.textContent = name === 'RETRY' ? 'Placeholder' : name;
        step.appendChild(nm);
        const why = document.createElement('div');
        why.className = 'rsWhy ' + whyKey;
        why.textContent = whyLabel;
        step.appendChild(why);
        return step;
    }
    function openResamplePop(badge, history, finalName, finalSprite, kind, context) {
        const pop = document.createElement('div');
        pop.className = 'rsPop';
        pop.setAttribute('role', 'dialog');
        pop.setAttribute('aria-label', 'Resample history for ' + finalName);
        const head = document.createElement('div');
        head.className = 'rsPopHead';
        const t = document.createElement('div');
        t.className = 'rsPopTitle';
        t.textContent = 'Resample history';
        const sub = document.createElement('div');
        sub.className = 'rsPopSub';
        sub.textContent = context + ' \u00B7 ' + history.length + ' reroll' + (history.length === 1 ? '' : 's');
        head.appendChild(t);
        head.appendChild(sub);
        pop.appendChild(head);

        const chain = document.createElement('div');
        chain.className = 'rsChain';
        history.forEach((h, i) => {
            const why = RS_WHY[h.why] || RS_WHY.h;
            chain.appendChild(resampleStep(resampleThumb(h.item, kind), h.item, h.why in RS_WHY ? h.why : 'h', why.label, why.title, i + 1));
            const arrow = document.createElement('div');
            arrow.className = 'rsArrow';
            arrow.textContent = '\u2192';
            chain.appendChild(arrow);
        });
        const keptThumb = document.createElement('div');
        keptThumb.className = 'rsThumb' + (kind === 'tag' || kind === 'boss' ? ' small' : '');
        if (finalSprite) keptThumb.appendChild(finalSprite.cloneNode(true));
        else { keptThumb.classList.add('text'); keptThumb.textContent = finalName; }
        chain.appendChild(resampleStep(keptThumb, finalName, 'k', 'Kept', 'the roll that stuck', history.length + 1));
        pop.appendChild(chain);

        document.body.appendChild(pop);
        const r = badge.getBoundingClientRect();
        const w = pop.offsetWidth, hgt = pop.offsetHeight;
        let left = Math.min(Math.max(16, r.left - 8), window.innerWidth - w - 16);
        let top = r.bottom + 6;
        if (top + hgt > window.innerHeight - 8 && r.top - hgt - 6 > 8) top = r.top - hgt - 6;
        pop.style.left = Math.max(16, left) + 'px';
        pop.style.top = top + 'px';
        badge.classList.add('open');
        badge.setAttribute('aria-expanded', 'true');
        rsOpen = { pop, badge };
    }
    // kind: 'card' (Joker / consumable / playing card), 'voucher', 'tag' or 'boss'.
    function attachResampleBadge(tile, key, finalName, kind, context) {
        const history = window.resampleHistory && window.resampleHistory[key];
        if (!history || history.length === 0) return;
        const sprite = tile.querySelector('.sprite');
        if (!sprite) return;
        const holder = document.createElement('div');
        holder.className = 'rsSprite';
        holder.style.width = sprite.style.width;
        sprite.parentNode.insertBefore(holder, sprite);
        holder.appendChild(sprite);
        const badge = document.createElement('button');
        badge.type = 'button';
        badge.className = 'rsBadge';
        badge.textContent = '\u21BB' + history.length;
        badge.title = 'Rerolled ' + history.length + '\u00D7 before landing on ' + finalName + ': '
            + history.map(h => h.item === 'RETRY' ? 'placeholder' : h.item).join(' \u2192 ') + '. Click for details.';
        badge.setAttribute('aria-haspopup', 'dialog');
        badge.setAttribute('aria-expanded', 'false');
        badge.addEventListener('mousedown', (e) => e.stopPropagation());
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = rsOpen && rsOpen.badge === badge;
            closeResamplePop();
            if (!wasOpen) openResamplePop(badge, history, finalName, sprite, kind, context);
        });
        holder.appendChild(badge);
    }

    function makePosBadge(pos, title) {
        const badge = document.createElement('div');
        badge.className = 'queuePos';
        badge.textContent = pos;
        if (title) badge.title = title;
        return badge;
    }

    // opts: { frameSize } one button per shop frame, { reveal } un-collapse before
    // jumping, { min } skip the bar entirely on rows shorter than this.
    function appendJumpBar(parent, scrollable, tiles, opts) {
        const o = opts || {};
        if (tiles.length <= (o.min || 0)) return null;
        const bar = document.createElement('div');
        bar.className = 'jumpBar';
        const frameBtns = [];
        const jumpTo = (idx) => {
            if (!(idx >= 0 && idx < tiles.length)) return;
            scrollTileIntoView(scrollable, tiles[idx], o.reveal);
            if (o.frameSize) {
                const f = Math.floor(idx / o.frameSize);
                frameBtns.forEach((b, i) => b.classList.toggle('currentFrame', i === f));
            }
        };
        const addLabel = (text) => {
            const s = document.createElement('span');
            s.className = 'jumpLabel';
            s.textContent = text;
            bar.appendChild(s);
        };
        const addButton = (text, title, onClick, cls) => {
            const b = document.createElement('button');
            b.className = 'smallButton' + (cls ? ' ' + cls : '');
            b.textContent = text;
            b.title = title;
            b.addEventListener('click', onClick);
            bar.appendChild(b);
            return b;
        };

        // A number box that jumps to the nth card (or the first card of the nth frame).
        const addInput = (label, count, toIndex) => {
            addLabel(label);
            const input = document.createElement('input');
            input.type = 'number';
            input.min = 1;
            input.max = count;
            input.className = 'jumpInput';
            input.placeholder = '#';
            input.title = '1\u2013' + count + ', then Enter';
            const go = () => jumpTo(toIndex(parseInt(input.value, 10) || 0));
            input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); go(); } });
            input.addEventListener('change', go);
            bar.appendChild(input);
            addButton('Go', 'Jump to that ' + label, go);
        };

        addLabel('Jump to');
        addButton('\u25C2 Start', 'Back to card 1', () => jumpTo(0));
        addInput('card', tiles.length, (n) => n - 1);
        const frames = o.frameSize ? Math.ceil(tiles.length / o.frameSize) : 0;
        // One button per frame reads well for a handful; past that it is a wall of
        // buttons, so long queues get a number box instead.
        if (frames > 12) addInput('frame', frames, (n) => (n - 1) * o.frameSize);
        addButton('End \u25B8', 'Jump to card ' + tiles.length, () => jumpTo(tiles.length - 1));

        if (frames > 1 && frames <= 12) {
            addLabel('Frame');
            for (let f = 0; f < frames; f++) {
                const from = f * o.frameSize + 1;
                const to = Math.min(tiles.length, (f + 1) * o.frameSize);
                frameBtns.push(addButton(String(f + 1), 'Frame ' + (f + 1) + ': cards ' + from + '\u2013' + to,
                    () => jumpTo(f * o.frameSize), 'frameBtn'));
            }
        }
        parent.appendChild(bar);
        return bar;
    }

    function attachDragScroll(scrollable) {
        if (scrollable.dataset.dragScroll) return;
        scrollable.dataset.dragScroll = '1';
        attachHoverScroll(scrollable);

        let isDown = false;
        let startX;
        let scrollLeft;

        scrollable.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollable.classList.add('active');
            startX = e.pageX - scrollable.offsetLeft;
            scrollLeft = scrollable.scrollLeft;
            scrollable.classList.add('no-select');
        });

        scrollable.addEventListener('mouseleave', () => {
            isDown = false;
            scrollable.classList.remove('active');
            scrollable.classList.remove('no-select');
        });

        scrollable.addEventListener('mouseup', () => {
            isDown = false;
            scrollable.classList.remove('active');
            scrollable.classList.remove('no-select');
        });

        scrollable.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollable.offsetLeft;
            const walk = x - startX; // One-to-one scroll
            scrollable.scrollLeft = scrollLeft - walk;
        });
    }

    // Re-render whenever index.html finishes an analysis (Analyze button, URL load, voucher toggles)
    document.addEventListener('analysisComplete', displayShopQueues);

    // Initialize the display
    displayShopQueues();
})();
