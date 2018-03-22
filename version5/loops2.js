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
    
    // console - print
    todoList.displayTodos();
    My Todos []
    
    todoList.addTodo('first');
    My Todos [object]
    first
    
    todoList.addTodo('second');
    My Todos [object, object]
    first
    second
    
//-----------------------------------------    

var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos:");
     for(var i = 0; i < this.todos.length; i++){
     console.log(this.todos[i].todoText);
     }
    },
    
    // console - print-
    todoList.addTodo('first');
    My Todos:
    first
    
    todoList.addTodo('second');
    My Todos:
    first
    second
    
    
    