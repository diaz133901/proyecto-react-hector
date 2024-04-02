import React, { useState, useEffect } from "react";
import axios from "axios";

const Productos = () => {
  const [productos, setProductos] = useState([]);

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

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Camisetas</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              {/* <img src={producto.imagen} className="card-img-top" alt={producto.nombre} /> */}
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: {producto.precio}€</p>
                <a href="#" className="btn btn-primary">
                  Añadir al carrito
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
