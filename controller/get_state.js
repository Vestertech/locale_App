const mongoose = require('mongoose');
const StateModel = require('../models/states');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { notFoundError } = require('../errors');

const getState = asyncWrapper(async (req, res) => {
  const { stateId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(stateId)) {
    throw new notFoundError(`No item found with id ${stateId}`);
  }

  const state = await StateModel.findOne({ _id: stateId }).select('-region');

  res.status(200).json({ state });
});

module.exports = { getState };
