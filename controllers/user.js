const UserModel = require ('../models/user').UserModel;
module.exports = {
    addUser: (req, res) =>{
        let user = res.body.user;
        let userModel = new UserModel({
            name: user.name,
            provider: user.provider,
            email: user.email,
            picture: user.picture,
            lastDate: Date.now
        });
        userModel.save( (err, user, numAffected) =>{
            if(err){
                return res.send({err: err}).end();
            }
            return res.send({err: false}).end();
        })        
    }

}