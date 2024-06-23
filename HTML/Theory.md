# About HTML
- **HTML stands for HyperText Markup Language**.
- It is the standard language used to create and design web pages on the internet.
- It was introduced by Tim Berners-Lee in 1991 at CERN as a simple markup language. Since then, it has evolved through versions from HTML 2.0 to HTML5 (the latest 2024 version).
- HTML is required because it forms the structure of web pages. Just like how a building needs a blueprint to be constructed, web pages need HTML to be displayed correctly on the internet.

## Why HTML is used in every browser?
- Hypertext Markup Language (HTML) is a standard language that all web browsers understand and use to structure and display content on web pages.
- HTML is universally supported by all web browsers, making it the go-to language for web content.
- HTML is a set of markup symbols or codes that tell browsers how to display text, images, and other multimedia.
- It's the foundation for all the content and design elements on a web page, including headings, paragraphs, and links.
- **Standardizes web pages**: Ensures that web pages look consistent across different browsers, which improves the user experience.
- **Simplifies development**: Makes it easier to develop web pages.
- **Guarantees accessibility**: Ensures that web pages are accessible to all users, regardless of their preferred browser.

## Is HTML a programming language or a scripting language?
- HTML is neither a programming language nor a scripting language. Instead, it is a markup language. Here’s what that means:
  - **1. Markup Language**: HTML uses **tags** to mark up the content of a document, indicating what each part of the document is (headings, paragraphs, links, images, etc.). It describes the structure and layout of a web page without containing any logic or behavior.
  - **2. No Logic or Algorithms**: Unlike programming languages (like Python, Java, C++), HTML doesn’t perform calculations, control flow (like loops and conditionals), or handle user interactions. It simply defines the structure and content of the web page.
  - **3. No Scripting**: Scripting languages (like JavaScript) are used to create dynamic and interactive web content. While HTML structures the content, scripting languages add behavior and interactivity.

## Purpose of HTML 
- The main purpose of HTML is to structure content on the web. It allows you to:
  - Organize text into headings, paragraphs, lists, etc.
  - Embed images, videos, and other multimedia.
  - Create links to navigate between pages.
  - Formulate tables and forms for data entry.

## How HTML works with browser?
- HTML uses **tags**, which are words surrounded by angle brackets (< >). These tags tell the browser what kind of content to display. For example, the tag `<h1>` defines a heading, and `<strong>` makes text bold.

### Tags and Elements
- HTML uses tags to create elements. Tags are enclosed in angle brackets like `<tagname>`. An element usually consists of an opening tag `<tagname>`, content, and a closing tag `</tagname>`. Some tags, like `<img>`, are self-closing and don’t need a closing tag.
- The file extension for HTML files is .html. Sometimes you might also see the .htm extension, but .html is more commonly used today.
- A simple example of HTML
``` 
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first paragraph.</p>
    <a href="https://www.example.com">Click here to visit Example.com</a>
</body>
</html>
```
- Click [here](https://htmlpreview.github.io/?https://github.com/codophilic/Learn-HTML-And-CSS/blob/main/HTML/simple.html) to preview this sample html content.

## How HTML Works with Other Technologies
- While HTML is used for structure, it often works in combination with other technologies.

### CSS (Cascading Style Sheets): 
- Used alongside HTML to style and layout web pages. CSS controls the visual appearance, including colors, fonts, and spacing.

### JavaScript:
- A scripting language used to make web pages interactive. JavaScript can manipulate the HTML structure dynamically, handle events, and create animations.

### Backend Languages: 
- Languages like PHP, Python, Ruby, and Java run on the server to handle the logic, data processing, and database interactions, then output HTML to be sent to the browser.

## Analogy with Real time examples
- HTML forms the skeleton of your web page, just like the framework of a building. It defines the structure and content.
- Each HTML element (like headings, paragraphs, images, links) is like a room or wall, giving shape and layout to your content.
- CSS is responsible for the look and feel of your web page, much like paint, wallpaper, and decorations in a building.
- CSS also controls the layout, such as where each room (HTML element) is placed, similar to how furniture and decor are arranged in a building.
- CSS defines fonts, text sizes, and other visual aesthetics, akin to the textures and finishes in interior design.
- JavaScript adds interactive features to your web page, just like lifts, alarms, and security systems in a building.
- JavaScript can change the HTML and CSS dynamically, updating the content and style in real time, much like smart home systems adjust lighting or temperature based on certain conditions.
- HTML structures the content, CSS styles and beautifies it, and JavaScript adds interactivity and functionality, creating a complete, user-friendly web experience.

## Contents of the HTML document
- **`<!DOCTYPE html>`**: This is a document type declaration. It tells the web browser what version of HTML the document is written in.Declaring **`<!DOCTYPE html>`** ensures that the browser will render the page in standards mode, which helps ensure that the page is displayed consistently across different browsers.
- **`<html>`**:This is the root element of an HTML document. It wraps all the content on the web page.It indicates the beginning and end of the HTML document.
- **`<head>`**: This element contains meta-information about the HTML document. This includes the title, links to stylesheets, metadata, scripts, and more.The information inside the **`<head>`** is not displayed directly on the web page, but it is crucial for rendering the page correctly and for SEO (Search Engine Optimization), accessibility, and performance.
- **`<title>`**: This element sets the title of the HTML document.The content of the **`<title>`** tag is displayed on the browser's title bar or tab. It is also used by search engines to identify the page, and it's what is displayed as the clickable headline in search engine results.
- **`<body>`**: This element contains all the content that is displayed to the user on the web page. This includes text, images, links, videos, etc. Everything inside the **`<body>`** tag is rendered by the browser and shown on the web page. This is where you place all the visible content of your web page.
- **`<h1>`**: This is a heading tag. It represents the main heading of the page. It is typically used for the most important heading. There are six levels of headings (**`<h1> to <h6>`**), with **`<h1>`** being the most important and **`<h6>`** the least.
- **`<p>`**: This is a paragraph tag. The **`<p>`** tag is used to define a block of text as a paragraph. It adds a space above and below the text, creating a clear separation between different blocks of content.








