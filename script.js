// Demostración local: no envía ni almacena datos.
"use strict";
const formulario = document.getElementById("formulario-contacto");
const estado = document.getElementById("estado-formulario");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const boton = formulario.querySelector("button");
boton.disabled = false;
function comprobarTexto(campo, minimo) {
  campo.setCustomValidity(campo.value.trim().length < minimo
    ? `Escribe al menos ${minimo} caracteres que no sean espacios.` : "");
}
for (const campo of [nombre, mensaje]) {
  campo.addEventListener("input", () => {
    campo.setCustomValidity("");
    estado.textContent = "";
  });
}
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  comprobarTexto(nombre, 2);
  comprobarTexto(mensaje, 10);
  if (!formulario.reportValidity()) return;
  estado.textContent = "Datos válidos. Prueba completada: el mensaje no se ha enviado ni guardado.";
});
