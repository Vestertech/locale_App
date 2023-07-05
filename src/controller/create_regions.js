// Import models
const RegionModel = require('../models/regions');
const { asyncWrapper } = require('../middlewares');

const createRegion = asyncWrapper(async (req, res) => {
  const newRegion = await RegionModel.create({ ...req.body });

  res
    .status(200)
    .json({
      msg: `${newRegion.regionName} created successfully`,
      regionId: newRegion._id,
    });
});

// try {
//   // create a new instance of the region model

//   const newRegion = new RegionModel({
//     ...req.body,
//   });

//   await newRegion.save();

//   res.status(200).json({ msg: 'Success', regionId: newRegion._id });
// } catch (error) {
//   return res.status(500).json({ msg: error });
// }

module.exports = {
  createRegion,
};
