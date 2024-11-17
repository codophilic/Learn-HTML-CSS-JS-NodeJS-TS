// //Pure Functions
// function add(x, y) {
//     return x + y;
// }

// console.log(add(5,4)) // 9
// console.log(add(1,2)) //3

// let globalVar=0;

// //Impure Functions
// function addWithRandom(x,y){
//     globalVar=Math.random()+x+y;
//     return globalVar;
// }
// console.log(addWithRandom(10,20)) //30.840642363022475 (Randomness)
// console.log(globalVar) //30.840642363022475 (Side effect)

// //Factory Function
// function createPizza(size, topping) {
//     return {
//       size: size,
//       topping: topping,
//       bake() {
//         console.log(`Baking a ${size} pizza with ${topping}!`);
//       },
//     };
//   }
  
// const myPizza = createPizza("large", "pepperoni");
// myPizza.bake(); // Output: Baking a large pizza with pepperoni!
// console.log(myPizza.size); // large
// console.log(myPizza.topping); //pepperoni

// //Closure
// function outerFunction(num) {
//     let outerVariable = 'I am from outer function';
  
//     function innerFunction() {
//       console.log(outerVariable);
//       console.log("Number sent: "+num)
//     }
  
//     return innerFunction;
// }
  
// const closure = outerFunction(10);
// closure(); 


// function createMultiplier(multiplier) {
//     return function(number) {
//       return number * multiplier;
//     };
//   }
  
//   const double = createMultiplier(2);
//   const triple = createMultiplier(3);
  
//   console.log(double(5)); // Output: 10
//   console.log(triple(5)); // Output: 15
  

// // CallBack Hell

// function getData(dataid,timeTakenToFetch,nextData){
//   console.log(`data ${dataid} fetching...`)
//   setTimeout(()=>{
//       console.log(`data ${dataid} fetched`)
//       if(nextData){
//           nextData()
//       }
//   },timeTakenToFetch)
// }

// getData(1,3000,()=>{
//   getData(2,4000,()=>{
//       getData(3,3000)
//   })
// })

// // Promises
// // Creating a promise that resolves after 6 second
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data fetched successfully!'); 
//   }, 6000);
// });

// // Using the promise
// promise
//   .then(data => {
//     console.log(data); // Output: Data fetched successfully!
//   })
//   .catch(error => {
//     console.error(error); // Handle any errors
//   });

// // Promise Chaining
// function getDataFromPromise(dataid,timeTakenToFetch){
//   return new Promise((resolve,reject)=>{
//     console.log(`data ${dataid} fetching...`)
//     setTimeout(()=>{
//         console.log(`data ${dataid} fetched`)
//         resolve("data was returned")
//     },timeTakenToFetch)
//   })
// }

// let r1=getDataFromPromise(1,3000)
// r1.then((data=>{
//     console.log(data);
//     let r2=getDataFromPromise(2,4000)
//     r2.then((data=>{
//         console.log(data)
//         let r3=getDataFromPromise(3,3000)
//         r3.then((data=>{
//             console.log(data)
//         }))
//     }))
// }))

// // Async-Await

// function getDataAsyncAwait(dataid, timeTakenToFetch) {
//   console.log(`data ${dataid} fetching...`);
//   return new Promise((resolve,reject) => {
//       setTimeout(() => {
//           console.log(`data ${dataid} fetched`);
//           if(dataid==2){
//             reject("Data Not Found");
//           }
//           resolve();
//       }, timeTakenToFetch);
//   });
// }

// async function fetchDataInSequence() {
//   let r1;
//   let r2;
//   let r3;
//   try{
//     r1=await getDataAsyncAwait(1, 3000); // Wait for data 1 to fetch
//     r2=await getDataAsyncAwait(2, 4000); // Wait for data 2 to fetch
//     r3=await getDataAsyncAwait(3, 3000); // Wait for data 3 to fetch
//     /*
//     The Above lines are same as using nested .then
//     */
//   }catch(Error){
//     console.log(`Error - ${Error}`);
//   }

// }

// fetchDataInSequence();

// HTTP Request

// const xhr = new XMLHttpRequest();

// function GetData(){
//   return new Promise((resolve,reject)=>{
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//     xhr.responseType='json' // Default is String plain text
//     xhr.setRequestHeaders("Content-Type","JSON Content");
//     xhr.onload = function () {
//       if (xhr.status === 200) { // Check if the request was successful
//         resolve(xhr.response);
//       }
//       else{
//         reject( new Error("Request was unsuccessful URL is invalid"));
//       }
//     };
//     xhr.onerror=function(){
//       reject(new Error("You are not connected to Internet"))
//     }
//     xhr.send();
//   })
// }

// async function performOperationOnGetData(){
//   let getResult;
//   try{
//     getResult=await GetData();
//     for(const i of getResult){
//       console.log(`Item - id ${i.id} , name ${i.name}`);
//     }
//   }catch(e){ // Handling ERROR
//     console.error("ERROR FOUND: "+e)
//   }
// }

// performOperationOnGetData()


// const myData={
//   title: "This is a dummy title",
//   body: "This is a dummy body",
//   userId: 101
// }
// xhr.open('POST','https://jsonplaceholder.typicode.com/posts');
// xhr.send(JSON.stringify(myData));

// xhr.open('DELETE','https://jsonplaceholder.typicode.com/posts/1')
// xhr.send();

// Fetch API

function GetData(){
  return fetch("https://jsonplaceholder.typicode.com/u").
  then(response=> {
    if(response.status==200){
      return response.json()
    }
    else{
      return response.json().then(data=>{
        console.log(data)
        console.log(response)
        throw new Error("Invalid URL")
      })
    }
  }
  ).
  catch((error)=>{
    throw new Error(error);
  });
}

async function performOperationOnGetData(){
  let getResult;
  try{
    getResult=await GetData();
    console.log(getResult)
    for(const i of getResult){
      console.log(`Item - id ${i.id} , name ${i.name}`);
    }
  }catch(e){ // Handling ERROR
    console.error("ERROR FOUND: "+e)
  }
}

performOperationOnGetData()

// function OtherOperationData(methodName,url,body=null){
//   return fetch(url,{
//     method: methodName,
//     headers:{
//       "Content-Type": "JSON Content",
//       "JSON-Length": 20
//     },
//     body:JSON.stringify(body)
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to POST: " + response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("POST Response:", data);
//   })
//   .catch(error => {
//     console.error("Fetch POST Error:", error);
//   });
// }

// async function performOperationOtherOperationsData(){
//   try{
//     const myData={
//       title: "This is a dummy title",
//       body: "This is a dummy body",
//       userId: 101
//     }
//     let result=OtherOperationData('DELETE','https://jsonplaceholder.typicode.com/posts/2');
//   }catch(e){ // Handling ERROR
//     console.error("ERROR FOUND: "+e)
//   }
// }

// performOperationOtherOperationsData()


