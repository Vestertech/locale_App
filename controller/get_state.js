const StateModel = require('../models/states');

const getState = async (req, res) => {
  try {
    const { stateId } = req.params;

    const state = await StateModel.findOne({ _id: stateId }).select('-region');

    res.status(200).json({ state });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getState };
