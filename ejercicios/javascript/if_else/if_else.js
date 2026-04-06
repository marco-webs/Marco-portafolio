const botonSumar = document.getElementById("btnSumar");
const botonRestar = document.getElementById("btnRestar");
const botonReset = document.getElementById("btnReset");
const resultado = document.getElementById("resultado");

let contador = 0;
let contador_Clics = 0 ;


const actualizarTexto = () => {
  if (contador === 10) {
    resultado.textContent = `Has hecho click ${contador_Clics} veces. El contador ha alcanzado el valor maximo establecido de 10 `;
  } else {
    resultado.textContent =  `El contador tiene un valor de ${contador} veces `;
  }
  actualizarBotones();
};


const actualizarBotones = () => {
  botonRestar.disabled = contador === 0;
  botonSumar.disabled = contador === 10;
};


botonSumar.addEventListener("click", () => {
  contador++;
  contador_Clics++;
  actualizarTexto();
});

botonRestar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
    contador_Clics++;
  }
  actualizarTexto();
});

botonReset.addEventListener("click", () => {
  contador = 0;
  actualizarTexto();
});

actualizarBotones();
