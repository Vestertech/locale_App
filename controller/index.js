const {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
} = require('./create_states');

const { getAllStates } = require('./get_all_states');

const { createRegion } = require('./create_regions');
const { getAllRegions } = require('./get_all_regions');

module.exports = {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  getAllStates,
  getAllRegions,
};
