-STORE-

['item 1', 'item 2', 'item 3']
["item 1", "item 2", "item 3"]

//var = variables   todos = name of variables   ['?', '?', '?'] = arrays
var todos = ['item 1', 'item 2', 'item 3']  
undefined

todos
["item 1", "item 2", "item 3"]


-DISPLAY-
console.log('hello there'); 
// hello there

console.log('hello there','gorgon');
// hello there gorgon

var todos = ['item 1', 'item 2', 'item 3']
console.log(todos);
// ["item 1", "item 2", "item 3"]

console.log('todos');
// todos


-ADD-
//adds item 4 in the array/list
todos.push('item 4') 
4

todos
["item 1", "item 2", "item 3", "item 4"]

todos.push('item 5')
5


-CHANGE-
todos
["item 1", "item 2", "item 3", "item 4", "item 5"]

todos[0]
"item 1"

todos[1]
"item 2"

todos[2]
"item 3"

todos[4]
"item 5"

todos[5]
undefined

// todos[specific item] = change value
todos[0] = 'item 1 updated' 
//new value (no longer item 1)
"item 1 updated" 


-DELETE-
todos
(5) ["item 1 updated", "item 2", "item 3", "item 4", "item 5"]

// todos.splice(place in array[ ], how many item to delete)
todos.splice(0, 1) 
["item 1 updated"]

todos
(4) ["item 2", "item 3", "item 4", "item 5"]

todos.splice(3, 1)
["item 5"]

todos
(3) ["item 2", "item 3", "item 4"]

todos.splice(3, 1)
[ ]