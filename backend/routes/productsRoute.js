const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controller/ProductController.js');

router.get('/', getProducts);

router.get('/:id', getProductById);

module.exports = router;
