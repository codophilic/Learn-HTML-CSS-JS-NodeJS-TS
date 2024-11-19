# JavaScript Snippets

- **Guess the output of the provided JS Snippets**

**1. Object as a Key**

```
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

Output:
456
```

- In JavaScript, object keys are always strings. When you use objects as keys, they are implicitly converted to strings. This conversion process involves calling the `toString()` method on the object.
- In this case, both `b` and `c` are objects. When they are used as keys for the a object, JavaScript converts them to their string representations. Since both objects have the same `toString()` representation (likely something like `[object Object]`), they are considered the same key. Lets print out `a`.

```
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
console.log(a)
a[c] = 456;
console.log(a)

console.log(a[b]);

Output:
{ '[object Object]': 123 }
{ '[object Object]': 456 }
456
```

- Therefore, when you assign `456` to `a[c]`, it overwrites the previous value assigned to `a[b]`.

**2. Object References and Modifications**

```
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);

Output:
new value another value new value
```

- `obj1`, `obj2`, and `obj3` initially refer to the same object in memory. Changing `obj1.key` modifies the original object all three variables point to. Assigning a new object to `obj2` breaks its reference to the original object but `obj3` still points to the original object, so its key remains `new value`.

**3. `this` Keyword in Object Methods**

```
const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();

Output
foo
undefined
```

- When the method `obj.b` is called directly on `obj`, the output will be `foo`. This is because `this` refers to the object that the method is called on, and `obj.a` is equal to `foo`. `{a: "foo"} -> this`.
- When the variable `c` is assigned the value of `obj.b`, **it is a reference to the function itself and not the object obj**. Lets output the `c` variable and `obj` variable.

```
const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

console.log(c) // Only a function , which does not have reference to `a` because it is not a object.
console.log(obj) //Object and has reference to `a`

obj.b();
c();

Output:
[Function: b]
{ a: 'foo', b: [Function: b] }
foo
undefined
```

- When `c` is called, **it is not called on an object, so this will not refer to `obj`** and the value of `this.a` is `undefined`. As a result, the output when calling `c()` will be `undefined`.

**4. Adding to Object Properties**


```
const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));
```

- The `addFoo` function takes an object as an argument and returns the value of `obj.foo + 1`. When `addFoo` is called with `x` as the argument, the output will be 2, because `x.foo` is equal to 1. When `addFoo` is called with `y` as the argument, the output will be 3, because `y.foo` is equal to 2.
- `addFoo(x)` and `addFoo(y)` don't modify the original objects. They create a temporary copy of the `foo` property, add 1, and return the result.

**5. Looping with setTimeout**

```
const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

Output:
5
5
5
5
5
```

- The `setTimeout` function is called inside of a loop that iterates through the elements in the arr array. The `setTimeout` function will execute its callback function after a delay of 1000 milliseconds. 
- However, **by the time the delay has elapsed and the callback function is called, the loop will have already completed and the value of `i` will be 5**. As a result, the output will be 5 printed five times.
- The same result will be also yield when we use arrow function

```
const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

Output:
5
5
5
5
5
```

- Now consider below code

```
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

Output:
0
1
2
3
4
```

- The difference in behavior comes from how `let` and `var` handle scoping in JavaScript. `setTimeout` is asynchronous, so the `console.log` inside it runs after 1000 milliseconds.
- But here's the key part, **when the callback runs, it uses the value of `i` that exists at that moment in time**. **What matters is how i is stored ?**.
- **Difference Between `var` and `let`**
    - `var` creates one single `i` for the entire loop.
        - All the callbacks (inside `setTimeout`) point to the same `i`.
        - By the time the `setTimeout` runs (after 1000ms), the loop has finished, and i has already become 5.
        - That's why all `console.log(i)` print 5.
        - The loop runs, setting `i` to `0, 1, 2, 3, 4`. **But there's only one `i` shared for all iterations**. After the loop finishes, `i` is now 5. After 1000ms, all `setTimeout` callbacks run, but they all see the same `i`, which is 5.
    - `let` creates a new `i` for each loop iteration.
        - Each `setTimeout` callback gets its own copy of `i`.
        - When the callback runs, it uses the value of `i` from the specific iteration it was created in.
        - That’s why `console.log(i)` prints `0, 1, 2, 3, 4` for each iteration.
- Think of `var` as one shared notebook that all the callbacks are writing in. By the time the callbacks check the notebook (after 1000ms), the last value (5) is written in it.
- Think of `let` as giving each callback its own notebook. Each notebook has the correct value from the moment it was created, so the callbacks can look at their own notebooks and see the correct number (0, 1, etc.).

**6. Looping with `forEach`**


```
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
  console.log(element);
});


Output:
1
2
3
4
5
```

- **The `forEach` method is called on the `arr` array and a callback function is passed as an argument**. The callback function will be executed for each element in the array, with the element passed as an argument to the callback. As a result, the output will be the elements of the array, 1, 2, 3, 4, and 5, printed on separate lines.
- **Whats the difference between normal for loop vs `forEach` loop?**
- `for` Loop: A traditional way to iterate over arrays
    - Control: You can control the loop (e.g., start/stop early with break or continue).
    - Index Access: You can directly access both the index (i) and the element (arr[i]).
    - More General Purpose: Can be used for non-array-like data as well.

```
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

Output:
1
2
3
4
5
```

- `forEach` Loop: A higher-order function specific to arrays
    - Cleaner Syntax: No need to manually manage loop counters or termination.
    - Callback Function: Automatically provides access to the value, index, and the whole array as parameters.
    - Cannot Break or Continue: It will iterate through the entire array without early termination.

```
const arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => {
  console.log(value+" "+index);
  
});

Output:
1 0
2 1
3 2
4 3
5 4
```

- In most cases, the performance difference between for and forEach is negligible. However, here are some points to consider:
- `for` Loop:
    - Slightly faster in older JavaScript engines because it doesn’t involve a callback function overhead.
    - If you need to stop or skip iterations, it’s faster since you don’t need to simulate this behavior.

- `forEach` Loop:
    - Easier to write and read but might be slower due to the overhead of invoking a function for every iteration.
    - However, modern JavaScript engines optimize both loops, making the difference negligible in most practical applications.


**7. Conditional with Anonymous Function**


```
let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);

Output:
1undefined
```

- The if statement is evaluating the function `f` as a boolean value. In JavaScript, **functions are truthy values, so the condition will evaluate to true and the code block inside the if statement will be executed**. The value of `x` is then incremented by the string `undefined` as function f are of block scope and it remains part of evaluation block, which result `undefined` calling `typeof f.`

**8. Pass by Reference**

```
let a = {
  x: 1,
  y: 2,
};
let b = a;
a.x = 5;
console.log(a);
console.log(b);


Output:
{x:5, y:2}
{x:5, y:2}
```

- **JavaScript objects are passed by reference**. So when we assigned a object to `b`. `b` also pointing to the same object in memory. When we change the value of `a.x` it also affects `b.x`.

https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions



