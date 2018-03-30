var todoList = {
    todos: [],
    addTodos: function(todoText) { 
        this.todos.push({ 
            todoText: todoText, 
            completed: false
        });
    },
    changeTodo: function(position, todoText) { 
        this.todos[position].todoText = todoText; 
    },
    deleteTodo: function(position) { 
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position]; 
        todo.completed = !todo.completed; 
    },
    toggleAll: function() { 
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

var handlers = { 
    addTodos: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput"); 
        todoList.addTodos(addTodoTextInput.value); 
        addTodoTextInput.value = ""; 
        view.displayTodos();
    },
    changeTodos: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position) { // lesson 5 - ver10
        //var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        //todoList.deleteTodoPositionInput(deleteTodoPositionInput.valueAsNumber)
        todoList.deleteTodo(position);
        //deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function() { 
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) { 
            var todoLi = document.createElement('li'); 
            var todo = todoList.todos[i]; 
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            }
            else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }
            todoLi.id = i; // lesson 3 - ver10
            todoLi.textContent = todoTextWithCompletion; 
            todoLi.appendChild(this.createDeleteButton()); // lesson 2 - ver10
            todosUl.appendChild(todoLi);
        }
    },
    // Version 10----------------------------------------------
    createDeleteButton: function() { // lesson 1
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"; //html text in button element
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
 
    setUpEventListeners: function() { //lesson 5
        var todosUl = document.querySelector("ul"); // lesson 4
        todosUl.addEventListener('click', function(event) { 
            //console.log(event);
            console.log(event.target.parentNode.id); 

            //get the element that was clicked on. 
            var elementClicked = event.target;

            //check if elementClicked is a delete button.
            if (elementClicked.className === 'deleteButton') {
                // Run handlers.deleteTodos(position)
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
                // parseInt = turns string into number 
            }
        });
    }
};

view.setUpEventListeners();