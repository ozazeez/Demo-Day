module.exports = function(app, passport, db, axios) {

// normal routes ===============================================================

    // show the home page (will also have our signin links)
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
// AUTHENTICATE (FIRST signin) ==================================================
// =============================================================================

    // locally --------------------------------
        // signin ===============================
        // show the signin form
        app.get('/signin', function(req, res) {
            res.render('signin.ejs', { message: req.flash('signinMessage') });
        });

        // process the signin form
        app.post('/signin', passport.authenticate('local-signin', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signin', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash kit
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
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
