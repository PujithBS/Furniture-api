const express = require('express');
const router = express.Router();
const { getProducts, updateProduct, createProduct } = require('../controllers/productController');

// map endpoints to controller functions
router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .put(updateProduct);

module.exports = router;
