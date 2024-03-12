import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white fixed-bottom">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-between p-3">
          <div className="col-auto">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img
                src="img/insta.jpeg"
                alt="Instagram"
                width="30"
                height="30"
              />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <img src="img/tw.png" alt="Twitter" width="30" height="30" />
            </a>
          </div>
          <div className="col-auto">
            <div className="text-center">
              © 2024 Copyright:
              <a className="text-white">Despliegue de servicios multimedia</a>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-end">
              <a className="text-white" href="#">
                Acerca de nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
