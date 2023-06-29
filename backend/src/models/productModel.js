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

const postName = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?);';
  const [{ insertId }] = await connection.execute(query, [name]);
  return {
    id: insertId,
    name,
  };
};

module.exports = {
  getAll,
  getId,
  postName,
};
