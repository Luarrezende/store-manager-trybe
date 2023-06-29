const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const mocks = require('../mocks/sales');

chai.use(sinonChai);

describe('verifica salesController', function () {
  it('se todos os sales são selecionados', async function () {
    sinon.stub(salesService, 'getAll').resolves(mocks.successful);
    
    const req = {
      body: { },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.arr);
  });
  it('se o sale com o id é selecionado', async function () {
    sinon.stub(salesService, 'getId').resolves(mocks.seccessfulId);

    const req = {
      body: { },
      params: {
        id: 2,
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.getId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.saleIdTest);
  });
  afterEach(function () {
    sinon.restore();
  });
});