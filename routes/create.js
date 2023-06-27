const express = require('express');

const {
  createStatesInNorthWestRegion,
  createRegion,
  createStatesInNorthCentralRegion,
  createStatesInNorthEasternRegion,
  createStatesInSouthEasternRegion,
} = require('../controller');

const router = express.Router();

router.post('/region', createRegion);
router
  .route('/state')
  .post(createStatesInNorthCentralRegion)
  .post(createStatesInNorthWestRegion)
  .post(createStatesInNorthEasternRegion)
  .post(createStatesInSouthEasternRegion);
// router.post('/state', createStatesInNorthWestRegion);

module.exports = router;
