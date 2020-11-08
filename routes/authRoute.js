const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/signup')
  .post(authController.signup)

router
  .route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router
  .route('/current_user')
  .get((req, res) => {
    res.send(req.user);
  });

module.exports = router;