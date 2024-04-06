import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Productos from "./Componentes/Productos";
import Carrito from "./Componentes/Carrito";

const App = () => {
  const [carrito, setCarrito] = useState({});

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Productos carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route path="/carrito" element={<Carrito carrito={carrito} />} />
        </Routes>
        <Footer />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </div>
    </Router>
  );
};

export default App;
