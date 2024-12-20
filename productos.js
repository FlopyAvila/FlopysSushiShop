let contador = 0;
let productos = [];
let total = 0;

let carrito = document.querySelector('.carrito-productos');

function agregarProducto(producto, precio){
    let item = document.createElement("p");
    item.textContent = `Producto: ${producto}  $${precio}`;
    carrito.appendChild(item);

    productos.push({nombre: producto, precio: precio});

    total+= precio;

    document.getElementById('total').textContent= `$${total}`
}

function pagar() {
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);
    window.location.href = "compra.html"; 
}

function limpiarCarrito() {
    productos = [];
    total = 0;
    carrito.innerHTML = 'Carrito Vacio'; 
    document.getElementById('total').textContent = '$0';

    localStorage.removeItem('productos');
    localStorage.removeItem('total');
}

