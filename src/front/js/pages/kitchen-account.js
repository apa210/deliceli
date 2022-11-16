import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const KitchenAccount = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const [img, setImg] = useState("");

  // Función para cerrar sesión
  const handleLogout = () => {
    let onLogged = actions.logout();
    if (!onLogged) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  };

  const uploadImg = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "DeliCeli");

    const res = await fetch(process.env.STORAGE_IMG, {
      method: "POST",
      body: data,
    });

    const file = await res.json();
    setImg(file.secure_url);
  };


  useEffect(() => {
    // No da acceso a la cuenta de la cocina sin estar logueado
    if (store.auth == false) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    } else {
      setImg(store?.profile?.foto_usuario)
    }
    if (store.historyNav == "/pages/kitchen-account") {
      actions.modHistoryNav(window.location.pathname);
    } else if (store.historyNav == "/pages/kitchen-plates") {
      actions.modHistoryNav(window.location.pathname);
    } else if (store.historyNav == "/pages/kitchen-orders") {
      actions.modHistoryNav(window.location.pathname);
    } else {
      // Al cargar la página, se desplaza hacia arriba
      window.scrollTo(0, 0);
      actions.modHistoryNav(window.location.pathname);
    }
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
                        <h4 className="mb-4 mt-0">Detalles de contacto</h4>

                        {/* Nombre  */}
                        <div className="col-md-6">
                          <label className="form-label">Nombre *</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Nombre"
                            defaultValue={store?.profile?.first_name}
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
                            defaultValue={store?.profile?.last_name}
                          />
                        </div>
                        {/* Nombre de Usuario  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            Nombre de Usuario *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="NombreDeUsuario"
                            defaultValue={store?.profile?.user_name}
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
                            defaultValue={store?.profile?.telefono}
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
                            defaultValue={store?.profile?.email}
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
                            defaultValue={store?.profile?.direccion}
                          />
                        </div>

                        {/*  Dirección  */}
                        <div className="col-md-12">
                          <label className="form-label">
                            Descripción de tu empresa *
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Descripcion"
                            defaultValue={store?.profile?.descripcion}
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
                        <h4 className="mb-4 mt-0">Tu foto de perfil</h4>
                        <div className="text-center">
                          {/* subir foto  */}

                          <div className="square position-relative display-2 mb-3 d-flex justify-content-center">
                            {img == "" ? (
                              <i className="fas fa-fw fa-user position-absolute top-50 start-50 mt-4 mb-5 translate-middle text-secondary"></i>
                            ) : (
                              <div className="col-md-4">
                                <img
                                  className="img-fluid rounded-start"
                                  src={img}
                                />
                              </div>
                            )}
                          </div>
                          {/* boton  */}
                          <div className="mt-5 pt-5">
                            <input
                              type="file"
                              id="customFile"
                              name="file"
                              onChange={uploadImg}
                            />
                            {/* <label
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
                            </button> */}
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
                  <div className="col-xxl-12 mb-12 mb-xxl-0">
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
                            defaultValue={store?.profile?.facebook}
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
                            defaultValue={store?.profile?.twitter}
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
                            defaultValue={store?.profile?.linkedin}
                          />
                        </div>
                        {/*Instagram  */}
                        <div className="col-md-6">
                          <label className="form-label">
                            <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                            Instagram *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            aria-label="Instagram"
                            defaultValue={store?.profile?.instagram}
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
                            defaultValue={store.profile.dribble}
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
                            defaultValue={store.profile.pinterest}
                          />
                        </div>
                      </div>{" "}
                      {/* fin de redes  */}
                    </div>
                  </div>

               
                </div>
                <div className="gap-3 d-md-flex justify-content-md-end text-center mb-5">
                  <button type="button" className="btn btn-danger btn-lg mb-3">
                    Eliminar Cuenta
                  </button>
                  <button type="button" className="btn btn-primary btn-lg mb-3">
                    Actualizar Cuenta
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

KitchenAccount.propTypes = {
  match: PropTypes.object,
};
