import React, { useState, useEffect } from "react";
import axios from "axios";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [expandedPedidoId, setExpandedPedidoId] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(
          "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
        );
        const data = response.data;
        const productosArray = Object.keys(data)
          .filter((key) => key !== "0")
          .map((key) => ({
            id: key,
            ...data[key],
          }));
        setProductos(productosArray);
      } catch (error) {
        console.error("Error fetching productos:", error);
      }
    };

    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json"
        );
        const data = response.data;
        const pedidosArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .filter((pedido) => pedido.Eliminado === 0); // Filtrar solo pedidos no eliminados
        setPedidos(pedidosArray);
      } catch (error) {
        console.error("Error fetching pedidos:", error);
      }
    };

    fetchProductos();
    fetchPedidos();
  }, []);

  const toggleExpandPedido = (pedidoId) => {
    if (expandedPedidoId === pedidoId) {
      setExpandedPedidoId(null);
    } else {
      setExpandedPedidoId(pedidoId);
    }
  };

  const marcarPedidoComoEliminado = async (pedidoId) => {
    try {
      await axios.put(
        `https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/pedidos/${pedidoId}/Eliminado.json`,
        1
      );

      const updatedPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId);
      setPedidos(updatedPedidos);
    } catch (error) {
      console.error("Error al marcar pedido como eliminado:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pedidos</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id} className="card mb-3">
          <div
            className="card-header d-flex justify-content-between"
            onClick={() => toggleExpandPedido(pedido.id)}
            style={{ cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>Pedido {parseInt(pedido.id) + 1}</span>
            </div>
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.stopPropagation();
                marcarPedidoComoEliminado(pedido.id);
              }}
            >
              Eliminar
            </button>
          </div>
          {expandedPedidoId === pedido.id && (
            <div className="card-body">
              <ul>
                {Object.entries(pedido.productos).map(
                  ([productoId, cantidad]) => {
                    const producto = productos.find(
                      (prod) => prod.id === productoId
                    );
                    if (producto && cantidad > 0) {
                      return (
                        <li key={productoId}>
                          <strong>{producto.nombre}</strong> - Cantidad:{" "}
                          {cantidad}
                        </li>
                      );
                    } else {
                      return null;
                    }
                  }
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pedidos;
