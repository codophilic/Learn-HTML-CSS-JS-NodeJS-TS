# JavaScript (JS)

![alt text](image.png)

- Let take a simple analogy.
- HTML forms the skeleton of your web page, just like the framework of a building. It defines the structure and content. Each HTML element (like headings, paragraphs, images, links) is like a room or wall, giving shape and layout to your content.
- CSS is responsible for the look and feel of your web page, much like paint, wallpaper, and decorations in a building. CSS also controls the layout, such as where each room (HTML element) is placed, similar to how furniture and decor are arranged in a building. CSS defines fonts, text sizes, and other visual aesthetics, akin to the textures and finishes in interior design.
- JavaScript adds interactive features to your web page, just like lifts, alarms, and security systems in a building. JavaScript can change the HTML and CSS dynamically, updating the content and style in real time, much like smart home systems adjust lighting or temperature based on certain conditions.
- **HTML structures the content, CSS styles and beautifies it, and JavaScript adds interactivity and functionality, creating a complete, user-friendly web experience**.
- When you see buttons, animations, or pop-up messages on a website, that’s likely JavaScript at work. It allows web developers to add behaviors to web pages, making them more than just static content like text and images.
- **JavaScript is both a scripting and programming language**.

## What does Scripting language means?

- A scripting language is a type of programming language that is usually used to write short programs (called scripts) that control the behavior of another software program. Instead of building standalone applications, scripting languages are often used to make things happen inside an existing environment, like a web browser or a server.

<details> 

<summary> What does interpreted means? </summary>

- An interpreted language means the code is read and executed line-by-line by another program called an interpreter, instead of being fully converted into machine code (compiled) before it runs.
- In contrast, a compiled language (like C or Java) requires the entire program to be translated into machine code (the language the computer understands) all at once before it can run. Interpreted languages are usually faster to test and run in small pieces, but may be slower in performance than compiled languages for large, complex tasks.

</details><br>


- JavaScript is a scripting language because it's interpreted, meaning it can run as is without any extra steps. Scripting languages are often easier to learn and write than programming languages.
- JavaScript is called a scripting language because it is designed to be run directly by another program (like a web browser), rather than needing to be compiled into a separate executable file first. In simple terms, a scripting language lets you write small programs (scripts) that are quickly and easily executed to perform tasks, often automating things. For example, in a browser, JavaScript scripts tell the browser how to behave—like responding to button clicks, updating content on the page, or showing animations—without the need for complex compilation steps.

## How is JS executed on browser?

![alt text](image-1.png)

- Let's say you write your Javascript code and you want it to have some effect on the web page, if we talk about the browser as the environment where we run our script. Then you have one important thing built into any environment where you want to run Javascript code and that's a **Javascript engine**.
- The Chrome browser has V8 as its JS engine, in Firefox the name would be SpiderMonkey, Safari uses JavaScriptCore and of course other browsers also either reuse these engines or have their own engines. Now the job of the engine is to parse code, read and understand your Javascript code, then on the fly compile it to machine code because machine code executes faster, so it reads your code but it does not necessarily execute it like that but instead, it now takes that code and compiles it to code which is faster to execute by the machine and then it executes that machine code.
- This all happens in the browser with the help of the Javascript engine and then when that code is executed, we have that effect on our web page. All of these happens on a single thread.
- The Javascript code execution runs on one single thread.
- Hold on, we had **Javascript** is a scripting language where it only require interpreter. **Then why does Javascript engine compiles it?**
- **In Interpreted language, code is run line by line directly by another program (called an interpreter) without turning it into machine code**. Classic JavaScript runs directly in the browser, no need to compile it. 
- **In Compiled language the entire code is translated into machine code before it's run, making it faster during execution**. C and Java code must be fully compiled into machine language before the program can run.
- A scripting language (like JavaScript) was originally seen as "interpreted" because it, runs inside another program (the browser). Doesn't need to be compiled like traditional compiled languages.
- **In older browsers, JavaScript was fully interpreted—meaning, the browser executed it line by line without compiling it first.**
- **Modern browsers (like Chrome or Firefox) want JavaScript to run faster**. Interpreting code line by line is slow for big, complex websites. To improve performance, they now use Just-In-Time (JIT) compilation, which means:
    - The browser starts interpreting JavaScript as it always did.
    - But as it runs, the browser compiles some parts of the code into machine code (behind the scenes) to speed things up.
    - So, it starts out interpreted but uses on-the-fly compilation to make the code run faster.
- **It’s still called an interpreted scripting language because**:
    - You write the code, and it runs immediately (no manual compilation).
    - But to make it faster, browsers now secretly compile parts of the code while it's running.

## Dynamic Interpreted and Weekly Typed Programming language

![alt text](image-2.png)

### Dynamic Interpreted

- To be more specific **Javascript is dynamic interpreted** , which means that it's not pre-compiled, other languages like C++ are compiled during or after development, so before you share them with the end users. Javascript is on-the-fly compiled and that means that the code is evaluated and executed at runtime, the code can change at runtime.

### Weekly Typed

- In Javascript you are allowed to dynamically switch the type of data there. In a variable, you might start by storing some text and suddenly at a later point of time, you store a number in there instead, in the same variable. Now switching the data of a variable other programming languages are not allowed to do like in Java or C++ but you can do that in Javascript,
- When we work with data in Javascript, for example text data or numbers, you don't have to tell Javascript that you're going to work with a text now or you're going to work with a number now, instead data types are assumed, are inferred automatically so to say, that's also related to this dynamic nature where data types can also change from one line to another. In other programming languages like Java or C++, you have to tell the language that you're variable will be a string or text or a number.

## Different Host Environments

