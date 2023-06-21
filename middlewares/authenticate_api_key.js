const bcrypt = require('bcryptjs');

const Developer = require('../models/developer_schema');
const asyncWrapper = require('./asyncWrapper');
const { unAuthenticatedError } = require('../errors');
const { request } = require('express');

const authenticateKey = async (req, res, next) => {
  // Add API key to request headers

  const apiKey = req.headers['x-api-key'] || req.headers[X - API - Key];

  if (!apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Generate a maskedKey for the APIkey for easy search in the database
  const maskedKey = `${apiKey.slice(0, 4)}****${apiKey.slice(-4)}`;

  try {
    const matchApiKey = await Developer.findOne({ maskedKey });

    if (!matchApiKey || matchApiKey.length === 0) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    // Use the mongoose method created in the schema to
    // compare the raw API key against the hashed key in the DB
    const isMatchAPIKey = await matchApiKey.compareAPIKey(apiKey);
    if (!isMatchAPIKey) {
      return res.status(401).json({ error: 'Unauthorized key' });
    }

    req.user = apiKey;

    // IMPLEMENT API USAGE LIMIT
    // If API key matches
    // chek the number of times the API has been used in a particular day
    // let {
    //   usage: { date, count },
    // } = matchApiKey;

    // let today = new Date().toISOString();

    // if (date === today) {
    //   if (count > 5) {
    //     return res.status(429).json({ message: 'Max API calls exceeded' });
    //   } else {
    //     count++;
    //     console.log(`Good API Call ${count}`);
    //   }
    // } else {
    //   date = today;
    //   count = 1;
    // }

    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = authenticateKey;
