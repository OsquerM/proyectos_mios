# Documentación del Proyecto: Tienda Heretics 
## 1. Descripción General

Este proyecto consiste en el desarrollo de una tienda online inspirada
en el estilo de Team Heretics.
La arquitectura está dividida en dos partes:

-   **Frontend** desarrollado con **React**, donde se visualizará la
    tienda, productos, carrito y navegación.
-   **Backend** desarrollado con **FastAPI**, que gestionará los datos
    de productos, usuarios y carritos.

El objetivo principal es construir un sistema funcional de carrito con
persistencia en servidor.

------------------------------------------------------------------------

## 2. Tecnologías Utilizadas

### ➤ Frontend

-   **React** (JavaScript)
-   CSS (o framework futuro)
-   Axios para comunicación HTTP

### ➤ Backend

-   **FastAPI**
-   Pydantic para modelos de datos
-   CORS Middleware para conexión con React
-   Posible uso futuro de Base de Datos (SQLite o PostgreSQL)

------------------------------------------------------------------------

## 3. Funcionalidades Implementadas

### ✔ Sistema de Carrito

-   Cada usuario tiene su propio carrito.
-   El carrito se almacena en memoria en el backend (se migrará a BD
    posteriormente).
-   React puede:
    -   Consultar el carrito del usuario.
    -   Añadir productos al carrito enviándolos a la API.

## 3. Estructura del Backend (FastAPI)

### Modelo Producto

``` python
class Producto(BaseModel):
    nombre: str
    precio: float
    imagen_url: str
```

### Ejemplo POST

``` json
{
  "nombre": "Camiseta Heretics",
  "precio": 25,
  "imagen_url": "/imagen/camiseta.jpg"
}
```

------------------------------------------------------------------------

## 4. Estructura del Frontend (React)

### Componente principal del carrito

-   Recupera los productos mediante `useEffect`.
-   Renderiza la lista del carrito.
-   Permite añadir productos con un botón.

------------------------------------------------------------------------

## 5. Flujo de Funcionamiento

1.  El usuario navega en React.
2.  Cuando accede al carrito, React hace una petición `GET` a FastAPI.
3.  Al añadir un producto, React hace un `POST` con el producto
    seleccionado.
4.  FastAPI actualiza el carrito del usuario.
5.  React vuelve a renderizar la lista de productos.

------------------------------------------------------------------------

## 6. Próximos Pasos Propuestos

-   Incorporar Base de Datos SQL.
-   Añadir autenticación JWT para usuarios.
-   Implementar registro/login real.
-   Crear CRUD completo de productos.
-   Añadir diseño profesional al frontend.

------------------------------------------------------------------------

## 7. Objetivo Final

Construir una tienda profesional completa con backend robusto, datos
centralizados y frontend moderno con React, permitiendo futuras
ampliaciones como panel de administración, estadísticas e incluso una
API pública.

------------------------------------------------------------------------

## 8. Autor

Proyecto desarrollado como ejercicio académico y base para un proyecto
web completo.
