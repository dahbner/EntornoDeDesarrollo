import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const firstM = document.querySelector("#primer-numero-multiplicar");
const secondM = document.querySelector("#segundo-numero-multiplicar");
const formM = document.querySelector("#multiplicar-form");
const divM = document.querySelector("#resultado-multiplicar-div");

formM.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNUmberM = Number.parseInt(firstM.value);
  const secondNumberM = Number.parseInt(secondM.value);

  divM.innerHTML = "<p>" + multiplicar(firstNUmberM, secondNumberM) + "</p>";
});