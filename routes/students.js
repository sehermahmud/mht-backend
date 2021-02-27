const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/addStudent').post((req, res) => {
  const studentPermentId = req.body.studentPermentId;
  const studentFullName = req.body.studentFullName;
  const email = req.body.email;
  const fatherName = req.body.fatherName;
  const motherName = req.body.motherName;
  const studentPhoneNumber = req.body.studentPhoneNumber;
  const guardianPhoneNumber = req.body.guardianPhoneNumber;
  const specialNote = req.body.specialNote;
  const studentPhoto = req.body.studentPhoto;
  const studentSchool = req.body.studentSchool;
  const sllabys = req.body.sllabys;
  const subject = req.body.subject;
  const checked = req.body.checked;
  const checked1 = req.body.checked1;
  const checked2 = req.body.checked2;
  const checked3 = req.body.checked3;
  const checked4 = req.body.checked4;
  const checked5 = req.body.checked5;
  const checked6 = req.body.checked6;
  const checked7 = req.body.checked7;
  const checked8 = req.body.checked8;
  const checked9 = req.body.checked9;
  const checked10 = req.body.checked10;
  const checked11 = req.body.checked11;
  const checked12 = req.body.checked12;
  const checked13 = req.body.checked13;
  const checked14 = req.body.checked14;
  const checked15 = req.body.checked15;
  const StartDate = req.body.StartDate;

  let newStudent = new Student({
    studentPermentId,
    studentFullName,
    email,
    fatherName,
    motherName,
    studentPhoneNumber,
    guardianPhoneNumber,
    specialNote,
    studentPhoto,
    studentSchool,
    sllabys,
    subject,
    checked,
    checked1,
    checked2,
    checked3,
    checked4,
    checked5,
    checked6,
    checked7,
    checked8,
    checked9,
    checked10,
    checked11,
    checked12,
    checked13,
    checked14,
    checked15,
    StartDate,
  });

  newStudent
    .save()
    .then(() => res.json('Student Added: This Student has been added'))
    .catch((err) =>
      res.status(400).json('Student is not added, Error: ' + err)
    );
});

router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) =>
      res.status(400).json('Student is not found, Error: ' + err)
    );
});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() =>
      res.json(
        'Student Deleted!: This Student has been Deleted and now there is no way to get it back after what is done'
      )
    )
    .catch((err) =>
      res.status(400).json('Student is not Deleted, Error: ' + err)
    );
});

router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then((student) => {
      student.studentPermentId = req.body.studentPermentId;
      student.studentFullName = req.body.studentFullName;
      student.email = req.body.email;
      student.fatherName = req.body.fatherName;
      student.motherName = req.body.motherName;
      student.studentPhoneNumber = req.body.studentPhoneNumber;
      student.guardianPhoneNumber = req.body.guardianPhoneNumber;
      student.specialNote = req.body.specialNote;
      student.studentPhoto = req.body.studentPhoto;
      student.studentSchool = req.body.studentSchool;
      student.sllabys = req.body.sllabys;
      student.subject = req.body.subject;
      student.checked = req.body.checked;
      student.checked1 = req.body.checked1;
      student.checked2 = req.body.checked2;
      student.checked3 = req.body.checked3;
      student.checked4 = req.body.checked4;
      student.checked5 = req.body.checked5;
      student.checked6 = req.body.checked6;
      student.checked7 = req.body.checked7;
      student.checked8 = req.body.checked8;
      student.checked9 = req.body.checked9;
      student.checked10 = req.body.checked10;
      student.checked11 = req.body.checked11;
      student.checked12 = req.body.checked12;
      student.checked13 = req.body.checked13;
      student.checked14 = req.body.checked14;
      student.checked15 = req.body.checked15;
      student.StartDate = req.body.StartDate;

      student
        .save()
        .then(() => res.json('Student Updated!: This student has been updated'))
        .catch((err) =>
          res.status(400).json('Student is not Updated, Error: ' + err)
        );
    })
    .catch((err) =>
      res.status(400).json('Student is not Updated, Error: ' + err)
    );
});

module.exports = router;