- Javascript engine can be part or can be executed in different environments. The most well known environment is the browser, modern browsers have Javascript engines built in and they're therefore capable of executing Javascript code but you also can run Javascript in other environments, for example on the server side, so right on a computer without having a browser in between, so not inside of a browser but simply execute code on your machine.
- Now Javascript was invented to run in the browser, to make web sites more dynamic, to be able to change things on a web site without loading a new page you could say because Javascript is able to closely work together with the loaded HTML code, with CSS.
- You can also use Javascript to send background HTTP requests, so to send some behind the scenes requests and fetch data without reloading the page and much more.
- Now there also are certain things Javascript can't do when it runs in the browser environment though, for example it can't access your local file system for security reasons because otherwise every web page you visit would be able to read your file system, maybe delete files on your computer and so on
- JS does not interact with your operating system and so on, the browser gives you certain things you can do in its own environment and doesn't allow other things.
- **To run JavaScript, browser has JavaScript Engine, so to  to run Javascript anywhere we must have this JavaScript Engine. So if  we take it out of the browser and then make it available as a standalone tool which you can use to execute Javascript anywhere else directly on your machine and this tool is in the end called Node.js**.
- **Node.js** can be executed on any machine and therefore it's also often used to build web back-ends, to build web servers, server side

![alt text](image-3.png)

- There are two main environments where you can run JavaScript locally on your own machine:
    - Inside a Web Browser (like Chrome).
    - Using Node.js.

### Running JavaScript in a Browser (JavaScript Engine)

- When you run JavaScript inside a web browser (like Chrome, Firefox, or Safari). The JavaScript code runs on the JavaScript engine that is built into the browser.
    - Chrome uses the V8 engine.
    - Firefox uses the SpiderMonkey engine.
    - Safari uses the JavaScriptCore engine.
- These JavaScript engines are responsible for compiling and executing the JavaScript code directly in the browser. So, if you're running JS code locally in your browser (like via the developer console or in an HTML file), **it is executed by the browser's JavaScript engine, not Node.js.**

### Running JavaScript in Node.js

- **Node.js is a JavaScript runtime environment built on top of Chrome's V8 engine**. It's designed to allow JavaScript to run outside the browser, usually for building back-end services, servers, or running scripts.
- When you run JavaScript using Node.js on your computer, it still uses the V8 engine to execute the JavaScript code. However, Node.js provides extra features like access to the file system, network, and other system resources that browsers don't allow (since browsers are sandboxed for security).

<details> 

<summary> Whats sandboxed? </summary>

- Sandboxing means that web browsers keep the websites you visit in a safe, restricted area on your computer. This is done to protect your system from any harmful actions that the website's code (like JavaScript) might try to do. 
- Sandboxing means the browser isolates websites to keep them from doing harmful things to your computer. It’s a security feature that limits what websites can access on your system.

</details><br>

- So, if you're running JS code using Node.js, it uses the V8 engine, but it's not the same as running code inside a browser—Node.js provides more functionality for server-side applications.

## JavaScript vs Java

- There is nothing relationship between JavaScript and Java. In initial days when javascript was developed, Java was popular languages, so JavaScript was prefixed with Java just to make it sound cooler.

![alt text](image-4.png)


## History

![alt text](image-5.png)

- In 1995, Netscape introduces **LiveScript** which thereafter was renamed to Javascript. Now in 1996, Microsoft also released its own version of Javascript in Internet Explorer. Back then Javascript also wasn't able to do a lot of things, it was mainly used for a spam things, for annoying overlays and pop-ups but another problem was that you had to write very different scripts for different browsers.
- In late 1996, people saw that this fragmentation could be a problem and therefore, Javascript the language was submitted to the **ECMA committee to start standardization**. ECMA stands for European Computer Manufacturers Association. This simply is an organization which will stand responsible for standardizing Javascript so that you have one standard which then could be implemented by multiple browsers. So then we had ongoing standardization efforts until 2005 roughly and Microsoft did really join the party, well we know how Microsoft was in the late 90s, early 2000s, ultimately they supported the standardized Javascript version.  Now the efforts of standardization continue and we had huge progress until 2011. It's evolving, new features are getting added, it's getting a better and better programming language 
- We now have a standardized language which is really great to use and we have that thanks to this ECMA international organization. Now this organization in the end manages a language called **ECMAScript** 
- **ECMAScript provides the rules, guidelines, and standards for scripting languages like JavaScript, whereas JavaScript is the most well-known implementation of those rules**.
- It's like a blueprint or specification that describes how a scripting language should work. This standard ensures that different implementations (like JavaScript) follow the same set of rules, making them behave consistently across different platforms (browsers, servers, etc.).
- ECMAScript is the standard that defines how the core features of the language should work. JavaScript is a language that follows the ECMAScript standard but also has its own additional features.
- Other implementation are ActionScript or Jscript.
- Having a standard (ECMAScript) allows different browsers (like Chrome, Firefox, Safari) and environments (like Node.js) to run JavaScript consistently. So, whether you're running JavaScript in a browser or on a server, it follows the same basic rules.



**Lets Code**

- Here we will be running our code on chrome browser as it provides **developer tools** for debugging and many more using VSCode editor.
- Lets first create a **index.html** file and css file(**app.css**). This page is a simple calculator page.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />
  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
  </body>
</html>
```

- The above code, is basically simple HTML with CSS we have not added JS over here.

![alt text](image-6.png)

![alt text](image-7.png)

- The css file is under **assets/styles** (following a standard convection where all the static contents like video, images, pdf, css files are kept under **assets** folder).
- Lets add some JavaScript code into our **index.html** file. So to add that we need to specify JS contents under script tag `<scripts></scripts>`.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

    <!-- JavaScript code -->
    <script>
      alert("Hello!!!");
    </script>
  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
  </body>
</html>
```

- Lets drag and drop our **index.html** file under chrome browser.

<video controls src="20241001-1122-41.9592692.mp4" title="Title"></video>

