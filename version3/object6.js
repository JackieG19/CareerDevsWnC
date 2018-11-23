// It should have a changeTodo method

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){ 
    console.log("My Todos:", this.todos);
    },
    
    addTodos: function(todo){
        this.todos.push(todo); 
        // console.log(todoList.addTodos("water"));
        this.displayTodos(); 
        // My Todos: ['item 1', 'item 2', 'item 3', 'water']
    },
    
    changeTodos: function(position, newValue){ 
        this.todos[position] = newValue;
        //console.log(todoList.changeTodos(3, 'item 4'));
        this.displayTodos;
        // My Todos: ['item 1', 'item 2', 'item 3', 'item 4']
    }
};


// function changeTodos(position, newValue){
//     todos[position] = newValue;
//     displayTodos;
// }

// Remember:
// a function inside an object is called a method
// keyword this. refers to the object
