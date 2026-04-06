// 1) Función flecha (devuelve un texto)
const saludar = () => "Hola Marco 👋 Esto viene de una función flecha";

// 2) Cuando el usuario hace clic, mostramos el texto en pantalla
const boton = document.getElementById("btnSaludar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
  resultado.textContent = saludar();
});


