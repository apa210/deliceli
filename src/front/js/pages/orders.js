import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Orders = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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
                <h3>   <i className="fas fa-utensils d-inline mx-2"></i> Tus Pedidos </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Hola, Elías!
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
                    <span className="navbar-toggler-icon"></span>
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

            {/* producto  */}

  <div className="card mb-5 mt-5">
  <div className="row g-0">
    <div className="col-md-3">
      <img src="https://www.honestfoodtalks.com/wp-content/uploads/2021/11/Top-cooking-channels-1024x1024.jpeg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body p-4">
        <h2 className="card-title">Milena Sin Gluten</h2>

        <div class="text-muted mb-2"> La Cocina de Milena Sin Gluten <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i></div>
      
        <p className="card-text"><li>Medialunas sin gluten rellenas de jamon y queso</li>
        <li>Pascualina Sin Gluten</li>
        <li>Brownie de Chocolate sin Gluten</li></p>

     
          <h4>Total del pedido - $ 350</h4>
          <button type="button" className="btn btn-primary me-2">
            <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Repetir pedido
          </button>
          <button type="button" className="btn btn-outline-primary mt-2 mb-2">
            Detalle del pedido {" "}
          </button>

          <button type="button" className="btn btn-light m-2">
            {" "}
            <i className="fa fa-star text-warning mx-2"></i> DEJAR UNA VALORACIÓN{" "}
          </button>
      </div>
    </div>
  </div>
</div>


   
      {/* pedidos */}

      {/* producto  */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Orders.propTypes = {
  match: PropTypes.object,
};
