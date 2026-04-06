function cerrarRespuesta(respuesta) {
  respuesta.style.height = '0px';
  respuesta.classList.remove('abierta');

  const pregunta = respuesta.previousElementSibling;
  const icono = pregunta.querySelector('.icono');

  pregunta.classList.remove('activa');
  icono.textContent = '+';
}

function abrirRespuesta(respuesta) {
  respuesta.style.height = respuesta.scrollHeight + 'px';
  respuesta.classList.add('abierta');

  const pregunta = respuesta.previousElementSibling;
  const icono = pregunta.querySelector('.icono');

  pregunta.classList.add('activa');
  icono.textContent = '−';
}

function estaAbierta(respuesta) {
  return respuesta.style.height && respuesta.style.height !== '0px';
}

function cerrarOtrasRespuestas(acordeon, respuestaActual) {
  const respuestas = acordeon.querySelectorAll('.respuesta');

  respuestas.forEach((respuesta) => {
    if (respuesta !== respuestaActual) {
      cerrarRespuesta(respuesta);
    }
  });
}

function toggleRespuesta(acordeon, pregunta) {
  const respuesta = pregunta.nextElementSibling;

  cerrarOtrasRespuestas(acordeon, respuesta);

  if (estaAbierta(respuesta)) {
    cerrarRespuesta(respuesta);
  } else {
    abrirRespuesta(respuesta);
  }
}

function inicializarAcordeon(selector) {
  const acordeones = document.querySelectorAll(selector);

  acordeones.forEach((acordeon) => {
    const preguntas = acordeon.querySelectorAll('.pregunta');

    preguntas.forEach((pregunta) => {
      pregunta.addEventListener('click', () => {
        toggleRespuesta(acordeon, pregunta);
      });
    });
  });
}

inicializarAcordeon('.acordeon');
