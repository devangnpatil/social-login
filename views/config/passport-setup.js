const passport  = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(new GoogleStrategy({
    clientId: keys.google.clientId,
    clientSecret: keys.google.clientSecret
    // option for google strategy
}), ()=>{
    // passport callback function
})
