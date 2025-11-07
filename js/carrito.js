// --- Cargar carrito desde localStorage ---
let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")) || [];

// --- Actualizar número que aparece en el icono del carrito ---
function actualizarNumeroCarrito() {
    const numeroCarrito = document.querySelector("#numero-carrito");
    if (!numeroCarrito) return;
    let totalCantidad = carritoProductos.reduce((total, producto) => total + producto.cantidad, 0);
    numeroCarrito.textContent = totalCantidad;
}

// --- Guardar carrito en localStorage ---
function guardarCarrito() {
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
    actualizarNumeroCarrito();
}

// --- Añadir producto al carrito ---
function agregarProductoCarrito(productoNuevo) {
    const productoExistente = carritoProductos.find(p => p.nombre === productoNuevo.nombre);
    if (productoExistente) {
        productoExistente.cantidad += 1; // Si ya existe, sumar 1
    } else {
        productoNuevo.cantidad = 1; // Si no existe, crear con cantidad 1
        carritoProductos.push(productoNuevo);
    }
    guardarCarrito();
}

// --- Eliminar producto del carrito ---
function eliminarProductoCarrito(nombreProducto) {
    carritoProductos = carritoProductos.filter(p => p.nombre !== nombreProducto);
    guardarCarrito();
}

// --- Mostrar carrito en carrito.html ---
function mostrarCarrito() {
    const contenedor = document.querySelector("#contenedor-carrito");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (carritoProductos.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    carritoProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info-producto">
                <h4>${producto.nombre}</h4>
                <p>Precio: ${producto.precio}€</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button class="btn-eliminar" data-nombre="${producto.nombre}">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(div);
    });

    // Añadir evento para eliminar productos
    document.querySelectorAll(".btn-eliminar").forEach(boton => {
        boton.addEventListener("click", () => {
            eliminarProductoCarrito(boton.dataset.nombre);
            mostrarCarrito(); // Actualizar vista
        });
    });
}

// --- Evento para botones de agregar al carrito ---
document.querySelectorAll(".btn-agregar-carrito").forEach(boton => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
        const imagen = boton.dataset.imagen;
        agregarProductoCarrito({ nombre, precio, imagen });
    });
});

// --- Inicialización ---
actualizarNumeroCarrito();
mostrarCarrito(); // Solo tendrá efecto si hay #contenedor-carrito
