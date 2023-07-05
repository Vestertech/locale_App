require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { badRequestError } = require('../errors');
const DeveloperModel = require('../models/developer_schema');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createAdminUser = asyncWrapper(async (req, res) => {
  const { body: data } = req;
  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new badRequestError('Please, all fields are required');
  }

  // Check if email is already registered
  const adminUserEmail = await DeveloperModel.findOne({ email });
  if (adminUserEmail) {
    throw new badRequestError('Email is already registered');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const adminUser = new DeveloperModel({
    name,
    email,
    password: hashedPassword,
    role: process.env.ADMIN_ROLE,
  });

  await adminUser.save();
  res.status(StatusCodes.CREATED).json({ email, Id: adminUser._id });
});

// LOGIN USER FUNCTION
const loginUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new badRequestError('email and password are required');
  }

  const user = await DeveloperModel.findOne({ email });

  if (!user) {
    throw new badRequestError('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new badRequestError('Invalid email or password');
  }

  // Create a signed jwt token
  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );

  res.status(StatusCodes.OK).json({ token });
});
module.exports = { createAdminUser, loginUser };
