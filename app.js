document.addEventListener('DOMContentLoaded', () => {
  iniciarAcordeon();
  iniciarTabsCodigo();
  cargarCodigoReal();
});

function iniciarAcordeon() {
  const preguntas = document.querySelectorAll('.pregunta');
  const respuestas = document.querySelectorAll('.respuesta');

  if (!preguntas.length || !respuestas.length) return;

  preguntas.forEach((pregunta, indice) => {
    pregunta.addEventListener('click', () => {
      const respuestaActual = respuestas[indice];
      const estaAbierta = respuestaActual.classList.contains('abierta');

      cerrarTodasLasRespuestas(preguntas, respuestas);

      if (!estaAbierta) {
        abrirRespuesta(pregunta, respuestaActual);
      }
    });
  });
}

function cerrarTodasLasRespuestas(preguntas, respuestas) {
  preguntas.forEach((pregunta) => {
    pregunta.classList.remove('activa');

    const icono = pregunta.querySelector('.icono');
    if (icono) {
      icono.textContent = '+';
    }
  });

  respuestas.forEach((respuesta) => {
    respuesta.style.height = '0px';
    respuesta.classList.remove('abierta');
  });
}

function abrirRespuesta(pregunta, respuesta) {
  pregunta.classList.add('activa');

  const icono = pregunta.querySelector('.icono');
  if (icono) {
    icono.textContent = '+';
  }

  respuesta.classList.add('abierta');
  respuesta.style.height = `${respuesta.scrollHeight}px`;
}

function iniciarTabsCodigo() {
  const tabs = document.querySelectorAll('.tab-codigo');
  const paneles = document.querySelectorAll('.panel-codigo');
  const claveMemoria = 'tab-codigo-portafolio';

  if (!tabs.length || !paneles.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const valorTab = tab.dataset.tab;
      const panelObjetivo = document.querySelector(`.panel-codigo[data-content="${valorTab}"]`);

      if (!panelObjetivo) return;

      desactivarTabsYPaneles(tabs, paneles);

      tab.classList.add('activa');
      panelObjetivo.classList.add('activo');

      localStorage.setItem(claveMemoria, valorTab);
    });
  });

  const tabGuardada = localStorage.getItem(claveMemoria);

  if (tabGuardada) {
    const tabInicial = document.querySelector(`.tab-codigo[data-tab="${tabGuardada}"]`);
    const panelInicial = document.querySelector(`.panel-codigo[data-content="${tabGuardada}"]`);

    if (tabInicial && panelInicial) {
      desactivarTabsYPaneles(tabs, paneles);
      tabInicial.classList.add('activa');
      panelInicial.classList.add('activo');
    }
  }
}

function desactivarTabsYPaneles(tabs, paneles) {
  tabs.forEach((tab) => tab.classList.remove('activa'));
  paneles.forEach((panel) => panel.classList.remove('activo'));
}
async function cargarCodigoReal() {
  const archivos = [
    { ruta: 'index.html', id: 'codigo-html' },
    { ruta: 'style.css', id: 'codigo-css' },
    { ruta: 'app.js', id: 'codigo-js' },
  ];

  for (const archivo of archivos) {
    const contenedor = document.getElementById(archivo.id);

    if (!contenedor) continue;

    try {
      const respuesta = await fetch(archivo.ruta);

      if (!respuesta.ok) {
        throw new Error(`No se pudo cargar ${archivo.ruta}`);
      }

      const texto = await respuesta.text();
      contenedor.textContent = texto;
    } catch (error) {
      contenedor.textContent = `Error al cargar ${archivo.ruta}`;
      console.error(error);
    }
  }
}
