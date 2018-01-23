const mongoose = require('mongoose')
const Schema = require('../schema')

const Garden = mongoose.model('Garden', Schema.GardenSchema)

module.exports = Garden