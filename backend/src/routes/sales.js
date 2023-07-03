const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');
const { validateQuantity, validateId } = require('../middlewares/validadeSale');

router.get('/', salesController.getAll);

router.get('/:id', salesController.getId);

router.post('/', validateQuantity, validateId, salesController.postName);

module.exports = router;