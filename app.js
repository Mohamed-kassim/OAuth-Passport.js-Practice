const express = require('express');
const app = express();
const authRoutes = require('./routes/auth-routes');

//set up the view engine
app.set('view engine', 'ejs');

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