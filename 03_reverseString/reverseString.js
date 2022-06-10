const reverseString = function(string) {
    let baseString = string;
    let finalString = '';
    for (let i = baseString.length - 1; i >= 0; i--) {
        finalString += string[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
