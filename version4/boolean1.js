//  todoList.addTodo should add objects

var todoList = {
    todos: [],
    displayTodos: function() {
    console.log("My Todos:", this.todos);
    },
    
    addTodos: function(todoText) { // ex. ("food")
    
        this.todos.push({ // add another object
        
        // will equal to whatever the user passes in the addTodos method
        todoText: todoText, // todoText = "food",
        
        // this will tell if the list is completed or not with a boolean value
        completed: false 
        
        });
        
        console.log(todoList.addTodos("food"));
        
        this.displayTodos();
        // My Todos: [{ todoText: 'food', completed: false }]
    },
};
