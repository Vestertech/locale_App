// Register user
const { createAdminUser, loginUser } = require('./create_admin_user');
const { createUser } = require('./create_user_contr');

const { createRegion } = require('./create_regions');

// Create states controller functions
const {
  createStatesInNorthWestRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  createStatesInSouthSouthRegion,
  createStatesInSouthWesternRegion,
} = require('./create_states');

// Get state(s) and region(s)
const { getAllStates } = require('./get_all_states');
const { getAllRegions } = require('./get_all_regions');
const { getState } = require('./get_state');
const { getRegion } = require('./get_region');

module.exports = {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  createStatesInSouthSouthRegion,
  createStatesInSouthWesternRegion,
  getAllStates,
  getAllRegions,
  getState,
  getRegion,
  createAdminUser,
  createUser,
  loginUser,
};