- If you see we got a pop-up which says **Hello!!**. The `alert()` function gives a pop-up. If you see the rendering of the page, the JS feature `alert()` got loaded first then the HTML & CSS content got loaded later. What if you wanna render your HTML & CSS content first then your JS features? , do can add the `script` tag before the end of the body `</body>`.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>

    <!-- JavaScript code -->
    <script>
      alert("Sum is 660");
    </script>
  </body>
</html>
```

- This will load the HTML & CSS contents first then the JS features.

![alt text](image-29.png)

## Import JavaScript Files

Lets say you wanna add multiple JS feature, its a good practice to define all the JS related functionalities into a script file with an extension **.js** because when you develop a multiple page you may write several JS features so placing them into a single folder makes the code more readable. Since JS are static files we create a new folder with name as **scripts** under **assets**. Lets create a file name **app.js**.

```
app.js

alert('Hello!!!');
```

- Now we need to import this JS file into our `<script>` tag, since this is a source code for JS there is a attribute name `src` with import the file for the given path.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
    <script src="assets/scripts/app.js"></script>

  </body>
</html>
```


![alt text](image-8.png)


- Lets create a another **app1.js**.

```
alert('Hi!!!');
```

- Lets import the **app1.js** script into our HTML file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
    <script src="assets/scripts/app.js"></script>
    <script src="assets/scripts/app1.js"></script>

  </body>
</html>
```

- When we reload our browser, both of our scripts gets executed.

<video controls src="20241001-1206-54.7084265.mp4" title="Title"></video>

- Lets say change the order of script execution like below, first we will execute **app1.js** then **app.js**.

<video controls src="20241001-1209-02.5438431.mp4" title="Title"></video>

- So the placing **order of script file matters**. Script will execute in the given sequential order.


>[!NOTE]
> - `<script/>` self closing tag will not work in case of JavaScript, you need to always define `<script></script>`.
> - Writing semi-colon(`;`) is optional in JavaScript. `alert("Hello!!")` will also work for getting up the pop-up.


## Variable & Constants

- So a variable is a data container which holds some data and in Javascript, we create a variable by using the **`let`** keyword followed by variable name and a initial value.

```
let username='Rahul';
username='Akshay';
```

- You can change the variable values during in your code or in your execution flow.
- Lets you wanna define a constant value, you can define that using **`const`** keyword in JS.

```
const pie=3.14;
```

- Constant is a data container but instead of with the **`let`** keyword, you create it with the **`const`** keyword.
- You cannot change the value of constant value

```
Error
pie=3.1;
```


![alt text](image-9.png)


- You can simple just declare the variable and then later you can initialize it.

```
let VarName
VarName="later"
```

- For constant , you need to declare and initialize it. Below code will give error.

```
const AConstVar;
//Error - 'const' declarations must be initialized
```

## Variable Naming Convection

- JavaScript is case-sensitive in terms of variable name. If you create a variable name `username` and wanted to use this variable in your you cannot use it as `Username` or `userName` etc.. it must be exact `username`.

![alt text](image-10.png)


## Operators

- Operators are similar to performing mathematical operations on number. So using it, JavaScript provides us to manipulate the values of variables.

![alt text](image-11.png)


- Lets modify our **app1.js**


```
let alertVariable="Hi!!!!"
alert(alertVariable);
```

- We still get the same output.

![alt text](image-12.png)


- In JavaScript , string value can be written in using single quote (**`''`**), double quote (**`""`**) and using backtick (**``**). Whatever you use ensure that you maintain the same string quote throughout your code.
- When we use the `+` operator with string value, it concatenates.


- Lets modify our **app1.js**


```
let alertVariable="Hi"
let alterVariable2='!!!!'
alert(alertVariable+alterVariable2);
```

- We still get the same output.

![alt text](image-12.png)

- JavaScript execute the code from top-bottom. It follows top-bottom approach. Below is valid string variable example.

```
let someLongString = 'Hi, this is going to be a bit longer, ' +
                     'so maybe split it across multiple lines by ' +
                     'concatenating multiple strings!';
```

- Below is invalid string variable example

```
let someLongString = 'Hi, this is going to be a bit longer, 
                      so maybe split it across multiple lines by 
                      concatenating multiple strings!';
```


- Consider below code in **app1.js**

```
let num1=10
let num2=20
let num3=num1+num2 //Adding numbers
let finalAns="Value - "+num3 //Concatenate String with Number
alert(finalAns)
```

- When we refresh the page.

![alt text](image-13.png)

- JavaScript also supports pre/post increment and pre/post decrement operator.

```
let num1=1
num1++ //post increment operator
num1-- //post decrement operator
++num1 //pre increment operator
--num1 //pre decrement operator
```

- Pre-increment operator and post-increment operator difference

```
let num1=1
let num2=num1++ // num2=1, so post increment first assign the value to num2 then increments the value of num1
let num3=++num1 // num3=3, so pre increment first increments the value of num1 and then assign the value to num3
```

- Similarly pre/post decrement operator works.


- Lets use a constant.

```
let num1=10
let num2=20
let num3=num1+num2 //Adding numbers
const constantVar=1
num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
let finalAns="Value - "+num3 //Concatenate String with Number
alert(finalAns)
```

![alt text](image-14.png)

- Lets try to modify the constant value.

```
let num1=10
let num2=20
let num3=num1+num2 //Adding numbers
const constantVar=1
num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
constantVar=num3
let finalAns="Value - "+num3 //Concatenate String with Number
alert(finalAns)
```

- The alert pop-up won't appear from **app1.js**.

<video controls src="20241001-1326-40.0273084.mp4" title="Title"></video>

- Since we are modified our **Constant variable**, the JS code did not executed on the browser, it has thrown some error. But where is the error?

<video controls src="20241001-1327-53.7260785.mp4" title="Title"></video>

- Lets use backtick instead of double quotes.

```
let num1=10
let num2=20
let num3=num1+num2 //Adding numbers
const constantVar=1
num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
let finalAns=`Value - ${num3}` //Concatenate String with Number
alert(finalAns)
```

- We get still get the same output. How come? `${num3}` tells JavaScript that `${....}` is an placeholder , so printout the content inside the placeholder, so here the placeholder consist of variable name. The placeholder can be expresssion like `${1+1}` which will give 2 as output as `1+1` will be treated as expression by JavaScript. These placeholders are called as Template literals. Template literals are sometimes informally called template strings only works with backtick.
- We can give line break as well using `\n`.

```
let num1=10
let num2=20
let num3=num1+num2 //Adding numbers
const constantVar=1
num3+=constantVar //addition assignment operator , Same as num3=num3+constantVar
let finalAns=`Value - \n ${num3}` //Concatenate String with Number
alert(finalAns)
```

- On browser we can see the `31` value got printed onto the next line.

![alt text](image-15.png)


![alt text](image-21.png)

## Function or Method

![alt text](image-16.png)

- A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).
- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses `()`. Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- Syntax

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Lets see an example, inside the **app1.js**.

```
function additionOfNumbers(num1,num2){
    const result=num1+num2
    alert('Sum is '+result)
}

