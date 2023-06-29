const express = require('express');

const router = express.Router();

const { productController } = require('../controllers');

router.get('/', productController.getAll);

router.get('/:id', productController.getId);

router.post('/', productController.postName);

module.exports = router;