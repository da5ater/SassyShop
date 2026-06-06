const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // check for mongoose bad object id error
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    res.status(404);
    err.message = 'Resource not found';
  }

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
