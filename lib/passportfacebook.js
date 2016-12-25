const config = require("../core/config");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const jwt = require('jwt-simple');

passport.use(new FacebookStrategy({
    clientID: config.auth.facebook.appId,
    clientSecret: config.auth.facebook.appSecret,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'gender', 'photos', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
    let payload = {
        email: profile.email,
        id: profile.id
      };
    let secret = config.auth.jwtToken.secret;
    let token = jwt.encode(payload, secret);
    done(null, token);
  }
));