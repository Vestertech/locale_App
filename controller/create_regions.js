// Import models
const StateModel = require('../models/states');
const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createRegion = asyncWrapper(async (req, res) => {
  // create a new instance of the region model
  const newRegion = new RegionModel({
    ...req.body,
  });

  // create a new instance of the state model
  const newState = new StateModel({
    ...req.body,
  });

  // Becaue its a two way transaction,
  // push the newly created stateID to the statefield in the region created
  newRegion.states.push(newState._id);
  await newRegion.save();

  res.status(200).json({ msg: 'Success' });
});

module.exports = {
  createRegion,
};

// const createNorthCentralRegion = async (req, res) => {
//   try {
//     const region = await RegionModel.create({ ...req.body });

//     if (!region) {
//       return res.status(400).json({ msg: 'Unable to create region' });
//     }

//     return res.status(200).json({ message: 'Item created', region });
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// };
