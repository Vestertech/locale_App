const { generateApiKey } = require('generate-api-key');
const { StatusCodes } = require('http-status-codes');

const { badRequestError } = require('../errors');
const developer = require('../models/developer_schema');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createUser = asyncWrapper(async (req, res) => {
  const { body: data } = req;
  const { name, email, password } = data;

  // Check if email is already registered
  const existingDeveloper = await developer.findOne({ email });
  if (existingDeveloper) {
    throw new badRequestError('Email is already registered');
  }

  // Generate a random apikey
  const apiKey = generateApiKey({ method: 'uuidv4' });

  // Generate a maskedKey for easy retrieval
  const maskedKey = `${apiKey.slice(0, 4)}****${apiKey.slice(-4)}`;

  // Create a new user document
  const user = new developer({
    name,
    email,
    password,
    apiKey,
    maskedKey,
  });

  // The API key is hashed and the user document is saved
  await user.save();

  res.status(StatusCodes.CREATED).json({ maskedKey, apiKey });
});

module.exports = { createUser };
