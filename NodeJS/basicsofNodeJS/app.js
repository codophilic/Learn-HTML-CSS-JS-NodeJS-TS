let helloWord="Hello World!";
console.log(`Hey, ${helloWord}`);

// Importing Local module
const app1JS=require('./app1.js');
console.log(app1JS.add(6,10));

const {add,sub} = require('./app1.js');
console.log(add(10,5));
console.log(sub(10,5));


const fileSys=require('fs');

// Writing data ('This contents needs to be written inside the file') into file dummyText.txt, if any error occurred , will get printed out
fileSys.writeFile("dummyText.txt","This contents needs to be written inside the file",(ifAnyError)=>{
    if(ifAnyError) console.log(ifAnyError)
})

//Reading data from file
fileSys.readFile("dummyText.txt",(error,filedata)=>{
    if(error){
        console.log(error);
        return; //Stopped reading further contents from file
    }
    console.log(filedata.toString());
})