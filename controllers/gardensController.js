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

module.exports = router;