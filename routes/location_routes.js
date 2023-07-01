const express = require('express');

const {
  getAllStates,
  getState,
  getAllRegions,
  getRegion,
} = require('../controller');

const router = express.Router();

router.get('/regions', getAllRegions);
router.get('/states', getAllStates);
router.get('/state/:stateId', getState);
router.get('/region/:regionId', getRegion);
// router.get('/lga', authenticateKey, );

module.exports = router;
