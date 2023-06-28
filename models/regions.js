const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for Region
const RegionSchema = Schema({
  regionName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  states: [
    {
      type: Schema.Types.ObjectId,
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
  },
  size: {
    type: mongoose.Schema.Types.Mixed,
  },
  population: {
    type: mongoose.Schema.Types.Mixed,
  },
});

module.exports = mongoose.model('Region', RegionSchema);
