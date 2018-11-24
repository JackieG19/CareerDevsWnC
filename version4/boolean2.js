// todoList.changeTodo should change the todoText property

var todoList = {
    todos: [],  // ex. ["item 1", "item 8", "item 3", "item 4"]
    displayTodos: function() {
    console.log("My Todos:", this.todos);
    },
    
    addTodos: function(todoText) {  // ex. ("item 5")
        this.todos.push({ 
        todoText: todoText, //  todoText: "item 5"
        completed: false 
        });
        
        this.displayTodos();
        // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0
        // {todoText: 'item 8', completed: false}, - 1
        // {todoText: 'item 3', completed: false}, - 2
        // {todoText: 'item 4', completed: false}, - 3
        // {todoText: 'item 5', completed: false }] - 4
    },
    
    changeTodos: function(position, todoText) { // ex. (1, "item 2")
        // input a position in the array and a random string
        
        this.todos[position].todoText = todoText; // this.todos[1].todoText = "item 2"
        // this is grabbing the array position from an object in the addTodos method
        
        this.displayTodos();  
        // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0
        // {todoText: 'item 2', completed: false}, - 1
        // {todoText: 'item 3', completed: false}, - 2
        // {todoText: 'item 4', completed: false}, - 3
        // {todoText: 'item 5', completed: false }] - 4
    }
};
