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

// In order for one to be able to populate a list of all
// states in a region, use the virtual function
RegionSchema.virtual('states', {
  ref: 'State',
  localField: '_id',
  foreignField: 'region',
  toJSON: { virtuals: true }, //So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, //So `console.log()` and other functions that use `toObject()` include virtuals
});

module.exports = mongoose.model('Region', RegionSchema);