additionOfNumbers(10,30)
```

- When we reload the browser.

![alt text](image-17.png)

- If we call the function twice, we will get 3 alerts in total.

```
function additionOfNumbers(num1,num2){
    const result=num1+num2
    alert('Sum is '+result)
}

additionOfNumbers(10,30)
additionOfNumbers(40,40)
```

- Reloading browser

<video controls src="20241001-1423-15.1087384.mp4" title="Title"></video>

- If your function wanna return something, we can use **return** keyword.

```
function additionOfNumbers(num1,num2){
    const result=num1+num2
    return result
}

let functionResult=additionOfNumbers(10,30)
alert('Sum is '+functionResult)
functionResult=additionOfNumbers(40,40)
alert('Sum is '+functionResult)
```

- We get the same 3 alerts as output. Here we have made our own function, in JavaScript there are some in-built functions as well like `alert("Any Alert Message")`. The `alert()` method displays an alert box with a message and an `OK` button. The `alert() ` method is used when you want information to come through to the user.

## Global & Local Scope

- Consider below code

```
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

let functionResult=additionOfNumbers(10,30)
alert('Sum is '+(functionResult+GlobalVariable))
functionResult=additionOfNumbers(40,40)
alert('Sum is '+(functionResult+GlobalVariable))
```

- **Global Scope**: Variables defined outside any function (like `GlobalVariable`) have global scope. They can be accessed and modified anywhere in the program, as long as the script is running.
- **Local Scope**: Variables defined inside a function (like `result`) have local scope. They can only be accessed within that function and cannot be used outside of it.

<video controls src="20241001-1450-48.4995500.mp4" title="Title"></video>


## Shadowing Variables

- Consider below code

```
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');
```

- What do you think, will be the output?


![alt text](image-18.png)

- Because the local variable scope is within the function and if the variable name is same it will hide the outer or global variable data and uses the data defined for local variable.
- In JavaScript, shadowing happens when a variable in a local scope (like inside a function) has the same name as a variable in an outer or global scope. The local variable "shadows" or hides the outer variable within that local scope.

## Indirect vs Direct Invocation of Function

- Until now we were directly calling the functuion. When you directly call a function by its name and pass arguments, this is a direct invocation. It’s the most common way to call a function.
- Now consider below code.

```
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

let addOfNums=additionOfNumbers
functionResult=addOfNums(30,300)
alert('Sum is '+(functionResult+GlobalVariable))
```

![alt text](image-19.png)


- Here the function is called through a reference, rather than its original name. This is a indirect invocation via reference.
- Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs). That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function. `someButton.addEventListener('click', additionOfNumbers)`. This snippet would tell JavaScript: "Hey, when the button is clicked, go ahead and execute add.".
- Consider the snip `someButton.addEventListener('click', additionOfNumbers())` will execute the functions before the event of click occurs. JavaScript would encounter that line when it parses/ executes your script and register the event listener AND immediately execute add - because you added parentheses `()` => That means, "Please execute that function!".
- Consider below code

```
let someVar = 5;
additionOfNumbers
alert('Do something else...');
```

- Here we have simply specified the function name, but JavaScript does not knows what do to with that function? "Should I run that when a click occurs? After a certain amount of time? I don't know...", and hence JavaScript kind of ignores this statement.
- Consider below code, here we are passing the function `double` in arguments name, and inside the `transform` function we are calling the `double` function.

```
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function double(num1){
    return num1*2
}

function transform(num1,functionName){
    return functionName(num1)
}


console.log(transform(10,double)); // Prints 20
```

- `console.log` print the data into the developer tools console.

<video controls src="20241001-1629-48.7065927.mp4" title="Title"></video>

## Converting Data Types

- Lets say you have a string or text value which consist of an numerical data. You can convert it by following ways.

```
let str = "42";
let num = Number(str);   // Converts string "42" to number 42
console.log(num);        // Output: 42

let decimal = parseFloat("42.5");
console.log(decimal);     // Output: 42.5
```

- Converting number to string

```
let num = 42;
let str = String(num);   // Converts number 42 to string "42"
console.log(str);        // Output: "42"

