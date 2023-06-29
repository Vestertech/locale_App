const { StatusCodes } = require('http-status-codes');
const { customAPIError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }
  // sreturn res.status(customError.statusCode).json({ msg: customError.msg });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};
module.exports = errorHandler;
