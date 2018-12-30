// displayTodos should show .todoText

var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
     for(var i = 0; i < this.todos.length; i++){
     // ex.: this.todos.length = has 3 items
     // i = 0
     // i = 1
     // i = 2
     console.log(this.todos[i].todoText);
     }
    },

var todoList2 {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos:");
    
     for(var j = 0; i < this.todos.length; j++){
     // for loop (variable called i = starts at 0; 
     // continued to go through the loop as long as i is less than the number of todos.
     // length property that gives the number of items in the array;
     // then at the end each round increase it by 1)
    
     console.log(this.todos[j].todoText);
     // i increases by 1 each time starting from 0 to access each item in the array
     // once you have each item in the array using the .todoText to access the todo text property
     }
    },
    
    
