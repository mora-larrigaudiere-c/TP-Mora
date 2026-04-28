/* 
   JavaScript vanilla (sin librerías externas) */





// ── Formulario de contacto ────────────────────────────────────
document.getElementById('btn-enviar').addEventListener('click', function () {
  var nombre  = document.getElementById('nombre').value.trim();
  var email   = document.getElementById('email').value.trim();
  var mensaje = document.getElementById('mensaje').value.trim();
  var feedback = document.getElementById('mensaje-enviado');

  // Validación simple
  if (!nombre || !email || !mensaje) {
    feedback.textContent = 'Por favor completá todos los campos.';
    feedback.style.background = '#F65800';
    feedback.style.color = '#fff';
    feedback.style.display = 'block';
    return;
  }

  if (!email.includes('@')) {
    feedback.textContent = 'El email no parece válido.';
    feedback.style.background = '#F65800';
    feedback.style.color = '#fff';
    feedback.style.display = 'block';
    return;
  }

  // Mostrar confirmación
  feedback.textContent = '¡Mensaje enviado! Te respondo pronto, ' + nombre + ' :)';
  feedback.style.background = '#C6E700';
  feedback.style.color = '#2C3A00';
  feedback.style.display = 'block';

  // Limpiar campos
  document.getElementById('nombre').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensaje').value = '';

  // Ocultar mensaje después de 5 segundos
  setTimeout(function () {
    feedback.style.display = 'none';
  }, 5000);
});
