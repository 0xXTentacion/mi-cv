// Obtener el botón de "Volver al inicio"
const backToTopButton = document.getElementById('backToTop');

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {  // Muestra el botón después de haber desplazado 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';  // Oculta el botón si está cerca del principio
  }
});

// Hacer que el botón desplace la página hasta el inicio de forma suave
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Animación suave
  });
});





