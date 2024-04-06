import React, { useState, useEffect } from "react";
import axios from "axios";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Función para obtener productos
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

    // Función para obtener pedidos
    const fetchPedidos = async () => {
      try {
        const response = await axios.get(
          "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/pedidos.json"
        );
        const data = response.data;
        const pedidosArray = Object.keys(data).map((key) => ({
          id: key,
          productos: data[key].productos,
        }));
        setPedidos(pedidosArray);
      } catch (error) {
        console.error("Error fetching pedidos:", error);
      }
    };

    // Llamar a las funciones para obtener productos y pedidos al cargar el componente
    fetchProductos();
    fetchPedidos();
  }, []); // La dependencia vacía [] significa que esto solo se ejecuta una vez al montar el componente

  return (
    <div className="container mt-5">
      <h2>Pedidos</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id} className="card mb-3">
          <div className="card-header">Pedido {pedido.id}</div>
          <div className="card-body">
            <ul>
              {Object.entries(pedido.productos).map(
                ([productoId, cantidad]) => {
                  // Buscar el producto correspondiente por su ID
                  const producto = productos.find(
                    (prod) => prod.id === productoId
                  );
                  if (producto) {
                    return (
                      <li key={productoId}>
                        <strong>{producto.nombre}</strong> - Cantidad:{" "}
                        {cantidad}
                      </li>
                    );
                  } else {
                    return null; // Manejar casos donde el producto no se encuentra
                  }
                }
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pedidos;
