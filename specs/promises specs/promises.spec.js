const chai = require('chai');
const sinonChai = require('sinon-chai');
let promisesExample = require('../../src/misc/promiseExample');
let chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

// Suite
describe('longRunningAddition', () => {

});

// Suite
describe('isNumber', () => {
    // Spec
    it('should eventually resolve the sum of 2 numbers', (done) =>  {
        // Act
        promisesExample.isNumber('abc')
            .should.be.rejectedWith(Error)
            .and.eventually.have.property('message').equal('Not a number')
            .notify(done);
    });
});
