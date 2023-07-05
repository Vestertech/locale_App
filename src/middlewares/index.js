const asyncWrapper = require('./asyncWrapper');
const authenticateKey = require('./authenticate_api_key');
const cacheMiddleware = require('./cache_middleWare');
const errorHandler = require('./errorHandler');
const notFound = require('./notFound');
const rateLimit = require('./rate_limit_mw');
const jwtAuthentication = require('./jwt_auth');

module.exports = {
  asyncWrapper,
  authenticateKey,
  cacheMiddleware,
  errorHandler,
  notFound,
  rateLimit,
  jwtAuthentication,
};
