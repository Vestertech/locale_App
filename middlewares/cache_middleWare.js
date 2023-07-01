const Cache = require('../config/redis');
const asyncWrapper = require('./asyncWrapper');

const cacheData = asyncWrapper(async (req, res, next) => {
  // Cache layer for region
  //   const cacheKey = `region:${regionId}`;

  const cacheKey = req.originalUrl;
  const cacheResults = await Cache.redis.get(cacheKey);

  if (cacheResults) {
    // cache hit
    return res.status(200).json({ data: JSON.parse(cacheResults) });
  } else {
    next();
  }
});

module.exports = cacheData;
