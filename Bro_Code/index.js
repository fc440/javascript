//console.log('This is a js test');
//console.log("Hopefully this class will not be difficult")

//window.alert('THIS IS ANOTHER TEST')

// this is a comment
/* this 
is a 
longer comment */

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains


// Two steps
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

//let firstName = 'Frank'; //string literal
//age = 21;  // number literal
//let student = true;  // boolean literal 


//console.log('Hello', firstName)
//console.log('You are', age, 'years old')
//console.log('Enrolled:', student)

//document.getElementById('p1').innerHTML = "Hello " + firstName;
//document.getElementById('p2').innerHTML = "You are " + age + " years old";
//document.getElementById('p3').innerHTML = "Enrolled: " + student;

/* 
arithmetic expression is a combination of.....
operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex. y = x + 5;
*/

//let students = 20;
//students = students + 1;  or    students += 1;
//students = students - 1;  or    students -= 1;
//students = students * 2;  or    students *= 2;
//students = students / 2;  or    students /= 2;
//let extraStudents = students % 2; or    students += 1;


/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction


let result = 1 + 2 * (3 + 4);
console.log(result);
*/

// How to accept user input

// Easy-way with a window prompt

//let username = window.prompt("What's your name?")
//console.log(username);


//difficult way with html textbox
/* let username;

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
*/

// Type conversion = change the datatype of a value to another (strings, numbers, booleans)

/*let age = window.prompt(" How old are you?");
console.log(typeof age);
age = Number(age);
age += 1;
console.log(typeof age);
console.log("happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number("3.14");
y = String("3.14");
z = Boolean('');


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// const a variable that cannot be changed

const PI = 3.14159; // its good practice to use uppercase on const variables
let radius;
let circumference;




radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log('The circumference is:', circumference);  



let x = 3.14;

//x = Math.round(x);    // rounds to whole numbers or ints
//x = Math.floor(x);    // will always round down
//x = Math.ceil(x);       // will always round up
//x = Math.pow(x, 2);      // will raise x to the power of the number after comma
//x = Math.sqrt(x);       // will give the square root of x
x = Math.abs(x);          //  will find absolute value away from 0


console.log(x);



let a;
let b;
let c;

a = window.prompt('Enter side A');
a = Number(a);

b = window.prompt('Enter side B');
b = Number(b);


c = Math.pow(a, 2) + Math.pow(b, 2);

c = Math.sqrt (c);

console.log('Side C:', c);

*/

document.getElementById('submitButton').onclick = function() {

    a = document.getElementById('aTextBox').value;
    a = Number(a);
    
    b = document.getElementById('bTextBox').value;
    b = Number(b);
    
    
    c = Math.pow(a, 2) + Math.pow(b, 2);
    
    c = Math.sqrt (c);
    
document.getElementById('clabel').innerHTML = 'Side C:' + c;

}