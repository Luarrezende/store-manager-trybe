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

const postName = async (req, res) => {
  const { name } = req.body;

  const { status, result } = await productService.postName(name);

  return res.status(mapStatusHTTP(status)).json(result);
};

const updateName = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { status, result } = await productService.updateName(name, Number(id));

  return res.status(mapStatusHTTP(status)).json(result);
};

module.exports = {
  getAll,
  getId,
  postName,
  updateName,
};
