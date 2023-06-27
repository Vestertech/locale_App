const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { badRequestError } = require('../errors');

const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please provide name'],
    minlength: 3,
    default: '',
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, 'Please provide email'],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    default: '',
  },
  apiKey: {
    type: String,
    required: true,
    //select: false, // Excludes the apikey field by default when querying
  },
  maskedKey: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    default: '',
  },
  usage: {
    date: { type: Date, default: new Date().toISOString() },
    count: { type: Number, default: 0 },
  },
});

// Hash the password and APIKey before saving to the database
DeveloperSchema.pre('save', async function (next) {
  if (!this.isModified('apiKey')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
    this.apiKey = await bcrypt.hash(this.apiKey, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Create a mongoose method to compare user entered APIkey(un-hashed) against the APIkey in the DB
DeveloperSchema.methods.compareAPIKey = async function (developerAPIKey) {
  try {
    const isMatch = await bcrypt.compare(developerAPIKey, this.apiKey);
    return isMatch;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model('Developer', DeveloperSchema);
