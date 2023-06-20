const { generateApiKey } = require('generate-api-key');
const bcrypt = require('bcryptjs');

const developer = require('../models/developer_schema');
const asyncWrapper = require('../middlewares/asyncWrapper');

const createUser = asyncWrapper(async (req, res) => {
  const { body: data } = req;
  const { name, email, password } = data;
  const apiKey = generateApiKey({ method: 'uuidv4' });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedApiKey = await bcrypt.hash(apiKey, salt);

  const user = new developer({
    name,
    email,
    password: hashedPassword,
    apiKey: hashedApiKey,
  });

  await user.save();
  console.log(apiKey);

  res.status(200).json({});
});

module.exports = { createUser };
