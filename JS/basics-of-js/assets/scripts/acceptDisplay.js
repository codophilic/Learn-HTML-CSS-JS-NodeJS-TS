//Accepting input from browser
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

//Displaying output on browser
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(mathematicalresult, mathematicalExpression) {
  currentResultOutput.textContent = mathematicalresult;
  currentCalculationOutput.textContent = mathematicalExpression;
}

// Second Input
let secondInput=0;


function getNumberValue(){
  return parseFloat(userInput.value)
}


function add(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} + ${fetchInputNumber}`
  secondInput+=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function subtract(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} - ${fetchInputNumber}`
  secondInput-=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function multiply(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} * ${fetchInputNumber}`
  secondInput*=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

function division(){
  const fetchInputNumber=getNumberValue()
  let Expression=`${secondInput} / ${fetchInputNumber}`
  secondInput/=fetchInputNumber
  outputResult(secondInput,Expression) // Calling outputResult() method
}

// Indirect calling methods
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', division);
