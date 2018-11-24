//  todoList.deleteTodos should delete an item in the array

var todoList = {
    todos: [], //  
    displayTodos: function() {
    console.log("My Todos:", this.todos);
    // example:
    // My Todos: [{ todoText: 'item 1', completed: false}, - 0
    // {todoText: 'item 2', completed: false}, - 1
    // {todoText: 'item 3', completed: false}, - 2
    // {todoText: 'item 4', completed: true }] - 3
    },
    
    addTodos: function(todoText) {  
        this.todos.push({ 
        todoText: todoText, 
        completed: false 
        });
        this.displayTodos();
    },
    
    changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodos: function(position){ // function(2)
    
        this.todos.splice(position); 
        // "item 3" will be removed
        
        this.displayTodos(); 
        // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0
        // {todoText: 'item 2', completed: false}, - 1
        // {todoText: 'item 4', completed: true }] - 2
    }
    
};

