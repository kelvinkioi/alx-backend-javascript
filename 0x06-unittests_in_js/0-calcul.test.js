const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking if numbers round', () => {
        assert.equal(calculateNumber(1, 6), 7);
    });
    it('checking if numbers round, one floating number', () => {
        assert.equal(calculateNumber(1, 2.7), 4);
    });
    it('checking if numbers round, two floating numbers', () => {
        assert.equal(calculateNumber(2.2, 4.5), 7);
    });
    it('checking if numbers round two floating numbers', () => {
        assert.equal(calculateNumber(2.6, 2.6), 6);
    });
    it('checking negative addition', () => {
        assert.equal(calculateNumber(-0.3, -1.7), -2);
      });
});
