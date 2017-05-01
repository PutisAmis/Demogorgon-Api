const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = Schema({
    id_tatuador: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    }
})

const workModel = mongoose.model("Work", WorkSchema);
module.exports.WorkModel = workModel;