const { createRegion } = require('./create_regions');
const {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
} = require('./create_states');

const { getAllStates } = require('./get_all_states');
const { getAllRegions } = require('./get_all_regions');

const { getState } = require('./get_state');

module.exports = {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  getAllStates,
  getAllRegions,
  getState,
};
