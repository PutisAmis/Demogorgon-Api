const passport = require("passport");
require("../lib/passportfacebook");
require("../lib/passportgoogle");

module.exports = app => {

    app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope: ['public_profile', 'email', 'user_location'] }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res)=>{
        let response = res.error? res.error : res.user;
        res.send(response);
    });

    app.get('/auth/google', passport.authenticate('google', { session: false, scope : ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res)=>{
        let response = res.error? res.error : res.user;
        res.send(response);
    });
}