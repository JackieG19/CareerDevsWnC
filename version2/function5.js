var todos = ['item 1', 'item 2', 'item 3'];

// It should have a function to change a todo

function changeTodos(position, newValue){
    // todos[0] = "some new value"; 
    todos[position] = newValue;
}

changeTodos(0, "changed");

// > todos
// [ 'changed', 'item 2', 'item 3' ]
