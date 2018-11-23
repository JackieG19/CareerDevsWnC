//  It should have a deleteTodo method

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){ 
    console.log("My Todos:", this.todos);
    },
    
    addTodos: function(todo){ 
        this.todos.push(todo); // todoList.addTodos("item 4", "item 4", "item 6")
        this.displayTodos(); 
        // My Todos: ["item 1", "item 2", "item 3", "item 4", "item 4", "item 6"]
    // array position[   0          1        2          3        4          5]
    },
    
    changeTodos: function(position, newValue){ 
        this.todos[position] = newValue; // todoList.changeTodos(4, 'item 5')
        this.displayTodos();
        // My Todos: ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"]
    // array position[   0          1        2          3        4          5]
    },
    
    deleteTodos: function(position){
        this.todos.splice(position, 1); // todoList.deleteTodos(2, 1)
        this.displayTodos();
        // My Todos: ["item 1", "item 2", "item 4", "item 5", "item 6"]
    // array position[   0          1        2          3       4     ]
    }
};

// The splice() method adds or removes items from an array.
// The original array gets changed by this method.
// and the method returns an array of the removed item/s (if there is any).
