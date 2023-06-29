const { salesService } = require('../services');
const mapStatusHTTP = require('../utils');

const getAll = async (_req, res) => {
  const { status, result } = await salesService.getAll();
  return res.status(mapStatusHTTP(status)).json(result);
};

const getId = async (req, res) => {
  const { id } = req.params;

  const { status, result } = await salesService.getId(id);
  
  return res.status(mapStatusHTTP(status)).json(result);
};

const postName = async (req, res) => {
  const { body } = req;

  const { status, result } = await salesService.postName(body);

  return res.status(mapStatusHTTP(status)).json(result);
};

module.exports = {
  getAll,
  getId,
  postName,
};