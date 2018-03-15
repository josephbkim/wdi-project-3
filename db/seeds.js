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
        photo_url: 'http://www.thelocalgood.ca/wp-content/uploads/2015/03/photo.jpg',
        description: 'A non-profit group created in conjunction with the City of Sandy Springs to help turn this beautiful 24 acre preserve\
        into a usable recreation area for residents to enjoy.'
    })
    // seed User
    const martha = new User({
        firstName: 'Martha' ,
        lastName: 'Stewart',
        email: 'martha@gmail.com',
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
    martha.plants.push(kale, squash, pepper, greenBean)
    const ruth = new User({
        firstName: 'Ruth' ,
        lastName: 'Smith',
        email: 'ruth@gmail.com',
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
    ruth.plants.push(tomato, zucchini)
    const agatha = new User({
        firstName: 'Agatha',
        lastName: 'Christie',
        email: 'agatha@gmail.com',
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
    agatha.plants.push(hydrangea, daisy, sunflower)
    const hermione = new User({
        firstName: 'Hermione',
        lastName: 'Potter',
        email: 'voldemort@gmail.com',
        share: true
    })
    const orange = new Plant({
        name: 'Orange',
        sunlightNeeded:'A lot',
        quantity: 2
    })
    const lemon = new Plant({
        name: 'Lemon',
        sunlightNeeded:'A lot',
        quantity: 4
    })
    const lime = new Plant({
        name: 'Lime',
        sunlightNeeded:'A lot',
        quantity: 5
    })
    const rose = new Plant({
        name: 'Rose',
        sunlightNeeded: 'A lot',
        quantity: 6
    })
    hermione.plants.push(orange, lemon, lime, rose)
    lostCorner.users.push(martha, ruth, agatha, hermione)
    return lostCorner.save()
}).then(() => {
    const grantParkGarden = new Garden({
        name: 'Grant Park Garden',
        address: '970 Grant St',
        city: 'Atlanta',
        state: 'GA',
        photo_url: 'http://www.thelocalgood.ca/wp-content/uploads/2015/03/photo.jpg',
        description: 'A non-profit group created in conjunction with the City of Atlanta to help turn this beautiful 15 acre preserve into a usable recreation area for residents to enjoy.'
    })
    const ray = new User({
        firstName: 'Ray' ,
        lastName: 'Lewis',
        email: 'raylewis@gmail.com',
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
    ray.plants.push(kale, squash, pepper, greenBean)
    const brian = new User({
        firstName: 'Brian' ,
        lastName: 'Urlacher',
        email: 'bri@gmail.com',
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
    brian.plants.push(tomato, zucchini)
    const greg = new User({
        firstName: 'Greg',
        lastName: 'Ostertag',
        email: 'greg@gmail.com',
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

    
    greg.plants.push(hydrangea, daisy, sunflower)
    grantParkGarden.users.push(ray, brian, greg)
    return grantParkGarden.save()
}).then(() => {
    const cantonStGardens = new Garden({
        name: 'Canton St Gardens',
        address: '123 Canton St',
        city: 'Roswell',
        state: 'GA',
        totalNumberOfPlots: 4,
        photo_url: 'http://www.thelocalgood.ca/wp-content/uploads/2015/03/photo.jpg',
        description: 'A non-profit group created in conjunction with\
        the City of Roswell to help turn this beautiful 15 acre preserve\
        into a usable recreation area for residents to enjoy.'
    })
    const lindsay = new User({
        firstName: 'Lindsay' ,
        lastName: 'Green',
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
    cantonStGardens.users.push(lindsay, suzeanne, patty)
    return cantonStGardens.save()
}).catch((err) => {
    console.log(`*** ERROR SEEDING DATA ${err}`)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding the database
    
    Disconnected from Mongo DB`)
})
