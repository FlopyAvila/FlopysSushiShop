const productos = JSON.parse(localStorage.getItem('productos')) || [];
const total = localStorage.getItem('total') || 0;

const resumen = document.getElementById("detalle");
let resumenTexto = "Resumen de la compra:<br><br>";

for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    resumenTexto += `${producto.nombre}: $${producto.precio}<br>`;
}

resumenTexto += `<br>Total a pagar: $${total}`;
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
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        carritoContenido += `${producto.nombre} - $${producto.precio}\n`;
    }

    const totalConPesos = `$${total}`;

    document.getElementById('carritoData').value = carritoContenido;
    document.getElementById('totalCarrito').value = totalConPesos;

    document.getElementById('formulario').submit();
}

document.getElementById('botonEnviar').addEventListener('click', enviarFormulario);
