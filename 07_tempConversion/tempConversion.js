const ftoc = function(f) {
  let c = (f - 32) * 5 / 9;
  let cRounded = +c.toFixed(1);
  return cRounded;
};

const ctof = function(c) {
  let f = c * 9 / 5 + 32;
  let fRounded = +f.toFixed(1);
  return fRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
