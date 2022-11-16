import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ChangePass = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const navigate = useNavigate();

//   // Función para cerrar sesión
//   const handleLogout = () => {
//     let onLogged = actions.logout();
//     if (!onLogged) {
//       setTimeout(() => {
//         navigate("/");
//       }, 100);
//     }
//   };

 useEffect(() => {

//     // No da acceso a la cuenta del cliente sin estar logueado
//     if (store.auth == false) {
//       setTimeout(() => {
//         navigate("/");
//       }, 100);
//     }

    // Al cargar la página, se desplaza hacia arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-about2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Cambiar Contraseña</h1>
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
                  <i className="fas fa-cog d-inline mx-2"></i> Cambiar contraseña
                </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Hola, {store?.profile?.first_name}!
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
                          to=""
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
              {/* Detalles de contacto */}
    
           
             
                 
         
             
                {/* fin de detalles de la cuenta  */}
                {/* Redes sociales  */}
                <div className="row mb-5 gx-5">
              

                  {/* cambiar contraseña  */}
                  <div className="col-xxl-6">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="my-4">Cambiar contraseña</h4>
                        {/*Old password  */}
                        <div className="col-md-6">
                          <label htmlFor="contrasena" className="form-label">
                            Contraseña anterior *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="contrasena"
                          />
                        </div>
                        {/*Nueva Contraseña  */}
                        <div className="col-md-6">
                          <label
                            htmlFor="nueva-contrasena"
                            className="form-label"
                          >
                            Nueva Contraseña *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="nueva-contrasena"
                          />
                        </div>
                        {/*Confirm password  */}
                        <div className="col-md-12">
                          <label
                            htmlFor="econfirmar-contrasena"
                            className="form-label"
                          >
                            Confirmar Contraseña*
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirmar-contrasena"
                          />

<button type="button" className="btn btn-primary mt-3 mb-3">
                 Guardar contraseña
                  </button>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              
              
              {/*Form END  */}
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

ChangePass.propTypes = {
  match: PropTypes.object,
};
