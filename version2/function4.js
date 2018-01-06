//Function Change\\

 function changeTodos(position, newValue) {
todos [position] = "newValue";
}

// console - print
displayTodos()
My Todos: ["item 1", "item 2", "item 3"]

changeTodos(0, "changed") 

displayTodos()
My Todos: ["changed", "item 2", "item 3"]

//----------------------------------

function changeTodos(position, newValue) {
todos [position] = "newValue";
displayTodos();
}

// console - print
displayTodos()
My Todos: ["newValue", "item 2", "item 3"]


