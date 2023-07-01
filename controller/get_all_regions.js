const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');

const Cache = require('../config/redis');

const getAllRegions = asyncWrapper(async (req, res) => {
  const { fields } = req.query;

  // Get cacheKey from the URL, so as to have a synchronised cachekey
  const cacheKey = req.originalUrl;

  const queryObject = {};

  let result = RegionModel.find(queryObject);
  // Return specific fields in the result
  if (fields) {
    const fildsList = fields.split(',').join(' ');
    result = result.select(fildsList);
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const docsPerPage = 3;
  const limit = Number(req.query.limit) || docsPerPage;
  const skip = limit * (page - 1);

  result = result.skip(skip).limit(limit);

  const regions = await result;

  console.log('Hit DB');
  Cache.redis.set(cacheKey, JSON.stringify(regions));

  res.status(200).json({ data: regions });
});

module.exports = {
  getAllRegions,
};
