const jwt = require('jsonwebtoken');

const asyncWrapper = require('./asyncWrapper');
const { unAuthenticatedError } = require('../errors');

const jwtAuthentication = asyncWrapper(async (req, res, next) => {
  const authenticatedUser = req.headers.authorization;
  if (!authenticatedUser || !authenticatedUser.startsWith('Bearer ')) {
    throw new unAuthenticatedError('User not authenticated');
  }
  const authenticatedToken = authenticatedUser.split(' ')[1];

  const verifyToken = jwt.verify(authenticatedToken, process.env.JWT_SECRET);
  const { email, _id } = verifyToken;
  req.user = { email, userId: _id };
  next();
});

module.exports = jwtAuthentication;
