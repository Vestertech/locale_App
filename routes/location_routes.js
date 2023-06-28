const express = require('express');

const authenticateKey = require('../middlewares/authenticate_api_key');
const {
  getAllStates,
  getState,
  getAllRegions,
  getRegion,
} = require('../controller');

const router = express.Router();

router.get('/regions', authenticateKey, getAllRegions);
router.get('/states', authenticateKey, getAllStates);
router.get('/state/:stateId', authenticateKey, getState);
router.get('/region/:regionId', authenticateKey, getRegion);
// router.get('/lga', authenticateKey, );

module.exports = router;
