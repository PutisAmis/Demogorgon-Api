const passport = require("passport");
require("../lib/passportfacebook");

module.exports = app => {

    app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope: ['public_profile', 'email'] }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res)=>{
        let response = req.user === null? {token: null, error: true} : {token: req.user, error: false};
        res.send(response);
    });
}