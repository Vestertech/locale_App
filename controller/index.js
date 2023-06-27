const {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
} = require('./create_states');

const { getAllStates } = require('./locate-states');

const { createRegion } = require('./create_regions');

module.exports = {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  getAllStates,
};
