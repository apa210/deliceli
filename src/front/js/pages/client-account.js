import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ClientAccount = (props) => {
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
                <h3>Datos de tu cuenta</h3>
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
              {/* Detalles de contacto */}
              <form className="file-upload">
                <div className="row mb-5 gx-5">
                  {/*Contacto  */}
                  <div className="col-xxl-8 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Detalles de contacto</h4>

                        {/* Nombre  */}
                        <div className="col-md-6">
                          <label className="form-label">Nombre *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Nombre"
                            defaultValue="Noelia"
                          />
                        </div>
                        {/* Apellido  */}
                        <div className="col-md-6">
                          <label className="form-label">Apellido *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Apellido"
                            defaultValue="Irace"
                          />
                        </div>
                        {/* Teléfono  */}
                        <div className="col-md-6">
                          <label className="form-label">Teléfono *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Telefono"
                            defaultValue="(+598) 3399 64 22"
                          />
                        </div>
                        {/* Celular  */}
                        <div className="col-md-6">
                          <label className="form-label">Celular *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Celular"
                            defaultValue="(+598) 99 614 240"
                          />
                        </div>
                        {/* Mail  */}
                        <div className="col-md-6">
                          <label htmlFor="inputEmail4" className="form-label">
                            Mail *
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            defaultValue="noe.irace@gmail.com"
                          />
                        </div>
                        {/*  Dirección  */}
                        <div className="col-md-6">
                          <label className="form-label">Dirección *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Direccion"
                            defaultValue="Calle 13 y 4, La Paloma, Rocha UY"
                          />
                        </div>
                      </div>{" "}
                      {/* fon del formulario  */}
                    </div>
                  </div>
                  {/* Dirección  */}
                  <div className="col-xxl-4">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Dirección</h4>
                        <div className="text-center">
                          {/* subir foto  */}

                          <div className="square position-relative display-2 mb-3">
                            <i className="fas fa-fw fa-user position-absolute top-50 start-50 mt-4 mb-5 translate-middle text-secondary"></i>
                          </div>
                          {/* boton  */}
                          <div className="mt-5 pt-5">
                            <input
                              type="file"
                              id="customFile"
                              name="file"
                              hidden=""
                            />
                            <label
                              className="btn btn-success-soft btn-block"
                              htmlFor="customFile"
                            >
                              Subir foto
                            </label>
                            <button
                              type="button"
                              className="btn btn-danger-soft"
                            >
                              Borrar foto
                            </button>
                          </div>
                          {/*Contenido */}
                          <p className="text-muted mt-3 mb-0">
                            <span className="me-1">Nota:</span>Tamaño mínimo
                            300px x 300px
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* fin de detalles de la cuenta  */}
                {/* Redes sociales  */}
                <div className="row mb-5 gx-5">
                  <div className="col-xxl-6 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0"> Redes Sociales </h4>
                        {/*Facebook  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-facebook me-2 text-facebook"></i>
                            Facebook *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Facebook"
                            defaultValue="http://www.facebook.com"
                          />
                        </div>
                        {/*Twitter  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-twitter text-twitter me-2"></i>
                            Twitter *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Twitter"
                            defaultValue="http://www.twitter.com"
                          />
                        </div>
                        {/*Linkedin  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>
                            Linkedin *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Linkedin"
                            defaultValue="http://www.linkedin.com"
                          />
                        </div>
                        {/*Instragram  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                            Instagram *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Instragram"
                            defaultValue="http://www.instragram.com"
                          />
                        </div>
                        {/*Dribble  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>
                            Dribble *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Dribble"
                            defaultValue="http://www.dribble.com"
                          />
                        </div>
                        {/*Pinterest  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-pinterest text-pinterest"></i>
                            Pinterest *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Pinterest"
                            defaultValue="http://www.pinterest.com"
                          />
                        </div>
                      </div>{" "}
                      {/* fin de redes  */}
                    </div>
                  </div>

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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap-3 d-md-flex justify-content-md-end text-center mb-5">
                  <button type="button" className="btn btn-danger btn-lg">
                    Borrar Perfil
                  </button>
                  <button type="button" className="btn btn-primary btn-lg">
                    Actualizar Perfil
                  </button>
                </div>
              </form>{" "}
              {/*Form END  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ClientAccount.propTypes = {
  match: PropTypes.object,
};
