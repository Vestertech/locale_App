const express = require('express');

const {
  getAllStates,
  getState,
  getAllRegions,
  getRegion,
} = require('../controller');

const router = express.Router();

/* 
    @desc Get all states
    @route GET /api/v1/location/states
    @access Public
*/
router.get('/states', getAllStates);

/* 
    @desc Get single state
    @route GET /api/v1/location/state/:stateId
    @access Public
*/
router.get('/state/:stateId', getState);

/* 
    @desc Get all regions
    @route GET /api/v1/location/regions
    @access Public
*/
router.get('/regions', getAllRegions);

/* 
    @desc Get single region
    @route GET /api/v1/location/region/:regionId
    @access Public
*/
router.get('/region/:regionId', getRegion);

module.exports = router;
