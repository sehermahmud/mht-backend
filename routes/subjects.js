const router = require('express').Router();
let Subject = require('../models/subject.model');
let Batches = require('../models/batch.model');
const TeacherBatch = require('../models/teacherBatch.model');

router.route('/').get((req, res) => {
  Subject.find()
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/batch').get(async (req, res) => {
  const subjectbatch = await Subject.findOne({ _id: req.params.subjectId });

  Subject.find()
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json('Error: ' + err));

  console.log(subjectbatch);
});

router.route('/add').post((req, res) => {
  const subject = req.body.subject;
  const description = req.body.description;

  const newSubject = new Subject({
    subject,
    description,
  });

  newSubject
    .save()
    .then(() => res.json('Subject added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Subject.findById(req.params.id)
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:subjectId/batch').get(async (req, res) => {
  const subject = await Subject.findOne({ _id: req.params.subjectId }).populate(
    'batchUnderSubject'
  );

  res.send(subject);

  // Subject.findById(req.params.id)
  //   .then((subject) => res.json(subject))
  //   .catch((err) => res.status(400).json('Error: ' + err));
});

// router.route('/:subjectId/batch/:id').get(async (req, res) => {
//   const subject = await Subject.findOne({ _id: req.params.subjectId }).populate(
//     'batchUnderSubject'
//   );

//   Batches.findById(req.params.id)
//     .then((batches) => res.json(batches))
//     .catch((err) => res.status(400).json('Error: ' + err));

//   // Subject.findById(req.params.id)
//   //   .then((subject) => res.json(subject))
//   //   .catch((err) => res.status(400).json('Error: ' + err));
// });

router.route('/:subject/:teacherBatchId').get(async (req, res) => {
  const subject = await Subject.findOne({ _id: req.params.subject }).populate(
    'batchUnderSubject'
  );
  TeacherBatch.findById(req.params.teacherBatchId)
    .then((subject) => res.json(subject))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(async (req, res) => {
  Batches.findById(req.params.id)
    .then((batches) => res.json(batches))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Subject.findByIdAndDelete(req.params.id)
    .then(() => res.json('Subject deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Subject.findById(req.params.id)
    .then((subject) => {
      subject.subject = req.body.subject;
      subject.description = req.body.description;

      subject
        .save()
        .then(() => res.json('Subject updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
