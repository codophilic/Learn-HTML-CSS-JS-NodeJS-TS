let count;

count = 10;
count = "10"
console.log(count);

let username: string = "Alice";
let age: number = 25;
let floatValues: number = 1.45;
let isActive: boolean = true;
let greeting: string = `Hello, ${username}! You are ${age} years old.`;
let nothing: null = null;
let notDefined: undefined = undefined;
let justInitialize;

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


let anyType: any = "This can be anything";
anyType = 42; // Now it's a number
anyType = true; // Now it's a boolean
anyType = { name: "Alice" }; // Now it's an object
console.log(typeof anyType); // object
if(anyType){
    console.log("anyType is truthy");
}


let arr_numbers: number[] = [1, 2, 3];
let arr_strings: string[] = ["hello", "world"];
let arr_booleans: boolean[] = [true, false, true];
console.log(typeof arr_numbers); // object (arrays are objects in JavaScript)
console.log(arr_numbers.length); // 3
console.log(arr_strings[0]); // "hello"
console.log(arr_booleans[1]); // false
console.log(arr_numbers[1]); // 2
arr_numbers.push(4); // Adding a number to the array
console.log(arr_numbers); // [1, 2, 3, 4]
delete arr_numbers[1]; // Removing the number at index 1
console.log(arr_numbers); // [1, 2, 3, 4]


let person: [string, number] = ["Alice", 30];
console.log(person[0]); // "Alice"
console.log(person[1]); // 30
person[0] = "Bob"; // Changing the name
person[1] = 35; // Changing the age
console.log(person); // ["Bob", 35]
person.push("extra"); // This will won't cause an error
console.log(person); // ["Bob", 35, "extra"]

const readonly_names: readonly string[] = ["Alice", "Bob"];
// readonly_names[0] = "Charlie"; // Error: Index signature in type 'readonly string[]' only permits reading.


const readonly_numbers: ReadonlyArray<number> = [1, 2, 3];
// readonly_numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'


function greet(name: string): string {
    return "Hello " + name;
  }
  
let add: (a: number, b: number) => number = (a, b) => a + b;
  
console.log(greet("Harsh"))
console.log(add(5,6))


type personDetails = [string, number];

let person_name_age: personDetails = ["John Doe", 30];
let person_name_age1: personDetails = ["Harsh", 25];
let person_name_age2: personDetails = ["Alice", 28];
let person_name_age3: personDetails = ["Bob", 35];
let person_name_age4: personDetails = ["Charlie", 22];
let person_name_age5: personDetails = ["David", 40];
let person_name_age6: personDetails = ["Eve", 29];
let person_name_age7: personDetails = ["Frank", 33];

type returnedFunction = (a: number, b: number) => number; // Define Return Function arguments and return type

function getOperation(type: string): returnedFunction {
    if (type === "add") return (a, b) => a + b;
    return (a, b) => a - b;
  }
  
  const op = getOperation("add");
  console.log(op(7, 2)); // ➝ 9

  type User = {
    name: string;
    isActive: boolean;
  };
  
  function greetings(user: User): string {
    return `Hello ${user.name}, active: ${user.isActive}`;
  }
  
  console.log(greetings({ name: "Alice", isActive: true }));
  
  

  function printId(id: string | number) {
    console.log("Your ID is:", id);
  }
  
  printId(101);       // ✅
  printId("A102");    // ✅
//   printId(true);      // ❌
  
  type Status = "success" | "error" | "loading";
  
  let currentStatus: Status;
  
  currentStatus = "success"; // ✅
  currentStatus = "error";   // ✅
//   currentStatus = "pending"; // ❌ Not part of union
  
  
  // These arrays can hold elements of different types, specified using a union type.
  let mixed: (number | string)[] = [1, "hello", 2, "world"];


// Define custom types
type Admin = {
    name: string;
    role: "admin";
    accessLevel: number;
  };
  
  type Customer = {
    name: string;
    role: "customer";
    loyaltyPoints: number;
  };
  
  // Union type of Admin or Customer
  type AnyUser = Admin | Customer;
  
  // Example function
  function getUserInfo(user: AnyUser) {
    console.log("Name:", user.name);
    
    if (user.role === "admin") {
      console.log("Access Level:", user.accessLevel);
    } else {
      console.log("Loyalty Points:", user.loyaltyPoints);
    }
  }
  
  // ✅ Sample usage
  const adminUser: AnyUser = {
    name: "Alice",
    role: "admin",
    accessLevel: 5
  };
  
  const customerUser: AnyUser = {
    name: "Bob",
    role: "customer",
    loyaltyPoints: 120
  };
  
  getUserInfo(adminUser);
  getUserInfo(customerUser);
  



function greetAll(name: string, age?: number) {
    if (age) {
      console.log(`Hello ${name}, you are ${age} years old.`);
    } else {
      console.log(`Hello ${name}!`);
    }
  }


  greetAll("Alice", 25); // Hello Alice, you are 25 years old.
  greetAll("Bob");       // Hello Bob!

let data:unknown;

data = 'String value'


// Promise that resolves to a string
function getStringPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Promise that resolves to a number
function getNumberPromise(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1500);
  });
}

// Promise that does not resolve to any value
function getVoidPromise(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

let sym1 = Symbol("desc");
let sym2 = Symbol("desc");
  
console.log(sym1 === sym2); // false (even though same description)
let bigNumber: bigint = BigInt(1234567890123456789012345678901234567890);
