const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
let jam = {types: ['Blueberry', 'Strawberry', 'Raspberry', 'Plum']};


describe('Jam', function () {

    describe('Should examples', function () {

        it('Spec', function () {

            jam.should.be.an('object');
            jam.should.have.property('types').with.lengthOf(4);
            jam.types.should.be.an('array');
            jam.types.should.be.an('array').that.does.not.include('Peanut Butter');
        });
    });

    describe('Assert examples', function () {

        it('Spec', function () {
            assert.isObject(jam, 'Jam is an object');
            assert.property(jam, 'types');
            assert.isArray(jam.types, 'Jam types is an array');
            assert.lengthOf(jam.types, 4, '4 items in array');
            assert.doesNotHaveAnyKeys(jam.types, 'Peanut Butter');
        });
    });

    describe('Expect examples', function () {

        it('Spec', function () {
            expect(jam).to.be.an('object');
            expect(jam).to.have.property('types').with.lengthOf(4);
            expect(jam.types).to.be.an('array');
            expect(jam.types).to.be.an('array').that.does.not.include('Peanut Butter');
        });
    });
});
