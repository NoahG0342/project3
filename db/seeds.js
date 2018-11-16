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

