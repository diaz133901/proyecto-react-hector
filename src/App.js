import React from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
    </div>
  );
};

export default App;
