//displayTodos should show .completed

// () item     Not completed
// (x) item    completed
// (x) item    completed

    // check if .completed is true
if (this.todos[i].completed === true) { 
        //   print with (x)
    }   else {
           // print with ( )
           }


var todoList {
    todos: [],
    displayTodos function() {
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     } //if
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


// console - print
todoList.addTodo('first')
My Todos:
( ) first


todoList.addTodo('second')
My Todos:
( ) first
( ) second

//------------------------------------

todoList.toggleCompleted(1);
My Todos:
( ) first
(x) second

todoList.toggleCompleted(1); //again
My Todos:
( ) first
( ) second  //off

//------------------------------------

todoList.toggleCompleted(0);
My Todos:
(x) first
( ) second

todoList.toggleCompleted(0); //again
My Todos:
( ) first   //off
( ) second
