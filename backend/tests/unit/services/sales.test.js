const { expect } = require('chai');
const sinon = require('sinon');
const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');
const { saleIdTest, arr } = require('../mocks/sales');

describe('verifica productService', function () {
  it('se todos os sales são selecionados', async function () {
    sinon.stub(salesModel, 'getAll').resolves(arr);
    
    const products = await salesService.getAll();

    expect(products.status).to.be.deep.equal('SUCCESSFUL');
  });
  it('se um sales não é encontrado pelo id', async function () {
    sinon.stub(salesModel, 'getId').resolves(undefined);

    const inputId = 5;
    
    const products = await salesService.getId(inputId);

    expect(products.status).to.be.equal('NOT_FOUND');
    expect(products.result.message).to.be.equal('Sale not found');
  });
  it('se um sales é encontrado pelo id', async function () {
    sinon.stub(salesModel, 'getId').resolves(saleIdTest);

    const inputId = 2;
    
    const products = await salesService.getId(inputId);

    expect(products.status).to.be.equal('SUCCESSFUL');
  });
  afterEach(function () {
    sinon.restore();
  });
});