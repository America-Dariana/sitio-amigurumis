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