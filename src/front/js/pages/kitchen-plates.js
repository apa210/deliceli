import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const KitchenPlates = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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
                <h3>  <i className="fas fa-utensils d-inline mx-2"></i> Tus Platos</h3>
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
                    <span className="navbar-toggler-icon"></span>
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
    <div className="col-md-4">
      <img src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Medialunas Rellenas</h5>
      
        <p className="card-text">Medialunas sin gluten rellenas de jamon y queso. El precio es por
            docena. Las entregamos calentitas.</p>

            <div className="text-muted mb-2"> La Cocina de Milena Sin Gluten <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i></div>

          
          <h2>$ 350</h2>
          <button type="button" className="btn btn-primary me-2">
           Editar Producto
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
      <img src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Medialunas Rellenas</h5>
        
      
        <p className="card-text">Medialunas sin gluten rellenas de jamon y queso. El precio es por
            docena. Las entregamos calentitas.</p>
            <div className="text-muted mb-2"> La Cocina de Milena Sin Gluten <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i></div>
           
          <h2>$ 350</h2>
        
          <button type="button" className="btn btn-primary me-2">
           Editar Producto
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
    </>
  );
};

KitchenPlates.propTypes = {
  match: PropTypes.object,
};
