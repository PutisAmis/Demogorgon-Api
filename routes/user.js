const passport = require("passport");
const userCtrl = require("../controllers/user");
require("../lib/passportJwt");

module.exports = app =>{
    app.get('/', passport.authenticate('jwt', { session: false }), (res, req) =>{
        res.send(res.token);
    });
    app.get('/users', (res, req) =>{

    });

    app.get('/user/:id', (res, req) =>{

    });

    app.post('/user', passport.authenticate('jwt', { session: false }), (res, req) =>{
        res.send(res.token);
    });

    app.put('/user/:id', (res, req) =>{

    });

    app.delete('/user/:id', (res, req) =>{

    });
}