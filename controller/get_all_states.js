const StateModel = require('../models/states');
const asyncWrapper = require('../middlewares/asyncWrapper');

const getAllStates = asyncWrapper(async (req, res) => {
  const { numericFilters, sort, stateName, LGA, fields } = req.query;
  const queryObject = {};

  if (stateName) {
    queryObject.stateName = { $regex: stateName, $options: 'i' };
  }
  if (LGA) {
    queryObject.LGA = { $regex: LGA, $options: 'i' };
  }

  // Search states by population &&/|| numberOFLAGs
  if (numericFilters) {
    // Map the conditional signs with their relative mongoose equivalents
    // Store the signs in a regex so we can compare them
    // if (numericFilters === any Regex pattern)
    // Replace the pattern with the key of the operatorMap
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };

    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    let statePopulationField = await StateModel.find({});
    let getPopulation = statePopulationField.forEach((pop) => {
      return pop.state_metadata;
    });

    // Set fields with numerical values to search by
    const options = ['population', 'numberOfLGAs'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = StateModel.find(queryObject);

  // SORT
  if (sort) {
    // If more than one key is specified in the query object,
    // the string should be seperated by a space
    // so that the result is can sort each independently

    const sortList = sort.split(',').join(' ');

    // result.state_metadata = result.sort(sortList);
    result = result.sort(sortList);
  }
  //  else {
  //   result.state_metadata['population'] = result.sort(
  //     `state_metadata[population]`
  //   );
  // }

  // Return specific fields in the result
  if (fields) {
    const fildsList = fields.split(',').join(' ');
    result = result.select(fildsList);
  } else {
    // Exclude the region and local government areas field except explicitly specified
    result = result.select('-region -LGA');
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const docsPerPage = 3;
  const limit = Number(req.query.limit) || docsPerPage;
  const skip = limit * (page - 1);

  result = result.skip(skip).limit(limit);

  const states = await result;

  res.status(200).json({ states, nbHits: states.length });
});

module.exports = {
  getAllStates,
};
