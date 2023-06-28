const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productController } = require('../../../src/controllers');
const { productService } = require('../../../src/services');
const mocks = require('../mocks/products');

chai.use(sinonChai);

describe('verifica productsController', function () {
  it('se todos os produtos são selecionados', async function () {
    sinon.stub(productService, 'getAll').resolves(mocks.successuful);
    
    const req = {
      body: { },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mocks.arr);
  });
  afterEach(function () {
    sinon.restore();
  });
});