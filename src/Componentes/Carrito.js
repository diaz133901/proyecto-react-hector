import React from "react";
import axios from "axios";

const Carrito = ({ carrito, setCarrito, productos }) => {
  const guardarPedido = async (carrito) => {
    try {
      const productosPedido = {};
      let totalPrecio = 0;

      Object.keys(carrito).forEach((idProducto) => {
        const cantidad = carrito[idProducto];
        const producto = productos.find((p) => p.id === idProducto);

        if (producto) {
          productosPedido[idProducto] = cantidad;
          totalPrecio += parseInt(producto.precio) * cantidad;
        }
      });

      const nuevoPedido = {
        Eliminado: 0,
        productos: productosPedido,
      };

      const response = await axios.post(
        "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json",
        nuevoPedido
      );

      console.log("Pedido guardado correctamente:", response.data);
      setCarrito({});
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
    }
  };

  const handleGuardarPedido = () => {
    guardarPedido(carrito);
  };

  return (
    <div className="container mt-5">
      <h2>Carrito</h2>
      <ul>
        {Object.keys(carrito).map((idProducto) => {
          const cantidad = carrito[idProducto];
          const producto = productos.find((p) => p.id === idProducto);

          if (producto && cantidad > 0) {
            return (
              <li key={idProducto}>
                <strong>{producto.nombre}</strong> - Cantidad: {cantidad}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <p>Total: ${calcularPrecioTotal(carrito, productos)}</p>
      <button
        className="btn btn-primary" // Clases de Bootstrap para un botón azul
        onClick={handleGuardarPedido}
      >
        Realizar Pedido
      </button>
    </div>
  );
};

const calcularPrecioTotal = (carrito, productos) => {
  let total = 0;

  Object.keys(carrito).forEach((idProducto) => {
    const cantidad = carrito[idProducto];
    const producto = productos.find((p) => p.id === idProducto);

    if (producto) {
      total += parseInt(producto.precio) * cantidad;
    }
  });

  return total;
};

export default Carrito;
