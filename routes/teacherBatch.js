// const router = require('express').Router();
// let Teacher = require('../models/teacher.model');
// let TeacherBatch = require('../models/teacherBatch.model');

// router.route('/:teacherId/allTeacherBatch').get(async (req, res) => {
//   const teacher = await Teacher.findOne({ _id: req.params.teacherId }).populate(
//     'teacherBatch'
//   );
//   res.send(teacher);
// });

// router.route('/:teacherId/addBatch').post(async (req, res) => {
//   const teacher = await Teacher.findOne({ _id: req.params.teacherId });

// const Batch = req.body.Batch;
// const batchPrice = req.body.batchPrice;
// const sllabys = req.body.sllabys;
// const grade = req.body.grade;
// const subject = req.body.subject;
// const batchSchedule = req.body.teacherSchedule;
// const expectedStudents = req.body.expectedStudents;
// const StartDate = req.body.StartDate;
// const EndDate = req.body.EndDate;

//   const teacherBatch = new TeacherBatch({
// Batch,
// batchPrice,
// sllabys,
// grade,
// subject,
// teacherSchedule,
// expectedStudents,
// StartDate,
// EndDate,
//   });

//   teacherBatch.teacher = teacher._id;
//   await teacherBatch.save();
//   await teacher.teacherBatch.push(teacherBatch._id);
//   teacher
//     .save()
//     .then(() => res.json('TeacherBatch added!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:teacherId/:teacherBatchId').get(async (req, res) => {
//   const teacher = await Teacher.findOne({ _id: req.params.teacherId }).populate(
//     'teacherBatch'
//   );
//   TeacherBatch.findById(req.params.teacherBatchId)
//     .then((teacher) => res.json(teacher))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:teacherBatchId').delete(async (req, res) => {
//   await TeacherBatch.findByIdAndDelete(req.params.teacherBatchId);
//   res.send({ message: 'TeacherBatch deleted.' });
// });

// router.route('/update/:teacherBatchId').post((req, res) => {
//   TeacherBatch.findById(req.params.teacherBatchId)
//     .then((teacherBatch) => {
// teacherBatch.Batch = req.body.Batch;
// teacherBatch.batchPrice = req.body.batchPrice;
// teacherBatch.sllabys = req.body.sllabys;
// teacherBatch.grade = req.body.grade;
// teacherBatch.subject = req.body.subject;
// teacherBatch.teacherSchedule = req.body.teacherSchedule;
// teacherBatch.expectedStudents = req.body.expectedStudents;
// teacherBatch.StartDate = req.body.StartDate;
// teacherBatch.EndDate = req.body.EndDate;

//       teacherBatch
//         .save()
//         .then(() => res.json('TeacherBatch updated!'))
//         .catch((err) => res.status(400).json('Error: ' + err));
//     })
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

// const router = require('express').Router();
// let TeacherBatch = require('../models/teacherBatch.model');

// router.route('/').get((req, res) => {
//   TeacherBatch.find()
//     .then((teacher) => res.json(teacher))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const Batch = req.body.Batch;
//   const batchPrice = req.body.batchPrice;
//   const sllabys = req.body.sllabys;
//   const grade = req.body.grade;
//   const subject = req.body.subject;
//   const teacherSchedule = req.body.teacherSchedule;
//   const expectedStudents = req.body.expectedStudents;
//   const StartDate = req.body.StartDate;
//   const EndDate = req.body.EndDate;

//   const newTeacher = new TeacherBatch({
//     Batch,
//     batchPrice,
//     sllabys,
//     grade,
//     subject,
//     teacherSchedule,
//     expectedStudents,
//     StartDate,
//     EndDate,
//   });

//   newTeacher
//     .save()
//     .then(() => res.json('TeacherBatch added!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   TeacherBatch.findById(req.params.id)
//     .then((teacher) => res.json(teacher))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   TeacherBatch.findByIdAndDelete(req.params.id)
//     .then(() => res.json('TeacherBatch deleted.'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   TeacherBatch.findById(req.params.id)
//     .then((teacher) => {
//       teacherBatch.Batch = req.body.Batch;
//       teacherBatch.batchPrice = req.body.batchPrice;
//       teacherBatch.sllabys = req.body.sllabys;
//       teacherBatch.grade = req.body.grade;
//       teacherBatch.subject = req.body.subject;
//       teacherBatch.teacherSchedule = req.body.teacherSchedule;
//       teacherBatch.expectedStudents = req.body.expectedStudents;
//       teacherBatch.StartDate = req.body.StartDate;
//       teacherBatch.EndDate = req.body.EndDate;

