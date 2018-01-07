var todoList {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos function() {
     console.log("My Todos", this.todos);
    },/*
(a.)--addTodos: function(todo) {
        this.todos.push(todo);      
        this.displayTodos();
    }, 
(b.)--changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },*/
    
    deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
    },
(c.) <----------------------->
    
};


// flip the completed property \\


-----NOTES------
inspect - console
type:     !true       !fasle
prints:    fasle       true

var gordonBoolean = false
!gordonBoolean 
true

gordonBoolean = !gordonBoolean;
true

gordonBoolean
true
var gordonBoolean = true

-----NOTES-----

deleteTodos: function(position) {
        this.splice(position, 1);
        this.displayTodos();
    },

c.) toggleCompleted: function(position) {
        var todo = this.todos[position];
        todos.completed = !todos.completed;
        this.displayTodos();
}

// console - prints
todoList.addTodo('boolean texting')  
 My Todos [Object]
       0: Object
          completed: fasle
          todoText: 'boolean texting'
          __proto__: Object
       length: 1
     __proto__: Array[0]
     
todoList.toggleCompleted(0);
     My Todos [Object]
       0: Object
          completed: true
          todoText: 'boolean texting'
          __proto__: Object
       length: 1
     __proto__: Array[0]