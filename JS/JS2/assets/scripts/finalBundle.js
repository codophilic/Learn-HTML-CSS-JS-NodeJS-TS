/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A.js":
/*!******************!*\
  !*** ./src/A.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   A: () => (/* binding */ A)\n/* harmony export */ });\nclass A{\r\n    display(){\r\n        // eslint-disable-next-line no-console, quotes, semi\r\n        console.log(\"Display A\")\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tooling/./src/A.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("// //Pure Functions\r\n// function add(x, y) {\r\n//     return x + y;\r\n// }\r\n\r\n// console.log(add(5,4)) // 9\r\n// console.log(add(1,2)) //3\r\n\r\n// let globalVar=0;\r\n\r\n// //Impure Functions\r\n// function addWithRandom(x,y){\r\n//     globalVar=Math.random()+x+y;\r\n//     return globalVar;\r\n// }\r\n// console.log(addWithRandom(10,20)) //30.840642363022475 (Randomness)\r\n// console.log(globalVar) //30.840642363022475 (Side effect)\r\n\r\n// //Factory Function\r\n// function createPizza(size, topping) {\r\n//     return {\r\n//       size: size,\r\n//       topping: topping,\r\n//       bake() {\r\n//         console.log(`Baking a ${size} pizza with ${topping}!`);\r\n//       },\r\n//     };\r\n//   }\r\n  \r\n// const myPizza = createPizza(\"large\", \"pepperoni\");\r\n// myPizza.bake(); // Output: Baking a large pizza with pepperoni!\r\n// console.log(myPizza.size); // large\r\n// console.log(myPizza.topping); //pepperoni\r\n\r\n// //Closure\r\n// function outerFunction(num) {\r\n//     let outerVariable = 'I am from outer function';\r\n  \r\n//     function innerFunction() {\r\n//       console.log(outerVariable);\r\n//       console.log(\"Number sent: \"+num)\r\n//     }\r\n  \r\n//     return innerFunction;\r\n// }\r\n  \r\n// const closure = outerFunction(10);\r\n// closure(); \r\n\r\n\r\n// function createMultiplier(multiplier) {\r\n//     return function(number) {\r\n//       return number * multiplier;\r\n//     };\r\n//   }\r\n  \r\n//   const double = createMultiplier(2);\r\n//   const triple = createMultiplier(3);\r\n  \r\n//   console.log(double(5)); // Output: 10\r\n//   console.log(triple(5)); // Output: 15\r\n  \r\n\r\n// // CallBack Hell\r\n\r\n// function getData(dataid,timeTakenToFetch,nextData){\r\n//   console.log(`data ${dataid} fetching...`)\r\n//   setTimeout(()=>{\r\n//       console.log(`data ${dataid} fetched`)\r\n//       if(nextData){\r\n//           nextData()\r\n//       }\r\n//   },timeTakenToFetch)\r\n// }\r\n\r\n// getData(1,3000,()=>{\r\n//   getData(2,4000,()=>{\r\n//       getData(3,3000)\r\n//   })\r\n// })\r\n\r\n// // Promises\r\n// // Creating a promise that resolves after 6 second\r\n// const promise = new Promise((resolve, reject) => {\r\n//   setTimeout(() => {\r\n//     resolve('Data fetched successfully!'); \r\n//   }, 6000);\r\n// });\r\n\r\n// // Using the promise\r\n// promise\r\n//   .then(data => {\r\n//     console.log(data); // Output: Data fetched successfully!\r\n//   })\r\n//   .catch(error => {\r\n//     console.error(error); // Handle any errors\r\n//   });\r\n\r\n// // Promise Chaining\r\n// function getDataFromPromise(dataid,timeTakenToFetch){\r\n//   return new Promise((resolve,reject)=>{\r\n//     console.log(`data ${dataid} fetching...`)\r\n//     setTimeout(()=>{\r\n//         console.log(`data ${dataid} fetched`)\r\n//         resolve(\"data was returned\")\r\n//     },timeTakenToFetch)\r\n//   })\r\n// }\r\n\r\n// let r1=getDataFromPromise(1,3000)\r\n// r1.then((data=>{\r\n//     console.log(data);\r\n//     let r2=getDataFromPromise(2,4000)\r\n//     r2.then((data=>{\r\n//         console.log(data)\r\n//         let r3=getDataFromPromise(3,3000)\r\n//         r3.then((data=>{\r\n//             console.log(data)\r\n//         }))\r\n//     }))\r\n// }))\r\n\r\n// // Async-Await\r\n\r\n// function getDataAsyncAwait(dataid, timeTakenToFetch) {\r\n//   console.log(`data ${dataid} fetching...`);\r\n//   return new Promise((resolve,reject) => {\r\n//       setTimeout(() => {\r\n//           console.log(`data ${dataid} fetched`);\r\n//           if(dataid==2){\r\n//             reject(\"Data Not Found\");\r\n//           }\r\n//           resolve();\r\n//       }, timeTakenToFetch);\r\n//   });\r\n// }\r\n\r\n// async function fetchDataInSequence() {\r\n//   let r1;\r\n//   let r2;\r\n//   let r3;\r\n//   try{\r\n//     r1=await getDataAsyncAwait(1, 3000); // Wait for data 1 to fetch\r\n//     r2=await getDataAsyncAwait(2, 4000); // Wait for data 2 to fetch\r\n//     r3=await getDataAsyncAwait(3, 3000); // Wait for data 3 to fetch\r\n//     /*\r\n//     The Above lines are same as using nested .then\r\n//     */\r\n//   }catch(Error){\r\n//     console.log(`Error - ${Error}`);\r\n//   }\r\n\r\n// }\r\n\r\n// fetchDataInSequence();\r\n\r\n// HTTP Request\r\n\r\n// const xhr = new XMLHttpRequest();\r\n\r\n// function GetData(){\r\n//   return new Promise((resolve,reject)=>{\r\n//     xhr.open(\"GET\", \"https://jsonplaceholder.typicode.com/users\");\r\n//     xhr.responseType='json' // Default is String plain text\r\n//     xhr.setRequestHeaders(\"Content-Type\",\"JSON Content\");\r\n//     xhr.onload = function () {\r\n//       if (xhr.status === 200) { // Check if the request was successful\r\n//         resolve(xhr.response);\r\n//       }\r\n//       else{\r\n//         reject( new Error(\"Request was unsuccessful URL is invalid\"));\r\n//       }\r\n//     };\r\n//     xhr.onerror=function(){\r\n//       reject(new Error(\"You are not connected to Internet\"))\r\n//     }\r\n//     xhr.send();\r\n//   })\r\n// }\r\n\r\n// async function performOperationOnGetData(){\r\n//   let getResult;\r\n//   try{\r\n//     getResult=await GetData();\r\n//     for(const i of getResult){\r\n//       console.log(`Item - id ${i.id} , name ${i.name}`);\r\n//     }\r\n//   }catch(e){ // Handling ERROR\r\n//     console.error(\"ERROR FOUND: \"+e)\r\n//   }\r\n// }\r\n\r\n// performOperationOnGetData()\r\n\r\n\r\n// const myData={\r\n//   title: \"This is a dummy title\",\r\n//   body: \"This is a dummy body\",\r\n//   userId: 101\r\n// }\r\n// xhr.open('POST','https://jsonplaceholder.typicode.com/posts');\r\n// xhr.send(JSON.stringify(myData));\r\n\r\n// xhr.open('DELETE','https://jsonplaceholder.typicode.com/posts/1')\r\n// xhr.send();\r\n\r\n// Fetch API\r\n\r\n// function GetData(){\r\n//   return fetch(\"https://jsonplaceholder.typicode.com/u\").\r\n//   then(response=> {\r\n//     if(response.status==200){\r\n//       return response.json()\r\n//     }\r\n//     else{\r\n//       return response.json().then(data=>{\r\n//         console.log(data)\r\n//         console.log(response)\r\n//         throw new Error(\"Invalid URL\")\r\n//       })\r\n//     }\r\n//   }\r\n//   ).\r\n//   catch((error)=>{\r\n//     throw new Error(error);\r\n//   });\r\n// }\r\n\r\n// async function performOperationOnGetData(){\r\n//   let getResult;\r\n//   try{\r\n//     getResult=await GetData();\r\n//     console.log(getResult)\r\n//     for(const i of getResult){\r\n//       console.log(`Item - id ${i.id} , name ${i.name}`);\r\n//     }\r\n//   }catch(e){ // Handling ERROR\r\n//     console.error(\"ERROR FOUND: \"+e)\r\n//   }\r\n// }\r\n\r\n// performOperationOnGetData()\r\n\r\n// function OtherOperationData(methodName,url,body=null){\r\n//   return fetch(url,{\r\n//     method: methodName,\r\n//     headers:{\r\n//       \"Content-Type\": \"JSON Content\",\r\n//       \"JSON-Length\": 20\r\n//     },\r\n//     body:JSON.stringify(body)\r\n//   }).then(response => {\r\n//     if (!response.ok) {\r\n//       throw new Error(\"Failed to POST: \" + response.status);\r\n//     }\r\n//     return response.json();\r\n//   })\r\n//   .then(data => {\r\n//     console.log(\"POST Response:\", data);\r\n//   })\r\n//   .catch(error => {\r\n//     console.error(\"Fetch POST Error:\", error);\r\n//   });\r\n// }\r\n\r\n// async function performOperationOtherOperationsData(){\r\n//   try{\r\n//     const myData={\r\n//       title: \"This is a dummy title\",\r\n//       body: \"This is a dummy body\",\r\n//       userId: 101\r\n//     }\r\n//     let result=OtherOperationData('DELETE','https://jsonplaceholder.typicode.com/posts/2');\r\n//   }catch(e){ // Handling ERROR\r\n//     console.error(\"ERROR FOUND: \"+e)\r\n//   }\r\n// }\r\n\r\n// performOperationOtherOperationsData()\r\n\r\n\r\n\r\n// const arr=[3,2]\r\n// const arr1=[2,3]\r\n// console.log(_.intersection(arr,arr1))\r\n\r\n// axios.get('https://jsonplaceholder.typicode.com/users')\r\n//   .then(response => console.log(response.data))\r\n//   .catch(error => console.error('There was a problem with the Axios request:', error));\r\n\r\nconsole.log(document.cookie)\r\ndocument.cookie='key1=value1'\n\n//# sourceURL=webpack://tooling/./src/app.js?");

/***/ }),

