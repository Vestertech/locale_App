// Import models
const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createRegion = asyncWrapper(async (req, res) => {
  // create a new instance of the region model
  const newRegion = new RegionModel({
    ...req.body,
  });

  await newRegion.save();

  res.status(200).json({ msg: 'Success', regionId: newRegion._id });
});

module.exports = {
  createRegion,
};
