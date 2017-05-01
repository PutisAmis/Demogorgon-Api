const mogoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = Schema({
    score:{
        type: Number,
        require: true
    },
    id_tatuador: {
        type: String,
        require: true
    },
    id_cliente: {
        type: String,
        require: true
    },
    critic: {
        type: String,
        require: false
    }
})

const scoreModel = mongoose.model('Score', ScoreSchema);

module.exports.ScoreModel = scoreModel;