//       teacher
//         .save()
//         .then(() => res.json('TeacherBatch updated!'))
//         .catch((err) => res.status(400).json('Error: ' + err));
//     })
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

const router = require('express').Router();
const Subject = require('../models/subject.model');
let Teacher = require('../models/teacher.model');
let TeacherBatch = require('../models/teacherBatch.model');

router.route('/:teacherId/allTeacherBatch').get(async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.params.teacherId }).populate(
    'teacherBatch'
  );
  res.send({ teacher });
});

router.route('/:teacherId/:subjectId/addBatch').post(async (req, res) => {
  // const teacher = await Teacher.findOne({ _id: req.params.teacherId });

  // const Batch = req.body.Batch;
  // const batchPrice = req.body.batchPrice;
  // const sllabys = req.body.sllabys;
  // const grade = req.body.grade;
  // const subject = req.body.subject;
  // const batchSchedule = req.body.batchSchedule;
  // const expectedStudents = req.body.expectedStudents;
  // const StartDate = req.body.StartDate;
  // const EndDate = req.body.EndDate;

  // const teacherBatch = new TeacherBatch({
  //   Batch,
  //   batchPrice,
  //   sllabys,
  //   grade,
  //   subject,
  //   batchSchedule,
  //   expectedStudents,
  //   StartDate,
  //   EndDate,
  // });

  // teacherBatch.teacher = teacher._id;
  // await teacherBatch.save();
  // await teacher.teacherBatch.push(teacherBatch._id);

  // teacher
  //   .save()
  //   .then(() => res.json('TeacherBatch added!'))
  //   .catch((err) => res.status(400).json('Error: ' + err));

  // res.send({ ok: true });

  // Find a teacher and subject
  const teacher = await Teacher.findOne({ _id: req.params.teacherId });
  const subjectbatch = await Subject.findOne({ _id: req.params.subjectId });
  // Create a teacher and subject
  const Batch = req.body.Batch;
  const batchPrice = req.body.batchPrice;
  const sllabys = req.body.sllabys;
  const grade = req.body.grade;
  const batchSubject = req.body.batchSubject;
  const batchSchedule = req.body.batchSchedule;
  const expectedStudents = req.body.expectedStudents;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;

  const teacherBatch = new TeacherBatch({
    Batch,
    batchPrice,
    sllabys,
    grade,
    batchSubject,
    batchSchedule,
    expectedStudents,
    StartDate,
    EndDate,
  });

  teacherBatch.teacher = teacher._id;
  teacherBatch.subjectbatch = subjectbatch._id;
  await teacherBatch.save();
  // Associate teacher and subject with teacherBatch
  teacher.teacherBatch.push(teacherBatch._id);
  subjectbatch.batchUnderSubject.push(teacherBatch._id);
  await subjectbatch.save();
  await teacher.save();

  res.send(teacherBatch);
});

router.route('/:teacherId/:teacherBatchId').get(async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.params.teacherId }).populate(
    'teacherBatch'
  );
  TeacherBatch.findById(req.params.teacherBatchId)
    .then((teacher) => res.json(teacher))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:teacherBatchId').delete(async (req, res) => {
  await TeacherBatch.findByIdAndDelete(req.params.teacherBatchId);
  res.send({ message: 'TeacherBatch deleted.' });
});

router.route('/update/:teacherBatchId').post((req, res) => {
  TeacherBatch.findById(req.params.teacherBatchId)
    .then((teacherBatch) => {
      teacherBatch.Batch = req.body.Batch;
      teacherBatch.batchPrice = req.body.batchPrice;
      teacherBatch.sllabys = req.body.sllabys;
      teacherBatch.grade = req.body.grade;
      teacherBatch.batchSubject = req.body.batchSubject;
      teacherBatch.batchSchedule = req.body.batchSchedule;
      teacherBatch.expectedStudents = req.body.expectedStudents;
      teacherBatch.StartDate = req.body.StartDate;
      teacherBatch.EndDate = req.body.EndDate;

      teacherBatch
        .save()
        .then(() => res.json('TeacherBatch updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
