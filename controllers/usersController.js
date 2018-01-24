const express = require('express')
const User = require('../db/models/User')

const router = express.Router() 

router.get('/', (request, response) => {
    
    console.log('TESTING USERS CONTROLLER')
})

module.exports = router