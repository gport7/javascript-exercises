const palindromes = function (string) {
    //make all lowercase
    let stringLower = string.toLowerCase();
    //remove punctuation and spaces
    let stringNoPunc = stringLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"");
    //find the chopper
    let half = 0;
    let stringFront = 0;
    let stringBack = 0;
    if (stringNoPunc.length % 2 === 0) {
        half = stringNoPunc.length / 2;
        stringFront = stringNoPunc.substring (0, half);
        stringBack = stringNoPunc.substring (half, stringNoPunc.length);
    } else {
        half = (stringNoPunc.length + 1) / 2;
        stringFront = stringNoPunc.substring (0, half);
        stringBack = stringNoPunc.substring (half -1, stringNoPunc.length);
    }    
    //reverse the back half
    let stringBackReverse = "";
    for (let i = stringBack.length - 1; i >= 0; i--) {
        stringBackReverse += stringBack[i];
    }
    //if the front and back reversed are equal then return true, else return false
    if (stringFront === stringBackReverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
