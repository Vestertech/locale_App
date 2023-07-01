const mongoose = require('mongoose');
const RegionModel = require('../models/regions');
const { notFoundError } = require('../errors');
const asyncWrapper = require('../middlewares/asyncWrapper');

const Cache = require('../config/redis');

const getRegion = asyncWrapper(async (req, res) => {
  const { regionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(regionId)) {
    throw new notFoundError(`Id ${regionId} is not valid`);
  }

  // Get cacheKey from the URL, so as to have a synchronised cachekey
  const cacheKey = req.originalUrl;

  // cache miss
  const region = await RegionModel.findOne({ _id: regionId }).populate({
    path: 'states',
    select: 'stateName region',
  });

  console.log('Hit DB');
  Cache.redis.set(cacheKey, JSON.stringify(region));

  res.status(200).json({ data: region });
});

module.exports = { getRegion };
