const passport = require("passport");
require("../lib/passportfacebook");

module.exports = app => {

    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook',{
                                                                            session:false,
                                                                            failureRedirect: '/login' 
                                                                        }
    ), (req, res)=>{
        res.json({token:req.user, error:false});
    });
}