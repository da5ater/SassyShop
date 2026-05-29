// logger.js
const winston = require('winston');
const mongodb = require('winston-mongodb');
const dotenv = require('dotenv');
dotenv.config();

// 1. Initialize the baseline file-only logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.MongoDB({
      level: 'error',
      db: process.env.MongoDB_URL,
      options: { useUnifiedTopology: true },
      collection: 'logs',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    }),
  ],

  // 1. Automatically catches & logs synchronous crashes (e.g., outside Express)
  exceptionHandlers: [new winston.transports.File({ filename: 'exceptions.log' })],

  // 2. Automatically catches & logs unhandled async promises (Modern Winston v3 feature)
  rejectionHandlers: [new winston.transports.File({ filename: 'rejections.log' })],
});

// 2. Conditionally append the console transport right here
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// 3. Export the fully configured instance
module.exports = logger;
