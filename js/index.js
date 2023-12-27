//dada una cantidad de productos con precios y descuentos, ingresar la cantidad, calcular el subtotal de cada producto y el total de la compra.

let total = JSON.parse(localStorage.getItem('totalCompras')) || 0;
let items = obtenerCompras(); // Obtener compras existentes del localStorage

// Función para obtener datos del localStorage o inicializar un array vacío
function obtenerCompras() {
  return JSON.parse(localStorage.getItem('resumenCompras')) || [];
}

  // Función para guardar las compras en el localStorage
function guardarCompras(resumenCompras) {
  localStorage.setItem('resumenCompras', JSON.stringify(resumenCompras));
}

// Función para guardar el total de la compra en el localStorage
function guardarTotalCompras(totalCompras) {
  localStorage.setItem('totalCompras', JSON.stringify(totalCompras));
}




// Función para agregar una compra
function agregarCompra() {
  
  //Obtener dato ingresado el nombre del producto
  const producto = document.getElementById('producto').value ;
  
  //Obtener dato ingresado en precio
  const precio = parseFloat(document.getElementById('precio').value);  
  
  //Obtener dato ingresado en descuento
  const descuento = parseFloat(document.getElementById('descuento').value); 
  
  //Obtener dato ingresado en cantidad
  const cantidad = parseInt(document.getElementById('cantidad').value); 

  //En caso de estar vacio, o que sea un numero negativo dara una alert informando el error
  if (!producto || isNaN(precio) || isNaN(descuento) || isNaN(cantidad)) {
      alert('Por favor, completa todos los campos.');
      return;
  }
  if ( precio <=0 || descuento <0 || cantidad <=0) {
      alert('Por favor, verifique los campos precio, descuento, cantidad. Deben ser mayor a 0');

      return;
  }

  //Calcular subtotal sin descuento
  const subtotal = parseFloat(precio * cantidad).toFixed(2);  
  //Calcular descuento
  const descuentoAplicado = parseFloat(subtotal * (descuento / 100)).toFixed(2); 
  //Calcular subtotal con descuento
  const totalProducto = parseFloat(subtotal - descuentoAplicado).toFixed(2); 
  //Calcular total de la compra sumando los sucesivos totalproducto
  total += parseFloat(totalProducto);

  // Crear un objeto item con producto, precio, descuento, cantidad, subtotal, descuentoAplicado, totalProducto
  const item = {
    producto,
    precio,
    descuento,
    cantidad,
    subtotal,
    descuentoAplicado,
    totalProducto
  };
  // Agregar la compra a la lista de items
  items.push(item); 
  // Guardar en localStorage la compra detallada
  guardarCompras(items); 
  console.log(items)

// Guardar en localStorage el total de la compra
guardarTotalCompras (total);
// Mostrar resumen de la compra
mostrarResumen();
}

mostrarResumen();  

// Función para mostrar el resumen de la compra
function mostrarResumen() {
  const resumenDiv = document.getElementById('resumen');
  resumenDiv.innerHTML = '<h3>Resumen de la compra:</h3>';

  //Por cada producto que agrego a la compra, realiza un resumen. Con ${item.} obtengo el valor del objeto item
  items.forEach(item => {
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
      <button class="button btnDeletItem" onclick="deletItem(${item.id})" data-id="${item.id}">Borrar item</button>
    `;
    resumenDiv.appendChild(itemDiv);

    // Agregar evento de clic para borrar un item
    const deleteButtons = document.querySelectorAll('.btnDeleteItem');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function() {
        const index = parseInt(button.getAttribute('data-id'));
        borrarItem(index);
      });
    });  
  });



  // Agrega un total de la compra a realizar
  resumenDiv.innerHTML += `<p>Total a Pagar: ${total}</p>`;


}







// Función para borrar item de la compra

function deletItem(itemId) {
  // Encontrar el índice del elemento que coincide con el ID proporcionado
  const index = items.findIndex(item => item.id === itemId);

  // Verificar si se encontró el elemento con ese ID
  if (index !== -1) {
    const deletedItemTotal = parseFloat(items[index].totalProducto).toFixed(2);
    // Eliminar el elemento del arreglo 'items' en la posición 'index'
    items.splice(index, 1);
    total -= deletedItemTotal; // Resta el total del elemento eliminado al total general

    guardarCompras(items);
    guardarTotalCompras(total);
    mostrarResumen();

  } else {
    console.log("No se encontró el elemento con ese ID");
  }
}







// Función para finalizar la compra
function finalizarCompra() {
  if(total !=0){
    alert(`Compra finalizada. Total a pagar: ${total}`);
    window.location.href = "./pages/direccion.html";
  }; 
  if(total ==0){
    alert(`Debe ingresar un producto para continuar`);
  }; 
}
  




// funciones para obtener valores de la card

// Agregar evento click al botón del cart
function copiarInfo(cardId){
  // Obtener el valor del span al hacer clic en el botón
  let nameCard = document.getElementById(cardId).querySelector('h3').innerText ;
  let priceCard = parseFloat(document.getElementById(cardId).querySelector('span').innerText);
  console.log(nameCard);
  console.log(priceCard);

  //Copiar dato del nombre del producto
  let producto = document.getElementById('producto') ;
  //Copiar dato del precio
  let precio = document.getElementById('precio');

  // Copiar el número al campo de entrada (input)
  producto.value= nameCard;
  precio.value = priceCard;
  cantidad.value=1;
};

