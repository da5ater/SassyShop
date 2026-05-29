const express = require('express');
const app = express();
const routes = require('./startup/routes.js');
routes(app);
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db.js');
connectDB();
const logger = require('./utils/logger.js');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
