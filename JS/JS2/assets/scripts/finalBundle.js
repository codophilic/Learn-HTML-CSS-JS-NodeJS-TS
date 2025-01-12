/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A.js":
/*!******************!*\
  !*** ./src/A.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   A: function() { return /* binding */ A; }\n/* harmony export */ });\nclass A {\n  display() {\n    // eslint-disable-next-line no-console, quotes, semi\n    console.log(\"Display A\");\n  }\n}\n\n//# sourceURL=webpack://tooling/./src/A.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function() {

eval("// //Pure Functions\n// function add(x, y) {\n//     return x + y;\n// }\n\n// console.log(add(5,4)) // 9\n// console.log(add(1,2)) //3\n\n// let globalVar=0;\n\n// //Impure Functions\n// function addWithRandom(x,y){\n//     globalVar=Math.random()+x+y;\n//     return globalVar;\n// }\n// console.log(addWithRandom(10,20)) //30.840642363022475 (Randomness)\n// console.log(globalVar) //30.840642363022475 (Side effect)\n\n// //Factory Function\n// function createPizza(size, topping) {\n//     return {\n//       size: size,\n//       topping: topping,\n//       bake() {\n//         console.log(`Baking a ${size} pizza with ${topping}!`);\n//       },\n//     };\n//   }\n\n// const myPizza = createPizza(\"large\", \"pepperoni\");\n// myPizza.bake(); // Output: Baking a large pizza with pepperoni!\n// console.log(myPizza.size); // large\n// console.log(myPizza.topping); //pepperoni\n\n// //Closure\n// function outerFunction(num) {\n//     let outerVariable = 'I am from outer function';\n\n//     function innerFunction() {\n//       console.log(outerVariable);\n//       console.log(\"Number sent: \"+num)\n//     }\n\n//     return innerFunction;\n// }\n\n// const closure = outerFunction(10);\n// closure(); \n\n// function createMultiplier(multiplier) {\n//     return function(number) {\n//       return number * multiplier;\n//     };\n//   }\n\n//   const double = createMultiplier(2);\n//   const triple = createMultiplier(3);\n\n//   console.log(double(5)); // Output: 10\n//   console.log(triple(5)); // Output: 15\n\n// // CallBack Hell\n\n// function getData(dataid,timeTakenToFetch,nextData){\n//   console.log(`data ${dataid} fetching...`)\n//   setTimeout(()=>{\n//       console.log(`data ${dataid} fetched`)\n//       if(nextData){\n//           nextData()\n//       }\n//   },timeTakenToFetch)\n// }\n\n// getData(1,3000,()=>{\n//   getData(2,4000,()=>{\n//       getData(3,3000)\n//   })\n// })\n\n// // Promises\n// // Creating a promise that resolves after 6 second\n// const promise = new Promise((resolve, reject) => {\n//   setTimeout(() => {\n//     resolve('Data fetched successfully!'); \n//   }, 6000);\n// });\n\n// // Using the promise\n// promise\n//   .then(data => {\n//     console.log(data); // Output: Data fetched successfully!\n//   })\n//   .catch(error => {\n//     console.error(error); // Handle any errors\n//   });\n\n// // Promise Chaining\n// function getDataFromPromise(dataid,timeTakenToFetch){\n//   return new Promise((resolve,reject)=>{\n//     console.log(`data ${dataid} fetching...`)\n//     setTimeout(()=>{\n//         console.log(`data ${dataid} fetched`)\n//         resolve(\"data was returned\")\n//     },timeTakenToFetch)\n//   })\n// }\n\n// let r1=getDataFromPromise(1,3000)\n// r1.then((data=>{\n//     console.log(data);\n//     let r2=getDataFromPromise(2,4000)\n//     r2.then((data=>{\n//         console.log(data)\n//         let r3=getDataFromPromise(3,3000)\n//         r3.then((data=>{\n//             console.log(data)\n//         }))\n//     }))\n// }))\n\n// // Async-Await\n\n// function getDataAsyncAwait(dataid, timeTakenToFetch) {\n//   console.log(`data ${dataid} fetching...`);\n//   return new Promise((resolve,reject) => {\n//       setTimeout(() => {\n//           console.log(`data ${dataid} fetched`);\n//           if(dataid==2){\n//             reject(\"Data Not Found\");\n//           }\n//           resolve();\n//       }, timeTakenToFetch);\n//   });\n// }\n\n// async function fetchDataInSequence() {\n//   let r1;\n//   let r2;\n//   let r3;\n//   try{\n//     r1=await getDataAsyncAwait(1, 3000); // Wait for data 1 to fetch\n//     r2=await getDataAsyncAwait(2, 4000); // Wait for data 2 to fetch\n//     r3=await getDataAsyncAwait(3, 3000); // Wait for data 3 to fetch\n//     /*\n//     The Above lines are same as using nested .then\n//     */\n//   }catch(Error){\n//     console.log(`Error - ${Error}`);\n//   }\n\n// }\n\n// fetchDataInSequence();\n\n// HTTP Request\n\n// const xhr = new XMLHttpRequest();\n\n// function GetData(){\n//   return new Promise((resolve,reject)=>{\n//     xhr.open(\"GET\", \"https://jsonplaceholder.typicode.com/users\");\n//     xhr.responseType='json' // Default is String plain text\n//     xhr.setRequestHeaders(\"Content-Type\",\"JSON Content\");\n//     xhr.onload = function () {\n//       if (xhr.status === 200) { // Check if the request was successful\n//         resolve(xhr.response);\n//       }\n//       else{\n//         reject( new Error(\"Request was unsuccessful URL is invalid\"));\n//       }\n//     };\n//     xhr.onerror=function(){\n//       reject(new Error(\"You are not connected to Internet\"))\n//     }\n//     xhr.send();\n//   })\n// }\n\n// async function performOperationOnGetData(){\n//   let getResult;\n//   try{\n//     getResult=await GetData();\n//     for(const i of getResult){\n//       console.log(`Item - id ${i.id} , name ${i.name}`);\n//     }\n//   }catch(e){ // Handling ERROR\n//     console.error(\"ERROR FOUND: \"+e)\n//   }\n// }\n\n// performOperationOnGetData()\n\n// const myData={\n//   title: \"This is a dummy title\",\n//   body: \"This is a dummy body\",\n//   userId: 101\n// }\n// xhr.open('POST','https://jsonplaceholder.typicode.com/posts');\n// xhr.send(JSON.stringify(myData));\n\n// xhr.open('DELETE','https://jsonplaceholder.typicode.com/posts/1')\n// xhr.send();\n\n// Fetch API\n\n// function GetData(){\n//   return fetch(\"https://jsonplaceholder.typicode.com/u\").\n//   then(response=> {\n//     if(response.status==200){\n//       return response.json()\n//     }\n//     else{\n//       return response.json().then(data=>{\n//         console.log(data)\n//         console.log(response)\n//         throw new Error(\"Invalid URL\")\n//       })\n//     }\n//   }\n//   ).\n//   catch((error)=>{\n//     throw new Error(error);\n//   });\n// }\n\n// async function performOperationOnGetData(){\n//   let getResult;\n//   try{\n//     getResult=await GetData();\n//     console.log(getResult)\n//     for(const i of getResult){\n//       console.log(`Item - id ${i.id} , name ${i.name}`);\n//     }\n//   }catch(e){ // Handling ERROR\n//     console.error(\"ERROR FOUND: \"+e)\n//   }\n// }\n\n// performOperationOnGetData()\n\n// function OtherOperationData(methodName,url,body=null){\n//   return fetch(url,{\n//     method: methodName,\n//     headers:{\n//       \"Content-Type\": \"JSON Content\",\n//       \"JSON-Length\": 20\n//     },\n//     body:JSON.stringify(body)\n//   }).then(response => {\n//     if (!response.ok) {\n//       throw new Error(\"Failed to POST: \" + response.status);\n//     }\n//     return response.json();\n//   })\n//   .then(data => {\n//     console.log(\"POST Response:\", data);\n//   })\n//   .catch(error => {\n//     console.error(\"Fetch POST Error:\", error);\n//   });\n// }\n\n// async function performOperationOtherOperationsData(){\n//   try{\n//     const myData={\n//       title: \"This is a dummy title\",\n//       body: \"This is a dummy body\",\n//       userId: 101\n//     }\n//     let result=OtherOperationData('DELETE','https://jsonplaceholder.typicode.com/posts/2');\n//   }catch(e){ // Handling ERROR\n//     console.error(\"ERROR FOUND: \"+e)\n//   }\n// }\n\n// performOperationOtherOperationsData()\n\nconst arr = [3, 2];\nconst arr1 = [2, 3];\nconsole.log(_.intersection(arr, arr1));\naxios.get('https://jsonplaceholder.typicode.com/users').then(response => console.log(response.data)).catch(error => console.error('There was a problem with the Axios request:', error));\n\n//# sourceURL=webpack://tooling/./src/app.js?");

/***/ }),

/***/ "./src/app1.js":
/*!*********************!*\
  !*** ./src/app1.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _A_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A.js */ \"./src/A.js\");\n\nclass B extends _A_js__WEBPACK_IMPORTED_MODULE_0__.A {\n  display() {\n    console.log(\"Display B\");\n  }\n}\nconst b = new B();\nb.display();\nconst getBtn = document.getElementById(\"myButton\");\ngetBtn.addEventListener(\"click\", () => {\n  const promise = Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./onClick.js */ \"./src/onClick.js\"));\n  promise.then(i => {\n    i.showAlert();\n  });\n});\n\n//# sourceURL=webpack://tooling/./src/app1.js?");

/***/ }),

/***/ "./src/onClick.js":
/*!************************!*\
  !*** ./src/onClick.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showAlert: function() { return /* binding */ showAlert; }\n/* harmony export */ });\nconsole.log(undefined); //undefined\nconsole.log(\"Line Executed once\");\nfunction showAlert() {\n  alert(\"Button Clicked\");\n}\n\n//# sourceURL=webpack://tooling/./src/onClick.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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