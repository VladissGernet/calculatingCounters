const elecConst = 5.04;
document.getElementById("elec").textContent = elecConst.toString();
const gasConst = 6.42;
document.getElementById("gas").textContent = gasConst.toString();
const waterConst = 41.17;
document.getElementById("water").textContent = waterConst.toString();

let elecInputBefore = document.getElementById("calc-elec-before");
let elecInputAfter = document.getElementById("calc-elec-after");
let gasInputBefore = document.getElementById("calc-gas-before");
let gasInputAfter = document.getElementById("calc-gas-after");
let waterInputBefore = document.getElementById("calc-water-before");
let waterInputAfter = document.getElementById("calc-water-after");

let elecResult = document.getElementById("calc-elec-result");
let gasResult = document.getElementById("calc-gas-result");
let waterResult = document.getElementById("calc-water-result");
let resultTotal = document.querySelector(".calc-form__total-result");

let buttonTotal = document.querySelector(".calc-form__button");

buttonTotal.onclick = function () {
  let calcTotal = 0;
  let calculation = function(after, before, constValue, result) {
    let calcValues = (after - before) * constValue;
    calcTotal += calcValues;
    result.style.color = (calcValues < 0 ? "red" : "black");
    return result.textContent = (calcValues.toFixed(2)).toString() + " руб.";
  }

  let elecCalc = calculation(elecInputAfter.value, elecInputBefore.value, elecConst, elecResult);
  let gasCalc = calculation(gasInputAfter.value, gasInputBefore.value, gasConst, gasResult);
  let waterCalc = calculation(waterInputAfter.value, waterInputBefore.value, waterConst, waterResult);

  resultTotal.style.color = (calcTotal < 0 ? "red" : "black");
  resultTotal.textContent = (calcTotal.toFixed(2)).toString() + " руб.";
}
