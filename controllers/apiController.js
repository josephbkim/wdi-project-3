require('dotenv').config()

const express = require('express')
const Garden = require('../db/models/Garden')
const axios = require('axios')
const router = express.Router()
var moment = require('moment');
moment().format()

const city = 'Atlanta'
const state = 'GA'

const apiKey = process.env.wunderground
const url = `https://api.weatherbit.io/v2.0/history/daily?city=${city},${state}&start_date=2018-01-27&end_date=2018-01-28&key=${apiKey}`
const url2 = `http://api.wunderground.com/api/500fc45859e1f98f/conditions/q/${state}/${city}.json`

// current weather
router.get('/current', (request, response) => {

    axios.get(url2)
        .then((response) => {
            // console.log(response.data)
            return response.data
        })
        .then((data) => { response.json(data) })
        .catch((error) => { console.log(error) })
})

router.get('/historical', (request, response) => {
    const dates = {
        date1: '20180124',
        date2: '20180125',
        date3: '20180126'
    }
    const weather = {
        date1: '',
        date2: '',
        date3: ''
    }

    axios.get(`http://api.wunderground.com/api/500fc45859e1f98f/history_${dates.date1}/q/${state}/${city}.json`)
        .then((response) => {
            weather.date1 = response.data
        }).then(() => {
            axios.get(`http://api.wunderground.com/api/500fc45859e1f98f/history_${dates.date2}/q/${state}/${city}.json`)
                .then((response) => {
                    weather.date2 = response.data
                })
        }).then(() => {
            axios.get(`http://api.wunderground.com/api/500fc45859e1f98f/history_${dates.date3}/q/${state}/${city}.json`)
                .then((response) => {
                    weather.date3 = response.data
                })
        }).then(() => {
            response.json()
            response.json(weather.date1)
            response.json(weather.date2)
            response.json(weather.date3)
        })
        .catch((error) => { console.log(error) })
})


module.exports = router