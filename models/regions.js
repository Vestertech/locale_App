const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for Region
const RegionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  states: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'State',
    },
  ],
  metadata: {
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
    size: {
      type: mongoose.Schema.Types.Mixed,
    },
    population: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
});

module.exports = mongoose.model('Region', RegionSchema);
