import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./login";
import { SignUp } from "./sign-up";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar p-3 navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DeliCeli.uy
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/about">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/products">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/kitchens">
                  Cocinas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/contact">
                  Contacto
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success me-5" type="submit">
                Buscar
              </button>
            </form>

            <button type="button" className="btn btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Iniciar Sesión</button>

            <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdropSignUp">Registrarse</button>

            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="fa fa-cart-plus d-inline mx-2"></i> Carrito
                </Link>

                <ul className="dropdown-menu dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Empanadas: $ 320{" "}
                      <i className="far fa-trash-alt d-inline mx-2"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Empanadas: $ 320{" "}
                      <i className="far fa-trash-alt d-inline mx-2"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Empanadas: $ 320{" "}
                      <i className="far fa-trash-alt d-inline mx-2"></i>
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Total - $ 2330
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  <i className="fas fa-user-circle d-inline mx-2"></i>
                  Hola, Elías!
                </Link>
                <ul className="dropdown-menu dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-cog d-inline mx-2"></i> Tu Cuenta
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-utensils d-inline mx-2"></i>Tus
                      pedidos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="fas fa-heart d-inline mx-2"></i> Tus
                      Favoritos
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i className="fas fa-sign-out-alt d-inline mx-2"></i>{" "}
                      Cerrar Sesión
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Login />
      <SignUp/>
    </>
  );
};
