var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log("My todos:", todos);
}

// It should have a function to add new todos
function addTodos(){
    todos.push('new todo');
    displayTodos(); // My todos: ['item 1', 'item 2', 'item 3', 'new todo'];
}

addTodos();
// todos [ 'item 1', 'item 2', 'item 3', 'new todo' ]


