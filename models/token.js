const jwt = require('jwt-simple');
const config = require('../core/config');

module.exports = {
    getToken:
        (profile)=>{
            let token;
            let payload = {
                email:  profile.email,
                id:     profile.id
            };
            let secret  = config.auth.jwtToken.secret;
            token = jwt.encode(payload, secret);
            return token;
    }
};