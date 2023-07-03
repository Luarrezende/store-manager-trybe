const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');

chai.use(sinonChai);

const { validateName, minNameLength } = require('../../../src/middlewares/validadeProduct');

describe('verifica middlewares de products', function () {
  it('deve passar para o próximo middleware quando o campo name é válido', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.stub();
    
    req.body = { name: 'product' };
    
    validateName(req, res, next);

    expect(next.called).to.be.equal(true);
    expect(res.status.called).to.be.equal(false);
    expect(res.json.called).to.be.equal(false);
  });
  it('deve retornar erro 400 quando o campo name está ausente', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.stub();
    
    req.body = {};
    
    validateName(req, res, next);

    expect(next.called).to.be.equal(false);
    expect(res.status.calledWith(400)).to.be.equal(true);
    expect(res.json.calledWith({ message: '"name" is required' })).to.be.equal(true);
  });
  it('deve retornar erro 422 quando o campo name tem menos de 5 caracteres', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.stub();
    
    req.body = { name: 'caix' };
    
    minNameLength(req, res, next);

    expect(next.called).to.be.equal(false);
    expect(res.status.calledWith(422)).to.be.equal(true);
    expect(res.json.calledWith({ message: '"name" length must be at least 5 characters long' })).to.be.equal(true);
  });
  it('verifica se o next é chamado na função minNameLength', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.stub();
    
    req.body = { name: 'caixa' };
    
    minNameLength(req, res, next);

    expect(next.called).to.be.equal(true);
  });
  afterEach(function () {
    sinon.restore();
  });
});