var todoList {
    todos: [],
    displayTodos function() {
        debugger; //pause the program 
     if (this.todos.length === 0){
        console.log('your todos list is empty!')
     } 
        else {
        console.log("My Todos:");
        for(var i = 0; i < this.todos.length; i++){ //i = undefined, i = 0, i = 1, i = 2
        
    if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
           
        }   
            else {
                console.log('( )', this.todos[i].todoText); //i = undefined, i = 0,i = 1, i = 2
           }
        }
    },
}
    
addTodos: function(todoText) { //todoText = "runnin the debugger"
    debugger; //pause the program(1)
        this.todos.push({
        todoText: todoText, //todoText = "runnin the debugger"
        completed: fasle
        });
        this.displayTodos(); //goes into the line 3
    }, //program(1) stops here
    
changeTodos: function(position, todoText) { //position 0, todoText = "change happened"
    debugger;   //pause the program(2)
        this.todos[position].todoText = todoText; //position 0, todoText = "change happened"
        this.displayTodos(); //goes into the line 3
    }, //program(2) stops here

deleteTodos: function(position) { //position = 0 
    debugger;   //pause the program(3)
        this.splice(position, 1);   //position = 0 
        this.displayTodos(); //goes into the line 3
    }, //program(3) stops here

toggleCompleted: function(position) {   //position = 0
    debugger;   //pause the program(4)
        var todo = this.todos[position];
        // ^todo = Object {todoText: "to be toggled", completed: false}, //position = 0
        todos.completed = !todos.completed;
        this.displayTodos(); //goes into the line 3
}, //program(4) stops here

toggleAll: function(position) {
  debugger;   //pause the program(5)
    var totalTodos = this.todos.length; //totalTodos = 1
    var completedTodos = 0; //completedTodos = 1
    
    // Get numbers of completed todos.
    for (var i = 0, i = totalTodos, i++){ //i = 0,  totalTodos = 1 ...i = 1,  totalTodos = 1
      if (this.todos[i].completed === true){
        completedTodos++; //completedTodos = 1
        }//for
    }//if
    

    // Case 1: If everything's true, make everything false
    if (completedTodos === totalTodos) { //completedTodos = 1, totalTodos = 1
        //make everything false.
    for (var i = 0, i = totalTodos, i++){ //i = 0, i =1
      this.todos[i].completed = false){ //i = 1, totalTodos = 1
        completedTodos++;
        }//this
        
     // Case 2: Otherwise, make everything true  
        else {
            for (var i = 0, i = totalTodos, i++){
                this.todos[i].completed = true;
                //for
        }//else
      }//for 
      
      this.displayTodos(); //goes into the line 3
      
    }//program(5) stops here
};

//1. we want to get acess to the display todos button
var displayTodosBtn  = document.getElementById('displayTodos');
    //console.log('displayTodosBtn');
var toggleAllbtn = document.getElementById('toggleAll');

//2. we want to run displayTodos method, when someone clicks the button 
displayTodosBtn.addEventListener('click', function()){
    todoList.displayTodos();
});

toggleAllbtn.addEventListener('click', function()){
    todoList.toggleAll();
});

