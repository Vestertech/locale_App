const ratelimit = require('express-rate-limit');

const rateLimiter = ratelimit({
  windowMs: 30 * 60 * 1000, // 30 mins in milliseconds
  max: 20,
  message: 'You have exceeded the 20 requests in 30 mins limit!',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiter;
