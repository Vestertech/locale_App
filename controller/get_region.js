const mongoose = require('mongoose');
const RegionModel = require('../models/regions');
const { notFoundError } = require('../errors');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getRegion = asyncWrapper(async (req, res) => {
  const { regionId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(regionId)) {
    throw new notFoundError(`No item found with id ${regionId}`);
  }

  const region = await RegionModel.findOne({ _id: regionId }).select('-states');

  res.status(200).json({ region });
});

module.exports = { getRegion };
