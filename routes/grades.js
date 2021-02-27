const router = require('express').Router();
let Grade = require('../models/grade.model');

router.route('/').get((req, res) => {
  Grade.find()
    .then((grade) => res.json(grade))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const grade = req.body.grade;
  const description = req.body.description;

  const newGrade = new Grade({
    grade,
    description,
  });

  newGrade
    .save()
    .then(() => res.json('Grade added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Grade.findById(req.params.id)
    .then((grade) => res.json(grade))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Grade.findByIdAndDelete(req.params.id)
    .then(() => res.json('Grade deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Grade.findById(req.params.id)
    .then((level) => {
      level.grade = req.body.grade;
      level.description = req.body.description;

      level
        .save()
        .then(() => res.json('Grade updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
