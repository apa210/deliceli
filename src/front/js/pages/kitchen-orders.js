import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const KitchenOrders = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>
      <section>
        <div className="container bgimage-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Cuenta tu cocina</h1>
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
                  <i className="fas fa-utensils d-inline mx-2"></i> Tus Platos
                </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Hola, Milena Sin Gluten!
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
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-account">
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i> Tu Cuenta
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-orders">
                          <i className="fas fa-utensils d-inline mx-2"></i>Tus
                          platos
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-orders">
                          <i className="fas fa-heart d-inline mx-2"></i> Tus
                          Pedidos
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="#">
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
                  <div className="col-md-3">
                    <img
                      src="https://lookaside.fbsbx.com/elementpath/media/?media_id=457061438537956&version=1637849981"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h2 className="card-title">Pedido Nro #000345</h2>

                      <div className="text-muted mb-2">
                        {" "}
                        Pedido de Noelia Irace{" "}
                      </div>

                      <p className="card-text">
                        <li>Medialunas sin gluten rellenas de jamon y queso</li>
                        <li>Pascualina Sin Gluten</li>
                        <li>Brownie de Chocolate sin Gluten</li>
                      </p>

                      <h4>Total del pedido - $ 350</h4>
                      <button type="button" className="btn btn-danger me-2">
                        Pedido Pendiente
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning me-2 mt-2 mb-2"
                      >
                        Pedido Confirmado{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-success me-2 mt-2 mb-2"
                      >
                        Pedido Entregado{" "}
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

KitchenOrders.propTypes = {
  match: PropTypes.object,
};
