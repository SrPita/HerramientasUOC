  document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mensaje-btn');
    if (boton) {
      boton.addEventListener('click', function () {
        alert('El secreto es que tenía que añadir alguna funcionalidad en js y no sabía que hacer.');
      });
    }
  
    const toggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (toggle && navMenu) {
      toggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }
  });