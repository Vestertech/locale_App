const { StatusCodes } = require('http-status-codes');
const { customAPIError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  // Handle errors from DB unique fields
  if (err.code && err.code === 11000) {
    let ErrorMsg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;

    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorMsg });
  }

  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }
  // sreturn res.status(customError.statusCode).json({ msg: customError.msg });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};
module.exports = errorHandler;
