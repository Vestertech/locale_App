const express = require('express');

const authenticateKey = require('../middlewares/authenticate_api_key');
const { getAllStates } = require('../controller/location');

const router = express.Router();

router.get('/', authenticateKey, getAllStates);

module.exports = router;
