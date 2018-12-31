// displayTodos should show completed

var todoList {
    todos: [],
    displayTodos function() {
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     }
     else {
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){
            
    if (this.todos[i].completed === true) { // check if .completed is true
        console.log('(x)', this.todos[i].todoText); // print with (x)
        }
        else {
            console.log('( )', this.todos[i].todoText); // print with ()
           }
        }
    },
}

// () item     Not completed
// (x) item    completed
// (x) item    completed

// console - print                  // todoList.addTodo('second')
// todoList.addTodo('first')        // My Todos:
// My Todos:                        // ( ) first
// ( ) first                        // ( ) second


// todoList.toggleCompleted(1);     // todoList.toggleCompleted(1); 
// My Todos:                        // My Todos:
// ( ) first                        // ( ) first
// (x) second                       // ( ) second 


// todoList.toggleCompleted(0);         // todoList.toggleCompleted(0); 
// My Todos:                            // My Todos:
// (x) first                            // ( ) first
// ( ) second                           // ( ) second
