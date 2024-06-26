import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Productos from "./Componentes/Productos";
import Carrito from "./Componentes/Carrito";
import Pedidos from "./Componentes/Pedidos";
import "./App.css";
import { CartProvider } from "./Componentes/CartContext";

const App = () => {
  const [productos, setProductos] = useState([]);

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Productos
                    productos={productos}
                    setProductos={setProductos}
                  />
                }
              />
              <Route
                path="/carrito"
                element={
                  <Carrito productos={productos} setProductos={setProductos} />
                }
              />
              <Route path="/pedidos" element={<Pedidos />} />
            </Routes>
          </div>
          <Footer />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