let str2 = num.toString();
console.log(str2);       // Output: "42"
```

- Converting 0's or 1's to Boolean value

```
let val = 1;
let bool = Boolean(val);   // Converts number 1 to true
console.log(bool);         // Output: true
bool=Boolean(0)
console.log(bool) // Output: false
```

## Coercion

- Now consider below code

```
let result = 3 + "3";
console.log(result);  // Output: "33"
console.log("5"-2) //Prints 3
console.log("5"-2+"3") //Prints 33
console.log(3 * '3') //Prints 9
```

- Something weird right? the data type is getting automatically converted it seems, this process is called **Coercion or Type Coercion**.
- When you perform operations on values of different data types (like adding a number and a string), JavaScript automatically tries to convert the values to a compatible type through a process called type coercion.
- Type coercion is the process where JavaScript automatically converts a value from one data type to another when necessary during an operation. JavaScript is a loosely or weekly typed language, meaning variables don't have strict types, and the language tries to handle conversions for you when different types are used in the same expression.

### Types of Coercion
- There are two main types of type coercion in JavaScript:

    **1. Implicit Coercion (Automatic)**: This happens automatically when you perform operations between values of different types, and JavaScript tries to convert one type to another to make the operation work.
    **2. Explicit Coercion (Manual) or Type Conversion**: This happens when you intentionally convert a value from one type to another using methods or constructors like `Number()`, `String()`, etc.
- **Explicit coercion** is synonymous with **type conversion**, while **implicit coercion** refers to **automatic type conversion** that JavaScript handles on its own

#### Implicit Coercion

- String Coercion, the number 3 is implicitly coerced to the string `"3"`, and then concatenation happens. **String Coercion happens with the `+` operator if one of the values is a string**

```
let result = 3 + "3";
console.log(result); // Output: "33"
```

- Number Coercion, JavaScript sees the `-` operator and expects both values to be numbers, so it converts the string `"5"` to the number `5`. **Number Coercion happens with arithmetic operators like `-`, `*`, `/`, and `%`.**

```
let result = "5" - 2;
console.log(result); // Output: 3
```

- Boolean Coercion, any non-zero number, non-empty string, object are considered as `true` whereas 0, `""`(empty string), `null`, `undefined`, `NaN` are considered as `false`.


```
let truthy = "Hello";
let falsy = 0;

console.log(Boolean(truthy)); // Output: true (non-empty string is truthy)
console.log(Boolean(falsy));  // Output: false (0 is falsy)
```

- Consider below codes

```
let result = "" - 1;
console.log(result); // Output: -1 ("" is treated as 0)

console.log(null + 1);      // Output: 1
console.log(undefined + 1); // Output: NaN
```

- Empty string behaves like 0 in numerical operations. `null` is coerced to **0** in number operations, but remains `null` in other cases. `undefined` becomes `NaN` (Not-a-Number) in number operations.


## Undefined, null and NaN

### undefined

- A variable that has been declared but not assigned a value will have a default value called as `undefined`. It is the default value of variables that have been declared but not initialized.

```
//When you declare a variable without assigning a value
let a;
console.log(a); // undefined
```

- If a function doesn’t return any value, it returns `undefined` value by default.

```
function test(){

}
console.log(test()) //Output: undefined
```

- It's generally used by JavaScript itself, and you don't need to explicitly assign `undefined` to variables.

### null

- It represents the intentional absence of any object value. It's often used to indicate that a variable should have no value.

```
let a = null; // Variable explicitly holds "nothing"
```

-  Use `null` when you want to explicitly indicate that a variable has no value or is empty (especially for objects). It’s commonly used in programming to reset an object or reference.

### NaN (Not-a-Number)

- It indicates that a value is not a valid number, usually as a result of an invalid mathematical operation. **`NaN` is of type 'number'**, which is ironic given that it means "Not-a-Number".

```
let a = "abc" / 2;
console.log(a); // NaN

let num = parseInt("abc"); 
console.log(num); // NaN
```

- `NaN` typically comes up automatically when there is an invalid number operation, so you don’t usually assign it directly. You can check for `NaN` using `isNaN()`

```
let c="abc"/2
console.log(isNaN(c)) //Output: true
```

#### Miscellaneous 

##### Adding Numbers to undefined, null and NaN

- Consider below codes

```
a=undefined+1+1
console.log(a) //Output: NaN

let b = null
console.log(b+1) //Output:1 

let c=NaN
console.log(c+1) //Output:NaN
```

- Here, 
  - Since `undefined` cannot be coerced into a number, the result is `NaN` (Not-a-Number). 
  - `null` is coerced into **0** when performing arithmetic, so the result is 1. 
  - Any arithmetic operation involving `NaN` results in `NaN`.

##### Concatenating String to undefined, null and NaN

- Consider below code

```
let resultString = undefined + 'string';
console.log(resultString); // "undefinedstring"

let resultString1 = null + 'string';
console.log(resultString1); // "nullstring"

let resultString2 = NaN + 'string';
console.log(resultString2); // "NaNstring"
```

- Simple concatenates. JavaScript turns them to string value and performs concatenation

##### Operations between undefined, null and NaN

- Consider below code

```
let resultCombo = undefined + null;
console.log(resultCombo); // NaN

let resultCombo1 = undefined + NaN;
console.log(resultCombo1); // NaN

let resultCombo2 = null + NaN;
console.log(resultCombo2); // NaN

let resultCombo3 = undefined + null + NaN;
console.log(resultCombo3); // NaN
```

- Here,
  - `undefined` cannot be coerced into a number, but `null` is coerced into **0**. The result is `NaN` because any operation with `undefined` results in `NaN`.
  - Any operation with `NaN` results in `NaN`.
  - `null` is coerced into **0**, but since `NaN` is involved, the result is `NaN`.
  - `undefined + null + NaN` follows left-to-right evaluation. First, `undefined + null` results in `NaN`, then `NaN` + `NaN` results in `NaN`.





![alt text](image-28.png)

## Completing Calculator Page

- Until we have some basic knowledge of JS, now using this lets try to accept data from html page and display value. How to do this then? using `document.getElementById()`. `document.getElementById()` method is a way for JavaScript to interact with the **DOM (Document Object Model)**, which represents the structure of your HTML page.
- `document.getElementById()` is used to select an HTML element based on its **id attribute**. When JavaScript selects an element, it can read or modify its properties (like text, values, or style). This is how JavaScript interacts with the browser to fetch or display values. 


*We will explore more about DOM later*

- Lets see our **index.html** file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
    <script src="assets/scripts/app1.js"></script>
    <script src="assets/scripts/app.js"></script>
  </body>
</html>
```

