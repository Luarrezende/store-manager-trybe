const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { arr, saleIdTest } = require('../mocks/sales');

describe('verifica productsModel', function () {
  it('se todos os produtos são selecionados', async function () {
    sinon.stub(connection, 'execute').resolves([arr]);
    
    const products = await salesModel.getAll();

    expect(products).to.be.deep.equal(arr);
  });
  it('se um produto é encontrado pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([saleIdTest]);

    const inputId = 2;
    
    const products = await salesModel.getId(inputId);

    expect(products).to.be.deep.equal(saleIdTest);
  });
  afterEach(function () {
    sinon.restore();
  });
});