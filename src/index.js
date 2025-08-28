import convertirFizzBuzz from "./fizzbuzz.js";

window.mostrarFizzBuzz = function () {
  const numero = document.getElementById("numero").value;
  const lista = document.getElementById("resultado");
  lista.innerHTML = "";

  for (let i = 1; i <= numero; i++) {
    const li = document.createElement("li");
    li.textContent = convertirFizzBuzz(i);
    lista.appendChild(li);
  }
};