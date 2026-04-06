
    const botonSumar = document.getElementById("btnSumar");
    const botonReset = document.getElementById("btnReset");
    const resultado = document.getElementById("resultado");

    let contador = 0;

    botonSumar.addEventListener("click", () => {
      contador++;
      resultado.textContent = `Has hecho clic ${contador} veces`;
    });

    botonReset.addEventListener("click", () => {
      contador = 0;
      resultado.textContent = "Has hecho clic 0 veces";
    });