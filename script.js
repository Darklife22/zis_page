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
    toggleModoOscuro.textContent = "🌞";
});

function toggleNav() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('nav-active');
}


document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector(".bienvenida-animada");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          h1.classList.add("visible");
        } else {
          h1.classList.remove("visible"); // Si quieres que se repita al subir y bajar
        }
      });
    }, {
      threshold: 0.5 // activa cuando el 50% del elemento está visible
    });
  
    observer.observe(h1);
  });
  

  let index = 0;

function moveCarousel(direction) {
  const carousel = document.getElementById('event-carousel');
  const items = carousel.children;
  const totalItems = items.length;

  index = (index + direction + totalItems) % totalItems;

  const container = document.querySelector('.event-carousel-container');
  const containerWidth = container.offsetWidth;

  // Aplicamos transformación con base en el ancho real
  const offset = -index * containerWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}


  