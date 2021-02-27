const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sllabysSchema = new Schema(
  {
    sllabys: { type: String, required: false },
    sllabysCode: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Sllabys = mongoose.model('Sllabys', sllabysSchema);

module.exports = Sllabys;
