const sumAll = function(x, y) {
    let output = 0;
    if (x < 0 || y < 0 || typeof(x) !== "number" || typeof(y) !== "number"){
        output = "ERROR";
    } else {
        if (x < y) {
            for (let i = x; i <= y; i++) {
                output += i;
            }
        } else {
            for (let i = y; i <= x; i++) {
                output += i;
            }
        }
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
