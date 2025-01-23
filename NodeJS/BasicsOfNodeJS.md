# About NodeJS


![alt text](image.png)


- Javascript is a hosted language, that means Javascript itself, the definition of the language can be implemented in different browser environments. All you need in the end is a Javascript engine that parses the code and executes it in the end in browser. Browsers have their own Javascript engines, like the V8 engine in the case of Chrome and this in the end hosts and executes the Javascript code therefore. Now within the browser APIs we learned about, like the DOM or the browser storage or the fetch API and so on, so we got tools to build rich client-side applications where you utilize the language and all its key features and keywords and so on combined with the browser APIs to provide the user experience you want to provide, all of that then runs in the browser.

>[!NOTE]
> - In the context of web development, a **client-side application** essentially refers to an application that runs within a user's web browser, making the browser itself the "client" in this scenario; therefore, a client-side application is considered to be **browser-based** or simply **browser** in this context. 

- We can execute Javascript anywhere else we want by simply taking the Javascript engine and taking it out of the browser basically and that's it. We can then add our own APIs if we want to, not APIs to work with the DOM for example because if the browser environment is detached from the web page, there is no DOM right, there is no HTML code which we could parse.
- APIs which don't exist in the browser, for example to work with the local file system which is not possible in the browser due to security reasons and that's exactly what `Node.js` does to run Javascript. `Node.js` is essentially the extracted V8 engine Chrome offers enriched by extra APIs, so its that engine you know from the browser but basically instead of the browser APIs, it has access to other APIs and it runs outside of the browser, this is `Node.js`.