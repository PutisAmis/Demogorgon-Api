const config = require("../core/config");
const mongoose = require("mongoose")
mongoose.PromiseProvider = require("bluebird");

module.exports = app => {
    mongoose.connect("mongodb://"+config.domain+"/"+config.dataBase.name, (error, res)=>{
        if (error) throw error;
        console.log("Conexión a la base de datos establecida...");
        app.listen(config.port,  () => {
            console.log('server running');
        });
    });
}