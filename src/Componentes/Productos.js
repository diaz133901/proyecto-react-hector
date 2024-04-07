import React, { useState, useEffect } from "react";
import axios from "axios";

const Productos = ({ carrito, setCarrito, productos, setProductos }) => {
  useEffect(() => {
    axios
      .get(
        "https://react-1-cde17-default-rtdb.europe-west1.firebasedatabase.app/productos.json"
      )
      .then((response) => {
        const data = response.data;
        const productosArray = Object.keys(data)
          .filter((key) => key !== "0") // Filtrar el producto con id 0
          .map((key) => ({
            id: key,
            ...data[key],
          }));
        setProductos(productosArray);
      })
      .catch((error) => console.error("Error fetching productos:", error));
  }, []);

  const handleAddToCart = (id) => {
    setCarrito((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (id) => {
    if (carrito[id] > 0) {
      setCarrito((prevState) => ({
        ...prevState,
        [id]: prevState[id] - 1,
      }));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              {/* <img src={producto.imagen} className="card-img-top" alt={producto.nombre} /> */}
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: {producto.precio}€</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleRemoveFromCart(producto.id)}
                  >
                    -
                  </button>
                  <span>{carrito[producto.id] || 0}</span>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleAddToCart(producto.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
