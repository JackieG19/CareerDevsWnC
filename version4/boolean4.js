//  todoList.toggleCompleted should flip the completed property

var todoList = {
    todos: [],
    displayTodos: function() {
    console.log("My Todos:", this.todos);
    // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0 
        // {todoText: 'item 2', completed: false}, - 1
        // {todoText: 'item 3', completed: false}, - 2
    },
    
    addTodos: function(todoText) {  
        this.todos.push({ 
        todoText: todoText, 
        completed: false 
        });
        
        this.displayTodos();
        // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0 
        // {todoText: 'item 2', completed: false}, - 1
        // {todoText: 'item 3', completed: false}, - 2
        // {todoText: 'item 4', completed: false }] - 3
    },
    
    changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodos: function(position){
        this.todos.splice(position, 1); 
        this.displayTodos();
    },
    
    toggleCompleted: function(position){ // (3)
         var todo = this.todos[position]; 
         // the new variable will grab the position in the todos array
         
         todo.completed = !todo.completed; // todo.false = true
         // changes the completed property in the addTodos object at the 3rd position in the array
         
         this.displayTodos();
         // example:
        // My Todos: [{ todoText: 'item 1', completed: false}, - 0
        // {todoText: 'item 2', completed: false}, - 1
        // {todoText: 'item 3', completed: false}, - 2
        // {todoText: 'item 4', completed: true }] - 3
     }
};
