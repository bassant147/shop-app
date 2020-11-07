const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
  
router
  .route('/createUser')
    

router
  .route('/:id')
  .get(userController.getUser);
  

router
  .route('/current_user')
  .get(userController.getCurrentUser)  

module.exports = router;