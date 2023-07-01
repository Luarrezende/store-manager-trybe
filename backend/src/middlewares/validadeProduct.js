const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

const minNameLength = (req, res, next) => {
  const { name } = req.body;
  const nameLength = 5;
  if (name.length < nameLength) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  validateName,
  minNameLength,
};