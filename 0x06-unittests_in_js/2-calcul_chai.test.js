const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('returns the sum of two numbers', () => {
      expect(calculateNumber('SUM', 4, 5)).to.equal(9);
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', -4, -5)).to.equal(-9);
    });
  
    it('returns the difference of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -10, -5)).to.equal(-5);
    });
  
    it('returns the division of two numbers', () => {
      expect(calculateNumber('DIVIDE', 20, 10)).to.equal(2);
      expect(calculateNumber('DIVIDE', 20, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -20, -10)).to.equal(2);
    });
  
    it('returns 0 for unknown operation type', () => {
      expect(calculateNumber('UNKNOWN', 20, 10)).to.equal(0);
      expect(calculateNumber('UNKNOWN', 0, 0)).to.equal(0);
      expect(calculateNumber('UNKNOWN', -20, 10)).to.equal(0);
    });
  });
