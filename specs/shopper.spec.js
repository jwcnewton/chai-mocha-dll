const shopper = require('../src/shopper');
const should = require('chai').should();

describe('Add tests', function () {
    it('Add returns the correct values of two numbers', function () {
        let result = shopper.add(1, 2);
        result.should.equal(3);
    });
});
