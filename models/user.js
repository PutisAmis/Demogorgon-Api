const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    provider: String,
    provider_id: String,
    email: String,
    picture: String,
    role: {type: String, enum:["administrator", "user"], default:"user"},
    signedUpDate: {type: Date, default: Date.now()},
    lastDate: Date
});

mongoose.model("User", UserSchema);