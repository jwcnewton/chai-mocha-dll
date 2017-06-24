const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const jamData = require('../../api/jam-data').jam;


describe('Jam', () => {

    describe('Should examples', () => {

        it('Spec', () => {

            jamData.should.be.an('object');
            jamData.should.have.property('types').with.lengthOf(4);
            jamData.types.should.be.an('array');
            jamData.types.should.be.an('array')
                .that.does.not.include('Peanut Butter');
        });
    });

    describe('Assert examples', () => {

        it('Spec', () => {
            assert.isObject(jamData, 'Jam is an object');
            assert.property(jamData, 'types');
            assert.isArray(jamData.types, 'Jam types is an array');
            assert.lengthOf(jamData.types, 4, '4 items in array');
            assert.doesNotHaveAnyKeys(jamData.types, 'Peanut Butter');
        });
    });

    describe('Expect examples', () => {

        it('Spec', () => {
            expect(jamData).to.be.an('object');
            expect(jamData).to.have.property('types').with.lengthOf(4);
            expect(jamData.types).to.be.an('array');
            expect(jamData.types).to.be.an('array')
                .that.does.not.include('Peanut Butter');
        });
    });
});
