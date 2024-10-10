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

## Attribute vs Property

- Attributes are defined in the HTML itself. They are part of the HTML tag and are used for initial values.
- Properties are part of the DOM (Document Object Model). Once the HTML is loaded into the browser, elements become objects with properties. Properties can change over time and may not always match the attribute values from the HTML. Properties are accessed directly on the element object in JavaScript.
- Lets understand via example, consider below HTML code.

```
<input type="text" value="initial value" />
```

- Attributes are defined in the HTML markup and provide initial values for elements. They are static and do not change once the page is loaded unless explicitly modified using JavaScript. In this example, `value="initial value"` is an attribute.
- When modified using JS

```
const inputElement = document.querySelector('input');
console.log(inputElement.value); // Logs the current value of the input element
inputElement.value = 'new value'; // Changes the current value of the input element
```

- In this example, `value` is a property of the `inputElement` object which got modified by JS. Now the current value is `new value` for the **property `value`**. Properties are part of the DOM and represent the current state of an element. They are dynamic and can change as the user interacts with the page or through JavaScript.
- In the creation, HTML attributes will determine the initial qualities of the object. With the help of the DOM API and javascript, the HTML is parsed in turned into an object that we can work with. Objects have properties that we can manipulate to change the look, feel, and behavior of our applications.
- **Attributes initialize DOM properties. Attributes are static, while properties are dynamic. Attributes are the initial setup, while properties reflect the live state of elements in JavaScript.**
- Attributes can be accessed using `getAttribute` and `setAttribute` methods, while properties can be accessed directly on the DOM object.

```
const inputElement = document.getElementById('myInput');

// Accessing attribute
console.log(inputElement.getAttribute('value')); // "initial value"

// Accessing property
console.log(inputElement.value); // "initial value"

// Changing property
inputElement.value = 'new value';
console.log(inputElement.value); // "new value"
console.log(inputElement.getAttribute('value')); // "initial value"
```

- **Attributes and Properties may or may not have same name and it may or may not be live synchronization**. Lets understand this via example. Consider below HTML code.

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
    <h1 id="header1id" class="domheader"> DOM Header</h1>    
    <div id="myDiv">
        Hello, World!
        <!-- This is a comment -->

        <input id="inputid" value="a default input msg">
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

- On browser console, the `Element` tab represent HTML tags and attributes.

![alt text](image-14.png)

- Whereas in the console we have `document` and its object.

![alt text](image-15.png)

- Lets clear the console, lets update the header content (`DOM Header`) to a new content (`My Header`). So this can be done by fetching the header id. Now using developer console, we will get object and object has properties. So using the property we will change it and check whether it reflects in the `Element` tab.

<video controls src="20241004-1446-03.1161567.mp4" title="Title"></video>

- Now if you see , to fetch the `id` attribute, there is a property name `h1var.`**`id`**, so here the property name is same as attribute name (**1 (`id`):1 (variblename.`id`) name mapping**), now what happens if we change the **id value (`header1id`)**?

<video controls src="20241004-1451-52.5361818.mp4" title="Title"></video>

- When we change the id value to a new value (`mynewheaderid`), it got reflected in the `Element` tab of developer tools. This states that **id attribute and id property are in live synchronization**.
- Now similarly can we did for `id` can we do it for the class value (`domheader`)? lets see

<video controls src="20241004-1500-40.0695842.mp4" title="Title"></video>

- If you see **there is live synchronization between class attribute and class property** by their name differ, for attribute we have `class="domheader"`, whereas for property we need to fetch using `classHeaderVar.header1id.`**`className`**. So the names are little bit different.
- Now for `input` element we have a tag `value`, is there live synchronization for it as well? lets check

<video controls src="20241004-1510-25.5601076.mp4" title="Title"></video>

- The element attribute and property names are same **but they are not synchronize**, it makes sense because suppose this html is exposed to user and user enters a value in the input, this would override the existing default value (`value="a default input msg"`). So whenever a user again open that same html file it would see the previous input entered by him/her instead of default value.
- Hence, **Attributes and Properties may or may not have same name and it may or may not be live synchronization**.


![alt text](image-16.png)

- You can also access HTML elements tag using property `getElementsByTagName`.

![alt text](image-17.png)

## Parent, Child, Descendent and Ancestor

- Think of HTML elements like members of a family tree:
    - Parent: This is like a parent in a family. It’s the direct element that holds or wraps other elements inside it.
    - Child: This is like a child in the family. It is directly inside a parent element.
    - Ancestor: This refers to any element above the current element in the hierarchy (like parents, grandparents, great-grandparents, etc.).
    - Descendant: This refers to any element that is inside another element, no matter how many levels deep (like children, grandchildren, great-grandchildren, etc.).
- Consider below HTML

```
<div id="grandParent">
  <div id="parent">
    <p id="child">This is a paragraph.
      <a id="descendant" href="#">This is a link</a>
    </p>
  </div>
</div>
```

- a `<div>` is the parent, and inside that, there's a `<p>` (paragraph) which is the child. If the `<p>` has an `<a>` (link) inside it, then the `<a>` is a descendant of both the `<p>` and `<div>`. Meanwhile, the `<div>` is an ancestor of both the `<p>` and `<a>`.
- Below is the JS code

```
let divGrandParentvar = document.getElementById('grandParent');
let divParentvar = document.getElementById('parent');
let Pchildvar = document.getElementById('child');
let aDescendantvar = document.getElementById('descendant');

// Parent-Child relationship
console.log(divParentvar.parentElement); // Outputs: <div id="grandParent">
console.log(Pchildvar.parentElement);  // Outputs: <div id="parent">

// Descendant and Ancestor
console.log(aDescendantvar.closest('div')); // Outputs: <div id="parent"> (first matching ancestor)
console.log(divGrandParentvar.contains(aDescendantvar)); // Outputs: true (because descendant is inside grandParent)

// Direct child access
console.log(divParentvar.children); // Outputs: [<p id="child">This is a paragraph...</p>]

// Navigating ancestors and descendants
console.log(Pchildvar.parentElement); // Outputs: <div id="parent"> (child's direct parent)
console.log(divParentvar.children[0]);  // Outputs: <p id="child"> (parent's direct child)

// Check if the parent is an ancestor of the link
console.log(divParentvar.contains(aDescendantvar)); // Outputs: true
```

- On browser console

![alt text](image-18.png)

![alt text](image-19.png)


## DOM Traversal

- Traversing the DOM in JavaScript refers to navigating between nodes in the DOM tree. You can traverse from a specific node to its parent, siblings, and child nodes. The DOM provides various properties for these traversals, and each has specific differences.

### 1. Traversing to Child Elements/nodes

- Consider below HTML snippet

```
    <div id="parentDiv">
      <p id="first-child">First Child</p>
      <!-- This is my Comment -->
      <span id="second-child">Second Child</span>
      <ul>
        <li class="list-item"> Item 1 </li>
        <li class="list-item"> Item 2 </li>
        <li class="list-item">                        Item 3 </li>
      </ul>
  </div>
```

