const User = require('../models/User')
const Deck = require('../models/Deck')
const Cards = require('../models/Cards')

const blue = new Cards({
    name: 'Blue-Eyes White Dragon',
    type: 'monster',
    ATK: 3000,
    DEF: 2500,
    discription: 'This legendary dragon is a powerful engin of destruction'
})

const dark = new Cards({
    name: 'Dark Magician',
    type: 'monster',
    ATK: 2500,
    DEF: 2100,
    discription: 'The ultimate wizard in terms of ATK and Def'
})

const red = new Cards({
    name: 'Red-Eyes Black Dragon',
    type: 'monster',
    ATK: 2400,
    DEF: 2000,
    discription: 'a strong drangon with a deadly attack'
})

const solar = new Cards({
    name: 'Solar Recharge',
    type: 'spell',
    ATK: 0,
    DEF: 0,
    discription: 'Discad 1 Lightsworn monster; draw 2 cards, then send thetop 2 cards of your deck to the grave yard'
})

const twin = new Cards({
    name: 'Twin Twister',
    type: 'spell',
    ATK: 0,
    DEF: 0,
    discription: 'Discad 1 card, then target up to 2 spell/trap cards on the field and destroy them'
})

const rai = new Cards({
    name: 'Raigeki',
    type: 'spell',
    ATK: 0,
    DEF: 0,
    discription: 'Destroy all monsters your opponent controls'
})

const drown = new Cards({
    name: 'Drowning Mirror Force',
    type: 'Trap',
    ATK: 0,
    DEF: 0,
    discription: 'when an opponets monster declares a direct attact : shuffel all attack position monsters your opponent controls into the deck '
})

const bribe = new Cards({
    name: 'Dark Bribe',
    type: 'Trap',
    ATK: 0,
    DEF: 0,
    discription: 'When a opponents Spell/Trap card is activated: your opponent draws 1 card also negate the spell/trap activation and if you do destroy it'
})

const call = new Cards({
    name: 'Call of the Haunted',
    type: 'Trap',
    ATK: 0,
    DEF: 0,
    discription: 'Activate this card by targeting 1 monster in your grave yard; special summon that target in attack position. when this card leaves the field destroy that target. when that target is destroyed, destroy this card'
})

const main = new Deck({
    name: 'deck1',
    amountOfCards: 9,
    discription: 'starter deck',
    cards: [bribe, drown, rai, twin, solar, red, dark, blue]
})