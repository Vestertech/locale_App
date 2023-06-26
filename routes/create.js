const express = require('express');

const {
  createNorthCentralRegion,
  createStatesInNorthWestRegion,
  createRegion,
} = require('../controller/create');

const router = express.Router();

router.post('/region', createRegion);
router.post('/state', createStatesInNorthWestRegion);

module.exports = router;
