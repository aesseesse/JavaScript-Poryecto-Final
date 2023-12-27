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







const form = document.getElementById('paymentForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  // Obtener los valores de los campos
const cardName = document.getElementById('cardName').value ;
const cardNumber = parseInt(document.getElementById('cardNumber').value); 
const cardPass = parseInt(document.getElementById('cardPass').value); 
const dateExpiry = document.getElementById('cardExpiry').value; 

let validacionFecha= validarFechaExpiracion(dateExpiry)
        console.log("Fecha a validar",validacion);

if (validacion == true) {
    // Crear un objeto con los datos de la tarjeta

  const cardPago = {
      cardName,
      cardNumber,
      cardPass,
      dateExpiry
    };
    // Guardar los datos de la tarjeta en el localStorage
    localStorage.setItem('cardPago', JSON.stringify(cardPago));
        console.log("Fecha a validar",validacion);

    window.location.href = './finalizar.html';

  }
  else {
        console.log("tarjeta inválida",validacion);
        alert("tarjeta vencida",validacion)
    };
  


});



let validacion = true;

function validarFechaExpiracion(dateExpiry) {

    // Obtener la fecha actual
    let fechaActual = new Date();
          console.log(fechaActual);

    // Obtener el mes y el año actuales
    let mesActual = fechaActual.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
      console.log("mes actual: ",mesActual);
      
    let anoActual = fechaActual.getFullYear() % 100; // Obtener los últimos dos dígitos del año
        console.log("año actual: ",anoActual);

    // Dividir la fecha ingresada en mes y año
    let partesFecha = dateExpiry.split('-');
    let anoIngresado = parseInt(partesFecha[0], 10) % 100;
            console.log("año ingresado: ",anoIngresado);

    let mesIngresado = parseInt(partesFecha[1], 10);
            console.log("mes ingresado: ",mesIngresado);

    
    // Validar que el año no sea anterior al actual y el mes no sea igual ni anterior al actual
    if (anoIngresado > anoActual || (anoIngresado == anoActual && mesIngresado >= mesActual)) {
        validacion = true;
        console.log("Fecha válida",validacion);
    } else {
        validacion = false;
        console.log("Fecha inválida",validacion);
        //alert("tarjeta vencida",validacion)
    }
}

