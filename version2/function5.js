//Function Delete\\

function deleteTodos() {
    todos.splice(position, 1);
	displayTodos();
}

// console - print

displayTodos()
My Todos: ["newValue", "item 2", "item 3"]

deleteTodos(0)

displayTodos()
My Todos: ["newValue", "item 3"]