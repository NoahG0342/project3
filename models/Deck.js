const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Deck = new Schema({
    name: String,
    amountOfCards: Number,
    discription: String,
    cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Cards'
    }]

})

module.exports = mongoose.model('Deck', Deck)