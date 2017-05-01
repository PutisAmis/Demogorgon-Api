const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkTagSchema = Schema({
    id_tag: {
        type: String,
        require: true
    },
    id_work: {
        type: String,
        require: true
    }
})

const workTagModel = mongoose.model("Work", WorkTagSchema);
module.exports.WorkTagModel = workTagModel;