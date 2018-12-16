//displayTodos should show .todoText

var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
     for(var i = 0; i < this.todos.length; i++){
     //this.todos.length = has 3 items
     //i = 0
     //i = 1
     //i = 2
     console.log(this.todos[i].todoText);
     }
    },

var todoList2 {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos:");
     for(var j = 0; i < this.todos.length; j++){
     console.log(this.todos[j].todoText);
     }
    },
    
    
