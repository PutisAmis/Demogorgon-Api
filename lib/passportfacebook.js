const config = require("../core/config");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: config.auth.facebook.appId,
    clientSecret: config.auth.facebook.appSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'gender', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    done();
  }
));