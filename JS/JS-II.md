# JavaScript Concepts

## Events 

- Up till now we have used major times the `click` event, but what are actually events? in JavaScript, events are actions or occurrences that happen in the browser, which can be detected and responded to using code. Think of events as things that users or the system might do, like clicking a button, pressing a key, or loading a webpage. JavaScript can listen for these events and react by running specific functions, often called event handlers.
- Events can be triggered by various user interactions or by the browser itself.
- Lets see some examples of Events

### click Event

- We use click event with `addEventListener()`, but there are other approaches. When we create a button tag we can see multiple attributes based on `on` events.

![alt text](image.png)

- Below is example of using these event.

```
<!doctype html>
<html>

<head>
    <script>
        function hiThere() {
            alert('Hi there!');
        }
    </script>
</head>

<body>
    <button type="button" 
            onclick="hiThere()" 
            style="margin-left: 50%;">
            Click me event
    </button>
</body>

</html>
```

- On browser

<video controls src="2024-1.mp4" title="Title"></video>

- Another approach is using `onclick` or any `on` based events inside the JS script code.

```
const btn=document.getElementById("myButton");
const btnhandlerApproach2= () => {
    alert("Clicked");
};
btn.onclick = btnhandlerApproach2
```


>[!IMPORTANT]
> - The first approach is not recommended as we are adding JS code into the attribute (`onclick`) of HTML snip
> - The second approach is also not recommended as the commended is tightly coupled with one of the function only, we cannot define multiple functions on it (`btn.onclick = btnhandlerApproach2`)

- So using `addEventListener()` is always the best approach as you can add multiple functions to it.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <p id="message"></p>

    <script>
        const btn=document.getElementById("myButton")
        btn.addEventListener("click", function() {
            document.getElementById("message").textContent = "Button was clicked!";
        });
        btn.addEventListener("click", function(){
            console.log("Button was clicked")
        })
    </script>
</body>
</html>
```

- On browser

![alt text](image-1.png)

### mouseover Event

- The `mouseover` event occurs when the user hovers over an element, like an image or a link. This can be useful for showing tooltips or changing styles on hover

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mouseover Event Example</title>
</head>
<body>
    <button id="hoverButton">Hover over me</button>
    <p id="hoverMessage"></p>

    <script>
        document.getElementById("hoverButton").addEventListener("mouseover", function() {
            document.getElementById("hoverMessage").textContent = "You hovered over the button!";
        });
    </script>
</body>
</html>
```

- On browser

![alt text](image-2.png)

- When the mouse hovers over the button, the paragraph text changes to display a message.

### keyup Event

- The `keyup` event is fired when a key is released on the keyboard. It’s helpful for capturing user input in real time, like searching as the user types.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Keyup Event Example</title>
</head>
<body>
    <input type="text" id="nameInput" placeholder="Type your name">
    <p id="output"></p>

    <script>
        document.getElementById("nameInput").addEventListener("keyup", function() {
            const name = document.getElementById("nameInput").value;
            document.getElementById("output").textContent = "Hello, " + name;
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-2.mp4" title="Title"></video>

- As the user types, the paragraph text is updated in real time with the entered name.

### submit Event

- The `submit` event is used on forms and is triggered when the form is submitted. It’s typically used to validate form data before sending it.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Submit Event Example</title>
</head>
<body>
    <form id="myForm">
        <input type="text" id="username" placeholder="Enter username">
        <button type="submit">Submit</button>
    </form>
    <p id="formMessage"></p>

    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from actually submitting
            const username = document.getElementById("username").value;
            document.getElementById("formMessage").textContent = "Form submitted with username: " + username;
        });
    </script>
