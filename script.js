/* =========================
   VALIDACIÓN DEL FORMULARIO
   ========================= */
const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const feedback = document.getElementById('form-feedback');

function validarFormulario() {
  // Limpiar feedback anterior
  feedback.textContent = '';
  feedback.className = 'form-feedback';

  // Obtener valores (trim elimina espacios al inicio/final)
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Validar campos vacíos
  if (nombre === '') {
    mostrarError('Por favor ingresa tu nombre');
    nombreInput.focus();
    return false;
  }

  if (email === '') {
    mostrarError('Por favor ingresa tu email');
    emailInput.focus();
    return false;
  }

  // Validar formato de email
  if (!validarEmail(email)) {
    mostrarError('Por favor ingresa un email válido');
    emailInput.focus();
    return false;
  }

  if (mensaje === '') {
    mostrarError('Por favor escribe un mensaje');
    mensajeInput.focus();
    return false;
  }

  // Todo válido
  mostrarExito('¡Mensaje enviado correctamente! Gracias, ' + nombre);
  form.reset();
  return true;
}   