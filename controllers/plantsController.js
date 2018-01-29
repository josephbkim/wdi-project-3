const express = require('express')
const User = require('../db/models/User')
const Garden = require('../db/models/Garden')
const Plant = require('../db/models/Plant')
const router = express.Router({ mergeParams: true })

router.get('/', async (request, response) => {
    try {
        gardenId = request.params.gardenId
        userId = request.params.userId
        const garden = await Garden.findById(gardenId)
        const user = await garden.users.id(userId)
        await response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (request, response) => {
    try {
        const gardenId = request.params.gardenId
        const userId = request.params.userId
        const newPlant = await Plant.create(request.body)
        const garden = await Garden.findById(gardenId)
        const user = await garden.users.id(userId)
        user.plants.push(newPlant)
        await garden.save()
        response.json(user)
    }
    catch (err) {
        console.log(err)
    }
})

router.delete('/:plantId', async (request, response) => {
    console.log("Deleting:", request.params.userId)
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