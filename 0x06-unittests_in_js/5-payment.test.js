const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let utilsSpy;

  beforeEach(() => {
    if (!utilsSpy) {
      utilsSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    utilsSpy.log.resetHistory();
  });

  it('sendPaymentRequestToApi <200, 20> logs "The total is: 220" to the console', () => {
    sendPaymentRequestToApi(200, 20);
    expect(utilsSpy.log.calledWith('The total is: 220')).to.be.true;
    expect(utilsSpy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(50, 10) logs "The total is: 60" to the console', () => {
    sendPaymentRequestToApi(50, 10);
    expect(utilsSpy.log.calledWith('The total is: 60')).to.be.true;
    expect(utilsSpy.log.calledOnce).to.be.true;
  });
});
