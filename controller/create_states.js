// Import models
const StateModel = require('../models/states');
const RegionModel = require('../models/regions');

const createStatesInNorthWestRegion = async (req, res) => {
  try {
    const region = await RegionModel.findOne({
      _id: '649a30ca317b0c6948ffc9ec',
    });

    if (!region || region.length === 0) {
      return res.status(404).json({ msg: 'Not Found' });
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
    res.status(200).json({ message: 'State created successfully' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createStatesInNorthCentralRegion = async (req, res) => {
  try {
    const region = await RegionModel.findOne({
      _id: '649a3953c9346a8e6e325d51',
    });

    if (!region || region.length === 0) {
      return res.status(404).json({ msg: 'Not Found' });
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
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createStatesInNorthEasternRegion = async (req, res) => {
  try {
    const region = await RegionModel.findOne({
      _id: '649a40ee6a4914997828c149',
    });

    if (!region || region.length === 0) {
      return res.status(404).json({ msg: 'Not Found' });
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
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createStatesInSouthEasternRegion = async (req, res) => {
  try {
    const region = await RegionModel.findOne({
      _id: '649a4497e559e2f3f9e6dd24',
    });

    if (!region || region.length === 0) {
      return res.status(404).json({ msg: 'Not Found' });
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
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
};
