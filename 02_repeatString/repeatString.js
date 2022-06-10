const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let stringToBePrinted = string;
    let finalString = '';
    let numTimesPrinted = num;
    for (let i = 0; i < numTimesPrinted; i++) {
        finalString += stringToBePrinted;
        //return finalString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
