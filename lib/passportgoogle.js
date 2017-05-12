const passport       = require('passport');
const config         = require("../core/config");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel      = require('../models/user').UserModel;
const tokenCtrl      = require('../models/token');

passport.use(new GoogleStrategy({
        clientID        : config.auth.google.appId,
        clientSecret    : config.auth.google.appSecret,
        callbackURL:  "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
        let token = false;
        UserModel.findOne({email:profile.emails[0].value}, 
        (err, res)=>{

            if(err) return done(err);
            
            if(!res){
                let userModel         = new UserModel();
                userModel.name        = profile.displayName;
                userModel.provider    = 'google';
                userModel.provider_id = profile.id;
                userModel.email       = profile.emails[0].value;
                userModel.lastDate    = Date.now();
                userModel.role        = 'basic';
                let photoString       = !profile.photos[0].value? gravatar.generateRobot(): profile.photos[0].value;
                userModel.picture     = photoString;
                
                userModel.save((err, user)=>{
                    if(err) return done(err);
                    token = tokenCtrl.getToken(user);
                    done(null, token);
                });

            }else if(res.provider === 'google' && res.provider_id === profile.id){
                token = tokenCtrl.getToken(res);
                done(null, token);
                
            }else{
                return done(null, false, {message: res.provider});
            }
        });
    })
)