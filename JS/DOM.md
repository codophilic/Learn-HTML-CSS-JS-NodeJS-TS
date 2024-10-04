# DOM (Document Object Model)

- Lets understand DOM via an analogy.
- Imagine, the DOM is like a blueprint of the house. It represents the layout of the house showing where the different rooms are located like hall, bedrooms (1/2/3 BHK), kitchen area, washrooms, guest rooms, walls, doors etc...
- HTML is your concrete implementation of this blue print (DOM). HTML has tags and elements which represents your rooms inside the house. HTML is the structure of the web page, just like walls, rooms, and doors in a house.
- CSS is the paint, furniture, and decor that makes the house look beautiful. CSS adds visual styling to the structure, just like paint, furniture, and decorations make a house look nicer.
- JavaScript is like the electrical system, but also the controls. It can turn things on or off (like lights or fans)

## DOM Definition

- **The DOM is the browser’s way of turning the text-based HTML code (the tags and elements in the HTML) into a system of objects (things that JavaScript can understand and manipulate).**
- The DOM is what's responsible for converting this textual markup into a system of objects that we can easily work with in a programming language, most commonly JavaScript.
- **The DOM views an HTML document as a tree of nodes.** A node represents an HTML element. Let's take a look at this HTML code to better understand the DOM tree structure.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DOM tree structure</title>
  </head>
  <body>
    <h1>DOM tree structure</h1>
    <h2>Learn about the DOM</h2>
  </body>
</html>
```

- The above code is like a document is called the **root node** and contains one child node which is the `<html>` element. The `<html>` element is also called as **Element node**. The `<html>` element contains two children which are the `<head>` and `<body>` elements. Both the `<head>` and `<body>` elements have children of their own.

![alt text](image.png)

- This way using the tree-representational the browser keeps track off the parent child relations between different HTML elements.
- We can access these elements in the document and make changes to them using JavaScript. If you remember we have used `document.getElementById(idName)` in our `The Unconventional Calculator` page, we were accessing the HTML tags which are converted into methods (`getElementById`) into the object (`document`) by DOM.
- **The `document` represents the DOM object for your entire web page. `getElementById(idName)` is a method provided by the DOM API that allows you to access an HTML element with a specific `id` from the DOM.**
- In other words, the DOM has already converted your HTML structure (tags and elements) into an object (`document`). When you use `getElementById()`, you’re using one of the DOM's built-in methods to access a specific element (e.g., a `<div>`, `<input>`, etc.) by its `id` attribute.

```
HTML Snip Code
      <input type="number" id="input-number" />

JS Code
const userInput = document.getElementById('input-number');
```

- You're telling JavaScript to look at the DOM's representation of the HTML and retrieve the element with the `id` of `input-number`. This allows you to interact with that element (like getting its value, changing its text, or styling it dynamically).
- Using DOM objects you can create, modify and delete elements from the document. Example, `document.createElement()` adds a new elements to the DOM tree.
- The browser parses or reads the HTML and converts it into the DOM (a tree of objects representing the elements on the page).
The DOM is essentially a representation of the HTML document in the browser that JavaScript can interact with.
- **HTML is managed by the DOM in the sense that the DOM is a live representation of the HTML structure that JavaScript can modify**
- The browser applies the styles (CSS rules) to the elements represented in the DOM. While CSS is not managed by the DOM, the DOM elements are styled according to the CSS rules, and the browser applies these styles.
- JavaScript can interact with the DOM to modify the structure and content of the webpage (e.g., changing text, adding new elements, hiding/showing elements). It can also handle events (like clicks, hovers, form submissions), allowing you to make your page dynamic. JavaScript doesn't manage the DOM itself but uses the DOM API (a set of methods and properties) to modify or interact with the page’s elements.
- In short, HTML is converted into the DOM by the browser, which represents the page as a tree of objects. CSS is applied to the DOM elements to style them. The browser handles how CSS affects the DOM objects' appearance. JavaScript interacts with the DOM, using it to dynamically change the structure, content, or style of the page. JavaScript also listens for events (like clicks) and performs actions when those events occur.
- **JavaScript is a hosted language, because the browser provides environment to execute JS code.**
- If you remember, we had saw that **`the browser also gives you a couple of features, so-called Browser APIs which are built in, which you can use into from your Javascript code`**. 

![alt text](Images/basicofjs/image-56.png)

- **DOM API are one of those Browser APIs**, the DOM API is one of the most important Browser APIs. It allows JavaScript to interact with the structure of a web page (HTML) by representing it as a set of objects. This lets you access, modify, add, or remove elements from the page dynamically. For example, methods like `document.getElementById()` or `document.createElement()` are part of the DOM API.
- DOM is one of the built-in Browser APIs that JavaScript can use, just like these other APIs! The DOM API specifically handles interaction with the web page’s structure and content.

![alt text](image-1.png)

- Consider below **index.html** file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
  </head>
  <body>
    <h1> DOM Header</h1>    

  </body>
</html>
```

