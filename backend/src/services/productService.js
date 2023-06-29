const { productModel } = require('../models');

const getAll = async () => {
  const result = await productModel.getAll();
  return { status: 'SUCCESSFUL', result };
};

const getId = async (id) => {
  const result = await productModel.getId(id);
  if (!result) {
    return { result: { message: 'Product not found' }, status: 'NOT_FOUND' };
  }
  return { status: 'SUCCESSFUL', result };
};

const postName = async (name) => {
  const result = await productModel.postName(name);
  return { status: 'CREATED', result };
};

module.exports = {
  getAll,
  getId,
  postName,
};