const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Cards = new Schema({
    name: String,
    Type: String,
    ATK: Number,
    DEF: Number,
    discription: String,
})

module.exports = mongoose.model('Cards', Cards)