- There are several **id attributes** like `btn-add`, `btn-subtract`, `btn-multiply`, `btn-divide`, `current-calculation` etc.. Lets create a new script (**acceptDisplay.js**).

```
//Accepting input from browser via constant name
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

//Displaying output on browser via constant name
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');
```

- Lets create a function `outputResult()` which will set the values within these variables (`currentResultOutput` and `currentCalculationOutput`)

```
//Accepting input from browser
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

//Displaying output on browser
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');


function outputResult(mathematicalresult, mathematicalExpression) {
  currentResultOutput.textContent = mathematicalresult;
  currentCalculationOutput.textContent = mathematicalExpression;
}
```

- **The Unconventional Calculator** will accept number and based on that number it gonna perform arithmetic operations. So lets create different functions for it.

```
//Accepting input from browser
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

//Displaying output on browser
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(mathematicalresult, mathematicalExpression) {
  currentResultOutput.textContent = mathematicalresult;
  currentCalculationOutput.textContent = mathematicalExpression;
}

function add(){

}

function subtract(){

}

function multiply(){

}

function division(){
  
}
```

- But how will this function compute operations? it would require input right? for that we have variable `userInput`. Now this `userInput` is in String format, we need to manually perform type conversion. Lets use `parseFloat()`.

```
const userInput = parseFloat(document.getElementById('input-number'));
```

- But operations is performed between two inputs, lets create a variable second input. The answer needs to be stored itself in the `secondInput`.

```
// Second Input
let secondInput=0;
```

- Lets complete the empty functions.

```
//Accepting input from browser
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

//Displaying output on browser
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(mathematicalresult, mathematicalExpression) {
  currentResultOutput.textContent = mathematicalresult;
  currentCalculationOutput.textContent = mathematicalExpression;
}

// Second Input
let secondInput=0;

function add(){
  let Expression=`${secondInput} + ${userInput}`
  secondInput+=userInput
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function subtract(){
  let Expression=`${secondInput} - ${userInput}`
  secondInput-=userInput
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function multiply(){
  let Expression=`${secondInput} * ${userInput}`
  secondInput*=userInput
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function division(){
  let Expression=`${secondInput} / ${userInput}`
  secondInput/=userInput
  outputResult(secondInput,Expression) // Calling outputResult() method
}
```

- These `add()`, `subtract()`, `multiply()` and `division()` method must be called when users clicks on button (`addBtn`, `subtractBtn`, `multiplyBtn` and `divideBtn`)
- So to achieve this we will use `addEventListener`.

*We will explore more about `addEventListener`*

```
// Indirect calling methods
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
```

- When we go to the browser and run we get something like below

![alt text](image-20.png)

- This is because our input is not accepting proper numeric value. So we need to convert the `userInput` to `value` and parse it using `parseFloat` to accept floating numbers.

```
function getNumberValue(){
  return parseFloat(userInput.value)
}


function add(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} + ${fetchInputNumber}`
  secondInput+=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function subtract(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} - ${fetchInputNumber}`
  secondInput-=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function multiply(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} * ${fetchInputNumber}`
  secondInput*=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function division(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} / ${fetchInputNumber}`
  secondInput/=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}
```

- Other code details remains the same, now we need to link the new script file into the HTML.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>
    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>
    <!-- <script src="assets/scripts/app1.js"></script>
    <script src="assets/scripts/app.js"></script> -->
    <script src="assets/scripts/acceptDisplay.js"></script>
  </body>
</html>
```


- Lets checkout

<video controls src="20241001-1819-50.3317326.mp4" title="Title"></video>

## Data Types

- Up till now we have seen Number, String and Boolean datatype and saw some of the example. Lets see **Object** data type in JavaScript.

### Object

- Consider below code

```
let obj={
    "name":"Rahul",
    "age": 25,
    "Male": true
}
console.log(obj)
```

- When we see the console, we get below output

![alt text](image-22.png)


- An object is a data structure that can hold multiple values in the form of key-value pairs. Each key (also known as a property) is a string (or Symbol), and each value can be of any data type. Object allow you to group related data and functionalities together.
- We can change the object properties

```
//Changing value
obj.age=24
console.log(obj) //Output: {name: 'Rahul', age: 24, Male: true}

//Deleting a property
delete obj.name
console.log(obj) //Output: {age: 24, Male: true}
```

- We can also define nested objects

```
let employee = {
  name: "Bob",
  position: "Developer",
  contact: {
    email: "bob@example.com",
    phone: "123-456-7890"
  }
};
```

- On console

![alt text](image-23.png)

- We can also defined functions inside the object

```
let calculator = {
    add: function(x, y) {
      return x + y;
    },
    subtract: function(x, y) {
      return x - y;
    }
  };
  console.log(calculator.add(5, 3)); // Outputs: 8
```

- Lets declare a constant object

```
const person = { name: "Alice", age: 30 };
console.log(person)
person.age=31
console.log(person)
```

- If you see defining key with double quote or single quote is optional, but if you carefully observe `person` is a constant but still we are able to modify the object data (`person.age=31`).
- Why so? **When you declare an object with `const`, you are not allowed to reassign the object itself (i.e., you can't point the variable to a new object). However, the properties of the object can still be modified. This is because const ensures that the reference to the object remains the same, but the contents inside the object (the properties) can be changed.**

```
const person = { name: "Alice", age: 30 };
person = { name: "Bob", age: 40 }; // Error: Assignment to constant variable
```

![alt text](image-24.png)

- You cannot change the reference to point to a different object once the object is defined with `const`. You can change, add, or delete properties inside the object, because the reference to the object (the memory location where the object is stored) is still the same.
- The object itself is stored in memory, and the reference to that object is constant, but the content of the object is mutable. You can think of it like this: the "container" (object) is fixed in place, but what you put inside the container can change.

```
const car = {
  brand: "Toyota",
  model: "Corolla"
};

