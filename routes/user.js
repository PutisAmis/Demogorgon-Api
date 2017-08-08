const passport = require("passport");
const userCtrl = require("../controllers/user");
require("../lib/passportJwt");

module.exports = app =>{
    app.post('/user', passport.authenticate('jwt', { session: false }), userCtrl.addUser);
    
    /**
     * Ruta de testeo
        app.get('/', passport.authenticate('jwt', { session: false }), (req, res) =>{
            res.send(res.token);
        });
    */

    /*
    app.get('/users',  passport.authenticate('jwt', { session: false }), (req, res) =>{

    });

    app.get('/user/:id', passport.authenticate('jwt', { session: false }),  (req, res) =>{

    });

    app.put('/user/:id', passport.authenticate('jwt', { session: false }), (req, res) =>{

    });

    app.delete('/user/:id', passport.authenticate('jwt', { session: false }),  (req, res) =>{

    });
    */
}