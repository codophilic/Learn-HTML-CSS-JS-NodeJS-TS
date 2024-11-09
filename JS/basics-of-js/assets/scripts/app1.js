// let alertVariable="Hi"
// let alterVariable2='!!!!'
// alert(alertVariable+alterVariable2);

// let num1=10
// let num2=20
// let num3=num1+num2 //Adding numbers
// const constantVar=1
// num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
// let finalAns="Value - "+num3 //Concatenate String with Number
// alert(finalAns)


// let num1=10
// let num2=20
// let num3=num1+num2 //Adding numbers
// const constantVar=1
// num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
// let finalAns=`Value - \n ${num3}` //Concatenate String with Number
// alert(finalAns)

let GlobalVariable; // Global Variable, Scope is within the program is executed completely

function additionOfNumbers(num1,num2){
    /* 
    Local Variable, the scope is within the function, 
    the result variable cannot be accessed outside the 
    function
    */
    const result=num1+num2
    GlobalVariable=result;
    return result
}

// let functionResult=additionOfNumbers(10,30)
// alert('Sum is '+(functionResult+GlobalVariable))
// functionResult=additionOfNumbers(40,40)
// alert('Sum is '+(functionResult+GlobalVariable))

let addOfNums=additionOfNumbers
functionResult=addOfNums(30,300)
alert('Sum is '+(functionResult+GlobalVariable))

function double(num1){
    return num1*2
}

function transform(num1,functionName){
    return functionName(num1)
}


console.log(transform(10,double)); // Prints 20

console.log("5"-2) //Prints 3
console.log("5"-2+"3") //Prints 33
console.log(3 * '3')

let truthy = "Hello";
let falsy = 0;

console.log(Boolean(truthy)); // Output: true (non-empty string is truthy)
console.log(Boolean(falsy));  // Output: false (0 is falsy)


let str = "42";
let num = Number(str);   // Converts string "42" to number 42
console.log(num);        // Output: 42

let decimal = parseFloat("42.5");
console.log(decimal);     // Output: 42.5

let str1 = String(num);   // Converts number 42 to string "42"
console.log(str);        // Output: "42"

let str2 = num.toString();
console.log(str2);       // Output: "42"


let val = 1;
let bool = Boolean(val);   // Converts number 1 to true
console.log(bool);         // Output: true
bool=Boolean(0)
console.log(bool) // Output: false


let result = "" - 1;
console.log(result); // Output: -1 ("" is treated as 0)

console.log(null + 1);      // Output: 1
console.log(undefined + 1); // Output: NaN

let obj={
    "name":"Rahul",
    "age": 25,
    "Male": true
}
console.log(obj)

//Changing value
obj.age=24
console.log(obj)

//Deleting property
delete obj.name
console.log(obj)

let employee = {
    name: "Bob",
    position: "Developer",
    contact: {
      email: "bob@example.com",
      phone: "123-456-7890"
    }
  }  
console.log(employee)


let calculator = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    }
  };
  console.log(calculator.add(5, 3)); // Outputs: 8
  

const person = { name: "Alice", age: 30 };
console.log(person)
person.age=31
console.log(person)

// const person = { name: "Alice", age: 30 };
// person = { name: "Bob", age: 40 }; // Error: Assignment to constant variable

const car = Object.freeze({
    brand: "Toyota",
    model: "Corolla"
  });
  
  car.model = "Camry"; // This will not change the object
  console.log(car.model); // Still "Corolla"


const fruits = ["apple", "banana", "orange"];
  console.log(fruits[0]); // Outputs: "apple"
  console.log(fruits[1]); // Outputs: "banana"
  
  // Changing an element
  fruits[1] = "mango"; 
  console.log(fruits); // Outputs: ["apple", "mango", "orange"]
  
  // Adding a new element
  fruits.push("grape");
  console.log(fruits); // Outputs: ["apple", "mango", "orange", "grape"]
  
  // Removing the last element
  fruits.pop();
  console.log(fruits); // Outputs: ["apple", "mango", "orange"]
  
  fruits.shift(); //Removes first element
  console.log(fruits)

  fruits.unshift("pineapple"); // Adds "pineapple" to the beginning
  console.log(fruits)

  console.log(fruits.length); // Outputs: 3 Number of elements

const MultipleDifferentElements=["Rahul",2,3.45,true,car,fruits]
console.log(MultipleDifferentElements) 

function test(){

}
console.log(test()) //Output: undefined

a=undefined+1+1
console.log(a) //Output: NaN

let b = null
console.log(b+1) //Output:1 

let c=NaN
console.log(c+1) //Output:NaN
console.log(isNaN(c))

let resultString = undefined + 'string';
console.log(resultString); // "undefinedstring"

let resultString1 = null + 'string';
console.log(resultString1); // "nullstring"

let resultString2 = NaN + 'string';
console.log(resultString2); // "NaNstring"

let resultCombo = undefined + null;
console.log(resultCombo); // NaN

let resultCombo1 = undefined + NaN;
console.log(resultCombo1); // NaN

let resultCombo2 = null + NaN;
console.log(resultCombo2); // NaN

