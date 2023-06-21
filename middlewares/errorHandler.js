const { StatusCodes } = require('http-status-codes');
const { customAPIError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  // let customError = {
  //   // set default
  //   statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  //   msg: err.message || 'Something went wrong, try again later',
  // };

  // if (err.email === 'ValidationError') {
  //   customError.msg = Object.values(err.errors)
  //     .map((item) => item.message)
  //     .join(',');
  //   customError.statusCode = StatusCodes.BAD_REQUEST;
  // }
  // if (err.code && err.code === 11000) {
  //   customError.msg = `Duplicate value entered for ${Object.keys(
  //     err.keyValue
  //   )} field, please choose another value`;
  //   customError.statusCode = StatusCodes.BAD_REQUEST;
  // }
  // if (err.email === 'CastError') {
  //   customError.msg = `No item found`;
  //   customError.statusCode = StatusCodes.NOT_FOUND;
  // }

  // return res.status(customError.statusCode).json({ msg: customError.msg });
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(`Something went wrong, please try again later`);
};

module.exports = errorHandler;
