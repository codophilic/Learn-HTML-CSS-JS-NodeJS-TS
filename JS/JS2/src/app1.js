
import { A } from './A.js';

class B extends A{
    display(){
        console.log("Display B")
    }
}


const b = new B();

b.display()

const getBtn=document.getElementById("myButton");

getBtn.addEventListener("click",()=>{

    const promise=import("./onClick.js")
    promise.then(i=>{
        i.showAlert();
    })

})
