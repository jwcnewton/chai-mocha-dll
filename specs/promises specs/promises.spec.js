const chai = require('chai');
const sinonChai = require('sinon-chai');
let promisesExample = require('../../src/misc/promiseExample');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

// Suite
describe('longRunningAddition', () => {
    // Spec
    xit('should eventually return the sum of 2 numbers', () =>  {
        // Arrange
        let expectedResult = 4;
        // Act
        promisesExample.longRunningAddition.should.eventually.equal(expectedResult);
    });
});
