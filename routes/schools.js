const router = require('express').Router();
let School = require('../models/school.model');

router.route('/').get((req, res) => {
  School.find()
    .then((school) => res.json(school))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const school = req.body.school;
  const description = req.body.description;
  const address = req.body.address;

  const newSchool = new School({
    school,
    description,
    address,
  });

  newSchool
    .save()
    .then(() => res.json('School added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  School.findById(req.params.id)
    .then((school) => res.json(school))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  School.findByIdAndDelete(req.params.id)
    .then(() => res.json('School deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  School.findById(req.params.id)
    .then((school) => {
      school.school = req.body.school;
      school.description = req.body.description;
      school.address = req.body.address;

      school
        .save()
        .then(() => res.json('School updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
