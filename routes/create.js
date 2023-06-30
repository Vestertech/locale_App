const express = require('express');

const {
  // createStatesInNorthWestRegion,
  createRegion,
  // createStatesInNorthCentralRegion,
  // createStatesInNorthEasternRegion,
  // createStatesInSouthEasternRegion,
  createStatesInSouthSouthRegion,
  createStatesInSouthWesternRegion,
} = require('../controller');

const router = express.Router();

router.post('/region', createRegion);
router.post('/state/southwest', createStatesInSouthWesternRegion);
// .post(createStatesInNorthCentralRegion)
// .post(createStatesInNorthWestRegion)
// .post(createStatesInNorthEasternRegion)
// .post(createStatesInSouthEasternRegion)
router.post('/state/southsouth', createStatesInSouthSouthRegion);

// router.post('/state', createStatesInNorthWestRegion);

module.exports = router;
