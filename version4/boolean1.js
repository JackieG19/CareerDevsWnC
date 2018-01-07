// BOOLEANS \\

var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
    },
(a.)--addTodos: function(todo) {
        this.todos.push(todo);      
        this.displayTodos();
    }, /*
(b.)--changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    
    deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
    },
(c.) <----------------------->
    
};
{
    todo.Text: 'item 1',
    completed: ___ //booleans true or fasle
}   */



// todoList.addTodo should add objects \\

a.)   addTodos: function(todoText) {
        this.todos.push({
        todoText: todoText,
        completed: fasle
        });
        this.displayTodos();
    },


// console - print
todoList.addTodo('this is an object')
My Todos [Object]
       0: Object
          completed: fasle
          todoText: 'this is an object'
          __proto__: Object
       length: 1
     __proto__: Array[0]