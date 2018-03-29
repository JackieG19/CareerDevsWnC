// .toggleAll: If everything's true, make everything false


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
    
    // Get numbers of completed todos.
    for (var i = 0, i = totalTodos, i++){
      if (this.todos[i].completed === true){
        completedTodos++;
        }//for
    }//if
    

    // Case 1: If everything's true, make everything false
    if (completedTodos === totalTodos) {
    
    //make everything false.
    for (var i = 0, i = totalTodos, i++){
      this.todos[i].completed = false){
        completedTodos++;
        }//this
      }//for
      
      this.displayTodos();
      
    }//if
};//function


// console - prints
todoList.addTodo('first');          todoList.addTodo('second');
My Todos:                           My Todos:
( ) first                           ( ) first
                                    ( ) second


todoList.toggleCompleted(0);        todoList.toggleCompleted(1);
My Todos:                           My Todos:
(x) first                           (x) first
( ) second                          (x) second


todoList.toggleAll();
todoList.displayTodos();
My Todos:   //no (x) = false
( ) first
( ) second