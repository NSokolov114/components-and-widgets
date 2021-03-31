
// SWITCH - many IFs
switch(x) {
    case 'value1':  // if (x === 'value1')
    case 'value3': // of if (x === 'value3')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default: // if other options failed
      ...
      [break]
  }

// FOR
for (let i = 0; i < 5; i++) {
    // ...
    if (i % 2) continue; // exits the loop in the cycle,
    // and goes back to the 1st line.
}

let j = 0;
for (; j < 5; j++) {}

for (;;) {
    // ...
    if (i > 5) break; // exits the cycle!
}

// WHILE
let i = 5;
while (i > 0) {
    // ...
    i--;
}

while (i) {} // while (i != 0) {}

do {
    // ...
    i--;
} while (i > 0);

// ?? (a new one) returns 1st if 1st isn't undefined
let user;
user ?? "noone" // noone
user = 'vasya';
user ?? "noone" // vasya

// OR || AND && NOT !
!0 // true - converts to boolean and changes F->T, T->F

// ternary (условный) operator
let m = (n >= 0) ? 'positive or 0' : 'negative';
// we can use it for more than 2 options: 
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

// if else operator 
if (n > 0) {
    m = 'positive';
} else if (n < 0) {
    m = 'negative';
} else {
    m = 'zero';
}

// == OR === ?
0 == false // true, converts to 1 type
0 === false // false, checks types

// , rare operator
let a = (1 + 2, 3 + 4);
alert( a ); // 7 - returns last one

// *= +=
n *= 2 // n = n * 2
n += 5 // n = n + 5
n *= 3 + 5 // n = n * (3 + 5)
n-- // n = n - 1

// = is an operator, it writes AND returns the value
let a = 1; let b = 2;
let c = 3 - (a = b + 1); // a = 3, c = 0
a = b = c = 2 + 2 // a,b,c = 4

// f-strings:
let fStr = `Hi, you look ${mood}, is everything ok?`

// convert to boolean
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Hi!") ); // true - not empty
alert( Boolean("") ); // false - empty

// convert a str to a number
let num = Number(str);
let num = +str;

// convert a variable to a string
let value = true; // boolean
value = String(value); // теперь value это строка "true"
typeof value  // string
typeof(value) // string


// меткa nextPrime
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // простое
    }
  }

// function declaration объявление
function newFunction() {
    //...
}

// function expression
var newFunction = function() {
};

// callback function
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
function showOk() {
    alert( "Вы согласны." );
  }
function showCancel() {
    alert( "Вы отменили выполнение." );
  }
// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
// OR
ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );



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
