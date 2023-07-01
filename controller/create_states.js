// Import models
const StateModel = require('../models/states');
const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { badRequestError } = require('../errors');

const createStatesInNorthWestRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: '64a021f53251328cbc21f90c',
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
  const region = await RegionModel.findById({
    _id: '64a021493251328cbc21f906',
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
  const region = await RegionModel.findById({
    _id: '64a021ae3251328cbc21f909',
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
  const region = await RegionModel.findById({
    _id: '64a0223d3251328cbc21f90f',
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

  // region.states.push(newState._id);
  // await region.save();

  await newState.save();
  res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});

const createStatesInSouthSouthRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: '649e46315118ccdd57ef3b78',
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

  await newState.save();
  return res
    .status(200)
    .json({ message: `${newState.stateName} created sucessfully` });
});

const createStatesInSouthWesternRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: '649e52114ff6f5f752a99eb1',
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
  createStatesInSouthSouthRegion,
  createStatesInSouthWesternRegion,
};
