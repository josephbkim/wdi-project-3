const mongoose = require('mongoose')
const Schema = require('../schema')

const Plant = mongoose.model('Plant', Schema.PlantSchema)

module.exports = Plant