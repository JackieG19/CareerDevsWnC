// Objects and Function \\

{
    name: "Gordon",
    sayName: function sayName() {
    console.log(this);
    }
}


var gordon = {
    name: "Gordon",
    sayName: function sayName() {
    console.log(this);
    }
}

// console - print
gordon.sayName();
    Object {name: "Gordon"}
        name: "Gordon"
        sayName: function() //function() {console.log(this)}
        __proto__: Object


var gordon = {
    name: "Gordon",
    sayName: function sayName() {
    console.log(this.name);
    }
    
// console - print
gordon.sayName();
Gordon

