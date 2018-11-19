const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const deckController = require('../controllers/deckController')
const cardsController = require('../controllers/cardsController')


router.get('/api/user', userController.index)
router.post('/api/user', userController.create)
router.delete('/api/user/:userId', userController.delete)

// router.get('/api/user/:userId/deck', deckController)

// router.get('/api/user/:userId/deck/:deckId/cards', cardsController)

module.exports = router