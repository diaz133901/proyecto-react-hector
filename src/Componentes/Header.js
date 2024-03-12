import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="img/football-157930.svg"
            className="rounded-circle me-2"
            height="40"
            loading="lazy"
          />
          <h5 className="pt-1 mb-0">Camisetas de fútbol retro</h5>
        </div>
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
              <button className="btn btn-outline-light me-2">Carrito</button>
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
