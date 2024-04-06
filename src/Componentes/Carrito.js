import React from "react";

const Carrito = ({ carrito }) => {
  return (
    <div className="container mt-5">
      <h2>Carrito</h2>
      <ul>
        {Object.keys(carrito).map((id) => (
          <li key={id}>
            Producto ID: {id}, Cantidad: {carrito[id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;
