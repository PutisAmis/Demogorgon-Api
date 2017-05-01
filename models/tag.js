const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = Schema({
    name: {
        type: String,
        require: true
    }
})

const tagModel = mongoose.model('Tag', TagSchema);

module.exports.TagModel = tagModel;