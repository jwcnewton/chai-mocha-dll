var lightSwitch =  {

    switchStatus: false,

    getSwitch: function () {
        return this.switchStatus;
    },

    flickSwitch : function () {
        this.switchStatus = !this.getSwitch();
    },

    returnSwitchStatusAsString: function () {
        try {
            if (this.getSwitch() === true) {
                return 'Switch on';
            } else {
                return 'Switch off';
            }
        } catch (err) {
            throw err;
        }
    },
};

module.exports = lightSwitch;
