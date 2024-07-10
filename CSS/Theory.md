# About CSS
- CSS stands for Cascading Style Sheets, and it's a computer language that controls how web pages are structured and presented to users.
- CSS is a rule-based language that defines styles to apply to specific elements or groups of elements on a web page. For example, you can use CSS to make a page's main heading appear as large red text.
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files having extension as .css
- CSS is designed to separate content and presentation, including layout, colors, and fonts. This separation allows the same markup page to be presented in different styles for different rendering methods, such as on-screen, in print, or by voice. CSS can also save a lot of work by allowing you to control the layout of multiple web pages at once.
- Syntax and Structure:
    - Selectors: CSS uses selectors to target specific HTML elements that you want to style.
    - Properties and Values: Each CSS rule consists of one or more properties (e.g., color, font-size) and their corresponding values (e.g., red, 12px).
    - Declaration Blocks: Properties and values are grouped within curly braces {} to form declaration blocks.
- Types of CSS:
    - Inline CSS: Styling directly applied to an HTML element using the style attribute.
    - Internal CSS: Styling defined within `<style>` tags in the `<head>` section of an HTML document.
    - External CSS: Styling stored in separate .css files and linked to HTML documents using `<link>` tags.
- When the same element is styled by external, internal, and inline CSS, the order of precedence follows specific rules. The hierarchy of which styles get applied is as follows:
    - Inline CSS (within the element’s style attribute) has the highest precedence.
    - Internal CSS (within a `<style>` tag in the HTML document).
    - External CSS (linked via a `<link>` tag in the HTML document).
- The `!important` declaration overrides any other declarations, regardless of specificity or source order. However, it should be used sparingly as it can make debugging and maintaining CSS more difficult.
- CSS supports both hexadecimal and RGB color codes, as well as other color formats.

## Is CSS a scripting language?
- CSS is not considered a scripting language. Unlike JavaScript or PHP, CSS does not have programming logic, variables, or the ability to perform calculations or manipulate data. Instead, CSS is purely declarative, meaning it describes how elements should be styled without executing commands or operations.

## CSS Selectors
- CSS selectors target the HTML elements on your pages, allowing you to add styles based on their ID, class, type, attribute, and more.
- CSS (Cascading Style Sheets) selectors are patterns used to select and style elements on a web page. They tell the browser which HTML elements to apply the CSS rules to. Think of selectors as a way to target specific parts of a web page to change their appearance or layout.

### Why Selectors are required?
- If multiple elements have the same class, the styles defined for that class will be applied to all of those elements. This is one of the key advantages of using class selectors: you can apply the same style rules to multiple elements without needing to repeat the CSS code.
- Selectors are essential because they allow you to apply styles to specific HTML elements without needing to add inline styles to each element. This keeps your HTML clean and your styles organized in a separate CSS file, making your code easier to maintain.

- Types of selectors
    1. Simple Selector (Element , Class and ID selector)
    2. Universal Selector
    3. Group Selector
    4. Attribute Selector
    5. Pseudo Class Selector
    6. Pseudo Element Selector
    7. Combinators