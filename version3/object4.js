// It should have a displayTodos method

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){ // this is an anonymos function
    console.log("My Todos:", this.todos);
    }
};

// Function, when they are methods, they dont need to name.

// anonymos function - because when we run the function we're 
// going to use the property name instead of the function name

// this.todos - refer to the todos properly on the object we're on
// When you're in a method you can accessthe object you're on 
// using this keyword and use the . to get a specific property
