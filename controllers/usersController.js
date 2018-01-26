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


router.delete('/:userId', async (request, response) => {
    console.log("Deleting user:", request.params.userId)
    try {
        const garden = await Garden.findById(request.params.gardenId)
        console.log("Got garden:", garden)
        const user = garden.users.id(request.params.userId).remove()
        await garden.save()
        console.log("Saved garden after removing user")
        // response.redirect(`/garden/${gardenId}/users`)
        response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})
module.exports = router