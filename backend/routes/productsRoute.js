const express = require('express');
const router = express.Router();
const products = require('../models/productModel');
const asynchandler = require('express-async-handler');

router.get(
  '/',
  asynchandler(async (req, res) => {
    const allProducts = await products.find({});
    res.json(allProducts);
  })
);

router.get(
  '/:id',
  asynchandler(async (req, res) => {
    const product = await products.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      throw new Error('Product not found');
    }
  })
);

module.exports = router;
