const express = require('express');

const { createUser } = require('../controller/developer_contr');

const router = express.Router();

router.post('/', createUser);

module.exports = router;
