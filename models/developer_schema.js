const mongoose = require('mongoose');

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

module.exports = mongoose.model('Developer', DeveloperSchema);
