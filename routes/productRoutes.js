const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router
  .route('/')
  .get(productController.getAllProducts)

router
  .route('/cart/add')
  .post(productController.addToCart)

router
  .route('/cart/remove/:userId/:productId')
  .get(productController.removeFromCart)  

router
  .route('/wishlist/add')
  .post(productController.addToWishList)

router
  .route('/wishlist/remove/:userId/:productId')
  .get(productController.removeFromWishList)

router
  .route('/:id')
//  .get(productController.getProduct)
//  .post(productController.createProduct)

module.exports = router;