- Consider below JS code

```
//Traversing in DOM

let parentDiv = document.getElementById("parentDiv");
console.log(parentDiv)
console.log(parentDiv.childNodes);   // NodeList(9) [text, p#first-child, text, comment, text, span#second-child, text, ul, text]
console.log(parentDiv.childNodes.length);   // 9
console.log(parentDiv.childNodes[3]);   // <!-- This is my Comment --> (Accessing 4th element in the list , it is 0 based index)
console.log(parentDiv.children);     // HTMLCollection(3) [p#first-child, span#second-child, ul]
console.log(parentDiv.children.length);     // 3
console.log(parentDiv.children[2]);     // <ul>...</ul> (Accessing 3th element in the list , it is 0 based index)
console.log(parentDiv.children[2].children[2]);     
console.log(parentDiv.children[2].children[2].textContent);     //              item3
console.log(parentDiv.firstChild);        // #text
console.log(parentDiv.firstElementChild); // <p id="first-child">
console.log(parentDiv.lastChild);         // #text
console.log(parentDiv.lastElementChild);  // <ul>...</ul>
```

- On browser console.

![alt text](image-21.png)

- `childNodes`: Returns a `NodeList` of all child nodes (including elements, text nodes, and comments).
- `children`: Returns an `HTMLCollection` of only the child element nodes (ignores text nodes or comments).
- `firstChild`: Returns the first child node (could be an element, text, or comment).
- `firstElementChild`: Returns the first element child.
- `lastChild`: Returns the last child node (could be an element, text, or comment).
- `lastElementChild`: Returns the last element child.

- If you see the output of `console.log(parentDiv.childNodes);` , you can see some `text` nodes inside the list. What are the?

![alt text](image-22.png)

- Those are white-spaces of your html

![alt text](image-23.png)

- When you see the content `data: "\n      "` , these contents are next line and white spaces mention in the red color on the image. These white spaces are automatically gets hide by the browser. These white spaces are still there in the DOM structure representing as text nodes.
- In the HTML code for the list element `<li>`, we have added `              Item3`, now there are so many white spaces before the word `Item3` but on the page it is not visible to us. Because it gets hide by the browser.

![alt text](image-24.png)

- Under the `Element` tab of browser console, when you type `white-space:pre` under the `Style` tab of `Element` you can see the whitespaces


![alt text](image-25.png)

- The reason the browser automatically omits whitespace (such as spaces, tabs, and newlines) inside text nodes is that by default, the browser treats HTML in a way that normalizes or collapses whitespace. This behavior is part of the HTML/CSS rendering engine, which is designed to simplify and improve the layout of web pages.
- In HTML, any sequence of whitespace characters (spaces, tabs, newlines) is collapsed into a single space when rendered in a browser. This means that no matter how many spaces you add between words or elements in the HTML, only one space will appear in the output.

```
<p>    This    is    a    test.   </p>
```

- On browser

```
This is a test.
```

- Text nodes in the DOM may still preserve the exact whitespace that you wrote in the HTML. When you access these nodes in JavaScript, you'll see the full whitespace, but the browser doesn’t display it unless explicitly told to. This is why text nodes retain the spaces, but the browser’s visual output collapses them.
- When you apply the CSS style

```
<p style="white-space: pre;">
    This    is    a    test.
</p>
```

- The browser will display

```
    This    is    a    test.
```


### 2. Traversing to Parent Elements/nodes

- Consider below code for the same above HTML

```
let childList=document.getElementsByTagName("li")[0]
console.log(childList)
console.log(childList.parentElement)
let childList1=document.getElementById("second-child")
console.log(childList1.parentNode)
```

- On browser console

![alt text](image-26.png)

- `parentElement`: Returns the parent element of the current node, but it excludes non-element nodes like text or comment nodes.
- `parentNode`: Returns the parent node, which could be an element or a document node (for example, document itself can be a parent).
- The above output will mostly give you element tag, because an element tag can have child element or nodes thats why that element tag becomes the parent of that child element or nodes. Then why the need of `parentNode`? consider below code

![alt text](image-27.png)

- The above is one the exception and it will be used in the rare case.

### 3. Traversing to Ancestor

- Consider below HTML & JS Code

```
HTML Snip
      <div id="ancestor">
        <div class="middle">
            <p id="current">Current Node</p>
        </div>
    </div>

JS Snip
let currentNode = document.getElementById('current');
console.log(currentNode.closest('div')); // <div class="middle">
console.log(currentNode.closest('#ancestor')); // <div id="ancestor">
```

- On browser console.

![alt text](image-28.png)

- `closest()`: This method returns the closest ancestor of the current element (or the element itself) that matches the selector you pass in. It traverses upwards through the DOM hierarchy

### 4. Traversing to Siblings

- In the below HTML snip, `<p>`, `<span>`, `<ul>` and `<div id="ancestor">` they all belong to same parent `<div id="parentDiv">` and thus becomes siblings.

```
  <div id="parentDiv">
      <p id="first-child">First Child</p>
      <!-- This is my Comment -->
      <span id="second-child">Second Child</span>
      <ul>
        <li class="list-item"> Item 1 </li>
        <li class="list-item"> Item 2 </li>
        <li class="list-item">                        Item 3 </li>
      </ul>
      <div id="ancestor">
        <div class="middle">
            <p id="current">Current Node</p>
        </div>
    </div>
  </div>
```

- Consider below JS code.

```
let secondChild = document.getElementById('second-child');

//Sibling below second child
console.log(secondChild.nextSibling);         // #text
console.log(secondChild.nextElementSibling);  // <ul>..<ul>

//Sibling above second child
console.log(secondChild.previousSibling);         // #text
console.log(secondChild.previousElementSibling);  // <p id="first-child">
```

- On browser console

![alt text](image-29.png)

![alt text](image-20.png)

### DOM Traversal vs Query Selectors

- When we have query selector which will share us the element when why the need of DOM traversal? **DOM traversal is useful when you already have a reference to a node and want to navigate relative to it (e.g., finding parent or sibling elements), which is efficient since you're moving through a small part of the DOM. In contrast, query selectors (`querySelector`, `querySelectorAll`) search the entire document, which can be slower, especially in large DOM trees. DOM traversal is often faster for local navigation, while query selectors are useful for finding elements globally but might impact performance if overused. Using DOM traversal methods can help optimize operations that involve nearby elements.**
- Consider below HTML snip and JS Code.

```
HTML Snip
 <body>
    <script src="app.js" defer></script>
</body>

JS Code
console.log(document.body.firstElementChild) // <script>..</script>
```

- Now lets say you are modifying your HTML code

```
HTML Snip
 <body>
    <header>DOM Traversal VS Query Selectors</header>
    <script src="app.js" defer></script>
</body>
```

- Now the same JS Code will give output as `<header>..</header>`. **So using DOM traversal is efficient but you need to ensure modifying your HTML elements does not affect your traversal logics.**