let resultCombo3 = undefined + null + NaN;
console.log(resultCombo3); // NaN

console.log(typeof "Hi") //String
let test1="Hello"
console.log(typeof test1) //String

console.log(typeof 123) //number
test1=123
console.log(typeof test1) //number

test1=true 
console.log(typeof test1) //boolean

test1=NaN
console.log(typeof test1) //number

test1=null //null is an Object
console.log(typeof test1) //Object

let t;
console.log(typeof t) //undefined

t=[1,2,3]
console.log(typeof t) //object (since array is special type of object)

function tester(){

}
console.log(typeof tester) //function


console.log(2==2) //true
console.log(2!=2) //false
console.log(2=="2") //true
console.log(2==="2") //false

if(2>3){
  console.log("3 is greater than 2") 
}
else if(2==2){
  console.log("2 is equal to 2")
}
else{
  console.log("2 is not greater than 3") //This gets printed in the console.
}



let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);  // false (different memory locations)
console.log(arr1 == arr2);   // false (different memory locations)

let arr3 = arr1;
console.log(arr1 === arr3);  // true (same memory reference)

//Object
let obj1 = { name: 'John' };
let obj2 = { name: 'John' };

console.log(obj1 === obj2);  // false (different memory locations)
console.log(obj1 == obj2);   // false (different memory locations)

let obj3 = obj1;
console.log(obj1 === obj3);  // true (same memory reference)

console.log(JSON.stringify(arr1) === JSON.stringify(arr2));  // true (compares their content)


// let UserName = prompt("What is your name?", "defaultUserName because name not given");
// console.log("User's name is: " + UserName); //If user enters name as Rahul -> User's name is: Rahul -> Gets print out on console


function vote(age){
  if(age<18){
    return "You cannot vote"
  }
  return "You can vote"
}

console.log(vote(19)) //Prints "You can vote"

console.log(!""); 
// Explanation: The `!` (NOT) operator flips the truthiness of the value.
// An empty string `""` is falsy, so `!""` becomes true.
 
console.log(!!""); 
// Explanation: The `!!` is like a double negation.
// First, `!""` is `true` because `""` is falsy.
// Then `!true` becomes `false`, so `!!""` results in `false`.

console.log(!!!"");
// Explanation: Triple negation. 
// First, `!""` is `true` (because `""` is falsy).
// Then `!!""` is `false` (double negation).
// Finally, `!!!""` is `true` (because `!false` is `true`).

// Using OR (`||`)

console.log("first" || "second");
// Explanation: The `||` (OR) operator returns the first truthy value it encounters.
// "first" is truthy, so it stops evaluating and returns "first".

console.log("first" || "second" || "third");
// Explanation: Similar to the previous example, "first" is truthy.
// It returns "first" without evaluating the other values.

console.log("" || "second");
// Explanation: The first value `""` is falsy, so it moves to the next value.
// "second" is truthy, so it returns "second".

// Using AND (`&&`)

console.log("first" && "second");
// Explanation: The `&&` (AND) operator returns the first falsy value or the last truthy value.
// "first" is truthy, so it evaluates "second", which is also truthy, so it returns "second".

console.log("first" && "second" && "third");
// Explanation: All values are truthy, so `&&` evaluates all of them and returns the last value.
// It returns "third" because both "first" and "second" are truthy and there’s no falsy value.

let fruit = "appe";

switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red or green.");
    break;
  case "orange":
    console.log("Orange is orange.");
    break;
  default:
    console.log("Unknown fruit.");
}


for (let i = 0; i < 5; i++) {
  console.log(i); 
}

let i = 0;
while (i < 5) {
    console.log(i); 
    i++;
}


i = 0;
do {
    console.log(i); 
    i++;
} while (i < 5);


const Allfruits = ["apple", "banana", "orange"];
for (const i of Allfruits) {
    console.log(i); 
}


const person1 = { name: "Alice", age: 25, city: "Wonderland" };
for (const key in person1) {
    console.log(key + ": " + person1[key]);
}
// Outputs:
// name: Alice
// age: 25
// city: Wonderland

for(const k in Allfruits){
  console.log("Index - "+k+" , fruit name - "+Allfruits[k])
}

outerLoop: // This is the label
for (let i = 0; i < 3; i++) {
    console.log("Outer loop iteration: " + i);
    
    innerLoop: // Another label
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break outerLoop; // Breaks out of the outer loop
        }
        console.log("  Inner loop iteration: " + j);
    }
}
console.log("Program Executed")

try {
  myFunctionWhichIsNotDefined() // No such method is defined
} catch (catchError) {
  console.log("An error occurred: " + catchError.message);
}

try {
  let result = JSON.parse('{"key": "value"}');
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("This block always runs, error or not.");
}

let numerator=10
let denominator=0
try{
  if(denominator===0)
    throw new Error("Denominator cannot be 0 Exception")
  console.log("Division Result - " +numerator/denominator)
}catch(e){
  console.log("Error Caught "+e.message)
}


// if(true){
//   var AvarVariable1=10;
// }

