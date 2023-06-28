const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { arr } = require('../mocks/products');

describe('verifica productsModel', function () {
  it('se todos os produtos são selecionados', async function () {
    sinon.stub(connection, 'execute').resolves([arr]);
    
    const products = await productModel.getAll();

    expect(products).to.be.deep.equal(arr);
  });
  it('se um produto é encontrado pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[arr[1]]]);

    const inputId = 2;
    
    const products = await productModel.getId(inputId);

    expect(products).to.be.deep.equal(arr[1]);
  });
  afterEach(function () {
    sinon.restore();
  });
});