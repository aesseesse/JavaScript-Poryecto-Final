//dada una cantidad de productos con precios y descuentos, ingresar la cantidad, calcular el subtotal de cada producto y el total de la compra.


// Función para obtener datos del localStorage o inicializar un array vacío
function obtenerCompras() {
    return JSON.parse(localStorage.getItem('compras')) || [];
  }
  
  // Función para guardar las compras en el localStorage
function guardarCompras(resumenCompras) {
  localStorage.setItem('resumenCompras', JSON.stringify(resumenCompras));
  }

// Función para guardar el total de la compra en el localStorage

function guardarTotalCompras(totalCompras) {
  localStorage.setItem('totalCompras', JSON.stringify(totalCompras));
  }

  let total = 0;
  let items = obtenerCompras(); // Obtener compras existentes del localStorage
  
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
    const subtotal = Math.round(precio,-2) * cantidad;  
    //Calcular descuento
    const descuentoAplicado = subtotal * (descuento / 100); 
    //Calcular subtotal con descuento
    const totalProducto = subtotal - descuentoAplicado; 
    //Calcular total de la compra sumando los sucesivos totalproducto
    total += totalProducto;

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
      `;
      resumenDiv.appendChild(itemDiv);
    });

    // Agrega un total de la compra a realizar
    resumenDiv.innerHTML += `<p>Total a Pagar: ${total}</p>`;
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
  // Obtener referencias a los elementos


    const btnCart = document.getElementsById('btnCart');

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
  };












