const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all posts
router.route('/').get(ProductController.getProducts);

//get single product
router.route('/:id').get(ProductController.getSingleProduct);

// get products by range
router.route('/range/:startAt/:limit').get(ProductController.getProductsByRange);


module.exports = router;
