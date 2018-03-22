// displayTodos should tell you if .todos is empty


<-------NOTES----------------------------------------->   
            // if there is no todos /OR
            // if this.todos.length is equal to 0 /OR
            // if this.todos.length === 0          
            // (=== - compares different value)
     if (this.todos.length === 0){
        // console.log('your todos list is empty!')
     // else
     } else {
        // print as normal
     }
    },
    

if (condition) {
    // code that run if condition is true
}   else {
    // code that run if condition is false
}

<-------NOTES-----------------------------------------> 



var todoList {
    todos: [ ],
    displayTodos function() {
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     }//if 
     else {
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){
           console.log(this.todos[i].todoText);
        }//for
    },//else
  }//function


// console - print  
todoList.displayTodos();
your todos list is empty!

todoList.addTodo('an item');
My Todos:
an item

todoList.deleteTodo(0);
your todos list is empty!