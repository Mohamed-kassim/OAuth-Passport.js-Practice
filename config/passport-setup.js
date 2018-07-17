const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');


passport.use(new GoogleStrategy({
    //option for this strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
}, (accessToken, refreshToken, profie, done) => {
    //passport call back function
    console.log('passport callback func fired ');
}));