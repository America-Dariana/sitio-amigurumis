function toggleTexto(event, idTexto, boton) {
    event.preventDefault();
    const elementoTexto = document.getElementById(idTexto);
    if (elementoTexto.style.display === "block") {
        elementoTexto.style.display = "none";
        boton.textContent = "Read More";
    } else {
        elementoTexto.style.display = "block";
        boton.textContent = "Read Less";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const respuesta = document.getElementById('respuesta');

    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();

            if (nombre.value.trim() === '' || email.value.trim() === '' || mensaje.value.trim() === '') {
                respuesta.style.color = '#d9534f';
                respuesta.textContent = 'Por favor, llena todos los campos obligatorios. D:';
            } else {
                respuesta.style.color = '#28a745';
                respuesta.textContent = '¡Mensaje enviado con éxito! Pregunta por tu amigurumi por Whats :3';
                formulario.reset();
            }
        });
    }
});