- Lets open developer tool console on chrome browser and type `console.dir(document)`

![alt text](image-2.png)

- If you see , the document object has list of different properties.

## Window Object

- **The window object is the global object that represents the current window or tab of your browser where your webpage is displayed.**
- Everything that runs in your webpage, including JavaScript, exists inside the window.
- It contains properties, methods, and objects that you can use to control aspects of the webpage, like opening new tabs, displaying alerts, and even working with the DOM (your HTML).
- On the browser console, type `window`.

![alt text](image-3.png)

- You can different properties under it. If you go down a little you will find one property call `document`.

![alt text](image-4.png)

- The `document` property is your DOM object. So window is your global object which consist of all other object. The `document` object represents the DOM (Document Object Model), which is the structure of your web page (HTML). The `document` object is part of the `window` object.
- The `document` object is a property of the `window` object. When a web page loads, the browser creates the `window` object, and inside it, you also have access to the `document` object. This means you can access `document` like this: `window.document` (but most of the time, we just write `document` directly).
- If you remember we use `alert()` function, even that is part of `window` global object.

![alt text](image-5.png)

- In your JS file when you write `alert()` function, the browser loads and parses it with `window` like `window.alert()` and executes it. There are other couple of functions like `open()` which opens new tab.

<video controls src="20241004-0921-03.6754013.mp4" title="Title"></video>

>[!IMPORTANT]
> - The scope of `window` object is global but it is restricted to the current tab. If there are multiple tab open in your browser, you cannot access other tab using current tab `window` object.

![alt text](image-6.png)

## Nodes vs Elements

- In JavaScript, when working with the DOM (Document Object Model), you often come across terms like nodes and elements. Though they seem similar, there is a difference between the two.

### What is a Node?

- In the DOM, everything is a node. A node is a basic unit in the DOM tree. It can represent different things in the document, including:
  - HTML elements (like `<div>`, `<p>`, etc.)
  - Text content inside elements
  - Attributes on HTML elements
  - Comments in the HTML
- So, the term "node" is a generic term for anything in the DOM tree.

#### Types of Nodes:

- Element nodes: These represent HTML elements, like `<div>`, `<h1>`, `<p>`.
- Text nodes: These represent the text inside an element. For example, in `<p>Hello</p>`, the text "Hello" is a text node.
- Comment nodes: Represent HTML comments, like `<!-- This is a comment -->`.
- Attribute nodes: Represent attributes of elements, like `class="header"` in `<div class="header">`.

#### nodeType

- The `nodeType` property in JavaScript tells you what kind of node you're dealing with in the DOM. Remember, in the DOM, everything (HTML tags, text, comments, etc.) is a node. Each type of node has a different `nodeType` value, which is a number that helps us identify the type of node.
- Consider below html file

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
  </head>
  <body>
    <h1 id="header1id"> DOM Header</h1>    
    <div id="myDiv">
        Hello, World!
        <!-- This is a comment -->
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

- Consider below JS code.

```
const h1ElementNode=document.getElementById("header1id")
const divElementNode=document.getElementById("myDiv")

console.log(h1ElementNode.nodeName)
console.log(divElementNode.nodeName)

console.log(h1ElementNode.nodeType)
console.log(divElementNode.nodeType)

const childElementsOfDiv=divElementNode.childNodes

childElementsOfDiv.forEach(i=>{
    console.log(i.nodeName+" "+i.nodeType+" "+i.nodeValue)
}
)
```

- On browser console. 

![alt text](image-8.png)

- The `text` nodes have a node type number of 3 whereas node type number for `comment` is 8

- Different [nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)


### What is an Element?

- An element is a specific type of node that represents an HTML element (like `<div>`, `<h1>`, `<img>`, etc.). In the DOM, elements are more specific than nodes because they always correspond to HTML tags.
- **Node is the broader term: everything (HTML elements, text, comments, attributes) is a node in the DOM. Element is a specific type of node that represents HTML elements.**

![alt text](image-7.png)

## Query Selectors

- When we learned CSS, there is a concept called CSS Selectors.
<br>
<details>

<summary> Recap of CSS Selectors </summary>

- CSS selectors target the HTML elements on your pages, allowing you to add styles based on their ID, class, type, attribute, and more.
- CSS (Cascading Style Sheets) selectors are patterns used to select and style elements on a web page. They tell the browser which HTML elements to apply the CSS rules to. Think of selectors as a way to target specific parts of a web page to change their appearance or layout.
- Types of selectors
    1. Simple Selector (Element , Class and ID selector)
    2. Universal Selector
    3. Group Selector
    4. Attribute Selector
    5. Pseudo Class Selector
    6. Pseudo Element Selector
    7. Combinators

</details>
<br>
<br>

