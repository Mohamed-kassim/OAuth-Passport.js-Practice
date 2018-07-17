const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys'); 
const cookieSession = require('cookie-session');
const passport = require('passport');

//set up the view engine
app.set('view engine', 'ejs');

//set up the cookie session
app.use(cookieSession({
    maxAge: 24 *60 * 60 * 1000,
    keys:[keys.session.cookieKey],
}));


//initialize passport

app.use(passport.initialize());
app.use(passport.session());
//connect to database
mongoose.connect(keys.mongodb.dbURI,{ useNewUrlParser: true }, (err, db) =>{
  console.log(`connected to db ${keys.mongodb.dbURI} successfully`);});



app.use('/auth', authRoutes);
//create home route
app.get('/',(req, res) => {
    res.render('home');
});
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}
app.listen(3000, () => {
    console.log('hey listening to port 3000');
});