const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = Schema({
    id_user_1: {
        type: String,
        require: true
    },
    id_user_2: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        require: true
    },
    issuing: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

const chatModel = mongoose.model('Chat', ChatSchema);

module.exports.ChatModel = chatModel;