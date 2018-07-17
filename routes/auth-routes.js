const router = require('express').Router();

//auth login 
router.get('/login', (req, res) => {
    res.render('login');

});

//auth login with google
router.get('/login/google', (req, res) => {
    res.send('logging in with google');
});

//auth login  with fb
router.get('/login/fb', (req, res) => {
    res.send('logging in with fb'); 
});

//auth login with twitter
router.get('/login/twitter', (req, res) => {
    res.send('logging in with twitter'); 
});


//auth logout 
router.get('/logout', (req, res) => {
    //handled with passport js
    res.send('logging out');
});




module.exports = router;

