const LIMITE = 10;

let contador = Number(localStorage.getItem("contador")) || 0;
let totalClicks = Number(localStorage.getItem("totalClicks")) || 0;

const valor = document.getElementById("valor");
const historico = document.getElementById("historico");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnReset = document.getElementById("reset");

function actualizarTexto() {
  valor.textContent = `Valor actual: ${contador}`;
  historico.textContent = `Clicks totales: ${totalClicks}`;
}

function actualizarBotones() {
  btnSumar.disabled = contador >= LIMITE;
  btnRestar.disabled = contador <= 0;
  btnReset.disabled = contador === 0;
}

function guardarDatos() {
  localStorage.setItem("contador", contador);
  localStorage.setItem("totalClicks", totalClicks);
}

function actualizarUI() {
  actualizarTexto();
  actualizarBotones();
  guardarDatos();
}

function sumar() {
  if (contador < LIMITE) {
    contador++;
    totalClicks++;
    actualizarUI();
  }
}

function restar() {
  if (contador > 0) {
    contador--;
    totalClicks++;
    actualizarUI();
  }
}

function resetear() {
  contador = 0;
  actualizarUI();
}

btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnReset.addEventListener("click", resetear);

actualizarUI();