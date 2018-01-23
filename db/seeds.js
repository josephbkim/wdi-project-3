require('dotenv').config()

const Garden = require('./models/Garden')
const User = require('./models/User')
const Plant = require('./models/Plant')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO')
})

mongoose.connection.on('error', (error) => {
    console.error(`Mongo DB connection error: ${error}`)
    process.exit(-1)
})

Garden.remove({}).then(() => {
    const lostCorner = new Garden({
        name: 'Lost Corner Garden',
        address: '7300 Brandon Mill Road',
        city: 'Atlanta',
        state: 'GA',
        description: 'A non-profit group created in conjunction with\
        the City of Sandy Springs to help turn this beautiful 24 acre preserve\
        into a usable recreation area for residents to enjoy.'
    })
    // seed User
    const lindsay = new User({
        firstName: 'Lindsay' ,
        lastName: 'Lohan',
        email: 'lulu@gmail.com',
        share: true
    })
    // seed Plants
    const kale = new Plant({
        name: 'Kale',
        sunlightNeeded: 'Average',
        quantity: 3
    })
    const squash = new Plant({
        name: 'Squash',
        sunlightNeeded:'Average',
        quantity: 5
    })
    const pepper = new Plant({
        name: 'Pepper',
        sunlightNeeded:'Average',
        quantity: 2
    })
    const greenBean = new Plant({
        name: 'Green Bean',
        sunlightNeeded:'Average',
        quantity: 5
    })
    lindsay.plants.push(kale, squash, pepper, greenBean)
    const suzeanne = new User({
        firstName: 'Suzanne' ,
        lastName: 'Sommers',
        email: 'suzanne@gmail.com',
        share: true
    })
    const tomato = new Plant({
        name: 'Tomato',
        sunlightNeeded:'Average',
        quantity: 6
    })
    const zucchini = new Plant({
        name: 'Zucchini',
        sunlightNeeded:'Average',
        quantity: 7
    })
    suzeanne.plants.push(tomato, zucchini)
    const patty = new User({
        firstName: 'Patty',
        lastName: 'Arquette',
        email: 'patty@gmail.com',
        share: true
    })
    const hydrangea = new Plant({
        name: 'Hydrangea',
        sunlightNeeded:'Average',
        quantity: 2
    })
    const daisy = new Plant({
        name: 'Daisy',
        sunlightNeeded:'Average',
        quantity: 4
    })
    const sunflower = new Plant({
        name: 'Sunflower',
        sunlightNeeded:'Average',
        quantity: 5
    })
    const tulip = new Plant({
        name: 'Tulip',
        sunlightNeeded:'Some',
        quantity: 6
    })
    patty.plants.push(hydrangea, daisy, sunflower)
    lostCorner.users.push(lindsay, suzeanne, patty)
    return lostCorner.save()
}).then(() => {
    const grantParkGarden = new Garden({
        name: 'Grant Park Garden',
        address: '970 Grant St',
        city: 'Atlanta',
        state: 'GA',
        description: 'A non-profit group created in conjunction with\
        the City of Atlanta to help turn this beautiful 15 acre preserve\
        into a usable recreation area for residents to enjoy.'
    })
    const lindsay = new User({
        firstName: 'Lindsay' ,
        lastName: 'Lohan',
        email: 'lulu@gmail.com',
        share: true
    })
    // seed Plants
    const kale = new Plant({
        name: 'Kale',
        sunlightNeeded: 'Average',
        quantity: 3
    })
    const squash = new Plant({
        name: 'Squash',
        sunlightNeeded:'Average',
        quantity: 5
    })
    const pepper = new Plant({
        name: 'Pepper',
        sunlightNeeded:'Average',
        quantity: 2
    })
    const greenBean = new Plant({
        name: 'Green Bean',
        sunlightNeeded:'Average',
        quantity: 5
    })
    lindsay.plants.push(kale, squash, pepper, greenBean)
    const suzeanne = new User({
        firstName: 'Suzanne' ,
        lastName: 'Sommers',
        email: 'suzanne@gmail.com',
        share: true
    })
    const tomato = new Plant({
        name: 'Tomato',
        sunlightNeeded:'Average',
        quantity: 6
    })
    const zucchini = new Plant({
        name: 'Zucchini',
        sunlightNeeded:'Average',
        quantity: 7
    })
    suzeanne.plants.push(tomato, zucchini)
    const patty = new User({
        firstName: 'Patty',
        lastName: 'Arquette',
        email: 'patty@gmail.com',
        share: true
    })
    const hydrangea = new Plant({
        name: 'Hydrangea',
        sunlightNeeded:'Average',
        quantity: 2
    })
    const daisy = new Plant({
        name: 'Daisy',
        sunlightNeeded:'Average',
        quantity: 4
    })
    const sunflower = new Plant({
        name: 'Sunflower',
        sunlightNeeded:'Average',
        quantity: 5
    })
    const tulip = new Plant({
        name: 'Tulip',
        sunlightNeeded:'Some',
        quantity: 6
    })
    patty.plants.push(hydrangea, daisy, sunflower)
    grantParkGarden.users.push(lindsay, suzeanne, patty)
    return grantParkGarden.save()
}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})
