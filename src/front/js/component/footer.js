import React from "react";
import { Link } from "react-router-dom";

// el footer de la web, contiene enlaces a varias Vistas e información sobre los desarrolladores
// y otros datos para contactarse
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container pt-5 pb-5 mt-5">
          <div className="row p-3">
            <div className="col-lg-5">
              <h3>DeliCeli.uy</h3>
              <p> Alimentación bio sin añadidos, sin gluten, vegana.</p>
              <p>
                Rivera 3344, Apto 103, Oficina 134
                <br />
                Tel. <Link to="tel:+59899644266">+598 99 644 266</Link>
                <br />
                Mail. <Link to="mailto:hola@deliceli.uy">hola@deliceli.uy</Link>
              </p>
            </div>

            <div className="col-lg-2 mt-5">
              <h5> CUENTA</h5> <br />
              <Link to="/pages/client-account">Mi Cuenta</Link>
              <br />
              <Link to="/pages/favorites">Favoritos</Link>
            </div>

            <div className="col-lg-2 mt-5">
              <h5> SOBRE</h5> <br />
              <Link to="/pages/about">Sobre Nosotros</Link>
              <br />
              <Link to="/pages/contact">Contacto</Link>
            </div>

            <div className="col-lg-2 mt-5">
              <h5> POLÍTICAS </h5> <br />
              <Link to="/pages/politicas">Política de Privacidad</Link> <br />
              <Link to="/pages/terminos">Términos y Condiciones</Link>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <div className="col-8">
              <p className="pt-4 pb-4">
                Hecho con <i className="fa fa-heart text-danger" /> por{" "}
                <Link to="/pages/about">Noelia, Analía, Elías y Aparicio.</Link>
              </p>
            </div>
            <div className="col">
              <h4 className="pt-4 pb-4">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <i className="fab fa-facebook m-2"></i>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <i className="fab fa-instagram m-2"></i>
                  </li>
                  <li className="list-group-item">
                    <i className="fab fa-linkedin m-2"></i>
                  </li>
                  <li className="list-group-item">
                    <i className="fab fa-whatsapp m-2"></i>
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
