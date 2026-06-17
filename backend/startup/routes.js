const express = require('express');
const productRoute = require('../routes/productsRoute.js');
const { notFound, errorHandler } = require('../middleware/ErrorMiddleware.js');
const userRoutes = require('../routes/userRoutes.js');
const cookieParser = require('cookie-parser');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.send('API is running...');
  });

  app.use('/api/products', productRoute);
  app.use('/api/users', userRoutes);

  app.use(notFound);
  app.use(errorHandler);
};
