const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema for Local Government Area
const LgaSchema = Schema({
  lgaName: {
    type: [],
    required: true,
    trim: true,
  },
  // metadata: {
  //   type: mongoose.Schema.Types.Mixed,
  // },
});

//module.exports = mongoose.model('Lga', LgaSchema);
