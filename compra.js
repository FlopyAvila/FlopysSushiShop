const productos = JSON.parse(localStorage.getItem('productos')) || [];
const total = localStorage.getItem('total') || 0;

const resumen = document.getElementById("detalle");
let resumenTexto = "Resumen de la compra:<br><br>";

productos.forEach(producto => {
    resumenTexto += `x${producto.cantidad} ${producto.nombre} - $${producto.total} <br>`;
});

resumenTexto += `<br><strong>Total a pagar: $${total}</strong>`;
resumen.innerHTML = resumenTexto;

function enviarFormulario(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('contactoEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !apellido || !email || !telefono) {
        alert("Por favor, completa todos los campos de contacto.");
        return; 
    }

    let carritoContenido = '';
    productos.forEach(producto => {
        carritoContenido += `${producto.nombre} x${producto.cantidad} - $${producto.total}\n`;
    });

    const totalConPesos = `$${total}`;

    document.getElementById('carritoData').value = carritoContenido;
    document.getElementById('totalCarrito').value = totalConPesos;

    document.getElementById('formulario').submit();
}

document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);

