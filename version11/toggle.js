var todoList {
    todos: [],
}
    
addTodos: function(todoText) {
    this.todos.push({
    todoText: todoText,
    completed: fasle
    });
},
    
changeTodos: function(position, todoText) {
    this.todos[position].todoText = todoText;
},

deleteTodos: function(position) {
    this.splice(position, 1);
    //this.displayTodos();
},
    
toggleCompleted: function(position) {
    var todo = this.todos[position];
    todos.completed = !todos.completed;
},

toggleAll: function(position) {
    for (var i = 0, i = totalTodos, i++){
        if (this.todos[i].completed === true){
        completedTodos++;
    }
}
    
if (completedTodos === totalTodos) {
    for (var i = 0, i = totalTodos, i++){
        this.todos[i].completed = false){
        completedTodos++;
    }else {
        for (var i = 0, i = totalTodos, i++){
            this.todos[i].completed = true;
        }
      } 
};

// Version 8 ----------------------------------------------------

var handlers { 
    displayTodos: function(){
        todoList.displayTodos();
    },
    
    addTodos: function(){ 
        var addTodosInput = document..getElementById('addTodosText');
        todoList.addTodos('addTodosText.value')
        addTodosText.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
    changeTodos: function(){ 
        var changeInputP = document..getElementById('changePositon')
        var changeInputT = document..getElementById('changeText');
        todoList.changeTodos(changePositon.valueAsNumber, changeText.value);
        changePositon.value = ''; // empty string 
        changeText.value = ''; // set it nothing
        view.displayTodos();
    },
    
    deleteTodos: function(){ 
        var deleteInput = document..getElementById('deletePosition');
        todoList.deleteTodos('deletePosition.valueAsNumber')
        deletePosition.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
    toggleCompleted: function(){ //lesson 5
        var toggleInput = document..getElementById('togglePosition');
        todoList.toggleCompleted('togglePosition.valueAsNumber')
        togglePosition.value = ''; // empty string will set it to nothing
        view.displayTodos();
    },
    
      toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos(); 
    }
};

// Version 9 -----------------------------------------------------

var view = {    
  displayTodos: function () { 
      var todosUL = document.querySelector('ul');
      todosUL.innerHTML = '';
      for (var i = 0; i < todoList.todos.length; i++) {
         var todosLI = document.createElement('li');
         var todo = todosList.todos[i]; 
         // '(x) todosText
         var todosTextWithCompletion = '';
         if(todo.completed === true){
             todosTextWithCompletion = '(x)' + todo.todoText; //completed
             
         } else {
              todosTextWithCompletion = '( )' + todo.todoText; //not completed
             
         }
         todosLI.textContent = todosTextWithCompletion;
         todosUL.appendChild(todosLI);
      }
   }  
};
