const User = require('../models/User')


const userController = {
    index: (req, res) => {
        User.find({})
            .then((users) => {
                res.send(users)
            })
    },

    create: (req, res) => {
        User.create(req.body)
            .then((user) => {
               user.save()
               res.redirect('/api/user')
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