const express = require('express')
const Garden = require('../db/models/Garden')

const router = express.Router()

router.get('/', (req, res) => {
    // console.log("TESTING ROUTER. GET IN GARDENS CONTROLLER")
    Garden.find({})
        .then((gardens) => {
            res.json(gardens)
        })
        .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
    const newGardenInfo = req.body
    newGarden = Garden.create(newGardenInfo)
        .then(() => {
            res.json(newGarden)
        })
        .catch((err) => {
            console.log(err)
        })
})

router.delete('/:gardenId', async (req, res) => {
    try {
        await Garden.findByIdAndRemove(req.params.gardenId)
        res.send('completed delete')
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;