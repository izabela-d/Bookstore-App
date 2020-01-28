const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all posts
router.route('/').get(ProductController.getProducts);

//get single product
router.route('/:id').get(ProductController.getSingleProduct);


module.exports = router;
