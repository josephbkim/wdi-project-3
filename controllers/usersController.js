const express = require('express')
const User = require('../db/models/User')
const Garden = require('../db/models/Garden')
const router = express.Router({ mergeParams: true }) 

router.get('/', (request, response) => {
    const gardenId = request.params.gardenId 
    Garden.findById(gardenId)
        .then((garden) => {
            response.json(garden)            
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router