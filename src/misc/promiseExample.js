let longRunningAddition = (x, y) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y);
        }, 2000);
    });
};

function isNumber(x) {
    return new Promise((resolve, reject) => {
        if (isNaN(x)) {
            reject(Error('Not a number'));
        } else {
            resolve('Is a number');
        }
    });
}


module.exports = {longRunningAddition, isNumber};
