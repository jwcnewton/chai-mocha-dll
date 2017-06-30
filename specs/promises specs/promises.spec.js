const chai = require('chai');
const sinonChai = require('sinon-chai');
let promisesExample = require('../../src/misc/promiseExample');
let chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

// Suite
describe('longRunningAddition', () => {
    it('should eventually return the sum of 2 numbers', (done) => {
        // Arrange
        let expectedResult = 4;
        // Act
        promisesExample.longRunningAddition(2, 2)
            .should.eventually.equal(expectedResult).notify(done);
    });
});

// Suite
describe('isNumber', () => {
    // Spec
    it('should eventually resolve the sum of 2 numbers', (done) => {
        // Act
        promisesExample.isNumber('abc')
            .should.be.rejectedWith(Error)
            .and.eventually.have.property('message').equal('Not a number')
            .notify(done);
    });
});
