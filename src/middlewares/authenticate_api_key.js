const bcrypt = require('bcryptjs');

const Developer = require('../models/developer_schema');
const asyncWrapper = require('./asyncWrapper');
const { unAuthenticatedError } = require('../errors');

const authenticateKey = asyncWrapper(async (req, res, next) => {
  // Add API key to request headers
  const apiKey = req.headers['x-api-key'] || req.headers['X-API-Key'];

  if (!apiKey) {
    throw new unAuthenticatedError('API key is required');
  }
  // Generate a maskedKey for the APIkey for easy search in the database
  const maskedKey = `${apiKey.slice(0, 4)}****${apiKey.slice(-4)}`;

  // Search the database for a similar key
  const matchApiKey = await Developer.findOne({ maskedKey });

  if (!matchApiKey || matchApiKey.length === 0) {
    throw new unAuthenticatedError('API key is not valid');
  }

  // Use the mongoose method created in the schema to
  // compare the raw API key against the hashed key in the DB
  const isMatchAPIKey = await matchApiKey.compareAPIKey(apiKey);
  if (!isMatchAPIKey) {
    throw new unAuthenticatedError(
      'Unauthorized User, please provide a valid API key'
    );
  }

  req.user = apiKey;

  next();
});

module.exports = authenticateKey;
