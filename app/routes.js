module.exports = function(app, passport, db, axios) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        db.collection('kit').find().toArray((err, result) => {
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : req.user,
            kit: result
          })
        })
    });

    // SIGNOUT ==============================
    app.get('/signout', function(req, res) {
        req.logout(() => {
          console.log('User has logged out!')
        });
        res.redirect('/');
    });

// Profile board routes ===============================================================

// =============================================================================
// AUTHENTICATE (FIRST login) ==================================================
// =============================================================================

    // locally --------------------------------
        // login ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the register page if there is an error
            failureFlash : true // allow flash kit
        }));

        // register =================================
        // show the register form
        app.get('/register', function(req, res) {
            res.render('register.ejs', { message: req.flash('registerMessage') });
        });

        // process the register form
        app.post('/register', passport.authenticate('local-register', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/register', // redirect back to the register page if there is an error
            failureFlash : true // allow flash kit
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