## Create/Append/Replace/Remove HTML Elements

- Using DOM, JS can insert or append HTML elements inside the HTML page. There are two ways to achieve this

### HTML Methods

#### 1. innerHTML

- The `innerHTML` property can be used to write the dynamic html on the html document. The `innerHTML` property in JavaScript allows you to get or set the HTML content of an element as a string.
- Consider below HTML snip.

```
    <div id="parentDiv">
      <p id="first-child">First Child</p>
      <!-- This is my Comment -->
      <span id="second-child">Second Child</span>
      <ul>
        <li class="list-item"> Item 1 </li>
        <li class="list-item"> Item 2 </li>
        <li class="list-item">                        Item 3 </li>
      </ul>
      <div id="ancestor">
        <div class="middle">
            <p id="current">Current Node</p>
        </div>
    </div>
  </div>
```

- The below JS snip will replace the inner `div` contents by `h2`.

```
// InnerHTML
let divContent=document.querySelector("#parentDiv")
divContent.innerHTML="<h2> Hello </h2>"
```

- On web page and developer tools

![alt text](image-30.png)

- The below JS snip will append the `h2` element with current inner `div` elements. (`innerHTML +=`)

```
// InnerHTML
let divContent=document.querySelector("#parentDiv")
divContent.innerHTML+="<h2> Hello </h2>"
```

- On web page and developer tools

![alt text](image-31.png)

- **The `innerHTML` method replaces or appends the entire `div` contents**. How so?, run the same append snip on the browser console.


<video controls src="20241005-1531-48.3138271.mp4" title="Title"></video>

- The flash indicates the entire inner elements are rendered.

##### innerHTML is not Recommended

- Re-rendering: The entire content of #content is replaced, which can lead to performance issues.
- Potential for Mistakes: If there's a typo or invalid HTML in the string, the entire structure can break.
-  Directly inserting user-provided content with innerHTML can expose your application to **Cross-Site Scripting (XSS) attacks** if the content isn't properly sanitized

#### insertAdjacentHTML

- The `insertAdjacentHTML()` method allows you to insert HTML directly into the DOM at a specific position relative to an existing element. It doesn't re-render the entire content, making it more efficient than using `innerHTML`.
- Consider below JS code for the same HTML code mentioned above.

```
let divContent=document.querySelector("#parentDiv")
// Insert HTML inside the div, before its first child
divContent.insertAdjacentHTML('afterbegin', '<p>New content at the beginning</p>');
    
// Insert HTML inside the div, after its last child
divContent.insertAdjacentHTML('beforeend', '<p>New content at the end</p>');

// Insert HTML before the div itself
divContent.insertAdjacentHTML('beforebegin', '<h3>Before the div</h3>');

// Insert HTML after the div itself
divContent.insertAdjacentHTML('afterend', '<h3>After the div</h3>');
```

- On browser console

![alt text](image-32.png)

- It doesn't replace or re-render the entire content, only inserts at the specified position. You can choose exactly where to insert the new content relative to the existing element.


<video controls src="20241005-1544-22.0294004.mp4" title="Title"></video>

>[!NOTE]
> - Even though insertAdjacentHTML() is more efficient than innerHTML, it still poses a security risk for Cross-Site Scripting (XSS) attacks if you're inserting unsanitized and typo mistake may still occur.

### createElement

- For the same HTML code, consider below JS snip

```
//createElement
let divContent=document.querySelector("#parentDiv")
let newPara=document.createElement("p")
newPara.textContent="This is a new para from createElement()"
divContent.appendChild(newPara)
```

- On browser console

![alt text](image-33.png)

- Now consider below JS code. (Just added 2 more lines to the above code)

```
//createElement
let newPara=document.querySelector("p") //getElementById()
newPara.textContent="This is a new para from createElement()"
divContent.appendChild(newPara)
newPara.textContent="This is a new para added before <div> by createElement()"
divContent.insertBefore(document.getElementById("ancestor"), newPara)
```

- On browser console

![alt text](image-34.png)

- If you notice, earlier the content for the paragraph tag was `This is a new para from createElement()` , post code changes that got replaced to `This is a new para added before <div> by createElement()` instead of getting a new para element. Why so?
  - In the first line, `document.querySelector("p")` selects an existing `<p>` element from the DOM. You are not creating a new element with `createElement();` you are referencing an existing one.
  - When you use `newPara.textContent = ...`, you're modifying the content of the same paragraph (`newPara`), not creating a new `<p>` element.
  - Since you're still dealing with the same element, `appendChild()` and `insertBefore()` are moving the same `<p>` element around the DOM.
  - If you want to create a new paragraph element instead of selecting an existing one, use `document.createElement()`

>[!NOTE]
> - Ensure the second argument of `insertBefore()` is a single element only and a valid DOM element otherwise it will throw error. It cannot accept `Nodelist` or arrays which is returned by `getElementsByTagName()`, `querySelectorAll()` etc... It works with `getElementById()` or `querySelector()`. 

- We can also perform replacement of contents using `replaceChild()` method.
- If you wanna add multiple elements or nodes instead of using `appendChild()` you can use `append()` method.

### Removing Elements

- Consider below JS code which remove unordered list element from HTML

```
//Remove Elements
const getULElement=document.querySelector("ul")
getULElement.remove()
```

- On page.

![alt text](image-36.png)

- There is another way to achieve removing of elements via parent tag.

```
const getULElement=document.querySelector("ul")
getULElement.parentElement.removeChild(getULElement)
```

- On page.

![alt text](image-36.png)


![alt text](image-37.png)


## Cloning DOM nodes

- Cloning DOM nodes is done using the `cloneNode()` method. This method creates a copy of the selected DOM node. It accepts a single argument `true` or `false` that determines whether the children of the node should also be cloned.
- Consider below HTML code and JS Code.

```
HTML Code
    <div id="parentDiv">
      <p id="first-child">First Child</p>
      <!-- This is my Comment -->
      <span id="second-child">Second Child</span>
      <ul>
        <li class="list-item"> Item 1 </li>
        <li class="list-item"> Item 2 </li>
        <li class="list-item">                        Item 3 </li>
      </ul>
      <div id="ancestor">
        <div class="middle">
            <p id="current">Current Node</p>
        </div>
    </div>


JS Code
let cloningNode=document.getElementById("parentDiv")
let deepClone=cloningNode.cloneNode(true) // Deep Cloning , copies all the descendent or child nodes
document.body.appendChild(deepClone)
```

- On browser console, all the child nodes got cloned when used `true` as arguments in `cloneNode()`

![alt text](image-35.png)

- If `false` (default argument) is used, we get below page, just the `<div>` element got created

<video controls src="20241005-1721-23.6581583.mp4" title="Title"></video>

## HTMLCollection vs NodeList

- `HTMLCollection`, only contains HTML elements. `NodeList` can contain any type of node (HTML elements, text nodes, comment nodes, etc.). It’s more generic.
- Consider below HTML Snip and JS Code