// console.log(AvarVariable1)

// function AvarFunc(){
//   if(true){
//     var AvarVariable=20;
//   }
  
//   console.log(AvarVariable)
//   console.log(AvarVariable1)
// }

// AvarFunc()


// if(true){
//   let AvarVariable1=10;
// }

// console.log(AvarVariable1)

// function AvarFunc(){
//   if(true){
//     let AvarVariable=20;
//   }
  
//   console.log(AvarVariable)
//   console.log(AvarVariable1)
// }

// AvarFunc()

// Below is a block
// {
//   let v1=10
// }

// console.log(v2)
// console.log(v1) // Not accessible , because let has a Block scope {..}

var v2=20

var x = 10;
console.log(window.x); // 10

let y = 10;
console.log(window.y); // undefined

let abc;
console.log(abc)

// // global scope
// const bar = 41;
// console.log(bar); // 41

// if (true) { // block scope
//  console.log(bar); // ReferenceError (not 41) <-- PROOF OF THE HOISTING / TDZ
//  const bar = 42;
//  console.log(bar); // 42
// }

// console.log(bar); // 41


function setName() {
  userName = "ABC"; // Implicit global variable!
}

setName();
// console.log(userName); // ABC (global scope)


"use strict"; // Won't work because there are codes above there

function setName(a,a) {

  console.log(a+a)
}

setName(1,1);

let box1 = {
    width: 100,
    height: 50
};

let box2 = {
    width: 120,
    height: 80
};

const shapes=["square","circle","triangle","rectangle"]

function createBox(width,height){
  return{
    width: width,
    height: height
  }
}





function function1(){
  let a=100
  let b=1001
  console.log(a+b)
}
function function2(){
  function1()
  console.log(2)
}
function function3(){
  function2()
  console.log(3)
}
function function4(){
  function3()
  console.log(4)
}

function4()

const p= {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

// Calling the method
p.greet();  // Output: Hello, Alice!

let funt=function greet() {
  console.log("Hello!");
}

// Adding a property to the function
funt.language = "English";
funt() //  calling the variable name instead of function name because we cannot directly access the function name and call it
console.log(funt.language);  // Output: English
console.dir(funt)


function executeFunction(fn) {
  fn();  // Call the passed function
}

function testfunct1() {
  console.log("test1");
}

function testfunct2() {
  console.log("test2");
}

// Passing greet function as an argument
executeFunction(testfunct1);  // Output: test1
executeFunction(testfunct2);  // Output: test2


// Anonymous function assigned to a variable
const g = function() {
  console.log("Hello!");
};

g();  // Output: Hello!

(function() {
  console.log("This runs immediately!");
})();

const greet1=()=>console.log("Hi")
greet1()

function addNumbers(num1,num2=0){
  console.log("Num1 - "+num1)  
  console.log("Num2 - "+num2)
  console.log(num1+num2)
}

addNumbers(0)

function sumOfNumbers(...AllArguments){
  let sum=0
  for(const i of AllArguments){
    sum+=i
  }
  console.log(sum)
}

sumOfNumbers(1,2,3,4,5,6)

function display(firstElement,secondElement, ...restElements) {
  console.log(firstElement);  // Output: 1
  console.log(secondElement) // Output: 2
  console.log(restElements);   // Output: [3, 4, 5]
}

display(1, 2, 3, 4, 5);


let sumofnumbers=function (){
  let sum=0
  for(const i of arguments){ // don't use this.
    sum+=i
  }
  return sum
}

console.log(sumofnumbers(1,2,3,4))

// function outerFunction(outerParam) {
//   console.log("Outer parameter: " + outerParam);
//   const outerVariable="I am outer function variable"

//   // Inner function
//   function innerFunction(innerParam) {
//     console.log("Inner parameter: " + innerParam);
//     console.log(outerVariable)
//   }

//   innerFunction("Hello from inner function!");  // Calling inner function
// }

// outerFunction("Hello from outer function!");

function outerFunction(outerParam) {
  // Outer variable
  const outerVar = "I'm from outer scope!";
  
  // Inner function (closure)
  function innerFunction() {
    console.log(outerVar);  // Have kept the outerVar from outer function
  }

  return innerFunction;  // Return inner function
}

const inner = outerFunction();  // Call outer function and taking its inner method as in return, outer function execution got finished
inner();  // Calling inner method Output: I'm from outer scope!

// Tagged Template
function highLight(string, inputfruitName,inputprice){
  return "This fruit is expensive if its price is greater than $200"
}

let fruitName="Dragon"
let price="$300"
let output=highLight`${fruitName} fruit price is ${price}`
console.log(output)


function highLightNames(string,inputfruitName,inputprice){

  if(inputprice>300){
    inputfruitName=`<strong>${inputfruitName}</strong>`
    inputprice=`<strong>${inputprice}</strong>`
  }

  return `${string[0]}${inputfruitName}${string[1]}${inputprice}${string[2]}`
}
fruitName="Dragon"
price="$300"
console.log(highLightNames`${fruitName} total price is ${price}. Thankyou for Shopping`)