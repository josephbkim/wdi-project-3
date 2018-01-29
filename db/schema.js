const mongoose = require('mongoose')
const Schema = mongoose.Schema

console.log("hello from schema")
mongoose.Promise = global.Promise

const PlantSchema = new Schema(
    {
        name: String,
        sunlightNeeded: String,
        quantity: Number,
    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        share: Boolean,
        plants: [PlantSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)

const GardenSchema = new Schema(
    {
        name: String,
        address: String,
        city: String,
        state: String,
        spaceAvailable: Boolean,
        totalNumberOfPlots: {
            type: Number,
            default: 6
        },
        costOfPlot: {
            type: Number,
            default: 200
        },
        users: [UserSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)

module.exports = {
    GardenSchema,
    UserSchema,
    PlantSchema
}
