let cartCount = 0;

function agregarAlCarrito() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert('Producto agregado al carrito!');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    form.reset();
  });
});