/***/ "./src/app1.js":
/*!*********************!*\
  !*** ./src/app1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _A_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A.js */ \"./src/A.js\");\n\r\n\r\n\r\nclass B extends _A_js__WEBPACK_IMPORTED_MODULE_0__.A{\r\n    display(){\r\n        console.log(\"Display B\")\r\n    }\r\n}\r\n\r\n\r\nconst b = new B();\r\n\r\nb.display()\r\n\r\nconst getBtn=document.getElementById(\"myButton\");\r\n\r\ngetBtn.addEventListener(\"click\",()=>{\r\n\r\n    const promise=Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./onClick.js */ \"./src/onClick.js\"))\r\n    promise.then(i=>{\r\n        i.showAlert();\r\n    })\r\n\r\n})\r\n\n\n//# sourceURL=webpack://tooling/./src/app1.js?");

/***/ }),

/***/ "./src/onClick.js":
/*!************************!*\
  !*** ./src/onClick.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAlert: () => (/* binding */ showAlert)\n/* harmony export */ });\nconsole.log(undefined) //undefined\r\nconsole.log(\"Line Executed once\")\r\nfunction showAlert(){\r\n        alert(\"Button Clicked\");\r\n}\n\n//# sourceURL=webpack://tooling/./src/onClick.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app1.js");
/******/ 	__webpack_require__("./src/app.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/onClick.js");
/******/ 	
/******/ })()
;