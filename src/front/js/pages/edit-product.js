import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProduct = () => {
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
    // No da acceso a la cuenta de la cocina sin estar logueado
    // if (store.auth == false) {
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 100);
    // }

    // Al cargar la página, se desplaza hacia arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Tu cocina</h1>
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
                  <i className="fas fa-cog d-inline mx-2"></i> Datos de tu
                  cuenta
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
                        <Link className="nav-link" to="/pages/kitchen-account">
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i> Tu Cuenta
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-plates">
                          <i className="fas fa-store d-inline mx-2"></i>
                          Tu menú
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-orders">
                          <i className="fas fa-utensils d-inline mx-2"></i> Tus
                          Pedidos
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
              {/* Detalles de contacto */}
              <form className="file-upload">
                <div className="row mb-5 gx-5">
                  {/*Contacto  */}
                  <div className="col-xxl-8 mb-5 mb-xxl-0">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">TU MENÚ > Editar Producto</h4>

                        <div class="alert alert-success" role="alert">
El producto ha sido actualizado con éxito.
</div>

<div class="alert alert-danger" role="alert">
Hay campos vacíos debes completar todos los campos.
</div>
                        {/* Nombre  */}
                        <div className="col-md-6">
                          <label className="form-label">Nombre del producto *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Nombre del producto"
                            defaultValue="Milanesas de pollo"
                          />
                        </div>
                          {/* stock disponible  */}
                          <div className="col-md-3">
                          <label className="form-label">Stock disponible *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Stock"
                            defaultValue="20 unidades"
                          />
                        </div>
                        
                        {/* precio  */}
                        <div className="col-md-3">
                          <label className="form-label">Precio $ *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Precio"
                            defaultValue="$ 200"
                          />
                        </div>
                        
                        <div className="col-md-12">
                          <label className="form-label">
                            Descripción del producto *
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Descripcion"
                            defaultValue=" Milanesas de pollo con ensalada."
                          />
                        </div>
                        {/*  Dirección  */}
                      </div>

                      {/* fin del formulario  */}
                    </div>
                  </div>
                  {/* Dirección  */}
                  <div className="col-xxl-4">
                    <div className="bg-secondary-soft px-4 py-5 rounded">
                      <div className="row g-3">
                        <h4 className="mb-4 mt-0">Foto del producto</h4>
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
             
             <div className="gap-3 d-md-flex justify-content-md-end text-center mb-5">
                  <button type="button" className="btn btn-danger btn-lg mb-3">
                    Eliminar producto
                  </button>
                  <button type="button" className="btn btn-primary btn-lg mb-3">
                    Actualizar producto
                  </button>
                </div>
              </form>{" "}
              {/*Form END  */}
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

EditProduct.propTypes = {
  match: PropTypes.object,
};
