const toggleModoOscuro = document.getElementById("modo-oscuro");

toggleModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
    if (document.body.classList.contains("modo-oscuro")) {
        toggleModoOscuro.textContent = "🌞";
    } else {
        toggleModoOscuro.textContent = "🌙";
    }
});

// Iniciar con modo oscuro activado por defecto
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add("modo-oscuro");
    toggleModoOscuro.textContent = "🌞"; // Cambia el texto del botón a "🌞"
});

function mostrarModal(titulo, subtitulo, imagen, descripcion) {
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-subtitulo').innerText = subtitulo;
  document.getElementById('modal-img').src = imagen;
  document.getElementById('modal-descripcion').innerText = descripcion;
  document.getElementById('modalPublicacion').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modalPublicacion').style.display = 'none';
}

