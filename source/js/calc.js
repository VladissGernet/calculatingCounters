const elecConst = 5.04;
document.getElementById("elec").textContent = elecConst.toString();
const gasConst = 6.42;
document.getElementById("gas").textContent = gasConst.toString();
const waterConst = 41.17;
document.getElementById("water").textContent = waterConst.toString();

let elecInputBefore = document.getElementById("calc-elec-before");
let elecInputAfter = document.getElementById("calc-elec-after");
let elecResult = document.getElementById("calc-elec-result");
let buttonB = document.getElementById("button");

buttonB.onclick = function () {
  elecResult.textContent = ((elecInputAfter.value - elecInputBefore.value) * elecConst).toString() + " руб.";
}

let gasInputBefore = document.getElementById("calc-gas-before");
let gasInputAfter = document.getElementById("calc-gas-after");
let gasResult = document.getElementById("calc-gas-result");
let buttonG = document.getElementById("buttonG");

buttonG.onclick = function () {
  gasResult.textContent = ((gasInputAfter.value - gasInputBefore.value) * gasConst).toString() + " руб.";
}

let waterInputBefore = document.getElementById("calc-water-before");
let waterInputAfter = document.getElementById("calc-water-after");
let waterResult = document.getElementById("calc-water-result");
let buttonW = document.getElementById("buttonW");

buttonW.onclick = function () {
  waterResult.textContent = ((waterInputAfter.value - waterInputBefore.value) * waterConst).toString() + " руб.";
}
