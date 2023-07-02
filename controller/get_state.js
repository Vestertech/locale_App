const mongoose = require('mongoose');
const StateModel = require('../models/states');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { notFoundError } = require('../errors');

const Cache = require('../config/redis');

const getState = asyncWrapper(async (req, res) => {
  const { stateId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(stateId)) {
    throw new notFoundError(`No item found with id ${stateId}`);
  }

  // Get cacheKey from the URL, so as to have a synchronised cachekey
  const cacheKey = req.originalUrl;

  const state = await StateModel.findOne({ _id: stateId }).select('-region');

  // console.log('Hit DB');
  Cache.redis.set(cacheKey, JSON.stringify(state));

  res.status(200).json({ data: state });
});

module.exports = { getState };
