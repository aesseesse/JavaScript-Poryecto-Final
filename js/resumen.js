//leer los 2 objetos guardados (resumen de compra y direccion) y presentar un resumen para final la compra.


//leer los objetos
// Obtener los objetos desde localStorage

const destinatario = JSON.parse(localStorage.getItem('destinatario'));

console.log(destinatario)
mostrarDestinatario()



function mostrarDestinatario() {
  
  const usuarioInfo = document.getElementById('destinatarioInfo');
  usuarioInfo.innerHTML = '<h3>Destinatario:</h3>';

  usuarioInfo.innerHTML = `
    <p>nombre: ${destinatario.nombre}</p>
    <p>apellido: ${destinatario.apellido}</p>
    <p>e-mail: ${destinatario.email}</p>
    <p>calle: ${destinatario.calle}</p>
    <p>altura: ${destinatario.altura}</p>
    <p>cp: ${destinatario.cp}</p>
    <p>ciudad: ${destinatario.ciudad}</p>
  `;
}









const compras = JSON.parse(localStorage.getItem('resumenCompras'));

const totalCompra = JSON.parse(localStorage.getItem('totalCompras'));

mostrarResumen()


// Función para mostrar el resumen de la compra
  function mostrarResumen() {  
    const resumenDiv = document.getElementById('resumen');
    // Agrega un total de la compra a realizar
    resumenDiv.innerHTML = `
    <div>
    <h3>Total a Pagar:</h3>
    <h4>$${totalCompra}</h4>
    `;
  }



mostrarDetalleCompra()


// Función para mostrar el resumen de la compra
  function mostrarDetalleCompra() {  
    const resumenDiv = document.getElementById('detalleCompra');


    // Agrega un detalle de la compra a realizar
    resumenDiv.innerHTML = `
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







  // Función para ir a la seccion pago
  function finalizarCompra() {
    
    window.location.href = "./pago.html";
  }
  