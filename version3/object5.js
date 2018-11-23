// It should have an addTodo method 

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){ 
    console.log("My Todos:", this.todos);
    },
    addTodos: function(todo){ // new method
        
        // this will refer to the todos array
        this.todos.push(todo); // .push() method: Add items to the end of an array
        // console.log("item 4")
        
        this.displayTodos(); // this call the displayTodos function
        // My Todos: ["item 1", "item 2", "item 3", "item 4"]
    }
};
