"use strict";

function main() {
  let buttonMultiply = document.querySelector('#button-multiply');
  let buttonDivide = document.querySelector('#button-divide');

  let inputFirstNumber = document.querySelector("#first-number");
  let inputSecondNumber = document.querySelector("#second-number");
  let inputResultado = document.querySelector("#result");
  
  
  // TODO: Finish the task

  buttonMultiply.addEventListener("click", function(){
  operaciones('*')});

  buttonDivide.addEventListener("click", function(){
    if(inputSecondNumber.value !=0){
      operaciones('/');
    } else{
      alert("Error");
    }
  });
  operaciones('*')

  function operaciones(operador){
    switch(operador){
      case '*' :  
        inputResultado.textContent = "Result:  " + inputFirstNumber.value + "*" +inputSecondNumber.value+ " = "+inputFirstNumber.value * inputSecondNumber.value;
      break;
      case '+' :
        inputResultado.textContent = "Result:    " + inputFirstNumber.value + "+" +inputSecondNumber.value+ "="+ inputFirstNumber.value+inputSecondNumber.value;
      break;
      case '/' : 
      inputResultado.textContent = "Result:    " + inputFirstNumber.value + "/" +inputSecondNumber.value+ "="+ (inputFirstNumber.value/inputSecondNumber.value);
      break;
    }
  }
  }



document.addEventListener('DOMContentLoaded', main);
