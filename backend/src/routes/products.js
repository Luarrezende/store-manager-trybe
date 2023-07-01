const express = require('express');

const router = express.Router();

const { productController } = require('../controllers');
const { validateName, minNameLength } = require('../middlewares/validadeProduct');

router.get('/', productController.getAll);

router.get('/:id', productController.getId);

router.post('/', validateName, minNameLength, productController.postName);

module.exports = router;