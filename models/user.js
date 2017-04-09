const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        enum: ["facebook", "google", "tattoo"],
        required: true
    },
    provider_id: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        default: 'default.png',
        required: true
    },
    role: {
        type: String, 
        required: true, 
        enum:["sa", "administrator", 'basic', 'tattoo_artist', 'customer']
    },
    signedUpDate: {
        type: Date, 
        default: Date.now(),
        required: true
    },
    lastDate: {
        type: Date,
        required: true
    },
    loc: {
        type:{
            type: String,
            required: true,
            enum: ['Point', 'LineString', 'Polygon'],
            default: 'Point'
        },
        coordinates: [Number]
    },
    loc_name: {
        type:String,
        required: true
    },
    sanitary: {
        type: Boolean,
        default: false,
        required: true
    }
});

const userModel = mongoose.model("User", UserSchema);
module.exports.UserModel = userModel;