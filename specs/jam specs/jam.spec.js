const should = require('chai').should();
const jamData = require('../../api/jam-data').jam;

describe('Jam', () => {

    describe('Root', () => {
        it('Should be an object', () => {
            jamData.should.be.an('object');
        });

        it('Should have a property types with more that 3 items', () => {
            jamData.should.have.property('types').with.lengthOf.above(3);
        });
    });

    describe('Types', () => {

        it('Should be an array', () => {
            jamData.types.should.be.an('array');
        });

        it('Should be an array that does not contain "Peanut Butter"', () => {
            jamData.types.should.be.an('array').that.does.not.include('Peanut Butter');
        });

    });
});