</body>
</html>
```

- On page

![alt text](image-3.png)

### change Event

- The `change` event is triggered when the value of an input element (like a dropdown or checkbox) changes. It’s useful for responding to user choices.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Change Event Example</title>
</head>
<body>
    <label for="colorSelect">Choose a color:</label>
    <select id="colorSelect">
        <option value="">Select</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
    </select>
    <p id="colorMessage"></p>

    <script>
        document.getElementById("colorSelect").addEventListener("change", function() {
            const color = document.getElementById("colorSelect").value;
            document.getElementById("colorMessage").textContent = "You selected: " + color;
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-3.mp4" title="Title"></video>

- When the user selects a color, the paragraph text updates to show the selected color.

### dblclick Event

- The `dblclick` event triggers when an element is double-clicked. This can be useful for specific actions that need a second confirmation, like expanding a card or image.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Double Click Event Example</title>
</head>
<body>
    <button id="dblClickButton">Double-click Me</button>
    <p id="dblClickMessage"></p>

    <script>
        document.getElementById("dblClickButton").addEventListener("dblclick", function() {
            document.getElementById("dblClickMessage").textContent = "Button was double-clicked!";
        });
    </script>
</body>
</html>
```

- On browser

![alt text](image-4.png)

### focus and blur Events

- The `focus` event triggers when an input field gains focus. The `blur` event triggers when an input field loses focus.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Focus and Blur Event Example</title>
</head>
<body>
    <input type="text" id="focusInput" placeholder="Focus on me">
    <p id="focusMessage"></p>

    <script>
        const inputField = document.getElementById("focusInput");
        const message = document.getElementById("focusMessage");

        inputField.addEventListener("focus", function() {
            message.textContent = "Input field is in focus!";
        });

        inputField.addEventListener("blur", function() {
            message.textContent = "Input field lost focus!";
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-4.mp4" title="Title"></video>

### input Event

- The `input` event triggers whenever the value of an input field changes, and it’s great for real-time data binding.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Input Event Example</title>
</head>
<body>
    <input type="text" id="inputField" placeholder="Start typing...">
    <p>Live Output: <span id="liveOutput"></span></p>

    <script>
        document.getElementById("inputField").addEventListener("input", function() {
            document.getElementById("liveOutput").textContent = this.value;
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-5.mp4" title="Title"></video>

### resize Event

- The `resize` event triggers when the window is resized. This can be useful for adjusting layout or content based on window size.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Resize Event Example</title>
</head>
<body>
    <p id="resizeMessage">Resize the window to see changes.</p>

    <script>
        window.addEventListener("resize", function() {
            document.getElementById("resizeMessage").textContent = "Window width: " + window.innerWidth + "px";
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-6.mp4" title="Title"></video>


### scroll Event

- The `scroll` event triggers when the user scrolls through a page. This is useful for creating effects like sticky headers or infinite scrolling.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Scroll Event Example</title>
    <style>
        body {
            height: 2000px; /* Create scrollable page */
        }
        #scrollMessage {
            position: fixed;
            top: 10px;
            left: 10px;
        }
    </style>
</head>
<body>
    <p id="scrollMessage">Scroll down the page...</p>

    <script>
        window.addEventListener("scroll", function() {
            const scrollY = window.scrollY;
            document.getElementById("scrollMessage").textContent = "Scroll position: " + scrollY + "px";
        });
    </script>
</body>
</html>
```

- On browser 

<video controls src="2024-7.mp4" title="Title"></video>

### load Event

- The `load` event is triggered when the whole page (including images and other resources) has finished loading.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Load Event Example</title>
</head>
<body>
    <p id="loadMessage">Page is loading...</p>

    <script>
        window.addEventListener("load", function() {
            document.getElementById("loadMessage").textContent = "Page has fully loaded!";
        });
    </script>
</body>
</html>
```

- On browser

![alt text](image-5.png)

### error Event

- The `error` event triggers when an image fails to load or a script has an error. It’s useful for handling failed resource loads.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Error Event Example</title>
</head>
<body>
    <img id="brokenImage" src="nonexistent-image.jpg" alt="Broken Image">
    <p id="errorMessage"></p>

    <script>
        document.getElementById("brokenImage").addEventListener("error", function() {
            document.getElementById("errorMessage").textContent = "Image failed to load.";
        });
    </script>
</body>
</html>
```

- On browser

![alt text](image-6.png)

### copy Event

- The `copy` event triggers when text is copied from an element. It’s useful for showing custom messages when copying.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Copy Event Example</title>
</head>
<body>
    <p id="copyText">Copy this text!</p>
    <p id="copyMessage"></p>

    <script>
        document.getElementById("copyText").addEventListener("copy", function() {
            document.getElementById("copyMessage").textContent = "Text copied!";
        });
    </script>
</body>
</html>
```

- On browser

<video controls src="2024-8.mp4" title="Title"></video>


- So using keyboard when we try to copy by selecting text (`Control+C`) , the event `copy` is triggered.

### Remove Event Listener

- The `removeEventListener` method in JavaScript removes an event listener that was previously added to an element with addEventListener. This is useful when you no longer want an element to respond to a specific event, which can help improve performance and prevent unintended actions.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>
    <p id="message"></p>

    <script>
        const btnClick = function(){
            alert("Button was clicked");
        }
        const btn=document.getElementById("myButton")
        btn.addEventListener("click",btnClick);

        setTimeout(()=>{
            btn.removeEventListener("click",btnClick);
        },2000) //after 2 seconds btn click handler is removed

    </script>
</body>
</html>
```

- On browser

<video controls src="2024-9.mp4" title="Title"></video>

- After 2 seconds the `removeEventListener` removes the `btnClick` handler.

>[!NOTE]
> - If you use anonymous function or any `bind` method in your `addEventListener` like 
> `btn.addEventListener("click",()=> alert("Button was clicked"));` or `btn.addEventListener("click",btnClick.bind(this));`, the `removeEventListener` won't work as it requires the same memory address reference of the anonymous function or the bind method you are using.
> - So **always create a constant and store your function address and use that later to remove listener**.

### preventDefault

- In JavaScript, `event.preventDefault()` is used to stop the default action of an event from happening. For example, when you click on a link (`<a>`), it usually takes you to a new URL, or when you submit a form, it reloads the page by default. By using `event.preventDefault()`, you can stop these actions and do something else instead.
- Lets see an example of `button`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>
    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
      </form>
      
    <script>
        const form = document.getElementById("myForm");

        form.addEventListener("submit", function(event) {
        console.log("Form submission prevented!");
        });

    </script>
</body>
</html>
```

- Now on the page, if we zoom the page for checking out details , the page gets loaded and the view gets set to default . Also on the console, we can see that whatever we are trying to logged, it gets disappeared when page is loaded when clicked on button. Page loading is default action. 



<video controls src="2024-10.mp4" title="title"></video>


- Now to prevent this we need to use `event.preventDefault()`.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>

    <form id="myForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Submit</button>
      </form>
      
    <script>
        const form = document.getElementById("myForm");

        form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from submitting
        console.log("Form submission prevented! and performing validation or operation on form before submitting");
        });

    </script>
</body>
</html>
```

- On page


<video controls src="2024-1.mp4" title="title"></video>

- Inside the listener, `event.preventDefault()` stops the form’s default submit action (so the page doesn't reload). `preventDefault()` can be useful to perform some validation before submitting the data to server incase of button. Similarly for button event, for all other event which has default behaviors, those can be prevent.
- For Event `click` the default behavior the navigates to the URL specified in the `href` attribute of the link. Using `preventDefault()` will prevent navigation and maybe open a modal window or handle the click in a custom way.
- For Event `contextmenu` the default behavior is to opens the browser's context menu (right-click menu). Using `preventDefault()` will prevent the context menu and display a custom menu or message.

### Bubbling and Capturing Events (Event propagation)

- In JavaScript, event bubbling and event capturing are two ways that events `propagate` or move through the Document Object Model (DOM) when an event occurs on a nested element (an element inside another element). This helps manage complex interactions when multiple elements can respond to the same event.
- **Event Capturing** *(Less common)*:
    - Here, the event is captured from the top of the DOM tree and moves down to the target element.
    - It starts from the root element (like `document`), then goes down to `<html>`, `<body>`, and so on until it reaches the target element.
- **Event Bubbling** *(Default behavior)*:
    - The event starts from the target element (the element that was clicked or interacted with) and bubbles up to its parents, grandparents, and so on, all the way up to the root of the document.
    - For example, if you click on a button inside a `div`, the click event will first trigger on the button, then on the parent `div`, and then any other parent elements up to the `<body>` and `<html>`.
- Capturing occurs during the event’s capture phase, where the event travels from the root of the DOM tree towards the target element. On the other hand, bubbling happens during the bubbling phase, where the event moves from the target element back up to the root

![alt text](image-7.png)

- For example, we have a simple HTML document with a DOM tree, for the anchor element. Let’s see what happens with an event when someone clicks on that link.

![alt text](image-8.png)

- When a click happens on the link, the DOM generates a click event. However, this event is not generated at the target element (the anchor element in this case), instead, the event is generated at the root of the document, which is the top of the DOM tree. Subsequently, **the capturing phase commences**, where the event travels down from the document root to the target element. As the event travels down the tree, it passes through each parent element of the target element.

![alt text](image-9.png)

- After reaching the target, the event travels upwards toward the document root, called the bubbling phase. This bubbling behavior entails events moving from the target back up to the document root. Similar to the capturing phase, the event traverses through all parent elements during the bubbling phase as well.

![alt text](image-10.png)

- By default, events can only be handled in the target, and the bubbling phase. However, we can configure event listeners to capture events in the capturing phase instead. Additionally, certain event types do not involve capturing and bubbling phases; they are directly created on the target element, limiting event handling to that specific location.
- Consider below HTML JS code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>
      <div id="parent">
        <button id="child">Click Me</button>
      </div>

    <script>
        // Default Bubbling Phase
        // Adding event listeners to both parent and child elements
        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Div Clicked - Bubbling Phase");
        });

        document.getElementById("child").addEventListener("click", function() {
        console.log("Button Clicked");
        });
    </script>
</body>
</html>
```

- On browser console, we can observer default phase as bubbling phase

![alt text](image-11.png)

- **The event occur for child element will be same event for the parent element**
- To enable, capturing phase we need to set flag as `true` in event listener

```
JS Snip
        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Div Clicked - Bubbling Phase");
        },true);
```

- On browser console

![alt text](image-12.png)

- In JavaScript, the `stopPropagation()` method is used to prevent an event from bubbling up the DOM tree. This means that if an event occurs on an element, and that element has a parent element with an event handler for the same event, the parent element's event handler will not be triggered.
- Consider below HTML & JS Code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>

      <div id="parent">
        <button id="child">Click Me</button>
      </div>

    <script>


        // Default Bubbling Phase
        // Adding event listeners to both parent and child elements
        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Div Clicked - Bubbling Phase");
        });

        document.getElementById("child").addEventListener("click", function() {
        event.stopPropagation();
        console.log("Button Clicked");
        });

    </script>
</body>
</html>
```

- On browser console

![alt text](image-13.png)


- Now consider below HTML and JS Code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>      
      <div id="parent">
        <button id="child">Click Me</button>
      </div>

    <script>


        // Default Bubbling Phase
        // Adding event listeners to both parent and child elements
        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Div Clicked - Bubbling Phase");
        });

        const childElement=document.getElementById("child")
        childElement.addEventListener("click", function() {
        event.stopPropagation();
        console.log("Button Clicked");
        });

        childElement.addEventListener("click", function() {
        console.log("Button Clicked-1");
        });

    </script>
</body>
</html>
```

- When we execute this, now the same button event has multiple handlers, so we get below output

![alt text](image-14.png)

- Lets use `event.stopImmediatePropagation()` instead of `event.stopPropagation()`

```
JS Snip

        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent Div Clicked - Bubbling Phase");
        });

        const childElement=document.getElementById("child")
        childElement.addEventListener("click", function() {
        event.stopImmediatePropagation();
        console.log("Button Clicked");
        });

        childElement.addEventListener("click", function() {
        console.log("Button Clicked-1"); // Now this won't execute
        });
```

- On browser console

![alt text](image-15.png)


- `stopImmediatePropagation` prevents any further event listeners on the same element from executing. `stopPropagation` will prevent any parent handlers from being executed whereas `stopImmediatePropagation` will prevent any parent handlers and also any other handlers from executing for the same element.

>[!NOTE]
> - If you call `stopImmediatePropagation` within an event handler, it will prevent all other event handlers attached to the same element from being executed, regardless of their order of registration, meaning only the first handler that calls `stopImmediatePropagation` will run; the subsequent handlers will be skipped.
> - If there are several handlers for the corresponding event registered and if `stopImmediatePropagation` is programmed in second, or third or any nth order of the handler, then the previous subsequent registered handlers will get execute. Consider below code
> ```
> const childElement=document.getElementById("child")
> childElement.addEventListener("click", function() {
> console.log("Button Clicked");
> });
> 
> childElement.addEventListener("click", function() {
> event.stopImmediatePropagation();
> console.log("Button Clicked-1");
> });
> ```
> 
> - On browser
> 
> ![alt text](image-16.png)
> 
> - The `Button Clicked-1` consist of `stopImmediatePropagation` but before that for the same event there is another handler defined (`Button Clicked`) which got executed.

### Event Delegation

- Lets say, whenever user click on any listed item, we need to console log the item details, so we need to use event handlers

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>

      <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    <script>

    //Calling Event handler on all the list items
    const listitems=document.querySelectorAll("li");
    listitems.forEach(i=>{
        i.addEventListener("click",event=>{
            console.log(event.target.textContent);
        })
    });

    </script>
</body>
</html>
```

- So we can apply `click` event listener on each of the list items. 

![alt text](image-17.png)

- In above example the list items are few incase of many list items, this code logic will give us memory and performance issue. So **Event delegation is a technique in JavaScript where you add a single event listener to a parent element instead of adding multiple event listeners to each child element**. This parent event listener can handle events triggered by all child elements, thanks to event bubbling (where events move up from the target element to its parent elements).
- Now consider below code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>

      <ul id="itemList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    <script>

    // Select the parent element (the <ul>)
    const itemList = document.getElementById("itemList");

    // Add one event listener to the <ul>
    itemList.addEventListener("click", function(event) {
      // Check if the clicked element is an <li>
      if (event.target && event.target.nodeName === "LI") {
        console.log("You clicked:", event.target.textContent);
      }
    });
    </script>
</body>
</html>
```

- On browser console

![alt text](image-18.png)


### Trigger DOM events using JS

- In JavaScript, you can trigger DOM events programmatically using methods like `click()`, `submit()`, `focus()`, or `dispatchEvent()`. This is useful when you want to simulate a user interaction (like a `click`) or `focus` on an element without requiring actual user input.
- Example

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Programmatically Trigger Event</title>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    const button = document.getElementById("myButton");

    // Event listener for the button
    button.addEventListener("click", function() {
      console.log("Button was clicked!");
    });

    // Programmatically trigger the click event
    button.click(); //Outputs: Button was clicked!
  </script>
</body>
</html>
```

### EVent Handler and `this`

- In JavaScript, this in an event handler refers to the element that the event listener is attached to or the target element.
- Consider below code

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Click Event Example</title>
</head>
<body>

      <div id="parent">
        <button id="child">Click Me</button>
      </div>

    <script>
        const childElement=document.getElementById("child")
        childElement.addEventListener("click", function() {
        console.log(this)
        console.log("Button Clicked");
        });

    </script>
</body>
</html>
```

- On browser console

![alt text](image-19.png)

### Drag and Drop

- To implement drag-and-drop functionality in JavaScript, we use the `draggable` and `droppable` attributes, as well as several event listeners like `dragstart`, `dragover`, `dragleave`, and `drop`.
- It begins with the `draggable` HTML attribute. Setting this to `true` on an element allows it to be clicked and dragged around the screen.
- So consider below HTML snip

```
<div class="draggable" draggable="true" id="drag-item">Drag me</div>
```

- `<div class="draggable" draggable="true" id="drag-item">`:
    - This `div` is the draggable element.
    - Setting `draggable="true"` makes this element draggable. Without this attribute, the element cannot be dragged by default.
    - The `id="drag-item"` gives it a unique identifier so we can reference it later in JavaScript.
- Now to start the dragging and move the element consider below JS snip

```
dragItem.addEventListener('dragstart', (event) => {
  event.dataTransfer.effectAllowed = 'move'; // Allow "move" action
  event.dataTransfer.setData('text/plain', event.target.id); // Store item ID
});
```

- `dragstart` fires when we begin dragging the dragItem. `event.dataTransfer` object allows us to store data and control the drag behavior. `effectAllowed` controls what happens to the dragged item. Here we set it to `'move'`, which means the item will be moved to the drop target. `setData` is used to store the dragItem's id (`drag-item`). This allows us to know which item is being dragged when we handle the drop later.
- Lets define a drop target area

```
<div class="droppable" id="drop-target">Drop here</div>
```

- `<div class="droppable" id="drop-target">`:
    - This `div` is the drop target, where we want to drop the draggable element.
    - **It doesn’t have any special attribute to make it `droppable`**, but we treat it as a drop zone in the JavaScript code by attaching specific event listeners.
- Now to place the dragged item over the drop area we require `dragover`

```
dropTarget.addEventListener('dragover', (event) => {
  event.preventDefault(); // Necessary for allowing drop
  dropTarget.classList.add('hover'); // Add hover effect
});
```

- `dragover` fires when we drag an item over the `dropTarget`. `event.preventDefault()` is necessary because by default, most elements don’t allow drops. Calling `event.preventDefault()` tells the browser we want this element to accept dropped items.
- We add a `"hover"` effect by applying a new class (`hover`) to `dropTarget`. This class (defined in CSS) changes the background color of `dropTarget`, making it visually clear that this is a valid drop area.
- Post moving when the item is ready to be leave , we need to use `dragleave`.

```
dropTarget.addEventListener('dragleave', () => {
  dropTarget.classList.remove('hover'); // Remove hover effect
});
```

- `dragleave` fires when the dragged item leaves the `dropTarget`. We remove the "hover" effect by removing the hover class from `dropTarget`.
- Now at the end we require a drop event.

```
dropTarget.addEventListener('drop', (event) => {
  event.preventDefault(); // Prevent default behavior
  const data = event.dataTransfer.getData('text'); // Get stored data (item ID)
  const draggedElement = document.getElementById(data); // Find dragged item
  dropTarget.appendChild(draggedElement); // Move item to drop target
  dropTarget.classList.remove('hover'); // Remove hover effect
});
```

- `drop` fires when we release the dragged item over the `dropTarget`. We call `event.preventDefault()` again, as this is necessary to properly handle the drop. `getData` retrieves the data we set during `dragstart` using `setData`. Here, it retrieves the id of the dragged item (`drag-item`).
- `document.getElementById(data)` , using the ID retrieved, we get a reference to the actual dragged element in the DOM. `dropTarget.appendChild(draggedElement)` physically moves the dragged item into the `dropTarget` element, completing the `"move"` operation. We remove the hover effect, as the drag-and-drop operation is now complete.
- Complete code

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Drag and Drop Example</title>
<style>
  .draggable {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 20px;
    cursor: grab;
  }
  
  .droppable {
    width: 150px;
    height: 150px;
    background-color: lightgray;
    border: 2px dashed gray;
    margin: 20px;
  }
  
  .hover {
    background-color: lightgreen; /* Highlight the drop target */
  }
</style>
</head>
<body>

<div class="draggable" draggable="true" id="drag-item">Drag me</div>
<div class="droppable" id="drop-target">Drop here</div>

<script>
  // Selecting elements
  const dragItem = document.getElementById('drag-item');
  const dropTarget = document.getElementById('drop-target');

  // Handle drag start
  dragItem.addEventListener('dragstart', (event) => {
    event.dataTransfer.effectAllowed = 'move'; // Allow "move" action
    event.dataTransfer.setData('text/plain', event.target.id); // Store item ID
  });

  // Handle drag over - must prevent default to allow drop
  dropTarget.addEventListener('dragover', (event) => {
    event.preventDefault(); // Necessary for allowing drop
    dropTarget.classList.add('hover'); // Add hover effect
  });

  // Handle drag leave - when the item leaves the droppable area
  dropTarget.addEventListener('dragleave', () => {
    dropTarget.classList.remove('hover'); // Remove hover effect
  });

  // Handle drop
  dropTarget.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior
    const data = event.dataTransfer.getData('text'); // Get stored data (item ID)
    const draggedElement = document.getElementById(data); // Find dragged item
    dropTarget.appendChild(draggedElement); // Move item to drop target
    dropTarget.classList.remove('hover'); // Remove hover effect
  });
</script>

</body>
</html>
```

- On page

<video controls src="2024-12.mp4" title="title"></video>










