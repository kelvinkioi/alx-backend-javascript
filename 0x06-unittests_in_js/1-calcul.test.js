const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('returns the sum of two numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 5), 9);
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUM', -4, -5), -9);
  });

  it('returns the difference of two numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 5), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', -10, -5), -5);
  });

  it('returns the division of two numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 20, 10), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 20, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', -20, -10), 2);
  });

  it('returns 0 for unknown operation type', () => {
    assert.strictEqual(calculateNumber('UNKNOWN', 20, 10), 0);
    assert.strictEqual(calculateNumber('UNKNOWN', 0, 0), 0);
    assert.strictEqual(calculateNumber('UNKNOWN', -20, 10), 0);
  });
});
