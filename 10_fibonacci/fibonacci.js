const fibonacci = function(x) {
    const num = +x;
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
        let fibArray = [1];
        for (let i = 0; i < num; i++) {
            let sumPreceding = 1;
            if (i > 0) {
                sumPreceding = fibArray[i - 1] + fibArray [i];
            }
            fibArray.push(sumPreceding);
        }
        return fibArray[num - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
