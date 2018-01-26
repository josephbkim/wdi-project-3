const express = require('express')
const User = require('../db/models/User')
const Garden = require('../db/models/Garden')
const Plant = require('../db/models/Plant')
const router = express.Router({ mergeParams: true }) 

router.get('/', async (request, response) => {
    gardenId = request.params.gardenId 
    userId = request.params.userId
    Garden.findById(gardenId)
        .then((garden) => {
            const user = garden.users.id(userId)
            response.json(user)     
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router