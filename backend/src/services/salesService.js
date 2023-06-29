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

const postName = async (body) => {
  const insertId = await salesModel.fun();
  body.map(async (item) => {
    const { productId, quantity } = item;
    await salesModel.postName(insertId, productId, quantity);
  });
  return {
    status: 'CREATED',
    result: {
      id: insertId,
      itemsSold: body,
    },
  };
};

module.exports = {
  getAll,
  getId,
  postName,
};