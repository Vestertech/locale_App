const express = require('express');

const authenticateKey = require('../middlewares/authenticate_api_key');
const { getAllStates, getAllRegions } = require('../controller');

const router = express.Router();

router.get('/regions', authenticateKey, getAllRegions);
router.get('/states', authenticateKey, getAllStates);
// router.get('/lga', authenticateKey, );

module.exports = router;
