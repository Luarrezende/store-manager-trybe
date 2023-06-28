const { expect } = require('chai');
const sinon = require('sinon');
const { productService } = require('../../../src/services');
const { productModel } = require('../../../src/models');
const { arr } = require('../mocks/products');

describe('verifica productService', function () {
  it('se todos os produtos são selecionados', async function () {
    sinon.stub(productModel, 'getAll').resolves(arr);
    
    const products = await productService.getAll();

    expect(products.status).to.be.deep.equal('SUCCESSFUL');
  });
  it('se um produto não é encontrado pelo id', async function () {
    sinon.stub(productModel, 'getId').resolves(undefined);

    const inputId = 5;
    
    const products = await productService.getId(inputId);

    expect(products.status).to.be.equal('NOT_FOUND');
    expect(products.result.message).to.be.equal('Product not found');
  });
  it('se um produto é encontrado pelo id', async function () {
    sinon.stub(productModel, 'getId').resolves(arr[1]);

    const inputId = 2;
    
    const products = await productService.getId(inputId);

    expect(products.status).to.be.equal('SUCCESSFUL');
  });
  afterEach(function () {
    sinon.restore();
  });
});
