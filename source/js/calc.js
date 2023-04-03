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
  let elecCalc = (elecInputAfter.value - elecInputBefore.value) * elecConst;
  let gasCalc = (gasInputAfter.value - gasInputBefore.value) * gasConst;
  let waterCalc = (waterInputAfter.value - waterInputBefore.value) * waterConst;
  let calcTotal = (elecCalc + gasCalc + waterCalc).toFixed(2);

  elecResult.textContent = elecCalc.toString() + " руб.";
  gasResult.textContent = gasCalc.toString() + " руб.";
  waterResult.textContent = waterCalc.toString() + " руб.";

  resultTotal.textContent = calcTotal.toString() + " руб.";

  if (elecCalc < 0) {
    elecResult.style.color = "red";
  } else {
    elecResult.style.color = "black";
  }

  if (gasCalc < 0) {
    gasResult.style.color = "red";
  } else {
    gasResult.style.color = "black";
  }

  if (waterCalc < 0) {
    waterResult.style.color = "red";
  } else {
    waterResult.style.color = "black";
  }

  if (calcTotal < 0) {
    resultTotal.style.color = "red";
  } else {
    resultTotal.style.color = "black";
  }
}
