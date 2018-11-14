// It should have an addTodo method

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){ 
    console.log("My Todos:", this.todos);
    },
    addTodos: function(todo){ // new method
        this.todos.push(todo); // this will refer to the todos array
        this.displayTodos(); // this call the displayTodos function
    }
};
