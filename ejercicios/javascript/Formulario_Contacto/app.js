const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');

const errorNombre = document.querySelector('#errorNombre');
const errorCorreo = document.querySelector('#errorCorreo');
const errorMensaje = document.querySelector('#errorMensaje');
const mensajeExito = document.querySelector('#mensajeExito');
const contadorMensaje = document.querySelector('#contadorMensaje');

const marcarValido = (campo) => {
  campo.classList.remove('invalido');
  campo.classList.add('valido');
};

const marcarInvalido = (campo) => {
  campo.classList.remove('valido');
  campo.classList.add('invalido');
};

const limpiarEstado = (campo) => {
  campo.classList.remove('valido', 'invalido');
};

const validarNombre = () => {
  const valorNombre = nombre.value.trim();
  const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  errorNombre.textContent = '';

  if (valorNombre === '') {
    errorNombre.textContent = 'El nombre es obligatorio';
    marcarInvalido(nombre);
    return false;
  }

  if (!soloLetras.test(valorNombre)) {
    errorNombre.textContent = 'El nombre solo debe contener letras y espacios';
    marcarInvalido(nombre);
    return false;
  }

  marcarValido(nombre);
  return true;
};

const validarCorreo = () => {
  const valorCorreo = correo.value.trim();
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  errorCorreo.textContent = '';

  if (valorCorreo === '') {
    errorCorreo.textContent = 'El correo es obligatorio';
    marcarInvalido(correo);
    return false;
  }

  if (!formatoCorreo.test(valorCorreo)) {
    errorCorreo.textContent = 'Introduce un correo válido';
    marcarInvalido(correo);
    return false;
  }

  marcarValido(correo);
  return true;
};

const validarMensaje = () => {
  const valorMensaje = mensaje.value.trim();

  errorMensaje.textContent = '';

  if (valorMensaje === '') {
    errorMensaje.textContent = 'El mensaje es obligatorio';
    marcarInvalido(mensaje);
    return false;
  }

  if (valorMensaje.length < 10) {
    errorMensaje.textContent = 'El mensaje debe tener al menos 10 caracteres';
    marcarInvalido(mensaje);
    return false;
  }

  marcarValido(mensaje);
  return true;
};

const limpiarFormulario = () => {
  nombre.value = '';
  correo.value = '';
  mensaje.value = '';

  limpiarEstado(nombre);
  limpiarEstado(correo);
  limpiarEstado(mensaje);

  errorNombre.textContent = '';
  errorCorreo.textContent = '';
  errorMensaje.textContent = '';

  contadorMensaje.textContent = '0 / 200';
  contadorMensaje.classList.remove('limite');
};

// Validar al salir del campo
nombre.addEventListener('blur', validarNombre);
correo.addEventListener('blur', validarCorreo);
mensaje.addEventListener('blur', validarMensaje);

// Contador del mensaje
mensaje.addEventListener('input', () => {
  const max = 200;
  let valor = mensaje.value;

  if (valor.length > max) {
    valor = valor.slice(0, max);
    mensaje.value = valor;
  }

  contadorMensaje.textContent = `${valor.length} / ${max}`;

  if (valor.length >= max) {
    contadorMensaje.classList.add('limite');
  } else {
    contadorMensaje.classList.remove('limite');
  }
});

// Validar al enviar
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  mensajeExito.textContent = '';

  const nombreValido = validarNombre();
  const correoValido = validarCorreo();
  const mensajeValido = validarMensaje();

  if (nombreValido && correoValido && mensajeValido) {
    mensajeExito.textContent = 'Formulario enviado correctamente';
    limpiarFormulario();
  }
});
