const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BatchSchema = new Schema({
  Batch: { type: String, required: false },
  batchPrice: { type: Number, required: false },
  sllabys: { type: String, required: false },
  grade: { type: String, required: false },
  subject: { type: String, required: false },
  batchSchedule: { type: String, required: false },
  expectedStudents: { type: String, required: false },
  StartDate: { type: Date, required: false },
  EndDate: { type: Date, required: false },
});

const Batches = mongoose.model('Batches', BatchSchema);

module.exports = Batches;
