const router = require('express').Router();
let Teacher = require('../models/teacher.model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then((teacher) => res.json(teacher))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const teacherName = req.body.teacherName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const subject = req.body.subject;
  const percentage = req.body.percentage;
  const teacherPhoto = req.body.teacherPhoto;
  const teacherNIDPhoto = req.body.teacherNIDPhoto;
  const teacherLastCertificatePhoto = req.body.teacherLastCertificatePhoto;

  const newTeacher = new Teacher({
    teacherName,
    email,
    contactNumber,
    subject,
    percentage,
    teacherPhoto,
    teacherNIDPhoto,
    teacherLastCertificatePhoto,
  });

  newTeacher
    .save()
    .then(() => res.json('Teacher added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => res.json(teacher))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json('Teacher deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Teacher.findById(req.params.id)
    .then((teacher) => {
      teacher.teacherName = req.body.teacherName;
      teacher.email = req.body.email;
      teacher.contactNumber = req.body.contactNumber;
      teacher.subject = req.body.subject;
      teacher.percentage = req.body.percentage;
      teacher.teacherPhoto = req.body.teacherPhoto;
      teacher.teacherNIDPhoto = req.body.teacherNIDPhoto;
      teacher.teacherLastCertificatePhoto =
        req.body.teacherLastCertificatePhoto;

      teacher
        .save()
        .then(() => res.json('Teacher updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
