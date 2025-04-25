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