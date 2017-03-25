const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    provider: String,
    provider_id: String,
    email: String,
    picture: String,
    role: {type: String, enum:["superAdministrator", "administrator", 'inCharge', 'basic']},
    signedUpDate: {type: Date, default: Date.now()},
    lastDate: Date
});

const userModel = mongoose.model("User", UserSchema);
module.exports.UserModel = userModel;