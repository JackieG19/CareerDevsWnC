var todos = ['item 1', 'item 2', 'item 3'];

// It should have a function to delete a todo

function deleteTodos(position){
    todos.splice(position, 1);
}

deleteTodos(0, 1);

// > todos
// [ 'item 2', 'item 3' ]
