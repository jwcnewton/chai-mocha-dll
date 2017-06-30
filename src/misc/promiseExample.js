function longRunningAddition (x, y) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y);
        }, 200);
    });
};

function isNumber(x) {
    return new Promise((resolve, reject) => {
        if (isNaN(x)) {
            var error = new Error();
			error.message = 'Not a number';
            reject(error);
        } else {
            resolve('Is a number');
        }
    });
}


module.exports = {longRunningAddition, isNumber};
