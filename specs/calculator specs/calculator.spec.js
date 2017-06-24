const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const calculator = require('../../src/misc/calculator');


describe('Add tests', () => {
    it('Add returns the correct value', () => {
        let result = calculator.add(1, 2);
        result.should.equal(3);
    });
});

describe('Subtract tests', () => {
    it('Subtract returns the correct value', () => {
        let result = calculator.subtract(10, 5);
        result.should.equal(5);
    });
});

describe('safeAddition generated tests positive parameters', () => {
    let specs = [
        {params: {a: 3, b: 2}, expected: 5},
        {params: {a: 10, b: 2}, expected: 12},
        {params: {a: 122, b: 78}, expected: 200},
        {params: {a: 232, b: 7}, expected: 239}
    ];

    specs.forEach(function (spec) {
        it(`correctly adds ${spec.params.a} to ${spec.params.b}`, () => {
            let result = calculator.safeAddition(spec.params.a, spec.params.b);
            result.should.equal(spec.expected);
        });
    });
});

describe('safeAddition generated tests nagative parameters', () => {
    let specs = [
        {params: {a: null, b: 2}, expected: 'null is not a number'},
        {params: {a: undefined, b: 2}, expected: 'undefined is not a number'},
        {params: {a: 23, b: 'acd'}, expected: 'acd is not a number'}
    ];

    specs.forEach(function (spec) {
        it(`correctly adds ${spec.params.a} to ${spec.params.b}`, function () {
            expect(() => {
                calculator.safeAddition(spec.params.a, spec.params.b);
            }).to.throw(spec.expected);
        });
    });
});
