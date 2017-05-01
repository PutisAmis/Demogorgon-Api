const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavSchema = Schema({
    id_tatuador: {
        type: String,
        require: true
    },
    id_customer: {
        type: String,
        require: true
    }
})

const favModel = mongoose.model("Favorite_user", FavSchema);
module.exports.FavoriteUser = favModel;