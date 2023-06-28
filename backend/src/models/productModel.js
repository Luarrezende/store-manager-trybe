const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products;');
  return result;
};

const getId = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?;';
  const [[result]] = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  getAll,
  getId,
};
