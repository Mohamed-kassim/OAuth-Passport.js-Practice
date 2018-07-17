const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');


passport.use(new GoogleStrategy({
    //option for this strategy
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,


}), () => {
    //passport call back function
});