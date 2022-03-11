//FIRST TRY, TOO MUCH WORK
// const palindromes = function (string) {
//     //make all lowercase
//     let stringLower = string.toLowerCase();
//     //remove punctuation and spaces
//     let stringNoPunc = stringLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"");
//     //find the chopper
//     let half = 0;
//     let stringFront = 0;
//     let stringBack = 0;
//     if (stringNoPunc.length % 2 === 0) {
//         half = stringNoPunc.length / 2;
//         stringFront = stringNoPunc.substring (0, half);
//         stringBack = stringNoPunc.substring (half, stringNoPunc.length);
//     } else {
//         half = (stringNoPunc.length + 1) / 2;
//         stringFront = stringNoPunc.substring (0, half);
//         stringBack = stringNoPunc.substring (half -1, stringNoPunc.length);
//     }    
//     //reverse the back half
//     let stringBackReverse = "";
//     for (let i = stringBack.length - 1; i >= 0; i--) {
//         stringBackReverse += stringBack[i];
//     }
//     //if the front and back reversed are equal then return true, else return false
//     if (stringFront === stringBackReverse) {
//         return true;
//     } else {
//         return false;
//     }
// };


//SECOND TRY, MUCH BETTER
const palindromes = function (string) {
    //make all lowercase
    let stringLower = string.toLowerCase();
    //remove punctuation and spaces
    let stringNoPunc = stringLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"");
    let startIndex = 0;
    let endIndex = (stringNoPunc.length - 1);
    for(startIndex; startIndex < endIndex; startIndex++, endIndex--){
        if (stringNoPunc[startIndex] !== stringNoPunc[endIndex]) {
            break; //if it breaks early the startIndex will be less than the endIndex and it didn't pass
        }        
    }
    //if it made it all the way through it passed
    if(startIndex >= endIndex) {
        return true;
    } else {
        return false;
    }    
};

// Do not edit below this line
module.exports = palindromes;
