// Cambiar imagen principal cuando se hace clic en las miniaturas
const sliderMainImage = document.getElementById("product-main-image");
const sliderImageList = document.getElementsByClassName("image-list");
console.log(sliderImageList);

for (let i = 0; i < sliderImageList.length; i++) {
  sliderImageList[i].onclick = function() {
    sliderMainImage.src = sliderImageList[i].src;
    console.log(sliderMainImage.src);
  };
}

// Función para agregar al carrito
let cartCount = 0;

function agregarAlCarrito() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert('Producto agregado al carrito!');
}

// Formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    form.reset();
  });
});
