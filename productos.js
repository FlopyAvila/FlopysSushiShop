//Agregar un contador al lado de los botones de cada tarjeta para que se vean (tambien tengo que poner mi linkedin abajo de todo pero eso no tiene que ver con javaScript)


let contador = 0;
let productos = [];
let total = 0;

let carrito = document.querySelector('.carrito-productos');

function agregarProducto(producto, precio) {
    let productoExistente = productos.find(item => item.nombre === producto);

    if (productoExistente) {
        productoExistente.cantidad++;
        productoExistente.total += precio;
    } else {
        productos.push({ nombre: producto, precio: precio, cantidad: 1, total: precio });
    }
    actualizarCarrito();

    total += precio;
    document.getElementById('total').textContent = `$${total}`;
}

function actualizarCarrito() {
    carrito.innerHTML = '';

    productos.forEach((item, index) => {
        let productoHTML = document.createElement('div');
        productoHTML.classList.add('producto-carrito');
        
        productoHTML.innerHTML = `
            x${item.cantidad} ${item.nombre} - $${item.total}
            <button class="btn-sumar" data-index="${index}">+</button>
            <button class="btn-restar" data-index="${index}">-</button>
        `;

        carrito.appendChild(productoHTML);
    });

    document.getElementById('total').textContent = `$${total}`;

    document.querySelectorAll('.btn-sumar').forEach(btn => {
        btn.addEventListener('click', incrementarCantidad);
    });

    document.querySelectorAll('.btn-restar').forEach(btn => {
        btn.addEventListener('click', disminuirCantidad);
    });
}


function incrementarCantidad(event) {
    const index = event.target.dataset.index;
    productos[index].cantidad++;
    productos[index].total += productos[index].precio;
    total += productos[index].precio;

    actualizarCarrito();
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);
}

function disminuirCantidad(event) {
    const index = event.target.dataset.index;
    if (productos[index].cantidad > 1) {
        productos[index].cantidad--;
        productos[index].total -= productos[index].precio;
        total -= productos[index].precio;
    } else {
        total -= productos[index].precio;
        productos.splice(index, 1); 
    }

    actualizarCarrito();
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);
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

