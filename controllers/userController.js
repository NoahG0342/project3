const User = require('../models/User')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((user) => {
                res.send(user)
            })
    },

    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
               user.save()
               res.redirect('/api/users')
            })
    },

    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.send(200)
            })

        },

        update: (req, res) => {
            User.findByIdAndUpdate(req.params.userId, req.body)
                .then((updatedUser) => {
                    updatedUser.save()
                    res.send(updatedUser)
                })
            }

}

module.exports = userController