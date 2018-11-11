var myName = "Gordon";

function sayName(){
    var secert = "watch and code";
    console.log(myName);
}

sayName(); // 'Gordon'
console.log(secert); // throws an error


// The first console.lo() is inside looking outside of the function 
// The second console.log() is outside looking inside the function

// if you're inside of the function, you can look out and see data
// but the opposite isn't true. If you're outside you can't look in.
