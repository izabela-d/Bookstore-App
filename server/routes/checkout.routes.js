const express = require('express');
const router = express.Router();

const CheckoutController = require('../controllers/checkout.controller');

// get all posts
router.route('/').post(CheckoutController.checkout);

module.exports = router;
