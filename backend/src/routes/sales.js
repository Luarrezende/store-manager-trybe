const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');

router.get('/', salesController.getAll);

router.get('/:id', salesController.getId);

module.exports = router;