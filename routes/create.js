const express = require('express');

const { createRegion } = require('../controller/create');

const router = express.Router();

router.post('/region', createRegion);

module.exports = router;
