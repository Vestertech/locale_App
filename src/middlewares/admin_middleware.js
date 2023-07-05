const asyncWrapper = require('./asyncWrapper');

const adminMiddleware = asyncWrapper(async (req, res, next) => {
  // Get the role from the request object
  const { role } = req.user;
  if (role !== process.env.ADMIN_ROLE) {
    throw new unAuthenticatedError('User not authorized to access the route');
  }

  next();
});

module.exports = adminMiddleware;
