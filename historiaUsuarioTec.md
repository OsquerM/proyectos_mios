# Historias de Usuario Técnicas — Proyecto Tienda Heretics

---

## HU-001 — Añadir producto al carrito
**Como:** Usuario  
**Quiero:** Añadir un producto al carrito  
**Para:** Guardarlo para comprarlo más tarde  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en botón `.btn-add-to-cart` dentro de una tarjeta de producto  
- **Objetos involucrados:** Instancia de la clase `Carrito`, método `agregarProducto(producto)`  
- **Resultado en el DOM:**  
  - Se actualiza el contador del carrito en la navbar  
  - El producto aparece en la lista del carrito  
  - Se muestra un mensaje de confirmación (toast o alerta)

---

## HU-002 — Ver el carrito
**Como:** Usuario  
**Quiero:** Visualizar los productos que he añadido al carrito  
**Para:** Revisar lo que voy a comprar  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en icono `#icono-carrito` o acceso a `/carrito`  
- **Objetos involucrados:** `Carrito.getProductos()`  
- **Resultado en el DOM:**  
  - Se carga la lista de productos  
  - Se renderizan sus cantidades, precios y totales  
  - Se habilita el botón “Realizar pedido” si hay productos

---

## HU-003 — Eliminar producto del carrito
**Como:** Usuario  
**Quiero:** Quitar un producto del carrito  
**Para:** No comprar algo que ya no me interesa  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en botón `.btn-eliminar-producto` del carrito  
- **Objetos involucrados:** `Carrito.eliminarProducto(id)`  
- **Resultado en el DOM:**  
  - Se elimina el `<div>` o `<li>` correspondiente  
  - Se recalcula y actualiza el precio total  
  - Si el carrito queda vacío, se muestra un mensaje tipo “Tu carrito está vacío”

---

## HU-004 — Modificar cantidad de un producto
**Como:** Usuario  
**Quiero:** Incrementar o disminuir la cantidad de un producto  
**Para:** Ajustar la compra a mis necesidades  

**Detalle Técnico DWEC:**  
- **Evento disparador:**  
  - Click en `.btn-sumar`  
  - Click en `.btn-restar`  
- **Objetos involucrados:** `Carrito.actualizarCantidad(id, nuevaCantidad)`  
- **Resultado en el DOM:**  
  - Se actualiza el número mostrado en el input/campo  
  - Se recalcula el subtotal del producto  
  - Se actualiza el precio total del carrito

---

## HU-005 — Realizar un pedido
**Como:** Usuario  
**Quiero:** Confirmar mi compra  
**Para:** Finalizar el proceso y generar el pedido  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en botón `#btn-realizar-pedido`  
- **Objetos involucrados:**  
  - `Carrito` para obtener los productos  
  - `Pedido` para generar el pedido  
- **Resultado en el DOM:**  
  - Se muestra pantalla de confirmación o modal de éxito  
  - El carrito se vacía visualmente  
  - Se redirige a `/pedido-confirmado` o similar

---

## HU-006 — Ver detalles de un producto
**Como:** Usuario  
**Quiero:** Ver información ampliada de un producto  
**Para:** Saber más antes de comprarlo  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en tarjeta de producto `.producto-card`  
- **Objetos involucrados:** `Producto` y función `renderizarProductoDetalle()`  
- **Resultado en el DOM:**  
  - Se abre modal o página de detalle  
  - Se renderiza imagen, precio, descripción, botón “Añadir al carrito”

---

# Historias de Usuario Técnicas — Admin (CRUD Productos)

---

## HU-007 — Crear producto (Admin)
**Como:** Administrador  
**Quiero:** Añadir un nuevo producto a la tienda  
**Para:** Mantener el catálogo actualizado  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Submit del formulario `#form-crear-producto`  
- **Objetos involucrados:**  
  - `GestorProductos.crearProducto(datos)`  
  - Objeto `Producto`  
- **Resultado en el DOM:**  
  - Se añade una nueva tarjeta/row de producto  
  - Se cierra el modal  
  - Se muestra notificación de éxito

---

## HU-008 — Editar producto (Admin)
**Como:** Administrador  
**Quiero:** Modificar los datos de un producto  
**Para:** Corregir errores o actualizar información  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Submit del formulario `#form-editar-producto`  
- **Objetos involucrados:**  
  - `GestorProductos.actualizarProducto(id, datos)`  
  - Instancia existente de `Producto`  
- **Resultado en el DOM:**  
  - Los datos visibles de la tarjeta se actualizan  
  - Se muestra una notificación de “Producto actualizado”  
  - El modal se cierra

---

## HU-009 — Eliminar producto (Admin)
**Como:** Administrador  
**Quiero:** Borrar un producto del catálogo  
**Para:** Evitar que se muestre o se pueda comprar  

**Detalle Técnico DWEC:**  
- **Evento disparador:** Click en `.btn-eliminar` del panel de administración  
- **Objetos involucrados:**  
  - `GestorProductos.eliminarProducto(id)`  
- **Resultado en el DOM:**  
  - La tarjeta o fila del producto desaparece  
  - Se actualiza la lista  
  - Se muestra una alerta de confirmación
