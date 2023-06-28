const arr = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const successful = {
  status: 'SUCCESSFUL',
  result: arr,
};

const seccessfulId = {
  status: 'SUCCESSFUL',
  result: arr[1],
};

module.exports = {
  arr,
  successful,
  seccessfulId,
};