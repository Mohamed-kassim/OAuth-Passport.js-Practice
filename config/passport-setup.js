const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');
const User = require('../models/user-model');


passport.use(new GoogleStrategy({
    //option for this strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
}, (accessToken, refreshToken, profile, done) => {
    //passport call back function
    User.findOne({googleID: profile.id}).then((user) =>{
        if(user){
            //already have user
            console.log('user is already here');
        }
        else{
            User.create({
                username: profile.displayName,
                googleID: profile.id,
            }).then((user, err) =>{
                if(err) console.log(err);
                console.log(user.username, 'added successfully');
            });
        }
    })

}));