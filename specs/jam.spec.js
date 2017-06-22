const should = require('chai').should();
let jam = {types: ['Blueberry', 'Strawberry', 'Raspberry', 'Plum']};

describe('Jam', function () {

    describe('Root', function () {
        it('Should be an object', function () {
            jam.should.be.an('object');
        });

        it('Should have a property types with more that 3 items', function () {
            jam.should.have.property('types').with.lengthOf.above(3);
        });
    });

    describe('Types', function () {

        it('Should be an array', function () {
            jam.types.should.be.an('array');
        });

        it('Should be an array that does not contain "Peanut Butter"', function () {
            jam.types.should.be.an('array').that.does.not.include('Peanut Butter');
        });

    });
});
