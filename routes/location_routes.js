const express = require('express');

const authenticateKey = require('../middlewares/authenticate_api_key');
const { getAllStates } = require('../controller/locate-states');

const router = express.Router();

// router.get('/regions', authenticateKey, );
router.get('/states', authenticateKey, getAllStates);
// router.get('/lga', authenticateKey, );

module.exports = router;