```
HTML Snip
    <div id="parentDiv">
      <p id="first-child">First Child</p>
      <!-- This is my Comment -->
      <span id="second-child">Second Child</span>
      <ul>
        <li class="list-item"> Item 1 </li>
        <li class="list-item"> Item 2 </li>
        <li class="list-item">                        Item 3 </li>
      </ul>
      <div id="ancestor">
        <div class="middle">
            <p id="current">Current Node</p>
        </div>
    </div>

JS Code
console.log(document.getElementById("parentDiv").childNodes) //NodeList(11) [text, p#first-child, text, comment, text, span#second-child, text, ul, text, div#ancestor, text]
console.log(document.getElementById("parentDiv").getElementsByTagName("p")) //HTMLCollection(2) [p#first-child, p#current]
```

- Methods like `getElementsByTagName` or `getElementsByClassName` return an `HTMLCollection`. Methods like `querySelectorAll` and `childNodes` return `NodeList` which consist of text, comments and element nodes.
- Both `HTMLCollection` and `NodeList` are array-like in that they can be accessed by index (e.g., `collection[0]`), **but they are not true arrays**. They don't have array methods like `forEach` (though `NodeList` does in modern browsers) or `map`.
- **`HTMLCollection` is typically live. This means if the DOM changes (e.g., elements are added or removed), the `HTMLCollection` is automatically updated to reflect those changes.**
- Consider below code.

```
let liveHTMLListCollection=document.getElementsByTagName("li")
console.log(liveHTMLListCollection) // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]
let newLiElement=document.createElement("li")
newLiElement.textContent="Item 4"
document.querySelector("ul").appendChild(newLiElement)
console.log(liveHTMLListCollection) //HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li]
```

- Whether you use `getElementsByTagName` or `getElementsByClassName` , the collection returned is always live, meaning it reflects changes to the DOM immediately without needing to re-query.
- **`NodeList` can be static or live**. In the case of `querySelectorAll`, it returns a static `NodeList`, meaning it does not automatically update when the DOM changes. In the case of `document.getElementsByName()` and `childNodes`. the NodeList is live.
- Below is example of static and live `NodeList`

```
//Static NodeList
let staticNodeList=document.querySelectorAll("li") // NodeList(3) [li.list-item, li.list-item, li.list-item]
console.log(staticNodeList)
let newLiElement=document.createElement("li")
newLiElement.textContent="Item 4"
document.querySelector("ul").appendChild(newLiElement)
console.log(staticNodeList) // NodeList(3) [li.list-item, li.list-item, li.list-item]

//Live NodeList
let liveNodeList=document.getElementsByName("lists")
console.log(liveNodeList) //NodeList(3) [li.list-item, li.list-item, li.list-item]
let newLiElement1=document.createElement("li")
newLiElement1.textContent="Item 5"
newLiElement1.setAttribute("name","lists")
newLiElement1.className="list-item"
document.querySelector("ul").appendChild(newLiElement1)
console.log(liveNodeList) //NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]
```

- **The main difference between an `HTMLCollection` and a `NodeList` is that one is live and one is static or live. This means that when an element is appended to the DOM, a live node will recognize the new element while a static node will not.**
- Live collections (`HTMLCollection` or Live `NodeList`) can lead to higher memory consumption and performance issues due to constant DOM monitoring.
- Static collections (Static `NodeList`) are generally more efficient because they are snapshots and don’t track DOM changes.

## Iterables

- In JavaScript, an iterable is an object that can be looped over. It is a data type that can be iterated (looped) upon. For example, arrays and strings are iterables because they contain a collection of elements that can be looped over.
- An iterable is any object that can be iterated over with constructs like `for...of`
- Common iterables in JavaScript:
  - Arrays
  - Strings
  - Sets
  - Maps
  - Typed Arrays
  - Arguments object
  - NodeList (e.g., what `document.querySelectorAll()` returns)

### Array-Like Objects

- **An array-like object is an object which have a length property and uses indexes to access items inside it**
- **An array-like object is an object that looks like an array but doesn’t have all the built-in array methods** like `push()`, `pop()`. `NodeList` and `HTMLCollection` are array like object, they don't have built-in methods of array.

#### Arrays

