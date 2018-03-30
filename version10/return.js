function multiplyTwoNumber(a,b){
    var result = a * b;
}
var theProductof2and10 = multiplyTwoNumber(2,10);
// we want the result to be 20

Inspect - console:
theProductof2and10
undefined // by default if you don't return a value at the end of a function



function multiplyTwoNumber(a,b){
    var result = a * b;
    return result;
}
var theProductof2and10 = multiplyTwoNumber(2,10);


Inspect - console:
theProductof2and10
20 // now we get the result we want




