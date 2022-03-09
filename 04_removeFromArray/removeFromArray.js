const removeFromArray = function(array, ...argsArray) {
    let output = array;
    for (let i = 0; i < argsArray.length; i++) {
        let subtractedItem = argsArray[i];
        for (let j = 0; j < array.length; j++) {
            if (array[j] === subtractedItem) {
                output.splice(j, 1);
            }
        }
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
