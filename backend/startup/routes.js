const express = require('express');
const productRoute = require('../routes/productsRoute.js');
const { notFound, errorHandler } = require('../middleware/ErrorMiddleware.js');

module.exports = function (app) {
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('API is running...');
  });

  app.use('/api/products', productRoute);

  app.use(notFound);
  app.use(errorHandler);
};
