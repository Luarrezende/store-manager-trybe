const express = require('express');

const router = express.Router();

const { productController } = require('../controllers');
const { validateName } = require('../middlewares/validadeProduct');

router.get('/', productController.getAll);

router.get('/:id', productController.getId);

router.post('/', validateName, productController.postName);

module.exports = router;