- In JavaScript, there will be times when you need to access an HTML element. The DOM provides **Query Selectors**. Query Selectors are methods in JavaScript that allow you to select HTML elements from the DOM (Document Object Model) based on CSS-style selectors. This means you can use the same selectors that you would use in CSS to target and manipulate elements in your HTML.
- Types of Query Selectors

**1. `document.querySelector()`:**
  - This method **returns the first element that matches** the specified CSS selector.
  - If no elements match, it returns `null`.


**2. `document.querySelectorAll()`:**
  - This method **returns a NodeList (similar to an array) of all elements that match** the specified CSS selector.
  - If no elements match, it returns an **empty NodeList**.

- Lets see some example, below is the HTML,CSS and JS code within the **querySelectors.html** file.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Example</title>
    <style>
        /* CSS Styles */
        .highlight { /* Class Selector */
            background-color: yellow;
        }
        .title {
            color: blue;
            font-size: 24px;
        }
        .description {
            font-size: 18px;
        }
        #uniqueElement { /* ID Selector */
            color: green;
        }
        /* Styling for nested elements */
        .container p {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1 class="title">CSS Selectors and Query Selectors</h1>
    
    <p class="description">This is a description paragraph.</p>
    <p class="description">This is another description paragraph.</p>
    
    <div id="uniqueElement">This is a unique element.</div>
    
    <div class="container">
        <p>Nested paragraph inside a container.</p>
        <span class="inner">Inner Span</span>
    </div>

    <button class="btn">Click Me</button>

    <script>
        // Using querySelector() to select different types of elements
        
        // 1. Selecting an element by class, why `.title`? because in CSS Selector we define class selector by `.title{ CSS Styles }`
        /**
         * .title {
            color: blue;
            font-size: 24px;
            }
         */
        let titleElement = document.querySelector('.title'); // Selects the first element with class "title"
        console.log(titleElement.textContent); // Outputs: CSS Selectors and Query Selectors

        // 2. Selecting an element by ID, why `#uniqueElement` because its an ID selector , same definition given during CSS Styling
        /*
        #uniqueElement {
            color: green;
        }
        */
        let uniqueElement = document.querySelector('#uniqueElement'); // Selects the element with ID "uniqueElement"
        console.log(uniqueElement.textContent); // Outputs: This is a unique element.

        // 3. Selecting the first description paragraph (matches the whatever the first description is found)
        let firstDescription = document.querySelector('.description'); // Selects the first element with class "description"
        firstDescription.classList.add('highlight'); // Adds highlight class to change background color
        
        // 4. Selecting nested elements
        let nestedParagraph = document.querySelector('.container p'); // Selects the first <p> inside the container class
        console.log(nestedParagraph.textContent); // Outputs: Nested paragraph inside a container.

        // Using querySelectorAll() to select multiple elements
        
        // 5. Selecting all description paragraphs
        let descriptionElements = document.querySelectorAll('.description'); // Selects all elements with class "description"
        descriptionElements.forEach((el) => {
            console.log(el.textContent); // Outputs each description paragraph
        });

        // 6. Selecting all buttons
        let buttons = document.querySelectorAll('.btn'); // Selects all buttons with class "btn"
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                alert('Button clicked!'); // Alerts when the button is clicked
            });
        });

        // 7. Selecting all spans in the container
        let innerSpans = document.querySelectorAll('.container span'); // Selects all <span> elements inside the container
        innerSpans.forEach((span) => {
            console.log(span.textContent); // Outputs: Inner Span
        });

        // 8. Selecting all <p> elements
        let allParagraphs = document.querySelectorAll('p'); // Selects all <p> elements in the document
        allParagraphs.forEach((p) => {
            p.style.color = 'purple'; // Changes the color of all paragraphs to purple
        });
    </script>
</body>
</html>
```

- On browser console.

![alt text](image-9.png)

![alt text](image-13.png)

- We can run query selector on browser console as well.

![alt text](image-10.png)

- Consider another example

```
<!DOCTYPE HTML>
<html>
    <head>
        <title>Exercise time!</title>
    </head>
    <body>
        <main>
            <div id="overview">
                <h1>HTML & JavaScript are crucial technologies</h1>
                <p>The web would not work without them...</p>
            </div>
            <div id="advantages">
                <ul>
                    <li>Flexible</li>
                    <li>Available</li>
                    <li>Magical</li>
                </ul>
            </div>
        </main>
        <script>
            const mainHeading = document.querySelector("h1");
            console.log(mainHeading);
            const secondAdvantage = document.querySelectorAll("li")[1];
            console.log(secondAdvantage);
            const advDiv = document.querySelector("#advantages");
            console.log(advDiv);
        </script>        
    </body>
</html>
```

- On browser console

![alt text](image-11.png)

- You can also access the complete head and body using `document` object

![alt text](image-12.png)






















