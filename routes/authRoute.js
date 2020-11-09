const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/signup')
  .post(authController.signup)

router
  .route('/login')
  .post(authController.login)
  
router
  .route('/logout')
  .get((req, res) => {
    console.log('req.session.userId');
    console.log(req.session.userId);
    console.log('user logged out');
    req.session.userId = null;
    console.log('req.session.userId');
    console.log(req.session.userId);
    res.redirect('/');
  })

router
  .route('/current_user')
  .get((req, res) => {
    if(req.session.userId) res.send(req.session.userId.toString());
    else res.json({})
  });

module.exports = router;