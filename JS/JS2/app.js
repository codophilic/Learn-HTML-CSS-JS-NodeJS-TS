//Pure Functions
function add(x, y) {
    return x + y;
}

console.log(add(5,4)) // 9
console.log(add(1,2)) //3

let globalVar=0;

//Impure Functions
function addWithRandom(x,y){
    globalVar=Math.random()+x+y;
    return globalVar;
}
console.log(addWithRandom(10,20)) //30.840642363022475 (Randomness)
console.log(globalVar) //30.840642363022475 (Side effect)

//Factory Function
function createPizza(size, topping) {
    return {
      size: size,
      topping: topping,
      bake() {
        console.log(`Baking a ${size} pizza with ${topping}!`);
      },
    };
  }
  
const myPizza = createPizza("large", "pepperoni");
myPizza.bake(); // Output: Baking a large pizza with pepperoni!
console.log(myPizza.size); // large
console.log(myPizza.topping); //pepperoni

//Closure
function outerFunction(num) {
    let outerVariable = 'I am from outer function';
  
    function innerFunction() {
      console.log(outerVariable);
      console.log("Number sent: "+num)
    }
  
    return innerFunction;
}
  
const closure = outerFunction(10);
closure(); 


function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
  

