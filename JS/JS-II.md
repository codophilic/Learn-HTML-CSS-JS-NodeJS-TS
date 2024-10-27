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

























