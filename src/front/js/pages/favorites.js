import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    let onLogged = actions.logout();
    if (!onLogged) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  };

  useEffect(() => {
    // No da acceso a favoritos sin estar logueado
    if (store.auth == false) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }

    // Al cargar la página, se desplaza hacia arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-about2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Tu Cuenta</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* titulo  */}
              <div className="my-5">
                <h3>
                  {" "}
                  <i className="fas fa-utensils d-inline mx-2"></i> Tus
                  Favoritos
                </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Hola, {store.profile.first_name}!
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fas fa-bars"></i>
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/client-account">
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i> Tu Cuenta
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/orders">
                          <i className="fas fa-utensils d-inline mx-2"></i>Tus
                          pedidos
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/favorites">
                          <i className="fas fa-heart d-inline mx-2"></i> Tus
                          Favoritos
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="#"
                          onClick={() => handleLogout()}
                        >
                          {" "}
                          <i className="fas fa-sign-out-alt d-inline mx-2"></i>
                          Cerrar Sesión
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* navegación de usuario */}
              {/* Detalle de favoritos */}

              {/* producto  */}

              <div className="card mb-5 mt-5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Medialunas Rellenas</h5>

                      <p className="card-text">
                        Medialunas sin gluten rellenas de jamon y queso. El
                        precio es por docena. Las entregamos calentitas.
                      </p>

                      <div className="text-muted mb-2">
                        {" "}
                        La Cocina de Milena Sin Gluten{" "}
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ 350</h2>
                      <button type="button" className="btn btn-primary me-2">
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                        Agregar al carrito
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary mt-2 mb-2"
                      >
                        Leer mas{" "}
                      </button>

                      <button type="button" className="btn btn-light m-2">
                        <i className="fas fa-heart mx-2"></i> ELIMINAR DE
                        FAVORITOS{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* producto  */}

              {/* producto  */}

              <div className="card mb-5 mt-5">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Medialunas Rellenas</h5>

                      <p className="card-text">
                        Medialunas sin gluten rellenas de jamon y queso. El
                        precio es por docena. Las entregamos calentitas.
                      </p>
                      <div className="text-muted mb-2">
                        {" "}
                        La Cocina de Milena Sin Gluten{" "}
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ 350</h2>

                      <button type="button" className="btn btn-primary me-2">
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                        Agregar al carrito
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary mt-2 mb-2"
                      >
                        Leer mas{" "}
                      </button>

                      <button type="button" className="btn btn-light m-2">
                        {" "}
                        <i className="fas fa-heart mx-2"></i> ELIMINAR DE
                        FAVORITOS{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* producto  */}
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

Favorites.propTypes = {
  match: PropTypes.object,
};
