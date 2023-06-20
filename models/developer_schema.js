const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { generateApiKey } = require('generate-api-key');

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
    default: '',
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

DeveloperSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  this.apiKey = await bcrypt.hash(this.apiKey, salt);

  next();
});

module.exports = mongoose.model('Developer', DeveloperSchema);
