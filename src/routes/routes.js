//Importo y configuro el router
const express = require('express')
const router = express.Router()

//Para leer bien los req.body
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const { passport } = require('../auth/auth') //Importo mi passport ya configurado

//  INDEX
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render('main', { username: req.user.name })
    } else {
        res.redirect('/login');
    }
});

//  LOGIN
router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.render('login');
    }
});

router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin', successRedirect: '/' }));

router.get('/faillogin', (req, res) => res.render('login-error', {}));

/*
router.post('/login', function(req, res, next ){
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.json( { message: info.message }) }
      res.json(user);
    })(req, res, next);   
});
*/

//  SIGNUP
router.get('/signup', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.render('signup');
    }
});

router.post('/signup', passport.authenticate('signup', { failureRedirect: '/failsignup', successRedirect: '/' }));

router.get('/failsignup', (req, res) => res.render('signup-error', {}));

//  LOGOUT
router.get('/logout', (req, res) => {
    let usuario = ''
    if (req.isAuthenticated()) {
        usuario = req.user.name
    }
    req.logout((err) => {
        if (!err) {
            res.render('logout', { username: usuario });
        } else {
            res.redirect('/');
        }
    })
});

// check if logged
router.get('/checkAuth', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ auth: true })
    } else {
        res.json({ auth: false })
    }
});

//  FAIL ROUTE
router.use('*', (req, res) => res.status(404).render('routing-error', { originalUrl: req.originalUrl, method: req.method }));

module.exports = router