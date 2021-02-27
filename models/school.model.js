const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    school: { type: String, required: false },
    description: { type: String, required: false },
    address: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const School = mongoose.model('School', schoolSchema);

module.exports = School;
