// Cargar carrito de localStorage
let carritoProductos = JSON.parse(localStorage.getItem("carritoProductos")) || [];

// Actualiza número que aparece en el icono carrito
function actualizarNumeroCarrito() {
    const numeroCarrito = document.querySelector("#numero-carrito");
    if (!numeroCarrito) return;
    numeroCarrito.textContent = carritoProductos.length;
}

// Añadir producto al carrito
function agregarProductoCarrito(producto) {
    carritoProductos.push(producto);
    localStorage.setItem("carritoProductos", JSON.stringify(carritoProductos));
    actualizarNumeroCarrito();
}

// Ejecutar la actualización cuando se carga la página
actualizarNumeroCarrito();


// ---- EVENTO PARA BOTONES AÑADIR ----
document.querySelectorAll(".boton-agregar-carrito").forEach(boton => {
    boton.addEventListener("click", () => {
        const nombre = boton.dataset.nombre;
        const precio = boton.dataset.precio;

        agregarProductoCarrito({ nombre, precio });
    });
});
