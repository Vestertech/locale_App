const RegionModel = require('../models/regions');

const getRegion = async (req, res) => {
  try {
    const { regionId } = req.params;

    const region = await RegionModel.findOne({ _id: regionId }).select(
      '-states'
    );

    res.status(200).json({ region });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { getRegion };
