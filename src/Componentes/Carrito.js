import React, { useState } from "react";
import axios from "axios";

const Carrito = ({ carrito, setCarrito, productos }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [direccion, setDireccion] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [pin, setPin] = useState("");

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const guardarPedido = async () => {
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
        eliminado: 0,
        productos: productosPedido,
      };

      const response = await axios.post(
        "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app//pedidos.json",
        nuevoPedido
      );

      console.log("Pedido guardado correctamente:", response.data);
      setCarrito({});
      setModalVisible(false);
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
    }
  };

  const handleGuardarPedido = () => {
    setModalVisible(true);
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
      <p>Total: {calcularPrecioTotal(carrito, productos)} € </p>
      {!isEmpty(carrito) && (
        <button className="btn btn-primary" onClick={handleGuardarPedido}>
          Realizar Pedido
        </button>
      )}

      {modalVisible && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles del Pedido</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModalVisible(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección de Entrega</label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="numeroTarjeta">Número de Tarjeta</label>
                    <input
                      type="text"
                      className="form-control"
                      id="numeroTarjeta"
                      value={numeroTarjeta}
                      onChange={(e) => setNumeroTarjeta(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pin">PIN</label>
                    <input
                      type="password"
                      className="form-control"
                      id="pin"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalVisible(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={guardarPedido}
                >
                  Confirmar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
