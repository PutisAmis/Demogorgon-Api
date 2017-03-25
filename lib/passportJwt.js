const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/user').UserModel;
const passport = require('passport');
const config = require('../core/config');

const optsToken = {
    secretOrKey: config.auth.jwtToken.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

passport.use(new JwtStrategy(optsToken, function(payload, done) {
    UserModel.find({provider_id: payload.sub.id}, (err, user)=>{

        if(err) return console.log('error en la busqueda de la base de datos');

        if(user){
            done(null, user);
        }else{
            done(null, false);
        }
    });
}));