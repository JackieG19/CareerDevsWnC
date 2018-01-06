//Function add\\
 
 function addTodos() {
     todos.puch('new todos');
 }
 addTodos()
 
 // console - print
 todos
 ['item 1', 'item 2', 'item 3', 'new todos']
 
 displayTodos()
 My Todos: ['item 1', 'item 2', 'item 3', "new todos'"]
 
 //-----------------------------------
 
 function addTodos() {
     todos.puch('new todos');
     displayTodos();
 }
 
 addTodos()
 
 // console - print
 My Todos: ['item 1', 'item 2', 'item 3', 'new todos']
 
 //------------------------------------
 
 
 function addTodos(todos) {
     todos.puch(todos);
     displayTodos();
 }
 addTodos('hello there')
 
 // console - print
 My Todos: ['item 1', 'item 2', 'item 3', 'hello there']
 
 
