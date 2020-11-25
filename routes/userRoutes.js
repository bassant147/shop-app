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
  .route('/order')
  .post(userController.placeOrder);

router
  .route('/order/:orderId')
  .get(userController.getOrderItemsAndPurchaseDate)

router
  .route('/purchase-history')
  .get(userController.getPurchaseHistory)
  
/* router
  .route('/:id')
  .get(userController.getUser); */

module.exports = router;