- Earlier we have learned about basics of [array](https://github.com/codophilic/Learn-HTML-CSS-JS/blob/main/JS/BasicsOfJS.md#array)
- Lets look at some other methods commonly used and different ways in which we can create an array
- Different ways to create an array

```
const creation1=[1,2,3] //[1,2,3]
console.log(creation1)

//With new keyword (Constructor)
const creation2= new Array() // Empty Array- []
console.log(creation2)
const creation3= new Array("Hi","Hello") //["Hi","Hello"]
console.log(creation3)

//Without new keyword
const creation4= Array() //Empty Array- []
console.log(creation4)
const creation5=Array(1,2,3,4) //[1,2,3,4]
console.log(creation5)

//Size array
const creation6= Array(3) //[],  it creates an array with a length of 4, but the elements are not initialized (hence they appear as "empty" slots). It is still expandable
console.log(creation6) //(3) [empty × 3]
creation6.push("Hi")
console.log(creation6) //(4) [empty × 3, 'Hi']
creation6[20]="Hello"
console.log(creation6)

/**
 * When you assign a value to an index in a JavaScript array that is beyond its current length (`e.g., creation6[20] = "Hello"`), JavaScript will automatically expand the array to accommodate the new index. Any gaps between the existing elements and the new index will be filled with empty slots.
 * JavaScript arrays are dynamically sized, which means they can grow or shrink as needed. When you assign a value to an index that is greater than the current length of the array, the array will automatically expand to that size.
 * Why this behavior?
 * This is a performance optimization in JavaScript. Instead of pre-allocating memory for all indices up to 20 when you assign creation6[20] = "Hello", JavaScript only creates the necessary storage for the existing elements and keeps gaps as uninitialized.
 */

/* Similarly the above code will work with `new` keyword */

// Using Array.of
const creation7=Array.of(1,2,3,4,5)
console.log(creation7) //[1,2,3,4,5]

//Using Array.from
/**
 * Array.from() is a method in JavaScript that creates a new array from an array-like or iterable object. 
 * It’s useful when you need to work with objects that act like arrays but don’t have array methods.
 * */
const creation8 = Array.from("Hello")
console.log(creation8) //(5) ['H', 'e', 'l', 'l', 'o']
const creation9= Array.from(document.querySelectorAll("li")) //NodeList (array-like object)
console.log(creation9)
const creation10=Array.from(document.getElementsByTagName("li")) //HTMLCollection (array-like object)
console.log(creation10)
```

- On browser console

![alt text](image-38.png)

- Array can store different datatype values

```
const creation10=Array.from(document.getElementsByTagName("li")) //HTMLCollection (array-like object)
console.log(creation10)

const objectVariable={
    name: "Rahul",
    BMI:{
        height: "172cm",
        weight: "68kgs"
    }
}
const creation11=[1,"Hi",objectVariable,creation10]
console.log(creation11)
```

- On browser console

![alt text](image-39.png)

- Multi-dimensional array

```
const creation12=[[1,2,3],[3,4,5],[6,7,8]]
for(const i of creation12){
    let singleLine="";
    for(const j of i){
        singleLine+=j+" "
    }
    console.log(singleLine)
}

Output:
1 2 3
4 5 6
7 8 9
```

##### splice

- The `splice()` method in JavaScript is used to add, remove, or replace elements in an array by modifying the original array.
- Syntax

```
array.splice(start, deleteCount, item1, item2, ...);
```

- `start`: The index at which you want to start modifying the array.
- `deleteCount`: The number of elements to remove from the array, starting from the start index. If `deleteCount` is 0, no elements are removed.
- `item1, item2, ...`: (Optional) The elements to add to the array at the start index.

- Below are examples

```
//Removing Elements
let arr = ['a', 'b', 'c', 'd', 'e'];
let removed = arr.splice(1, 2);  // Start at index 1, remove 2 elements
console.log(arr);     // ['a', 'd', 'e']
console.log(removed); // ['b', 'c']

//Adding Elements
arr = ['a', 'b', 'c'];
arr.splice(1, 0, 'x', 'y');  // Start at index 1, remove 0, add 'x', 'y'
console.log(arr);  // ['a', 'x', 'y', 'b', 'c']

//Replacing Elements
arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y');  // Start at index 1, remove 2, add 'x', 'y'
console.log(arr);  // ['a', 'x', 'y', 'd']

//Negative Indexes
/** When using negative indexes with splice(), the start index is counted from the end of the array. A negative index means "start this many positions from the end." */
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-2, 1);  // Start from 2nd-to-last element, remove 1 element
console.log(arr);  // ['a', 'b', 'c', 'e']
arr = ['a', 'b', 'c', 'd'];
arr.splice(-1, 0, 'x');  // Start from last element, remove 0, add 'x'
console.log(arr);  // ['a', 'b', 'c', 'x', 'd']
```

##### slice

- The `slice()` method in JavaScript extracts a portion of an array and returns a new array without modifying the original array. It allows you to take a "slice" of the array based on the start and end positions you specify.
- Syntax

```
array.slice(start, end);
```

- `start` (optional): The index at which to start extraction (inclusive). If omitted, it starts at index 0.
- `end` (optional): The index at which to end extraction (exclusive). If omitted, it slices till the end of the array.

```
//Slice
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let slicedArr = arr1.slice();  // Slices from index 1 to 3 (but excludes 3)
console.log(slicedArr);  // ['b', 'c']
console.log(arr1);        // ['a', 'b', 'c', 'd', 'e']  (Original array is unchanged)
console.log(arr1.slice(1)) // ['b', 'c', 'd', 'e']
console.log(arr1.slice(1, 3)) // ['b', 'c']
```

##### Merge Arrays

- Concatenate arrays or merge multiple arrays elements

```
//Merge Arrays
const creation13=[1,2,3]
console.log(...creation13) // 1 2 3
let creation14=[4,5,6]
creation14=[...creation13,...creation14] //[1,2,3,4,5,6]
console.log(creation14) //[1,2,3,4,5,6,1,2,3,4,5,6]
creation14.push(7,8,9,10)
console.log(creation14) //[1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,10]
```

##### Index Of Element

- We can find index of an element using `indexOf()` and `lastIndexOf()`.

```
//index of element
const creation15=[100,200,300,400,500,600,700,100,400]
console.log(creation15.indexOf(500)) //4
console.log(creation15.lastIndexOf(700)) //6 (Searches from the end of the array and return indexes based non 0th position)
console.log(creation15.indexOf(400)) //3 (finds the first occurence from the starting point of the array)
console.log(creation15.lastIndexOf(100)) //6 (finds the first occurence from the end point of the array)

/** 
 * index of element does not work for object type element it only work for primitive elements
 * Even though an object with the same properties exists in the array, indexOf returns -1. This is because the comparison is done by reference, not by value. The object passed to indexOf is a new object, so it is not the same object as the one in the array
 * It uses strict equality (===) for comparison.
 */
const creation16=[{name:"ABC"},{name:"BCS"}] //Array of object
console.log(creation16.indexOf({name:"ABC"})) //-1 (not found)
```

>[!NOTE]
> - Both methods `indexOf()` and `lastIndexOf()` only works for primitive data type. For object data type we have `find()` method

##### find

- The `find()` method in JavaScript is used to search for the first element in an array that satisfies a provided a given function. It accepts a function. If no element matches the condition, `find()` returns `undefined`. The function which you will be defining must have boolean return type.

```
function checkElement8(i){
    return i==8;
}

let creation17 = [5, 12, 8, 130, 44];
let found = creation17.find(checkElement8);
console.log(found);  // 8


//Re-writing above code to below using arrow function
console.log(creation17.find((i)=>i==12)); // 12
console.log(creation17.find((i)=>i==20)); // undefined (not found)
```

- Another example

```
let creation17 = [5, 12, 8, 130, 44];
console.log(creation17.find(i=>i%2==0)); //12, return the first even number 
```

- You can find the object as well

```
let creation18=[{name:"ABC",age:19},{name:"ABC",age:20}]
console.log(creation18.find(i=>i.name=="ABC" && i.age==20)); //{name: 'ABC', age: 20}
```

- The `find()` method can take a function which can have upto 3 arguments.
  - element: The current element being processed in the array.
  - index (optional): The index of the current element being processed.
  - array (optional): The entire array on which find() was called.

```
//find() with 2 Parameters
console.log(creation17.find((element,i)=>{
    console.log("Element "+element+", index "+i);
}))
/**
 * Element 5, index 0
Element 12, index 1
Element 8, index 2
Element 130, index 3
Element 44, index 4
 */

//find() with 3 parameters
console.log(creation17.find((element,i,arr)=>{
    console.log(`Element: ${element}, Index: ${i}, Full Array: ${arr}`);
}));

/**
 * Element: 5, Index: 0, Full Array: 5,12,8,130,44
 Element: 12, Index: 1, Full Array: 5,12,8,130,44
 Element: 8, Index: 2, Full Array: 5,12,8,130,44
 Element: 130, Index: 3, Full Array: 5,12,8,130,44
 Element: 44, Index: 4, Full Array: 5,12,8,130,44
 */
```

- Typical use cases of 2 parameter and 3 parameter using `find()` function.


```
//2 Parameter
let testResults = [true, true, false, true];
let firstFail = testResults.find((result, index) => {
  if (!result) {
    console.log(`First failure found at index: ${index}`);
    return true;
  }
});

Output:
First failure found at index: 2

//3 Parameter
let numbers = [1, 2, 4, 8, 16];

let result = numbers.find((element, index, array) => {
  // Initialize sumOfPrevious
  let sumOfPrevious = 0;

  // Calculate the sum of all previous elements manually
  for (let i = 0; i < index; i++) {
    sumOfPrevious += array[i]; // Add the previous elements to the sum
  }

  console.log(`Current element: ${element}, Sum of previous elements: ${sumOfPrevious}`);

  // Return true if the current element is greater than the sum of previous elements
  return element > sumOfPrevious;
});

console.log(`The first element greater than the sum of previous elements is: ${result}`);

Output:
Current element: 1, Sum of previous elements: 0
Current element: 2, Sum of previous elements: 1
Current element: 4, Sum of previous elements: 3
Current element: 8, Sum of previous elements: 7
Current element: 16, Sum of previous elements: 15
The first element greater than the sum of previous elements is: 16
```

##### includes

- The `includes()` method checks if an array contains a specified element or not. It perform **case-sensitive** Search

```
let creation18=[1,2,3,4,5,6,1,2]
console.log(creation18.includes(4)) //true
console.log(creation18.includes(10)) //false
```

- You can specify the starting index or from index element to begin the searching for an element

```
creation18.includes(1,5) //true
creation18.includes(1,7) //false
```

- Lets add an object inside the array.

```
let obj={name:"ABC",age:21}
creation18.push(obj)
console.log(creation18.includes({name:"ABC",age:21})) //false
```

- So `includes()` method only works with primitive data types.

>[!NOTE]
> - `includes()` method also works with negative indexes (-1 starting from backwards)


##### forEach

- The `forEach()` method is an iterative method. The `forEach()` method of Array instances executes a provided function once for each array element. It does not affects the current array. The `forEach()` method is not executed for empty elements. The defined function may or may not have `return` keyword. `forEach()` always returns `undefined`. `forEach()` always returns undefined and is not chainable.

```
function squareNumbers(element){
    console.log(element*element);
}

let creation19=[1,2,3,4,5];
creation19.forEach(squareNumbers);

Output:
1
4
9
16
25
```

- Alternative is to use arrow function

```
let creation19=[1,2,3,4,5];
creation19.forEach(i=>console.log(i*i));

Output:
1
4
9
16
25
```

- Just like `find()` method, the `forEach()` method requires a **callback function**. Similarly like `find()` it can accept atmost 3 parameters
  - value: The value of the array element.
  - index (optional): The index of the array element.
  - array (optional): The array itself. 
- Consider below example

```
creation19.forEach((currentElement,idx,AnyArr)=>{
    console.log("Current Element: "+currentElement+", Index: "+idx+", Array: "+AnyArr)})

Output:
Current Element: 1, Index: 0, Array: 1,2,3,4,5
Current Element: 2, Index: 1, Array: 1,2,3,4,5
Current Element: 3, Index: 2, Array: 1,2,3,4,5
Current Element: 4, Index: 3, Array: 1,2,3,4,5
Current Element: 5, Index: 4, Array: 1,2,3,4,5
```

##### map

- The `map()` function in JS is used to create a new array by applying a **callback** function to each element of an existing array. It does not modify the original array but instead returns a transformed version of that array.

```
const creation20=[1,2,3,4,5]
const newCreation20=creation20.map(i=>i*i);
console.log(newCreation20) //[ 1, 4, 9, 16, 25 ]
```

- The function can transform each element and return values of that function is collected into the new array.
- Just like `find()` function it can accept 3 arguments, current value, index of that value and array on which map was called.

```
let creation21=creation20.map((element,index) => element*index)
console.log(creation21) //[ 0, 2, 6, 12, 20 ]
creation21=creation20.map((element,index,orgArr)=>element*index+orgArr.length);
console.log(creation21) //[ 5, 7, 11, 17, 25 ]
```

>[!NOTE]
> - `forEach()` is used to execute a function on each element of an array, it does not return and collect values , it returns `undefined`. `map()` is used to transform an array by applying a function to each element. It creates a **new array** with results of applying the provided function.

##### sorting and reversing

- Arrays can be sorted and reversed using `sort()` and `reverse()` method. The default sorting is string based.

```
let creation21=[1000,320,300,200]
console.log(creation21.sort()) //[ 1000, 200, 300, 320 ]
```

- By default, it sorts the elements in the array in ascending order based on their **string Unicode values**. The function takes the inputs, converts them to strings, and then sorts them using Unicode values.

```
const characters = [
  "Nebula",
  "Thanos",
  "Star Lord",
  "Groot",
  "Rocket",
  "Drax",
  "Gamora",
];

console.log(characters.sort())

Output:
[
  'Drax',
  'Gamora',
  'Groot',
  'Nebula',
  'Rocket',
  'Star Lord',
  'Thanos'
]
```

- Now lets say you wanna sort in a custom order, you need to provide a **Compare function** to the `sort()` method.

```
//Sorting using Compare Function (Sorting in Ascending Order)
let creation21=[1000,320,300,200]
console.log(creation21.sort((a,b)=>{
  if(a>b){
    return 1 //return positive value, the second element is placed before the first element
  }else if(a===b){
    return 0 // No change in position
  }
  return -1 //return negative value, the second element is placed after the first element
}));

Output:
[ 200, 300, 320, 1000 ]
```

- Another examples of sorting

```
let creation21=[1000,320,300,200]
console.log(creation21.sort((a,b)=>{
  if(a>b){
    return -1 //return positive value, the first element is placed before the second element
  }else if(a===b){
    return 0 // No change in position
  }
  return 1 //return negative value, the first element is placed after the second element
}));

Output:
[ 1000, 320, 300, 200 ]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// Sorted by age:
// [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]


//Sorting based on user who are doctors 
const names = ["Mike Smith", "Dr. Johnson", "John Doe", "Dr. Williams"];
names.sort((a, b) => {
  if (a.startsWith("Dr.") && !b.startsWith("Dr.")) {
    return -1;
  } else if (!a.startsWith("Dr.") && b.startsWith("Dr.")) {
    return 1;
  } else {
    return a.localeCompare(b); // sort alphabetically
  }
});

console.log(names);

// Output:
//["Dr. Johnson", "Dr. Williams", "John Doe", "Mike Smith"];

const items = ["b", "3", "a", "2", "c", "1"];

items.sort((a, b) => {
  const aIsNumber = !isNaN(a); // isNaN = is Not a Number
  const bIsNumber = !isNaN(b);

  if (aIsNumber && !bIsNumber) {
    return -1; // numbers should be sorted before letters
  } else if (!aIsNumber && bIsNumber) {
    return 1; // letters should be sorted after numbers
  } else if (aIsNumber && bIsNumber) {
    return a - b; // sort numbers numerically
  } else {
    return a.localeCompare(b); // sort letters alphabetically
  }
});

console.log(items);

// Output
//["1", "2", "3", "a", "b", "c"];
```

- `reverse()` method reverses the order of elements in the array in place and returns the modified array.

```
let creation22=[1,2,3,4,5]
console.log(creation22.reverse()) //[5,4,3,2,1]
```

- Combine sorting and reversing

```
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a*b).reverse();
console.log(numbers); // [ 2, 4, 1, 3 ]
```

>[!NOTE]
> - The `sort()` function sorts the array by applying a sorting algorithm. This could be the bubble sort, quick sort, heap sort, or mergesort algorithms, for example (there are more, too).
> - The choice of algorithm may depend on factors such as the size of the array, the data types being sorted, and the engine's optimisation strategies.

##### filter

- The `filter()` method creates a new array containing elements that satisfy a specified condition. The `filter()` method skips empty elements and **does not change the original array.** `filter()` method has similar arguments with `find()` method it accepts a callback function and other arguments like index and the current array.

```
let filtered = [24, 33, 16, 40].filter((i)=>i>18);
console.log(filtered); //[24,33,40]
```

- The `filter()` method includes the only elements in the result array if they satisfy the test in the callback function. 

##### reduce

- The `reduce()` method in JS is used to accumulate or reduce an array into a single value. It accepts a **callback funtion**, applies it to each element of the array and accepts a **initial value** as one of the parameter. Just like in `find()` method the **callback funtion**
- Syntax

```
array.reduce(callback(accumulator, currentValue, index, array), initialvalue)
```

- `callback` (required): A function that is executed on each element of the array. It has the following parameters:
  - `accumulator`: The accumulated result of previous iterations. This value is returned at the end. If `initialValue` is not provided, then the `accumulator` will have the first element.
  - `currentValue`: The current element being processed in the array.
  - `index` (optional): The index of the current element being processed. Starts from 0 if initialValue is provided, otherwise starts from 1.
  - `array` (optional): The array on which reduce() was called.
- `initialValue` (optional): The value to use as the first argument in the first call of the `callback`. If not provided, the first element of the array is used as the initial value, and `reduce()` starts at the second element.

```
let reduceArr=[1,2,3,4]
const reduceSum=reduceArr.reduce((acc,i)=>acc+i)
console.log(reduceSum) //10
console.log(reduceArr.reduce((acc,i)=>acc+i,1000)) //1010
console.log(reduceArr.reduce((maxi,i)=>(i>maxi?i:maxi),-Infinity)) //4 (Maximum Element)
```

- Another examples

```
const grades = [
  { grade: 90, weight: 0.5 },
  { grade: 80, weight: 0.3 },
  { grade: 85, weight: 0.2 },
];
const weightedAvg = grades.reduce((acc, curr) => acc + curr.grade * curr.weight, 0);
console.log(weightedAvg); // 86

const words = ['Reduce', 'is', 'powerful'];
const sentence = words.reduce((acc, curr) => acc + ' ' + curr);
console.log(sentence); // "Reduce is powerful"
```

##### split & join

- `split()` method: It is used to split a string into an array of substrings based on a specified delimiter (separator). You can specify any character or string as the delimiter, or you can split the string by each character if no delimiter is provided.

```
let strWord = "Hello, world!";
let stringSplitOfArrays = strWord.split(", ");
console.log(stringSplitOfArrays); // Output: ["Hello", "world!"]
console.log(strWord.split("")); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
console.log(strWord.split()); // Output: ['Hello, world!']
```

- `join()` method: It is used to join all elements of an array into a single string. You can specify a separator that will be placed between the elements of the array in the resulting string. If no separator is provided, it defaults to a comma.

```
stringSplitOfArrays = ["Hello", "world!"];
strWord = stringSplitOfArrays.join(" ");
console.log(strWord); // Output: "Hello world!"
console.log(stringSplitOfArrays.join()) //Output: Hello,world!
```

##### Spread Operator (...)

- Earlier we had learned about `...` as **rest operator** which allows you to represent an indefinite number of arguments as an array for a function.
- The spread operator (`...`) in JavaScript allows you to spread out the elements of an array, object, or other iterable into individual elements.

```
let SpreadArr=[1,2,3]
console.log(...SpreadArr) // 1 2 3
```

- You can copy elements or merge multiple arrays.

```
let SpreadArr=[1,2,3]
console.log(...SpreadArr) // 1 2 3
let SpreadArr1 = [4,5,6,7];
let SpreadArr2 = [...SpreadArr,...SpreadArr1]; // Copying
console.log(SpreadArr2); // Output: [1,2,3,4,5,6,7]
```

- If you wanted to find a minimum or maximum number from the array, JS gives you a in-built library `Math.min` and `Math.max`. It accepts standlone elements. It cannot accept directly a array. So here we can use spread operator to give standlone elements to the method.

```
console.log(Math.min(1,2,3,4)) //1
console.log(Math.max(1,2,3,4)) //4
console.log(Math.min(...[1,2,3,4])) //1
console.log(Math.max(...[1,2,3,4])) //4
```

- Lets create an array with objects and copy those object using spread operator.

```
let ObjectSpreadArr1=[{name:"ABC",age:19},{name:"XYZ",age:20}]
let ObjectSpreadArr2=[...ObjectSpreadArr1]
console.log(ObjectSpreadArr2)
```

- On console

![alt text](image-40.png)


- Now if we modify the property of object, the changes property will be reflected in both the array.

```
let ObjectSpreadArr1=[{name:"ABC",age:19},{name:"XYZ",age:20}]
let ObjectSpreadArr2=[...ObjectSpreadArr1]
console.log(ObjectSpreadArr2)

ObjectSpreadArr1[0].age=91
console.log(ObjectSpreadArr1)
console.log(ObjectSpreadArr2)
```

- On console

![alt text](image-41.png)

- This is because when we copied elements from one array to another array, we are not creating new objects instead we are copying the memory addresses of it. So the copied element into the new array is still point the same object's memory address. Now consider below code.

```
let ObjectSpreadArr3=[...ObjectSpreadArr1.map(i=>{

    return {name:i.name,
      age:i.age
    }

})]

ObjectSpreadArr1[0].age=991
console.log(ObjectSpreadArr1)
console.log(ObjectSpreadArr3)
```

- On browser console

![alt text](image-42.png)

- Here using `map()` method we are creating new object which will have new memory address, so changing an object's property in one array will won't affect other array.

##### Arrays Destructing

- Array destructuring allows you to unpack values from arrays (or objects) into individual variables. It provides a concise way to extract multiple values from an array at once.

```
//Array Destructing
let arrdes = [10, 20, 30];
let [x, y, z] = arrdes;

console.log(x); // Output: 10
console.log(y); // Output: 20
console.log(z); // Output: 30
```

- The array is unpacked from left to right. The first variable (e.g., `x`) gets the first element from the array. The second variable (e.g., `y`) gets the second element from the array. And so on...
- If you want to skip certain elements in the array, you can leave a blank space with a comma.

```
let [x1,,z1]=arrdes
console.log(x1)//10
console.log(z1)//30
```

- If the array doesn't have enough elements, you can assign default values to variables.

```
let [x2,y2=100]=arrdes
console.log(x2)//10
console.log(y2)//100
```

- You can also use the rest operator (`...`) to collect the remaining elements into a new array.

```
let [x3,...restElements]=arrdes
console.log(x3)//10
console.log(restElements)//[20,30]
```

- Array destructuring can be nested to extract values from arrays inside arrays.

```
let arrb = [10, [20, 30]];
let [a, [b, c]] = arrb;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30
```

- You can further destructure the properties of each object directly.

```
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Destructure to get specific properties
const [{ name: firstName }, { age: secondUserAge }] = users;

console.log(firstName);      // Output: Alice
console.log(secondUserAge);  // Output: 30
```

#### Map

- A Map is a collection of key-value pairs where both keys and values can be of any data type (objects, primitives, etc.). Unlike plain objects, Map maintains the insertion order of its elements and treats all keys as unique. It can we initialized by passing an array of key-pairs, so there will be multiple arrays for multiple key-pairs.

```
// Creating a map
let myMap = new Map();

// Or initializing with key-value pairs
let initializedMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  [{ city: 'NY' }, 'Object as key']
]);
console.log(initializedMap)
```

- On browser

![alt text](image-43.png)

- You can add or update a key-value pair in the map using the `.set()` method.

```
myMap.set('name', 'ABC');
myMap.set('age', 24);
myMap.set({ city: 'NY' }, 'New York');
myMap.set("New Key","New Value")

console.log(myMap);// Output: Map { 'name' => 'ABC', 'age' => 25, { city: 'NY' } => 'New York','New Key' => 'New Value' }
```

- On browser console

![alt text](image-44.png)

- Below are other operations which can be performed with Map

```
//Get value based on key name
console.log(myMap.get('name'));  // Output: ABC
console.log(myMap.get('age'));   // Output: 25
//If the key does not exist, get() will return undefined.
console.log(myMap.get('unknown'));  // Output: undefined

//Checking for Key Existence
console.log(myMap.has('name'));  // Output: true
console.log(myMap.has('gender'));  // Output: false

//Deleting Key
myMap.delete('age');
console.log(myMap);  // Output: Map { 'name' => 'ABC', { city: 'NY' } => 'New York', 'New Key' => 'New Value'}

//Size of Collection
console.log(myMap.size);  // Output: 3

//Clear Collection
myMap.clear();
console.log(myMap);  // Output: Map {}

myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['country', 'USA']
]);
//Iterating over Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Output:
// name: Alice
// age: 25
// country: USA

for(const [key,value] of myMap.entries()){
  console.log(key,value)
}

//Output:
// name Alice
// age 25
// country USA

//Get Keys only
for(const key of myMap.keys()){
  console.log(key)
}

//Output:
// name
// age
// country

//Get Values only
for(const values of myMap.values()){
  console.log(values)
}

//Output:
// Alice
// 25
// USA
```


#### Set

- A Set is a collection of unique values, meaning it cannot contain duplicate elements. Sets are a part of the ES6 (ECMAScript 2015) standard, and they allow you to store any type of value (primitives or objects).

```
let mySet = new Set([1, 2, 3, 3, 4]);  // Duplicate '3' will be removed
console.log(mySet);  // Output: Set(4) {1, 2, 3, 4}
mySet.add(5) //Adding Element
mySet.add(6) //Adding Element
mySet.add(7) //Adding Element
mySet.add(1) //Adding Element
console.log(mySet) //Set(7) {1, 2, 3, 4, 5, 6, 7}
```

- We can check if a element exist or not in the set collection.

```
console.log(mySet.has(2));  // Output: true
console.log(mySet.has(50));  // Output: false
```

- There are other operations which can be used with Set

```
mySet.delete(2); //Deleting Element
console.log(mySet);  // Output: Set(6) {1, 3, 4, 5, 6, 7}

mySet.clear(); //Clearing Elements
console.log(mySet);  // Output: Set { }

mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
console.log(mySet.size);  // Output: 4 (Size of Set collection)

// Using forEach method
mySet.forEach(item => {
  console.log(item);  // Output: 1, 2, 3 (each on a new line)
});

console.log(mySet.values()) //SetIterator {1, 2, 3, 4}
```

- Now consider below code

```
for(const i of mySet.entries()){
  console.log(i)
}
```

- On browser we can see an array with same elements

![alt text](image-45.png)

- Why so?  internally, **the Set API is designed to be consistent with Map and Array iterators**, which return key-value pairs in array. The Set data structure only stores values (not key-value pairs like Map). So, when you use `.entries()` on a Set, it returns the value twice in each array element ([value, value])
- So, when iterating over the Set with `entries()`, you always get two identical values in each iteration because a Set does not have a separate key and value. Instead of `entries()` you can use `values()`

### Map vs Object

| **Feature/Aspect**    | **Map**                                                                                           | **Object**                                                                                                        |
|-----------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Key Types**         | Keys can be any data type (objects, functions, primitives).                                       | Keys are typically strings or symbols (although non-string keys are converted to strings).                        |
| **Order of Elements** | Preserves the insertion order of key-value pairs.                                                 | Does not guarantee the order of keys (although ES6+ tries to maintain insertion order in some cases).             |
| **Iteration**         | Direct methods (for...of, `.keys()`, `.values()`, `.entries()` for easy iteration).                     | Requires manual iteration using for...in (which may include prototype chain) or `Object.keys()`/`Object.values()`    |
| **Performance**       | Map is optimized for frequent additions, deletions, and retrievals, especially with many entries. | Slower for adding/removing properties as the size of the object grows (especially if not purely dictionary-like). |

### WeekSet and WeekMap

- WeakMap and WeakSet are specialized versions of Map and Set, but they work with "weak" references to objects. This means that if the object used as a key in a WeakMap or as a value in a WeakSet is no longer referenced anywhere else, it can be garbage-collected (automatically removed from memory), which helps with memory management.
- Example of WeakMap

```
let obj = { name: 'Alice' };
let weakMap = new WeakMap();

weakMap.set(obj, 'Employee');

console.log(weakMap.get(obj));  // Output: Employee

obj = null;  // Now there are no references to the object

// The object and its corresponding value will be garbage collected automatically
```

- In this case, once `obj` is set to `null` (or no longer referenced), the entry in WeakMap is removed automatically by the garbage collector.
- Like WeakMap, if the object added to the WeakSet is no longer referenced elsewhere in the program, it is automatically removed from the WeakSet.

```
let obj1 = { id: 1 };
let obj2 = { id: 2 };
let weakSet = new WeakSet();

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // Output: true

obj1 = null;  // The object is no longer referenced

// obj1 will be automatically removed from the WeakSet by the garbage collector
```

- WeakMap and WeakSet automatically remove entries if the object is no longer referenced.

>[!NOTE]
> - **You cannot iterate** over WeakMap or WeakSet (no `.forEach()`, `.keys()`, or `.entries()`).
> - Unlike Map and Set, **they can only store objects (not strings or numbers)**.

### Summary

![alt text](image-46.png)









