document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mensaje-btn');
    if (boton) {
      boton.addEventListener('click', function () {
        alert('El secreto es que tenía que añadir alguna funcionalidad en js y no sabía que hacer.');
      });
    }
  });