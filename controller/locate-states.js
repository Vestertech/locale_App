const StateModel = require('../models/states');

const getAllStates = async (req, res) => {
  try {
    const states = await StateModel.find({
      _id: '649a38b8c9346a8e6e325d4e',
    }).populate('region');

    return console.log(spreadOut);

    res.status(200).json({ states });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllStates,
};