// Allowed: modifying properties
car.model = "Camry";
console.log(car.model); // Outputs: "Camry"

// Not allowed: reassigning the object
car = { brand: "Honda", model: "Civic" }; // Error: Assignment to constant variable
```

- If you want to make sure that the object and its properties cannot be changed, you can use `Object.freeze()`.

```
const car = Object.freeze({
  brand: "Toyota",
  model: "Corolla"
});

car.model = "Camry"; // This will not change the object
console.log(car.model); // Still "Corolla"
```

#### Array

- **An array is a special type of object** used to store multiple values in a single variable. Arrays can hold various types of data, including numbers, strings, and even other arrays. Each value in an array is stored at a specific index, starting from `0`.
- Elements in an array are stored in a specific order, starting with index `0`. You can access elements using their index (position) in the array. Arrays can grow or shrink dynamically in size, meaning you can add or remove elements as needed.
- Array is declare using `[]`. Elements are comma separated.
- Lets see example

```
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
```

- On browser console

![alt text](image-25.png)

- Arrays allow you to store and work with multiple values at once. Array can store different data type elements

```
const car = Object.freeze({
    brand: "Toyota",
    model: "Corolla"
  });
  
const fruits = ["apple", "banana", "orange"];
  // Removing the last element
  fruits.pop();
  console.log(fruits); // Outputs: ["apple", "mango", "orange"]
  
  fruits.shift(); //Removes first element
  console.log(fruits)

  fruits.unshift("pineapple"); // Adds "pineapple" to the beginning
  console.log(fruits)

const MultipleDifferentElements=["Rahul",2,3.45,true,car,fruits]
console.log(MultipleDifferentElements) 
```

![alt text](image-26.png)


![alt text](image-27.png)

## typeof

- In JavaScript, **typeof is an operator (not a function)** that returns a string indicating the type of the operand (the value you pass to it). The operand can be any value, variable, or expression.
- The output of `typeof` will be a string. Lets see some example

```
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
```

- On browser console

![alt text](image-30.png)

- You can also execute your JS code on browser console.

<video controls src="20241002-0646-46.7216350.mp4" title="Title"></video>

- You can also access your JS scripts variable on the console.

<video controls src="20241002-0648-12.3114200.mp4" title="Title"></video>

- What will be `typeof` function?

```
function tester(){

}
console.log(typeof tester) //function
```


![alt text](image-31.png)


## Defer Attribute

- Consider below code of **index.html** file and **app1.js**, **acceptDisplay.js** remains the same.

```
html file

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <!-- <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    /> -->
    <link rel="stylesheet" href="assets/styles/app.css" />

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>

    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>

    
    <script src="assets/scripts/app1.js"></script>
    <!-- <script src="assets/scripts/app.js"></script> -->
    <script src="assets/scripts/acceptDisplay.js"></script>

  </body>
</html>


app1.js
alert("Hi")
console.log("Hi")
```

- Lets open **Performance** window using developer tools of chrome (open the chrome tab in incognito mode)

![alt text](image-32.png)

- Click on **Record and Reload** button.

<video controls src="20241002-0823-36.6870588.mp4" title="Title"></video>

- You will get some time frame statistics which shows how much your web page took time to load the details. The performance tab allows us to get an idea of what the browser does in detail when it renders the pages.
- Lets carefully observer these stats.

<video controls src="20241002-0828-03.6197769.mp4" title="Title"></video>

- Initially the network request was sent to load html file and it receive the response.

![alt text](image-33.png)

- Since our HTML files consist of external files like CSS and JS, those request was also sent by network.

![alt text](image-34.png)

- Moving further, the parsing of HTML code got started from line (0-34)

![alt text](image-35.png)

- Also the parsing of css got started.
- The browser stopped the parsing of HTML code and started compilation of JS file **app1.js**

![alt text](image-36.png)

- Moving further, the browser executed **app1.js**, now again started parsing HTML file and **acceptDisplay.js**.

![alt text](image-37.png)

- Since there's not much time difference between but still we request the Javascript files only after the parsing is done or when it's almost done entirely because we do that at the bottom of the HTML file. So that's why we only request the files once we're almost done parsing the HTML document.
- Now what we effectively see that the **acceptDisplay.js** script evaluation was started around `1302.4ms` whereas those evaluation could be done earlier when the parsing of HTML was happening. Post evaluation we can execute the JS scripts.
- We don't want to execute the scripts earlier but loading them earlier, downloading them from the server earlier, so there is no latency. (Here the time frame is much in smaller scale but it could be larger when you built enterprise web applications)
- The solution is an extra attribute `defer` in the script.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <!-- <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    /> -->
    <link rel="stylesheet" href="assets/styles/app.css" />

    <script src="assets/scripts/app1.js" defer></script>
    <!-- <script src="assets/scripts/app.js"></script> -->
    <script src="assets/scripts/acceptDisplay.js" defer></script>

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>

    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>

    

  </body>
</html>
```

- **When you use `defer`, the browser downloads the script as soon as possible (in parallel with HTML parsing) but waits to execute it until the HTML document is completely parsed. This way, the script is ready to execute as soon as the HTML is fully loaded, but it doesn't block the rendering or parsing of the page**
- If you see the parsing is done and post that the script got executed

<video controls src="20241002-0901-38.3162379.mp4" title="Title"></video>

## Async Attribute

