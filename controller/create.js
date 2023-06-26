// Import models
const StateModel = require('../models/states');
const mongoose = require('mongoose');
const RegionModel = require('../models/regions');

const regionsData = require('../data/region');
const lgaData = require('../data/lga');

const createRegion = async (req, res) => {
  try {
    const newRegion = new RegionModel({
      ...req.body,
    });

    const newState = new StateModel({
      ...req.body,
    });

    newRegion.states.push(newState._id);
    await newRegion.save();

    res.status(200).json({ msg: 'Success' });

    // newState.save().then((savedState) => {
    //     newRegion.states.push(savedState._id)
    //     return newRegion.save().then((savedRegion) => {
    //         console.log(savedRegion)
    //     })
    // })
  } catch (error) {
    return res.status(500).json({ error });
  }
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

const createStatesInNorthWestRegion = async (req, res) => {
  try {
    const region = await RegionModel.findOne({
      _id: '6499cd58e1b511275cff4665',
    });

    if (!region || region.length === 0) {
      return res.status(404).json({ msg: 'Not Found' });
    }

    const newState = new StateModel({
      ...req.body,
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

module.exports = {
  createRegion,
  //   createNorthCentralRegion,
  createStatesInNorthWestRegion,
};
