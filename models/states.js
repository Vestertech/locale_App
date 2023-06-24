const mongoose = require('mongoose');

const LgaSchema = require('./lga');

const Schema = mongoose.Schema;

// Schema for States
const StateSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Region',
  },
  metadata: {
    capital: {
      type: String,
    },
    coordinates: {
      type: {
        latitude: {
          type: Number,
        },
        longitude: {
          type: Number,
        },
      },
    },
    population: {
      type: Number,
    },
  },
  lgas: [LgaSchema],
});

module.exports = mongoose.model('State', StateSchema);
