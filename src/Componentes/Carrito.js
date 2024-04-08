import React from "react";
import axios from "axios";

const Carrito = ({ carrito, setCarrito }) => {
  const guardarPedido = async (carrito) => {
    try {
      const productosPedido = {};

      Object.keys(carrito).forEach((idProducto) => {
        const cantidad = carrito[idProducto];
        productosPedido[idProducto] = cantidad;
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
        {Object.keys(carrito).map((idProducto) => (
          <li key={idProducto}>
            Producto ID: {idProducto}, Cantidad: {carrito[idProducto]}
          </li>
        ))}
      </ul>
      <button onClick={handleGuardarPedido}>Guardar Pedido</button>
    </div>
  );
};

export default Carrito;
