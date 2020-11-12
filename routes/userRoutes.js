const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/cart')
  .get(userController.getCart);
 // .post(userController.createUser); 
 
router
  .route('/wishlist')
  .get(userController.getWishList);

router
  .route('/:id')
  .get(userController.getUser);
  

router
  .route('/current_user')
  .get(userController.getCurrentUser);  

module.exports = router;