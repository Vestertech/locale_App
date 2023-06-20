const { generateApiKey } = require('generate-api-key');
const bcrypt = require('bcryptjs');

const developer = require('../models/developer_schema');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createUser = asyncWrapper(async (req, res) => {
  const { body: data } = req;
  const { name, email, password } = data;
  const apiKey = generateApiKey({ method: 'uuidv4' });

  const user = new developer({
    name,
    email,
    password,
    apiKey,
  });

  await user.save();

  res.status(200).json({ apiKey });
});

module.exports = { createUser };
