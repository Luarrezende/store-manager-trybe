const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');
const { expect } = require('chai');

chai.use(sinonChai);

const { validateQuantity, validateId } = require('../../../src/middlewares/validadeSale');
// const { mockProductList } = require('../mocks/salesTest');
// const { salesModel } = require('../../../src/models');

describe('verifica middlewares de sales', function () {
  it('deve retornar erro 400 se não existir quantidade', async function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.spy();
    
    req.body = [
      { quantity: 5 },
      { price: 10 },
    ];
    
    validateQuantity(req, res, next);

    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: '"quantity" is required' });
  });
  it('deve retornar erro 422 se quantity for menor que 1', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.spy();
    
    req.body = [
      { quantity: 3 },
      { quantity: 0 },
    ];
    
    validateQuantity(req, res, next);

    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
  it('deve chamar next na função validadeQuantity', function () {
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.spy();
    
    req.body = [
      { quantity: 3 },
      { quantity: 5 },
    ];
    
    validateQuantity(req, res, next);

    expect(next.called).to.be.equal(true);
  });
  it('Deve chamar next() quando todos os IDs de produto forem válidos', async function () {
    const req = { body: [{ productId: 1 }, { productId: 2 }, { productId: 3 }] };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    const next = sinon.stub();
    
    await validateId(req, res, next);

    expect(next.called).to.be.equal(true);
    expect(res.status.called).to.be.equal(false);
    expect(res.json.called).to.be.equal(false);
  });
  it('Deve retornar um erro 400 quando algum ID de produto estiver ausente', async function () {
    const req = { body: [{ productId: 1 }, { productId: undefined }, { productId: 3 }] };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.stub();

    await validateId(req, res, next);

    expect(next.called).to.be.equal(false);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({ message: '"productId" is required' });
  });

  it('Deve retornar um erro 404 quando algum ID de produto não for encontrado', async function () {
    const req = { body: [{ productId: 1 }, { productId: 4 }, { productId: 3 }] };
    const res = { status: sinon.stub().returnsThis(), json: sinon.spy() };
    const next = sinon.stub();

    await validateId(req, res, next);

    expect(next.called).to.be.equal(false);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Product not found' });
  });
  
  afterEach(function () {
    sinon.restore();
  });
});