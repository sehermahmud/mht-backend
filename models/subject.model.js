const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    subject: { type: String, required: false },
    description: { type: String, required: false },
    batchUnderSubject: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TeacherBatch',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
