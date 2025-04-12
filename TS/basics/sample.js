var count;
count = 10;
count = "10";
console.log(count);
var username = "Alice";
var age = 25;
var floatValues = 1.45;
var isActive = true;
var greeting = "Hello, ".concat(username, "! You are ").concat(age, " years old.");
var nothing = null;
var notDefined = undefined;
var justInitialize;
console.log(typeof username); // string
console.log(typeof age); // number
console.log(typeof isActive); // boolean
console.log(typeof greeting); // string
console.log(typeof floatValues); // number
console.log(typeof nothing); // object (this is a quirk in JavaScript)
/*
The output object when using typeof null in JavaScript is a well-known quirk and considered a historical bug.
In the initial implementation of JavaScript, values were stored with a type tag.
The value null was represented with all bits set to zero, which, by a flaw in the type-checking logic,
was interpreted as the object type tag.
*/
console.log(typeof notDefined); // undefined
console.log(typeof justInitialize); // undefined
var anyType = "This can be anything";
anyType = 42; // Now it's a number
anyType = true; // Now it's a boolean
anyType = { name: "Alice" }; // Now it's an object
console.log(typeof anyType); // object
if (anyType) {
    console.log("anyType is truthy");
}
var arr_numbers = [1, 2, 3];
var arr_strings = ["hello", "world"];
var arr_booleans = [true, false, true];
console.log(typeof arr_numbers); // object (arrays are objects in JavaScript)
console.log(arr_numbers.length); // 3
console.log(arr_strings[0]); // "hello"
console.log(arr_booleans[1]); // false
console.log(arr_numbers[1]); // 2
arr_numbers.push(4); // Adding a number to the array
console.log(arr_numbers); // [1, 2, 3, 4]
delete arr_numbers[1]; // Removing the number at index 1
console.log(arr_numbers); // [1, 2, 3, 4]
var person = ["Alice", 30];
console.log(person[0]); // "Alice"
console.log(person[1]); // 30
person[0] = "Bob"; // Changing the name
person[1] = 35; // Changing the age
console.log(person); // ["Bob", 35]
person.push("extra"); // This will won't cause an error
console.log(person); // ["Bob", 35, "extra"]
