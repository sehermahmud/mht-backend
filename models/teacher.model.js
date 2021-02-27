const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema(
  {
    teacherName: { type: String, required: false },
    email: { type: String, required: false },
    contactNumber: { type: String, required: false },
    subject: { type: String, required: false },
    percentage: { type: Number, required: false },
    teacherPhoto: { type: String, required: false },
    teacherNIDPhoto: { type: String, required: false },
    teacherLastCertificatePhoto: { type: String, required: false },
    teacherBatch: [
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

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