- The `async` attribute in JavaScript is used in `<script>` tags to load and execute a script asynchronously, meaning the script is downloaded and executed independently of the HTML parsing.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Basics</title>
    <!-- <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    /> -->
    <link rel="stylesheet" href="assets/styles/app.css" />

    <script src="assets/scripts/app1.js" async></script>
    <!-- <script src="assets/scripts/app.js"></script> -->
    <script src="assets/scripts/acceptDisplay.js" defer></script>

  </head>
  <body>
    <header>
      <h1>The Unconventional Calculator</h1>
    </header>

    <section id="calculator">
      <input type="number" id="input-number" />
      <div id="calc-actions">
        <button type="button" id="btn-add">+</button>
        <button type="button" id="btn-subtract">-</button>
        <button type="button" id="btn-multiply">*</button>
        <button type="button" id="btn-divide">/</button>
      </div>
    </section>

    <section id="results">
      <h2 id="current-calculation">0</h2>
      <h2>Result: <span id="current-result">0</span></h2>
    </section>

    

  </body>
</html>
```

- In performance tool, we can see the **app1.js** got executed before the parsing of CSS stylesheet.

![alt text](image-38.png)

- `defer`: Scripts are executed after the HTML is fully parsed.
- `async`: Scripts are executed as soon as they are downloaded, which might happen before or after the HTML is parsed, depending on the download speed.


![alt text](image-39.png)

## Debugging using Developer Tools

- Lets say there is some syntax error in your JS code. You forgot `{` after your function like below.

```
function double(num1)
    return num1*2
}
```

- This can be caught within the editor, but this can be also caught on the developer tool of chrome.

![alt text](image-40.png)

- So under `Sources` go to the file **app1.js** which is throwing the error.

![alt text](image-41.png)

- So after fixing **app1.js**, lets open **acceptDisplay.js** file and perform some debugging on it.

<video controls src="20241002-0953-18.3016412.mp4" title="Title"></video>

- Using **Watch Expression**, we can access variables name and its value and perform any required expression.
- Here we have button click event, we can also debug based on events


<video controls src="20241002-1004-10.3502495.mp4" title="Title"></video>

- We can control the debugging by using the `Step in function` or `Step to next break point` any many more.
- We can also see the local and global scope of the variable even the Call Stack (show which method is calling other methods)

![alt text](image-42.png)

## Boolean Operator

- Lets say you wanna compare two value, you can do it using below, it will return `true` or `false`.

```
console.log(2==2) //true
console.log(2!=2) //false
```

- The `==` and `!=` (Not equals) operators are loosely comparator operators, what does this mean? now lets see below example

```
console.log(2=="2") //true
```

- So here on right hand side the data type is number whereas on left hand side the data type is string, the comparison is comparing the content and not the data type. Compares values after performing type coercion. It tries to convert both values to the same type before comparing.

```
5 == '5'  // true (type coercion: '5' is converted to 5)
null == undefined  // true (both are considered "empty" values)

5 != '5'  // false (type coercion makes '5' become 5)
null != undefined  // false (they are considered "equivalent empty" values)
```

- Now consider below code

```
console.log(2==="2") //false
```

- The operator `===` and `!==` compares content as well as data type strictly.

```
5 === 5  // true (same value, same type)
5 === '5'  // false (same value, different types)

5 !== 5  // false (same value, same type)
5 !== '5'  // true (same value, different types)
```

- Strict equality (`===`) and inequality (`!==`) are usually preferred for clarity and to avoid unexpected type coercion.
- Below are other operators 

![alt text](image-43.png)

- Lets compare two arrays and two objects

```
//Arrays
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
```

- Even though `arr1` and `arr2` or `obj1` and `obj2` have identical content, they are different objects in memory. JavaScript treats each instance as unique unless they are explicitly assigned to the same reference, like `arr3 = arr1`.

- To compare arrays or objects by their contents, you need to manually iterate through the properties or use utility functions like `JSON.stringify()`

```
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));  // true (compares their content)
```

## If-else Statement

- When we want to execute some block of statements based on a true condition, we can use `if-else` statement
- Lets see an example

```
if(3>2){
  console.log("3 is greater than 2") //This gets printed in the console.
}
else{
  console.log("2 is not greater than 3")
}
```

- So the `if(condition True)` checks if the condition is true then only executes the statement related to it `{...}`. 

```
if(2>3){
  console.log("3 is greater than 2") 
}
else{
  console.log("2 is not greater than 3") //This gets printed in the console.
}
```

- Lets say you wanna also check whether `2===2`? you can do it using `else if` and pass this condition.

```
if(2>3){
  console.log("3 is greater than 2") 
}
else if(2==2){
  console.log("2 is equal to 2") //This gets printed in the console.
}
else{
  console.log("2 is not greater than 3")
}
```

- You can also have multiple `else if` blocks, nested `if-else`, something like below

```
if(){
  if(){

  }
  else{

  }
}
else{
  if(){

  }else if(){


  }
  else{

  }
}
```

## Logical Operators

- Lets say you wanna combine multiple conditions you can use `&&` (AND) operator or `||` (OR) operator.

```
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter."); // This gets printed as both condition is satisfied
} else {
  console.log("Not allowed to enter.");
}

let age = 16;
let hasPermission = true;

if (age >= 18 || hasPermission) {
  console.log("Allowed to enter."); //This gets printed since hasPermission condition value is true
} else {
  console.log("Not allowed to enter.");
}
```

## Operator Precedence

- Consider below code.

```
console.log((3+3)*3) // Prints 18
```

- Here the preference is first given to `()` for computing and then `*`.

```
console.log(3+2 < 9-3) //Prints 6 (5<6)
console.log(5 + 2 === 7 && 4 > 5 || 'Hi' === 'Hi') //Prints true (7==7-> true AND 4>5-> false OR "Hi"="Hi" -> true)
```

- Each operator has a precedence you can find out [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)




https://dev.to/arikaturika/how-web-browsers-work-part-1-with-illustrations-1nid
https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/#:~:text=js%20are%20examples%20of%20runtime,and%20manipulating%20the%20page%20structure.
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
https://www.tutorialrepublic.com/javascript-tutorial/
https://chatgpt.com/c/66fba1da-3bd4-8009-800e-6c4a949e7375