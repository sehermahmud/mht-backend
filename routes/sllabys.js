const router = require('express').Router();
let Sllabys = require('../models/sllabys.model');

router.route('/').get((req, res) => {
  Sllabys.find()
    .then((sllabys) => res.json(sllabys))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const sllabys = req.body.sllabys;
  const sllabysCode = req.body.sllabysCode;

  const newSllabys = new Sllabys({
    sllabys,
    sllabysCode,
  });

  newSllabys
    .save()
    .then(() => res.json('Sllabys added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sllabys.findById(req.params.id)
    .then((sllabys) => res.json(sllabys))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Sllabys.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sllabys deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Sllabys.findById(req.params.id)
    .then((sllabys) => {
      sllabys.sllabys = req.body.sllabys;
      sllabys.sllabysCode = req.body.sllabysCode;

      sllabys
        .save()
        .then(() => res.json('Sllabys updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
