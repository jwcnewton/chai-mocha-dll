let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let safeAddition = (x, y) => {
  try {
    isNumberValidation(y);
    isNumberValidation(x);
    return x + y;
  } catch (err) {
    throw err;
  }
};

function isNumberValidation(numberUT) {
  if (isNaN(parseInt(numberUT))) {
    throw `${numberUT} is not a number`;
  }
};

module.exports = {add, subtract, safeAddition};
