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
                const voucher = voucherMatch ? voucherMatch[1].trim() : '';
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

                shopQueues.push({ title, queue, boss, voucher, tags, sixthSense, perkeo, generators, packs, resumed: resumedMatch ? resumedMatch[1].trim() : null, currentShopCount, raw: match });
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

    // Mini chooser under a Standard Pack card: add it to the tracked deck from a chosen round.
    function attachDeckAddChooser(container, cardName, anteNum) {
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
            (roundNums.length ? roundNums : [1, 2, 3]).filter(r => r >= 2).forEach(r => opts.push({ label: 'From round ' + r, a: anteNum, r }));
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

        shopQueues.forEach(({ title, queue, boss, voucher, tags, sixthSense, perkeo, generators, packs, resumed, currentShopCount, raw }) => {
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
                + (voucher ? '  |  Voucher: ' + voucher : '')
                + (resumed ? '  |  \u23EF Resumed from save' : '');
            // A Negative Joker anywhere in this ante's generation paths also highlights the
            // ante's own collapsible title, so it's visible before expanding into it.
            const anteHasNegative = generators.some(g => g.cards.some(c => parseCardItem(c).itemModifiers.includes('Negative')));
            const anteBody = createCollapsible(anteBox, title, anteLabel, (queueContainer) => {

            const queueInfo = document.createElement('div');
            queueInfo.className = 'queueInfo';

            const voucherElement = document.createElement('div');
            voucherElement.innerHTML = '<b><u>Voucher</u></b>';
            voucherElement.style = "font-size: 16px";
            if (voucher) {
                const voucherContainer = document.createElement('div');
                voucherContainer.className = 'voucherContainer';

                voucherContainer.appendChild(makeVoucherSprite(voucher));

                const voucherNameElement = document.createElement('div');
                voucherNameElement.textContent = voucher;
                voucherNameElement.classList.add('voucherName');
                voucherContainer.appendChild(voucherNameElement);

                if (vs) {
                    const bought = vs.purchases[voucher];
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
                        if (vs.purchases[voucher] !== undefined) vs.unbuy(voucher);
                        else vs.buy(voucher, anteNum);
                    });
                }

                voucherElement.appendChild(voucherContainer);
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
                    const nameInput = document.createElement('input');
                    nameInput.type = 'text';
                    nameInput.placeholder = 'Joker / consumable name';
                    nameInput.setAttribute('list', 'ownedNames');
                    nameInput.className = 'ownedNameInput';
                    remember(nameInput, 'owned:name');
                    if (!document.getElementById('ownedNames')) {
                        const dl = document.createElement('datalist');
                        dl.id = 'ownedNames';
                        jokers.concat(tarotsAndPlanets).forEach(c => { const o = document.createElement('option'); o.value = c.name; dl.appendChild(o); });
                        document.body.appendChild(dl);
                    }
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
                            + (closing.length > 0 ? ', ' + (copies.length > 1 ? closing.length + ' gone' : 'gone') + ' after this ante' : '');
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
                        if (closing.length > 0) {
                            const keep = document.createElement('button');
                            keep.className = 'smallButton';
                            keep.textContent = copies.length > 1 ? 'Keep one' : 'Still held';
                            keep.addEventListener('click', () => os.unrelease(closing[closing.length - 1].id));
                            row.appendChild(keep);
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
                            row.textContent = (op.type === 'add' ? 'Added ' : 'Removed ') + op.name + ' from round ' + op.round + ' ';
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
                            rd.cards.forEach((card, idx) => {
                                const tile = makeDeckCardTile(card, idx + 1, idx < rd.hand);
                                tile.classList.add('clickable');
                                tile.title = 'Click if this card is destroyed or removed during round ' + r;
                                tile.addEventListener('click', () => ds.remove(card.id, card.name, nextA, nextR));
                                scroll.appendChild(tile);
                            });
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
                };
                const markUpTo = (idx) => {
                    for (let i = 0; i <= idx; i++) setSeen(tiles[i], shopKey(i), true);
                    seenState.shopCollapsed.add(anteNum);
                    saveSeenState();
                    refresh();
                };
                queue.forEach((item, idx) => {
                    const tile = createQueueItem(item);
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
                body.appendChild(scrollable);
                attachDragScroll(scrollable);
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
                            cards.forEach((card, idx) => {
                                const genTile = createQueueItem((idx + 1) + ') ' + card);
                                attachSeenToggle(genTile, anteNum + ':gen:' + label + ':' + idx);
                                attachOwnToggle(genTile, parseCardItem(card).cardName, anteNum);
                                generatorScrollable.appendChild(genTile);
                            });
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

                            cardContainer.appendChild(makeStandardCardSprite(rank, suit, modifiers, seal));
                            attachDeckAddChooser(cardContainer, cardName, anteNum);

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

                        packItem.appendChild(cardContainer);
                    });

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
