const mongoose = required('mongoose');

const Schema = mongoose.Schema;

const RegionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  states: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'State',
    },
  ],
});

module.exports = mongoose.model('Region', RegionSchema);
