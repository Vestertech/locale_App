const mongoose = require('mongoose');

const { Schema } = mongoose;

// Schema for States
const StateSchema = Schema({
  stateName: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: Schema.Types.ObjectId,
    ref: 'Region',
  },
  state_metadata: {
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
  lgas: {
    type: Schema.Types.ObjectId,
    ref: 'Lga',
  },
});

module.exports = mongoose.model('State', StateSchema);
