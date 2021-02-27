const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentPermentId: { type: String, required: false },
    studentFullName: { type: String, required: true },
    email: { type: String, required: false },
    fatherName: { type: String, required: false },
    motherName: { type: String, required: false },
    studentPhoneNumber: { type: String, required: false },
    guardianPhoneNumber: { type: String, required: false },
    specialNote: { type: String, required: false },
    studentPhoto: { type: String, required: false },
    studentSchool: { type: String, required: false },
    sllabys: { type: String, required: false },
    subject: { type: String, required: false },
    checked: { type: String, required: false },
    checked1: { type: String, required: false },
    checked2: { type: String, required: false },
    checked3: { type: String, required: false },
    checked4: { type: String, required: false },
    checked5: { type: String, required: false },
    checked6: { type: String, required: false },
    checked7: { type: String, required: false },
    checked8: { type: String, required: false },
    checked9: { type: String, required: false },
    checked10: { type: String, required: false },
    checked11: { type: String, required: false },
    checked12: { type: String, required: false },
    checked13: { type: String, required: false },
    checked14: { type: String, required: false },
    checked15: { type: String, required: false },
    StartDate: { type: Date, required: false },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
