// const sinon = require('sinon');
// const { expect } = require('chai');
// const { validateName } = require('../../../src/middlewares/validadeProduct');

// describe('verifica middlewares', function () {
//   it('deve passar para o próximo middleware quando o campo name é válido', async function () {
//     const next = sinon.stub();
//     const req = { body: { name: 'John' } };
//     const res = {
//       status: sinon.stub().returnsThis(),
//       json: sinon.stub(),
//     };

//     await validateName(req, res, next);

//     expect(res.status).to.not.have.been.called();
//     expect(res.json).to.not.have.been.called();
//     expect(next).to.have.been.called();
//   });
//   it('deve retornar erro 400 quando o campo name está ausente', function () {
//     const req = { body: { name: '' } };
//     const res = { status: sinon.stub(), json: sinon.stub() };
//     const next = sinon.stub();

//     validateName(req, res, next);

//     expect(res.status).to.have.been.calledWith(400);
//     expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
//     expect(next).to.not.have.been.called();
//   });
//   it('deve retornar erro 422 quando o campo name tem menos de 5 caracteres', function () {
//     const req = { body: { name: 'Bob' } };
//     const res = { status: sinon.stub(), json: sinon.stub() };
//     const next = sinon.stub();

//     validateName(req, res, next);

//     expect(res.status).to.have.been.calledWith(422);
//     expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
//     expect(next).to.not.have.been.called();
//   });
//   afterEach(function () {
//     sinon.restore();
//   });
// });