const arr = [
  {
    saleId: 1,
    date: '2023-06-29T14:48:29.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-06-29T14:48:29.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-06-29T14:48:29.000Z',
    productId: 3,
    quantity: 15,
  },
];

const saleIdTest = [
  {
    date: '2023-06-29T14:48:29.000Z',
    productId: 3,
    quantity: 15,
  },
];

const successful = {
  status: 'SUCCESSFUL',
  result: arr,
};

const seccessfulId = {
  status: 'SUCCESSFUL',
  result: saleIdTest,
};

module.exports = {
  arr,
  saleIdTest,
  successful,
  seccessfulId,
};