const RegionModel = require('../models/regions');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getAllRegions = asyncWrapper(async (req, res) => {
  const { fields } = req.query;
  const queryObject = {};

  let result = RegionModel.find(queryObject);
  // Return specific fields in the result
  if (fields) {
    const fildsList = fields.split(',').join(' ');
    result = result.select(fildsList);
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const docsPerPage = 3;
  const limit = Number(req.query.limit) || docsPerPage;
  const skip = limit * (page - 1);

  result = result.skip(skip).limit(limit);

  const regions = await result;

  res.status(200).json({ regions });
});

module.exports = {
  getAllRegions,
};
