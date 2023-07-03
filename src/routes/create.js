const express = require('express');

const {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
  createStatesInSouthSouthRegion,
  createStatesInSouthWesternRegion,
} = require('../controller');

const router = express.Router();

router.post('/region', createRegion);
router.post('/state/south_west', createStatesInSouthWesternRegion);
router.post('/state/north_central', createStatesInNorthCentralRegion);
router.post('/state/north_west', createStatesInNorthWestRegion);
router.post('/state/north_east', createStatesInNorthEasternRegion);
router.post('/state/south_east', createStatesInSouthEasternRegion);
router.post('/state/south_south', createStatesInSouthSouthRegion);

module.exports = router;
