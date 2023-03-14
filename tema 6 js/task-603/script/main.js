"use strict";

function main() {
  let buttonMultiply = document.querySelector('#button-multiply');
  let buttonDivide = document.querySelector('#button-divide');
  let buttonSum = document.querySelector('#button-sum')
  let ul = document.querySelector('#result ul');

  let inputFirstNumber = document.querySelector("#first-number");
  let inputSecondNumber = document.querySelector("#second-number");
  let inputResultado = document.querySelector("#result");
  
  // TODO: Finish the task

  //Button Multiply
  buttonMultiply.addEventListener("click", function () {
    operaciones('x');
  });

  //Button Divide
  buttonDivide.addEventListener("click", function () {
    if (inputSecondNumber.value != 0) {
      operaciones('/');      
    } else {
      let myLi = document.createElement('li');
      let error= document.createTextNode("Error");
      myLi.style.color = 'red';
      myLi .textContent = inputFirstNumber.value + " / " + inputSecondNumber.value + "=" + 'ERROR';
      ul.append(myLi);
    }
  });

  //Button Sum
  buttonSum.addEventListener("click", function () {
    operaciones('+');
  });


  function operaciones(operador) {
    let myLi = document.createElement('li');
    switch (operador) {
      case 'x':
        myLi.textContent = inputFirstNumber.value + " * " + inputSecondNumber.value + " = " + (inputFirstNumber.value * inputSecondNumber.value);
        ul.append(myLi);
        break;
      case '+':
        myLi.textContent = inputFirstNumber.value + " + " + inputSecondNumber.value + "=" + (Number(inputFirstNumber.value) + Number(inputSecondNumber.value));
        ul.append(myLi);
        break;
      case '/':
        myLi.textContent = inputFirstNumber.value + " / " + inputSecondNumber.value + "=" + (inputFirstNumber.value / inputSecondNumber.value);
        ul.append(myLi);
        break;
    }
  }
}



document.addEventListener('DOMContentLoaded', main);
