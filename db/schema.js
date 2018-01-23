const mongoose = require('mongoose')
const Schema = mongoose.Schema

console.log("hello from schema")
mongoose.Promise = global.Promise

const PlantSchema = new Schema(
    {
        name: String,
        sunlightNeeded: String,
        quanity: Number,
    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema(
    {
        firstName: String,
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
