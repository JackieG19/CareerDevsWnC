var testArray = ["item 1", "item 2", "item 3"]
for(var i = 0; i < 3; i++){
    console.log(testArray[i])
}
// this will print out all the items in the array

// if the array had a greater number of items, 
// the i < 3 will only work properly for 3 items 

var testArray2 = ["item 1", "item 2", "item 3", "item 4", "item 5"]
for(var i = 0; i < testArray2.length; i++){
    console.log(testArray[i])
}
// testArray2.length is a dynamic condition that will go through the entire array and print out all 5 items
