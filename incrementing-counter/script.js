// function declaration
function newFunction() {
    //...
}

// function expression
var newFunction = function() {
};

// expression
1+3;
var a = 2;
return true;

// calling (invoking) a function
alert();
newFunction(param1, param2);

// assign a variable
var a = true;

// function vs method
function thisIsAFunction() {

}
var obj = {
    thisIsAMethod: function() {
    }
}

thisIsAFunction();
obj.thisIsAMethod();


// to do list
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
    todos[i] = todos[i] + "!";
    todos.pop();
}

todos.forEach(function(i) {
    console.log(i);
})

var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
}

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);



// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// var sayBye = function() {
//     console.log("Bye");
// }

// sayBye();

// function multiply(a, b) {
//     if (a > 10 || b > 10) {
//         return "That's too hard!";
//     } else {
//         return a * b;
//     }
// }

// multiply(5, 10);

// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
