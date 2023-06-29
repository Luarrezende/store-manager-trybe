const { salesModel } = require('../models');

const getAll = async () => {
  const result = await salesModel.getAll();
  return { status: 'SUCCESSFUL', result };
};

const getId = async (id) => {
  const result = await salesModel.getId(id);
  if (!result || result.length === 0) {
    return { result: { message: 'Sale not found' }, status: 'NOT_FOUND' };
  }
  return { status: 'SUCCESSFUL', result };
};

module.exports = {
  getAll,
  getId,
};