const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
let lightSwitch = require('../../src/misc/spyExample');

chai.should();
chai.use(sinonChai);


describe('getSwitch', () => {
    it('should return a boolean', () => {
        // Arrange
        let getSwitchSpy = sinon.spy(lightSwitch, 'getSwitch');

        // Act
        let result = lightSwitch.getSwitch();

        // Assert
        getSwitchSpy.should.have.been.calledOnce;
        result.should.be.an('boolean');
    });
});

describe('flickSwitch', () => {

    beforeEach(() => {
        lightSwitch.getSwitch.restore();
    });

    it('should call getSwitch once', () => {
        // Arrange
        let getSwitchSpy = sinon.spy(lightSwitch, 'getSwitch');

        // Act
        lightSwitch.flickSwitch();

        // Assert
        getSwitchSpy.should.have.been.calledOnce;
    });

    it('should set switchStatus to correct state', () => {
        // Arrange
        sinon.stub(lightSwitch, 'getSwitch').returns(false);

        // Act
        lightSwitch.flickSwitch();

        // Assert
        lightSwitch.switchStatus.should.be.true;
    });
});

describe('returnSwitchStatusAsString', () => {

    beforeEach(() => {
        lightSwitch.getSwitch.restore();
    });

    it('should return string true if getSwitch returns true', () => {
        // Arrange
        sinon.stub(lightSwitch, 'getSwitch').returns(true);

        // Act
        var result = lightSwitch.returnSwitchStatusAsString();

        // Assert
        result.should.be.a('string').and.equal('Switch on');
    });

    it('should return string false if getSwitch returns false', () => {
        // Arrange
        sinon.stub(lightSwitch, 'getSwitch').returns(false);

        // Act
        var result = lightSwitch.returnSwitchStatusAsString();

        // Assert
        result.should.be.a('string').and.equal('Switch off');
    });

    it('should catch exceptions thrown returning string', () => {
        // Arrange
        sinon.stub(lightSwitch, 'getSwitch').throws(new Error());

        // Act
        (() =>{
            lightSwitch.returnSwitchStatusAsString();
        }).should.throw(Error);
    });

});
