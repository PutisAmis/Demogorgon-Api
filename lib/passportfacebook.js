const config            = require("../core/config");
const passport          = require('passport');
const FacebookStrategy  = require('passport-facebook').Strategy;
const tokenCtrl         = require('../models/token');
const UserModel         = require('../models/user').UserModel;

passport.use(new FacebookStrategy({
    clientID:     config.auth.facebook.appId,
    clientSecret: config.auth.facebook.appSecret,
    callbackURL:  "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'gender', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    let token = false;
    UserModel.findOne({email:profile.emails[0].value}, 
      (err, res)=>{

          if(err) return console.log('Error en la busqueda de usuarios en la base de datos');
          
          if(!res){
            let userModel         = new UserModel();
            userModel.name        = profile.displayName;
            userModel.provider    = 'facebook';
            userModel.provider_id = profile.id;
            userModel.email       = profile.emails[0].value;
            userModel.lastDate    = Date.now();
            userModel.role        = 'basic';
            let photoString       = !profile.photos.length? gravatar.generateRobot(): profile.photos[0].value;
            userModel.picture     = photoString;
            
            userModel.save((err, user)=>{
              if(err) return console.log('Error en guardar usuario en la base de datos');
              token = tokenCtrl.getToken(user);
              done(null, token);
            });
          }else if(res.provider === 'facebook' && res.provider_id === profile.id){
            token = tokenCtrl.getToken(res);
            done(null, token);
          }else done(null, token);
      });
}));