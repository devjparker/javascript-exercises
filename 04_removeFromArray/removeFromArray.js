const removeFromArray = function(array, ...items) {
    const startArray = array;
    let finalArray = startArray;
    const itemsToRemove = []; 
    for (const args of items) {
        itemsToRemove.push(args);
    }
    //let itemIndex = startArray.indexOf(itemToRemove);
    //let finalArray = startArray.splice(itemIndex, 1); this didn't work
    for (let i = 0; i < startArray.length; i++) { //my issue is probably here
        for (let j = 0; j < itemsToRemove.length; j++){
            if (startArray[i] == itemsToRemove[j]) {
                finalArray.splice(i, 1);
            }
        }
        
    }
    return finalArray;
};
/* i == 0, start array is 1, j == 0, items to remove is 3
j == 1, items to remove is 2, no removal
i == 1, start array is 2, j == 0, items to remove is 3
j == 1, items to remove is now 2, should remove finalArray[1]
i == 2, j == 0, start array is 3, items to remove is 3, it SHOULD remove 3 from final arrray.
*/

// Do not edit below this line
module.exports = removeFromArray;
