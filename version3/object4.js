// Add Todo Method \\

var todoList{
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
    }
    addTodos: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};

// console - print
todoList.addTodos('pluncker');
My Todos: ['item 1', 'item 2', 'item 3', 'pluncker']



// Change Todo Method \\ 


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
    }
};

// console - print
todoList.changeTodos(0, 'first');
My Todos: ['first', 'item 2', 'item 3', 'pluncker']

