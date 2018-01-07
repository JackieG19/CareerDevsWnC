
// Delete Todos Method \\

var todoList{
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
    },
    addTodos: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    
    deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
    }
};

// console - print
todoList.deleteTodos(1);
My Todos: ['first', 'item 3', 'pluncker']