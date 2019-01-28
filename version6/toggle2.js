//.toggleAll: Otherwise, make everything true

var todoList {
    todos: [],
    displayTodos function() {
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     } 
        else {
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){
        
    if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
           
        }   
            else {
                console.log('( )', this.todos[i].todoText);
           }
        }
    },
}
    
addTodos: function(todoText) {
        this.todos.push({
        todoText: todoText,
        completed: fasle
        });
        this.displayTodos();
},
    
changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
},

deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
},

toggleCompleted: function(position) {
        var todo = this.todos[position];
        todos.completed = !todos.completed;
        this.displayTodos();
},

toggleAll: function(position) {

    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0, i = totalTodos, i++){
      if (this.todos[i].completed === true){
        completedTodos++;
        }
    }
    
    // if completedTodos is equal to 0 /OR totalTodos
    if (completedTodos === totalTodos) { 
    for (var i = 0, i < totalTodos, i++){
      this.todos[i].completed = false){
        completedTodos++;
        }
        
     // Case 2: Otherwise, make everything true  
        else {
            for (var i = 0, i < totalTodos, i++){
            // for loop togo through all the todos
                this.todos[i].completed = true;
                // make all todos true
        }
      }
      
      this.displayTodos();
      
    }
};


// console - prints
// todoList.addTodo('first')
// My Todos:
// ( ) first


// todoList.addTodo('second')
// My Todos:
// ( ) first
// ( ) second

// todoList.toggleAll(); - true
// My Todos:
// (x) first
// (x) second

// todoList.toggleAll() - again = becomes false
// My Todos:
// ( ) first
// ( ) second

