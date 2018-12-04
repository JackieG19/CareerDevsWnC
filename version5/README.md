## Learning the concept called for loop
for loop repeat a certain amount of code any number of times

Telling the computer in english that you want to say hey 3 times
- i = 0 (tell the computer keep track of the variable called i and make a 0 first)
- say "hey" if i < 3 (say hey if i is less than 3)
- increase i by 1 

When the for loop runs: 
- 0 = "hey" because zero is less than 3
    - then i increase by 1
- 1 = "hey"
    - then i increase by 1 (1 + 1)
- 2 = "hey"
    - then i increase by 1 (1 + 2)
- It will stop at 3 and the for loop will no longer be true

___

```
for (initialiation; condition; final-expression){
    console.log("hey");
}
```

**i = 0** (this is called *Initialiation*)
- initalize a variable to keep track of how many times you wanna do something
- zero is a thing that we're using to keep track of whether we should conutine to print hey

**say "hey" if i < 3** (this is called *Condition*)
- if this is true, then keep going otherwise, stop

**increase i by 1** (this called *Final-expression*)
- will happen after each round, 
- so after saying hey the first time we'll increase i by 1


```
for(var i = 0; i < 3; i++){ 
    console.log("hey");
}
// wil print out hey 3 times
```
