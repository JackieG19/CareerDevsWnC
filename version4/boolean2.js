var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
    },/*
(a.)--addTodos: function(todo) {
        this.todos.push(todo);      
        this.displayTodos();
    }, */
(b.)--changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },/*
    
    deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
    },
(c.) <----------------------->
    
};
{
    todo.Text: 'item 1',
    completed: ___ //booleans true or fasle
} */


// change the todoText property \\


b.)  changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

// console - print    
todoList.addTodo('first try')
    My Todos [Object]
       0: Object
          completed: fasle
          todoText: 'first try'
          __proto__: Object
       length: 1
     __proto__: Array[0]
     
todoList.changeTodo(0, 'second try')  
 My Todos [Object]
       0: Object
          completed: fasle
          todoText: 'second try'
          __proto__: Object
       length: 1
     __proto__: Array[0]