const add = function(...numArray) {
  let output = 0;
  for(const num of numArray) {
    output += num;
  }
	return output;
};

const subtract = function(x, y) {
	let output = x - y;
  return output;
};

const sum = function(numArray) {
	let output = 0;
  for(const num of numArray) {
    output += num;
  }
	return output;
};

const multiply = function(numArray) {
  let output = 1;
  for(const num of numArray) {
    output *= num;
  }
	return output;
};

const power = function(x, y) {
  let ouptut = x ** y;
	return ouptut;
};

const factorial = function(num) {
  let output = 1;
	for (let i = num; i > 0; i--) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
