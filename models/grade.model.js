const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gradeSchema = new Schema(
  {
    grade: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
