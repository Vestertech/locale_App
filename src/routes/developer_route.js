const express = require('express');

const { createUser, createAdminUser, loginUser } = require('../controller');

const router = express.Router();

router.post('/register', createUser);
router.post('/register/admin', createAdminUser);
router.post('/login/admin', loginUser);
module.exports = router;
