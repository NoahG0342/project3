const Deck = require('../models/Deck')


const deckController = {
    index: (req, res) => {
        Deck.find({})
            .then((decks) => {
                res.send(decks)
            })
    },

    create: (req, res) => {
        Deck.create(req.body)
            .then((deck) => {
               deck.save()
               res.redirect('/api/user/:userId/deck')
            })
    },

    delete: (req, res) => {
        Deck.findByIdAndDelete(req.params.deckId)
            .then(() => {
                res.send(200)
            })

        }

}

module.exports = deckController