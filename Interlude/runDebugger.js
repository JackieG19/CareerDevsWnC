function logTenNumbers () {
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
}

logTenNumbers()
0
1
2
3
4
5
6
7
8
9
10

runWithDebuggers(ourFunction)
// debugger;
// ourFunction() - don't have to do it manuel with logTenNumbers();

Stage 1:
function runWithDebuggers(ourFunction){
    debugger;
    ourFunction();
}

Stage 2:
runWithDebuggers(function logTenNumbers() {
    for (var i = 0; i < 10; i++){
        console.log(i);
    }
});

Stage 3:
function runWithDebuggers(ourFunction){ ourFunction = function logTenNumbers()
    debugger;
    ourFunction();
}

------------------------------------------------------
    setTimeout

// creating a text-based alarm clock
setTimeout(function(){
    console.log("Wake Up!");
}, 5000 ); // five second = 5000 milliseconds
// run a function after a certain period of time and how long you want to wait
// After five second it will run the function