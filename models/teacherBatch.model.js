const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherBatchSchema = new Schema(
  {
    Batch: { type: String, required: false },
    batchPrice: { type: Number, required: false },
    sllabys: { type: String, required: false },
    grade: { type: String, required: false },
    batchSubject: { type: String },
    batchSchedule: { type: String, required: false },
    expectedStudents: { type: String, required: false },
    StartDate: { type: Date, required: false },
    EndDate: { type: Date, required: false },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
      required: false,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const TeacherBatch = mongoose.model('TeacherBatch', teacherBatchSchema);

module.exports = TeacherBatch;
