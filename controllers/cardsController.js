const Cards = require('../models/Cards')


const cardsController = {
    index: (req, res) => {
        Cards.find({})
            .then((cards) => {
                res.send(cards)
            })
    },

    create: (req, res) => {
        Cards.create(req.body)
            .then((cards) => {
               cards.save()
               res.redirect('/api/user/:userId/deck/:deckId/cards')
            })
    },

    delete: (req, res) => {
        Cards.findByIdAndDelete(req.params.cardsId)
            .then(() => {
                res.send(200)
            })

        }

}

module.exports = cardsController