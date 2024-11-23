
import { A } from './A.js';

class B extends A{
    display(){
        console.log("Display B")
    }
}


const b = new B();

b.display()
