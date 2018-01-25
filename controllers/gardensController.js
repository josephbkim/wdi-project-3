const express = require('express')
const Garden = require('../db/models/Garden')

const router = express.Router()

router.get('/', (request, response) => {
    Garden.find({})
        .then((gardens) => {
            response.json(gardens)
        })
        .catch((err) => console.log(err))
})

router.post('/', (request, response) => {
    const newGardenInfo = request.body
    newGarden = Garden.create(newGardenInfo)
        .then(() => {
            response.json(newGarden)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.delete('/:gardenId', async (request, response) => {
    try {
        await Garden.findByIdAndRemove(request.params.gardenId)
        response.send('completed delete')
    }
    catch (err) {
        console.log(err)
    }
})

router.patch('/:gardenId', async (request, response) => {
    try {
        const updatedGardenInfo = await Garden.findByIdAndUpdate(request.params.gardenId, request.body, {new: true})
        garden.name = request.body.name
        response.json(garden)
    }
    catch (err) {
        console.log(err)
        response.sendStatus(500) 

    }
})
module.exports = router
