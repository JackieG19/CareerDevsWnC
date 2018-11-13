// you can create a function within an object
var gordon = {
    name: 'Gordon',
    sayName: function(){
    console.log(this); 
    }
};

// keyword call this, so when you use 'this' inside the function 
// that is on an object, 'this' will refer to that entire object


var gordon = {
    name: 'Gordon',
    sayName: function(){
    console.log(this.name); 
    }
};

// this.name will grab the first key and print out the value of name

