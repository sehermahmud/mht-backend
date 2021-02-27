const router = require('express').Router();
let Batches = require('../models/batch.model');

router.route('/').get((req, res) => {
  Batches.find()
    .then((batch) => res.json(batch))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Batch = req.body.Batch;
  const batchPrice = req.body.batchPrice;
  const sllabys = req.body.sllabys;
  const grade = req.body.grade;
  const subject = req.body.subject;
  const batchSchedule = req.body.batchSchedule;
  const expectedStudents = req.body.expectedStudents;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;

  const newBatch = new Batches({
    Batch,
    batchPrice,
    sllabys,
    grade,
    subject,
    batchSchedule,
    expectedStudents,
    StartDate,
    EndDate,
  });

  newBatch
    .save()
    .then(() => res.json('Batch added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Batches.findById(req.params.id)
    .then((batch) => res.json(batch))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Batches.findByIdAndDelete(req.params.id)
    .then(() => res.json('Batch deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Batches.findById(req.params.id)
    .then((batch) => {
      batch.Batch = req.body.Batch;
      batch.batchPrice = req.body.batchPrice;
      batch.sllabys = req.body.sllabys;
      batch.grade = req.body.grade;
      batch.subject = req.body.subject;
      batch.batchSchedule = req.body.batchSchedule;
      batch.expectedStudents = req.body.expectedStudents;
      batch.StartDate = req.body.StartDate;
      batch.EndDate = req.body.EndDate;

      batch
        .save()
        .then(() => res.json('Batch updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
