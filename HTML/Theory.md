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
- Learn different types of HTML [tags](https://github.com/codophilic/Learn-HTML-CSS-JS/blob/main/HTML/HtmlTagsInfo.html).

# SVG (Scalable Vector Graphics)
- SVG defines vector-based graphics in XML format.
- SVG stands for Scalable Vector Graphics. It is a markup language for describing two-dimensional vector graphics. Unlike raster graphics formats like JPEG or PNG, which store images as a grid of pixels, SVG uses mathematical descriptions to define shapes, paths, and colors. This allows SVG images to be scaled to any size without losing quality, making them ideal for responsive web design and high-resolution displays.
- SVG is supported by all major browsers.
- There are several reasons why you might want to use SVG:
  - Scalability: As the name suggests, SVG graphics are scalable without losing quality. This means they look crisp and clear at any size, making them perfect for responsive web design where images need to adapt to different screen sizes and resolutions.
  - Small file size: SVG files are typically smaller in size compared to raster image formats like JPEG or PNG, especially for simple graphics. This can lead to faster loading times for web pages, which is crucial for improving user experience and SEO.
  - Editability: SVG files are text-based and can be easily edited with a text editor or graphic design software. This makes it simple to customize and manipulate SVG images, such as changing colors, shapes, or adding animations.
  - Accessibility: SVG images can be made accessible to users with disabilities by adding descriptive text or metadata. This is important for ensuring that all users can access and understand the content of your website.
  - Interactivity: SVG supports interactivity through JavaScript, allowing you to create dynamic and engaging graphics. You can add animations, hover effects, and interactive elements to SVG images to enhance user engagement.
- SVG is a W3C (The World Wide Web Consortium (W3C) develops standards and guidelines to help everyone build a web based on the principles of accessibility, internationalization, privacy and security.) standard, ensuring that it is consistently supported across all modern web browsers.
- A Scalable Vector Graphic (SVG) is a unique type of image format. Unlike other varieties, SVGs don’t rely on unique pixels to make up the images you see. Instead, they use ‘vector’ data. By using SVGs, you get images that can scale up to any resolution, which comes in handy for web design among plenty of other use cases.
- SVG is a vector-based format, meaning it uses geometrical primitives such as points, lines, curves, and shapes (polygons) to represent images. Whereas JPEG and PNG are raster-based formats, meaning they use a grid of individual pixels to represent images.

| Feature                     | SVG (Scalable Vector Graphics)                                         | JPEG (.jpg)                                                   | PNG (.png)                                                             |
| --------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Format Type                 | Vector-based                                                           | Raster-based                                                  | Raster-based                                                           |
| Scalability                 | Infinite scalability without loss of quality                           | Limited scalability; can become pixelated                     | Limited scalability; can become pixelated                              |
| File Size                   | Typically small for simple images; can increase with complexity        | Compressed, generally smaller size but with lossy compression | Larger due to lossless compression                                     |
| Editability                 | Editable with text editors and graphic software                        | Requires graphic software; edits involve pixels               | Requires graphic software; edits involve pixels                        |
| Interactivity and Animation | Supports interactivity and animation through CSS, JavaScript, and SMIL | Does not support interactivity or animation natively          | Does not support interactivity or animation natively                   |
| Transparency                | Fully supports transparency                                            | Does not support transparency                                 | Fully supports transparency                                            |
| Color Support               | Unlimited colors                                                       | Limited to 16.7 million colors (24-bit)                       | Unlimited colors (supports 24-bit and 32-bit color)                    |
| Use Cases                   | Icons, logos, charts, maps, illustrations                              | Photographic images, web images where compression is key      | Web graphics, images requiring transparency and detailed illustrations |
| Compression                 | Can be compressed with gzip                                            | Lossy compression                                             | Lossless compression                                                   |
| Search Engine Friendly      | Text-based and searchable                                              | Not searchable                                                | Not searchable                                                         |
| Resolution Independence     | Yes                                                                    | No                                                            | No                                                                     |
| Accessibility               | Can be made accessible with attributes and descriptions                | Limited accessibility                                         | Limited accessibility                                                  |
| Browser Compatibility       | Supported by all modern browsers                                       | Supported by all modern browsers                              | Supported by all modern browsers                                       |

