const repeatString = function(string, x) {
    if (x < 0) {
        return "ERROR";
    } else {
        let output = "";
        for (let i = 0; i < x; i++) {
            output += string;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
