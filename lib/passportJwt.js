const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const config = require('../core/config');

const optsToken = {
    secretOrKey: config.auth.jwtToken.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

passport.use(new JwtStrategy(optsToken, function(payload, done) {
    done(null, payload);
}));