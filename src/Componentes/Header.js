import React from "react";
import imagenLogo from "../img/descarga.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      {" "}
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={imagenLogo}
            className="rounded-circle me-2"
            height="40"
            loading="lazy"
            alt="Logo"
          />
          <h5 className="pt-1 mb-0">Camisetas de fútbol retro</h5>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/carrito" className="btn btn-outline-light me-2">
                Carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pedidos" className="btn btn-outline-light me-2">
                Pedidos
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light">Iniciar sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
