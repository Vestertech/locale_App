const express = require('express');

const { createUser, createAdminUser, loginUser } = require('../controller');

const router = express.Router();

/*
    @desc Register a user
    @route POST /api/v1/user/register
    @access Public

*/
router.post('/register', createUser);

/*  
    @desc Register an admin user
    @route POST /api/v1/user/register/admin
    @access Private
 */
router.post('/register/admin', createAdminUser);

/*  
    @desc Login an admin user
    @route POST /api/v1/user/login/admin
    @access Private
 */
router.post('/login/admin', loginUser);
module.exports = router;
