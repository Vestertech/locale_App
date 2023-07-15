// Import models
const StateModel = require("../models/states");
const RegionModel = require("../models/regions");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { badRequestError } = require("../errors");

const createStatesInNorthWestRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: "64addc97c03d80924e3bc3ec",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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

const createStatesInNorthCentralRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: "64ab3928c9a73ab687487046",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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

const createStatesInNorthEasternRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: "64addbbfc03d80924e3bc3e9",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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

const createStatesInSouthEasternRegion = asyncWrapper(async (req, res) => {
  const region = await RegionModel.findById({
    _id: "64addcdec03d80924e3bc3ef",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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
    _id: "64addd38c03d80924e3bc3f2",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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
    _id: "64addd6ac03d80924e3bc3f5",
  });

  if (!region || region.length === 0) {
    throw new badRequestError("Region not found");
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
