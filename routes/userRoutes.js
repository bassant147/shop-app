const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getCart)
 // .post(userController.createUser);    

router
  .route('/:id')
  .get(userController.getUser)
//  
//  .get(userController.getWishList)
  

router
  .route('/current_user')
  .get(userController.getCurrentUser)  

module.exports = router;