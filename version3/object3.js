// Array on an Object \\

var todos = ['item 1', 'item 2', 'item 3'];

var todoList{
    todos: ['item 1', 'item 2', 'item 3']
};

// console - print
todoList
    Object{todos: Array[3]}
        todos: Array[3]
            0:"item 1"
            1:"item 2"
            2:"item 3"
            length: 3
            __proto__: Array[0]
            __proto__: Object


// Display Todos Method \\

var todoList{
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {                   function displayTodos() {
     console.log("My Todos", this.todos);       console.log("My Todos", todos);
    }
};

// console - print
todoList.displayTodos();
My Todos: ['item 1', 'item 2', 'item 3']



