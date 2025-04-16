let cartCount = 0;

function agregarAlCarrito() {
  cartCount++;
  const cartCountDisplay = document.getElementById('cart-count');
  if (cartCountDisplay) {
    cartCountDisplay.textContent = cartCount;
  }
  alert('Producto agregado al carrito!');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
      form.reset();
    });
  }

  // Asignar eventos a botones de productos automáticamente
  const botones = document.querySelectorAll('.producto button');
  botones.forEach((boton) => {
    boton.addEventListener('click', agregarAlCarrito);
  });
});
