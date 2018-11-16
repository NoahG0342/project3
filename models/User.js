const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema ({
    username: String,
    password: String,
    age: Number,
    lp: Number,
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
})

module.exports = mongoose.model('User', User)