const { productService } = require('../services');
const mapStatusHTTP = require('../utils');

const getAll = async (_req, res) => {
  const { status, result } = await productService.getAll();
  return res.status(mapStatusHTTP(status)).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;

  const { status, result } = await productService.getId(id);
  
  return res.status(mapStatusHTTP(status)).json(result);
};

module.exports = {
  getAll,
  getId,
};
