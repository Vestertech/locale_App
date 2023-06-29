const badRequestError = require('./bad_Request');
const customAPIError = require('./customAPIError');
const unAuthenticatedError = require('./unAuthenticatedError');
const notFoundError = require('./not_found');

module.exports = {
  badRequestError,
  customAPIError,
  unAuthenticatedError,
  notFoundError,
};
