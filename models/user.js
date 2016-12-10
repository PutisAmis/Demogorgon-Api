const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    picture: String,
    role: {type: String, enum:["administrator", "user"], default:"user"},
    signedUp: {type: Numer, default: new Date()}
});

mongoose.model("User", UserSchema);