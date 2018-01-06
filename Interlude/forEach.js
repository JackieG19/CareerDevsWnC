var students = ['john','jen','jack'];

function logName(name){
    console.log(name);
}

logName(students = [0]); //completely manually
// john

logName(students = [1]); 
// jen

logName(students = [2]); 
// jack


for (var i = 0; i < students.length; i++){  // shorter than manual
    logName(students[i]);
}
// john
// jen
// jack


students.forEach(logName); // shorter than the for loop
// john
// jen
// jack


students.forEach(function logName(name){ // same as students.forEach(logName);
    console.log(name);
});
// john
// jen
// jack


function forEach(myArray, myFunction){
    for (var i = 0; i < myArray.length; i++){
        myFunction(myArray[i]);
    }
}


forEach(students, function(student){
    console.log(student);
});
// john
// jen
// jack

forEach(students, logName);
// john
// jen
// jack