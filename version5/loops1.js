//LOOPS OF LOGIC\\


i = 0 ----(Initialization)
say "hey" if i < 3 (less than 3) -----(Condition)
Increased i by 1 ----(final-expression)

0 = "hey"
1 = "hey"           i = i+1 (i++)
2 = "hey" 
3 (stop)

for (Initialization, Condition, final-expression) {
}
----------------------------------

    for (var i = 0; i < 3; i++) {
        console.log("hey");
    }
     prints out:    "hey"
                    "hey"
                    "hey"
----------------------------------- 
 
    for (var i = 0; i < 10; i = i + 2) {
        console.log("hey");
    }
     
    prints out "hey" 5 times
------------------------------------

    for (var i = 6; i < 10; i = i + 2) {
        console.log("hey");
    }
    
    prints out "hey" 2 times

^------------------NOTES-------------------^



 
 // Looping over arrays \\
 
for (var i = 0; i < 3; i++) {
    console.log("hey");
}

"hey"
"hey"
"hey"

//-------------------------------
 
for (var i = 0; i < 3; i++) {
    console.log(i);
}

prints out:

0
1
2

//---------------------------------

var testArray = ['item 1', 'item 2', 'item 3']

// console - prints
testArray[0]        testArray[1]        testArray[2]
 'item 1'            'item 2'             'item 3'

//---------------------------------

for (var i = 0; i < 3; i++) {
    console.log(testArray[i]);
}

prints out:     item 1
                item 2
                item 3

//---------------------------------

for (var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
}

prints out:     item 1
                item 2
                item 3

//---------------------------------


testArray.push('extra item');
4

for (var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
}

// console - print
prints out:     item 1
                item 2
                item 3
                extra item