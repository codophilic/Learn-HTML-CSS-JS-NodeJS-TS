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










