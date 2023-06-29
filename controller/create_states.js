// Import models
const StateModel = require('../models/states');
const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { badRequestError } = require('../errors');

const createStatesInNorthWestRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findOne({
    _id: '649a30ca317b0c6948ffc9ec',
  });

  if (!region || region.length === 0) {
    throw new badRequestError('Region not found');
  }

  const { LGA } = req.body;

  const newState = new StateModel({
    ...req.body,
    numberOfLGAs: LGA.length,
    region: region._id,
  });

  region.states.push(newState._id);
  await region.save();

  await newState.save();
  res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});

const createStatesInNorthCentralRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findOne({
    _id: '649a3953c9346a8e6e325d51',
  });

  if (!region || region.length === 0) {
    throw new badRequestError('Region not found');
  }

  const { LGA } = req.body;

  const newState = new StateModel({
    ...req.body,
    numberOfLGAs: LGA.length,
    region: region._id,
  });

  region.states.push(newState._id);
  await region.save();

  await newState.save();
  res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});

const createStatesInNorthEasternRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findOne({
    _id: '649a40ee6a4914997828c149',
  });

  if (!region || region.length === 0) {
    throw new badRequestError('Region not found');
  }

  const { LGA } = req.body;

  const newState = new StateModel({
    ...req.body,
    numberOfLGAs: LGA.length,
    region: region._id,
  });

  region.states.push(newState._id);
  await region.save();

  await newState.save();
  res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});

const createStatesInSouthEasternRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findOne({
    _id: '649a4497e559e2f3f9e6dd24',
  });

  if (!region || region.length === 0) {
    throw new badRequestError('Region not found');
  }

  const { LGA } = req.body;

  const newState = new StateModel({
    ...req.body,
    numberOfLGAs: LGA.length,
    region: region._id,
  });

  region.states.push(newState._id);
  await region.save();

  await newState.save();
  res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});
module.exports = {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
};
