//leer los objetos
// Obtener los objetos desde localStorage

const destinatario = JSON.parse(localStorage.getItem('destinatario'));

mostrarDestinatario()
function mostrarDestinatario() {
  
  const usuarioInfo = document.getElementById('destinatarioInfo');
  
  usuarioInfo.innerHTML = `
    <p>Gracias por tu compra ${destinatario.nombre}</p>
    <p>Te enviamos un correo a  ${destinatario.email} con el detalle tu compra.</p>
    <p>Recuerda que el pedido llegara entre 5 a 10 días habiles a ${destinatario.calle} ${destinatario.altura} - ${destinatario.ciudad}.</p>
  `;
}

  // Función para ir a la seccion pago
  function goIndex() {
    // Borrar todos los datos en localStorage
    localStorage.clear();
    window.location.href = "./../index.html";
  }
  