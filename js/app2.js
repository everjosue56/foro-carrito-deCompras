// Función para mostrar el cuadro del carrito
function mostrarCarrito() {
    let modal = document.getElementById('carritoModal');
    modal.style.display = 'block';
    actualizarVistaCarrito(carrito);
}

//funcion cerrara carrito 
function cerrarCarrito() {
    let modal = document.getElementById('carritoModal');
    modal.style.display = 'none';
}

//fiuncion cerrar cuadrito cuando me muestra los items
const cerrar_carrito = () => {
    let modal = document.getElementById("carritoModal");
    modal.style.display = "none";
}
     //funcion agregar al carrtio 
function agregarAlCarrito(nombre, precio, ) {
    // Obtener el carrito from localStorage or crea un localstorage si no hay 
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    let productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        // Si el producto ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
    } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarVistaCarrito(carrito);
}


function actualizarVistaCarrito(carrito) {
    let carritoProductos = document.getElementById('carritoProductos');
    let totalPrecio = document.getElementById('totalPrecio');
    let total = 0;

    // Limpiar la vista del carrito
    carritoProductos.innerHTML = '';

    // Recorrer los productos en el carrito y mostrarlos en la vista
    carrito.forEach(function (producto) {
        let productoElemento = document.createElement('div');
        productoElemento.classList.add('producto-en-carrito');
        productoElemento.innerHTML = `
           
            <div class="informacion-producto-en-carrito">
                <h3>${producto.nombre}</h3>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio}</p>
            </div>
        `;
        carritoProductos.appendChild(productoElemento);

        // Calcular el precio total
        total += producto.precio * producto.cantidad;
    });

    // Mostrar el precio total en la vista del carrito
    totalPrecio.textContent = 'Total: $' + total.toFixed(2);
}


// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    // Obtener el carrito del localStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Eliminar el producto del carrito usando el índice proporcionado
    carrito.splice(indice, 1);

    // Actualizar el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la vista del carrito
    actualizarVistaCarrito(carrito);
}

// Función para actualizar la vista del carrito
function actualizarVistaCarrito(carrito) {
    let carritoProductos = document.getElementById('carritoProductos');
    let totalPrecio = document.getElementById('totalPrecio');
    let total = 0;

    // Limpiar la vista del carrito
    carritoProductos.innerHTML = '';

    // Recorrer los productos en el carrito y mostrarlos en la vista
    carrito.forEach(function(producto, indice) {
        let productoElemento = document.createElement('div');
        productoElemento.textContent = producto.nombre + ' - $' + producto.precio;
        carritoProductos.appendChild(productoElemento);

        // Botón para eliminar el producto, pasando el índice como argumento
        let eliminarBoton = document.createElement('button');
        eliminarBoton.textContent = 'x';
        eliminarBoton.addEventListener('click', function() {
            eliminarDelCarrito(indice);
        });
       
  // Agregar el botón de eliminar al elemento contenedor del producto
  productoElemento.appendChild(eliminarBoton);
  
        // Calcular el precio total
        total += producto.precio;
    });

    // Mostrar el precio total en la vista del carrito
    totalPrecio.textContent = 'Total: $' + total.toFixed(2);
}

function pagar() {
    // Simplemente muestra un mensaje de agradecimiento
    alert("¡Gracias por su compra!");
  }