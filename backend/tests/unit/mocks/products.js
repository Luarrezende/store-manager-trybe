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

const postMock = {
  id: 16,
  name: 'Luar',
};

const postSuccessful = {
  status: 'CREATED',
  result: {
    id: 16,
    name: 'Luar',
  },
};

module.exports = {
  arr,
  successful,
  seccessfulId,
  postMock,
  postSuccessful,
};