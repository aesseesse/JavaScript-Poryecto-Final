const form = document.getElementById('addressForm');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const calle = document.getElementById('calle').value;
  const altura = document.getElementById('altura').value;
  const cp = document.getElementById('cp').value;
  const ciudad = document.getElementById('ciudad').value;

  // Crear un objeto con los datos del destinatario
  const destinatario = {
    nombre,
    apellido,
    email,
    calle,
    altura,
    cp,
    ciudad 
  };

  // Guardar los datos del destinatario en el localStorage
  localStorage.setItem('destinatario', JSON.stringify(destinatario));

  // Mostrar un alert al usuario
  alert('Datos guardados correctamente. Serás redirigido.');
  // Redirigir a otra página después de aceptar el alert
  window.location.href = './resumen.html';
});




const compras = JSON.parse(localStorage.getItem('resumenCompras'));

const totalCompra = JSON.parse(localStorage.getItem('totalCompras'));

mostrarResumen()


// Función para mostrar el resumen de la compra
  function mostrarResumen() {  
    const resumenDiv = document.getElementById('resumen');


    // Agrega un total de la compra a realizar
    resumenDiv.innerHTML = `
    <div>
    <h3>Resumen de la Compra</h3>
    <h4>Total a Pagar: $${totalCompra} </h4>
    <br><br>
    <h4>Detalle de la compra:</h4>
    </div>
    `;

  
    //Por cada producto que agrego a la compra, realiza un resumen. Con ${item.} obtengo el valor del objeto item
    compras.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <p>Producto: ${item.producto}</p>
        <p>Precio: $${item.precio}</p>
        <p>Descuento: ${item.descuento}%</p>
        <p>Cantidad: ${item.cantidad}</p>
        <p>Subtotal: $${item.subtotal}</p>
        <p>Descuento Aplicado: $${item.descuentoAplicado}</p>
        <p>Total Producto: $${item.totalProducto}</p>
      `;
      resumenDiv.appendChild(itemDiv);
    });
  }
