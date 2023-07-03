const { productModel } = require('../models');

const validateQuantity = (req, res, next) => {
  const quantities = req.body.map((item) => item.quantity);

  const isInvalid = quantities.some((item) => item <= 0);
  const isMissing = quantities.some((item) => item === undefined);

  if (isMissing) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (isInvalid) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validateId = async (req, res, next) => {
  const list = await productModel.getAll();
  const productIds = list.map((item) => item.id);

  const bodyId = req.body;
  const saleId = bodyId.map((item) => item.productId);

  const validate = saleId.some((item) => item === undefined);
  const validateProductId = saleId.every((item) => productIds.includes(item));

  if (validate) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!validateProductId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateQuantity,
  validateId,
};