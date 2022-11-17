import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/visibility.css";

export const ClientAccount = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [user_name, set_user_name] = useState("");
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [telefono, set_telefono] = useState("");
  const [img, setImg] = useState("");
  const [direccion, set_direccion] = useState("");
  const [facebook, set_facebook] = useState("");
  const [twitter, set_twitter] = useState("");
  const [linkedin, set_linkedin] = useState("");
  const [instagram, set_instagram] = useState("");
  const [dribble, set_dribble] = useState("");
  const [pinterest, set_pinterest] = useState("");
  const [descripcion, set_descripcion] = useState("");

  const [alertText_err, set_alertText_err] = useState("hidden");
  const [alertSuccess, set_alertSuccess] = useState("hidden");

  const buttonUpdate = () => {
    if (
      user_name === "" &&
      first_name === "" &&
      last_name === "" &&
      email === ""
    ) {
      if (alertText_err !== "show") {
        set_alertText_err("show");
        setTimeout(() => {
          set_alertText_err("hidden");
        }, 3500);
      }
    } else {
      actions.uploadProfile(
        user_name,
        first_name,
        last_name,
        email,
        telefono,
        img,
        direccion,
        facebook,
        twitter,
        linkedin,
        instagram,
        dribble,
        pinterest,
        descripcion
      );
      if (alertSuccess != "show") {
        set_alertSuccess("show");
        setTimeout(() => {
          set_alertSuccess("hidden");
        }, 2000);
      }
    }
  };

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
    // No da acceso a la cuenta del cliente sin estar logueado
    if (store.auth == false) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    } else {
      set_user_name(store?.profile?.user_name);
      set_first_name(store?.profile?.first_name);
      set_last_name(store?.profile?.last_name);
      set_email(store?.profile?.email);
      set_telefono(store?.profile?.telefono);
      setImg(store?.profile?.foto_usuario);
      set_direccion(store?.profile?.direccion);
      set_facebook(store?.profile?.facebook);
      set_twitter(store?.profile?.twitter);
      set_linkedin(store?.profile?.linkedin);
      set_instagram(store?.profile?.instagram);
      set_dribble(store.profile.dribble);
      set_pinterest(store.profile.pinterest);
      set_descripcion(store?.profile?.descripcion);
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
                  <i className="fas fa-cog d-inline mx-2"></i> Datos de tu
                  cuenta
                </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand">
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

              {/*Contacto  */}
              <div className="col-xxl-12 mb-5 mb-xxl-0">
                <div className="bg-secondary-soft px-4 py-5 rounded">
                  <div className="row g-3">
                    <h4 className="mb-4 mt-0">Detalles de contacto</h4>

                    {/* Nombre  */}
                    <div className="col-md-6">
                      <label className="form-label">Nombre *</label>
                      <input
                        onChange={(e) => set_first_name(e.target.value)}
                        value={first_name}
                        type="text"
                        className="form-control"
                        aria-label="Nombre"
                      />
                    </div>
                    {/* Apellido  */}
                    <div className="col-md-6">
                      <label className="form-label">Apellido *</label>
                      <input
                        onChange={(e) => set_last_name(e.target.value)}
                        value={last_name}
                        type="text"
                        className="form-control"
                        aria-label="Apellido"
                      />
                    </div>
                    {/* Nombre de usuario  */}
                    <div className="col-md-6">
                      <label className="form-label">Nombre de usuario *</label>
                      <input
                        onChange={(e) => set_user_name(e.target.value)}
                        value={user_name}
                        type="text"
                        className="form-control"
                        aria-label="Nombre_usuario"
                      />
                    </div>
                    {/* Celular  */}
                    <div className="col-md-6">
                      <label className="form-label">Celular *</label>
                      <input
                        onChange={(e) => set_telefono(e.target.value)}
                        value={telefono}
                        type="text"
                        className="form-control"
                        aria-label="Celular"
                      />
                    </div>
                    {/* Mail  */}
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Mail *
                      </label>
                      <input
                        onChange={(e) => set_email(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    {/*  Dirección  */}
                    <div className="col-md-6">
                      <label className="form-label">Dirección *</label>
                      <input
                        onChange={(e) => set_direccion(e.target.value)}
                        value={direccion}
                        type="text"
                        className="form-control"
                        aria-label="Direccion"
                      />
                    </div>
                  </div>{" "}
                  {/* fin del formulario  */}
                </div>
              </div>
              {/* Dirección  */}

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
                          onChange={(e) => set_facebook(e.target.value)}
                          value={facebook}
                          type="text"
                          className="form-control"
                          aria-label="Facebook"
                        />
                      </div>
                      {/*Twitter  */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="fab fa-fw fa-twitter text-twitter me-2"></i>
                          Twitter *
                        </label>
                        <input
                          onChange={(e) => set_twitter(e.target.value)}
                          value={twitter}
                          type="text"
                          className="form-control"
                          aria-label="Twitter"
                        />
                      </div>
                      {/*Linkedin  */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>
                          Linkedin *
                        </label>
                        <input
                          onChange={(e) => set_linkedin(e.target.value)}
                          value={linkedin}
                          type="text"
                          className="form-control"
                          aria-label="Linkedin"
                        />
                      </div>
                      {/*Instagram  */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                          Instagram *
                        </label>
                        <input
                          onChange={(e) => set_instagram(e.target.value)}
                          value={instagram}
                          type="text"
                          className="form-control"
                          aria-label="Instagram"
                        />
                      </div>
                      {/*Dribble  */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>
                          Dribble *
                        </label>
                        <input
                          onChange={(e) => set_dribble(e.target.value)}
                          value={dribble}
                          type="text"
                          className="form-control"
                          aria-label="Dribble"
                        />
                      </div>
                      {/*Pinterest  */}
                      <div className="col-md-6">
                        <label className="form-label">
                          <i className="fab fa-fw fa-pinterest text-pinterest"></i>
                          Pinterest *
                        </label>
                        <input
                          onChange={(e) => set_pinterest(e.target.value)}
                          value={pinterest}
                          type="text"
                          className="form-control"
                          aria-label="Pinterest"
                        />
                      </div>
                    </div>{" "}
                    {/* fin de redes  */}
                  </div>
                </div>

                <div className="gap-3 d-md-flex justify-content-md-end text-center mb-5">
                  <Link to={"/pages/change-pass"}>
                    <button className="btn btn-secondary btn-lg mb-3">
                      Cambiar contraseña
                    </button>
                  </Link>
                  <button type="button" className="btn btn-danger btn-lg mb-3">
                    Eliminar Cuenta
                  </button>
                  <button
                    onClick={buttonUpdate}
                    type="button"
                    className="btn btn-primary btn-lg mb-3"
                  >
                    Actualizar Cuenta
                  </button>
                </div>
                <div
                  className={"alert alert-success " + alertSuccess}
                  role="alert"
                >
                  Se ha guardado con exito los cambios de la cuenta
                </div>
                <div
                  className={"alert alert-danger " + alertText_err}
                  role="alert"
                >
                  Hay campos vacíos, debes completar todos los campos
                  obligatorios!
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

ClientAccount.propTypes = {
  match: PropTypes.object,
};
