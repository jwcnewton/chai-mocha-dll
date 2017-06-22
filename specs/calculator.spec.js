const shopper = require('../src/calculator');
const should = require('chai').should();

describe('Add tests', function () {
    it('Add returns the correct value', function () {
        let result = shopper.add(1, 2);
        result.should.equal(3);
    });
});

describe('Subtract tests', function(){
    it('Subtract returns the correct value', function(){
        let result = shopper.subtract(10, 5);
        result.should.equal(5);
    });
});
