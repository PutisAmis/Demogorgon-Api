const passport = require("passport");
require("../lib/passportfacebook");
require("../lib/passportgoogle");
const authCtrl = require("../controllers/auth");

module.exports = app => {

    app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope: ['public_profile', 'email', 'user_location'] }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), authCtrl.sendResponse);

    app.get('/auth/google', passport.authenticate('google', { session: false, scope : ['profile', 'email'] }));

    app.get('/auth/google/callback', passport.authenticate('google', { session: false }), authCtrl.sendResponse);
}