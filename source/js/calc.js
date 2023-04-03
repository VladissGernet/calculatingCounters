const elecConst = 5.04;
document.getElementById("elec").textContent = elecConst.toString();
const gasConst = 6.42;
document.getElementById("gas").textContent = gasConst.toString();
const waterConst = 41.17;
document.getElementById("water").textContent = waterConst.toString();

let elecInputBefore = document.getElementById("calc-elec-before");
let elecInputAfter = document.getElementById("calc-elec-after");
let elecResult = document.getElementById("calc-elec-result");

let gasInputBefore = document.getElementById("calc-gas-before");
let gasInputAfter = document.getElementById("calc-gas-after");
let gasResult = document.getElementById("calc-gas-result");

let waterInputBefore = document.getElementById("calc-water-before");
let waterInputAfter = document.getElementById("calc-water-after");
let waterResult = document.getElementById("calc-water-result");

let buttonTotal = document.querySelector(".calc-form__button");
let resultTotal = document.querySelector(".calc-form__total-result");

buttonTotal.onclick = function () {
  elecResult.textContent = ((elecInputAfter.value - elecInputBefore.value) * elecConst).toString() + " руб.";
  gasResult.textContent = ((gasInputAfter.value - gasInputBefore.value) * gasConst).toString() + " руб.";
  waterResult.textContent = ((waterInputAfter.value - waterInputBefore.value) * waterConst).toString() + " руб.";
  resultTotal.textContent = "123";
}

