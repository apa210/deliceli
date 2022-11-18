import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/visibility.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const EditClientSchema = Yup.object().shape({
  user_name: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  first_name: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  last_name: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Email invalido")
    .required("Este campo es obligatorio"),
  telefono: Yup.string()
    .min(9, "Muy corto!")
    .max(10, "Muy extenso!")
    .required("Este campo es obligatorio"),
  direccion: Yup.string()
    .min(10, "Muy corto!")
    .max(50, "Muy extenso!")
    .required("Este campo es obligatorio"),
  facebook: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
  twitter: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
  linkedin: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
  instagram: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
  dribble: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
  pinterest: Yup.string().min(25, "Muy corto!").max(200, "Muy extenso!"),
});

export const ClientAccount = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [alertSuccess, set_alertSuccess] = useState("hidden");

  const buttonUpdate = (values) => {
    actions.uploadProfile(
      values.user_name,
      values.first_name,
      values.last_name,
      values.email,
      values.telefono,
      values.foto,
      values.direccion,
      values.facebook,
      values.twitter,
      values.linkedin,
      values.instagram,
      values.dribble,
      values.pinterest
    );
    if (alertSuccess != "show") {
      set_alertSuccess("show");
      setTimeout(() => {
        set_alertSuccess("hidden");
      }, 2000);
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
              <Formik
                initialValues={{
                  user_name: store?.profile?.user_name,
                  first_name: store?.profile?.first_name,
                  last_name: store?.profile?.last_name,
                  email: store?.profile?.email,
                  telefono: store?.profile?.telefono,
                  foto: "",
                  direccion: store?.profile?.direccion,
                  facebook: store?.profile?.facebook,
                  twitter: store?.profile?.twitter,
                  linkedin: store?.profile?.linkedin,
                  instagram: store?.profile?.instagram,
                  dribble: store.profile.dribble,
                  pinterest: store.profile.pinterest,
                }}
                validationSchema={EditClientSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  buttonUpdate(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="col-xxl-12 mb-5 mb-xxl-0">
                      <div className="bg-secondary-soft px-4 py-5 rounded">
                        <div className="row g-3">
                          <h4 className="mb-4 mt-0">Detalles de contacto</h4>

                          {/* Nombre  */}
                          <div className="col-md-6">
                            <label className="form-label">Nombre *</label>
                            <Field
                              name="first_name"
                              type="text"
                              className="form-control"
                            />
                            {errors.first_name && touched.first_name ? (
                              <div className="text-danger">
                                {errors.first_name}
                              </div>
                            ) : null}
                          </div>
                          {/* Apellido  */}
                          <div className="col-md-6">
                            <label className="form-label">Apellido *</label>
                            <Field
                              name="last_name"
                              type="text"
                              className="form-control"
                            />
                            {errors.last_name && touched.last_name ? (
                              <div className="text-danger">
                                {errors.last_name}
                              </div>
                            ) : null}
                          </div>
                          {/* Nombre de usuario  */}
                          <div className="col-md-6">
                            <label className="form-label">
                              Nombre de usuario *
                            </label>
                            <Field
                              name="user_name"
                              type="text"
                              className="form-control"
                            />
                            {errors.user_name && touched.user_name ? (
                              <div className="text-danger">
                                {errors.user_name}
                              </div>
                            ) : null}
                          </div>
                          {/* Celular  */}
                          <div className="col-md-6">
                            <label className="form-label">Celular *</label>
                            <Field
                              name="telefono"
                              type="text"
                              className="form-control"
                            />
                            {errors.telefono && touched.telefono ? (
                              <div className="text-danger">
                                {errors.telefono}
                              </div>
                            ) : null}
                          </div>
                          {/* Mail  */}
                          <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                              Mail *
                            </label>
                            <Field
                              name="email"
                              type="email"
                              className="form-control"
                            />
                            {errors.email && touched.email ? (
                              <div className="text-danger">{errors.email}</div>
                            ) : null}
                          </div>
                          {/*  Dirección  */}
                          <div className="col-md-6">
                            <label className="form-label">Dirección *</label>
                            <Field
                              name="direccion"
                              type="text"
                              className="form-control"
                            />
                            {errors.direccion && touched.direccion ? (
                              <div className="text-danger">
                                {errors.direccion}
                              </div>
                            ) : null}
                          </div>
                        </div>{" "}
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
                              <Field
                                name="facebook"
                                type="text"
                                className="form-control"
                              />
                              {errors.facebook && touched.facebook ? (
                                <div className="text-danger">
                                  {errors.facebook}
                                </div>
                              ) : null}
                            </div>
                            {/*Twitter  */}
                            <div className="col-md-6">
                              <label className="form-label">
                                <i className="fab fa-fw fa-twitter text-twitter me-2"></i>
                                Twitter *
                              </label>
                              <Field
                                name="twitter"
                                type="text"
                                className="form-control"
                              />
                              {errors.twitter && touched.twitter ? (
                                <div className="text-danger">
                                  {errors.twitter}
                                </div>
                              ) : null}
                            </div>
                            {/*Linkedin  */}
                            <div className="col-md-6">
                              <label className="form-label">
                                <i className="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>
                                Linkedin *
                              </label>
                              <Field
                                name="linkedin"
                                type="text"
                                className="form-control"
                              />
                              {errors.linkedin && touched.linkedin ? (
                                <div className="text-danger">
                                  {errors.linkedin}
                                </div>
                              ) : null}
                            </div>
                            {/*Instagram  */}
                            <div className="col-md-6">
                              <label className="form-label">
                                <i className="fab fa-fw fa-instagram text-instagram me-2"></i>
                                Instagram *
                              </label>
                              <Field
                                name="instagram"
                                type="text"
                                className="form-control"
                              />
                              {errors.instagram && touched.instagram ? (
                                <div className="text-danger">
                                  {errors.instagram}
                                </div>
                              ) : null}
                            </div>
                            {/*Dribble  */}
                            <div className="col-md-6">
                              <label className="form-label">
                                <i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>
                                Dribble *
                              </label>
                              <Field
                                name="dribble"
                                type="text"
                                className="form-control"
                              />
                              {errors.dribble && touched.dribble ? (
                                <div className="text-danger">
                                  {errors.dribble}
                                </div>
                              ) : null}
                            </div>
                            {/*Pinterest  */}
                            <div className="col-md-6">
                              <label className="form-label">
                                <i className="fab fa-fw fa-pinterest text-pinterest"></i>
                                Pinterest *
                              </label>
                              <Field
                                name="pinterest"
                                type="text"
                                className="form-control"
                              />
                              {errors.pinterest && touched.pinterest ? (
                                <div className="text-danger">
                                  {errors.pinterest}
                                </div>
                              ) : null}
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
                        <button
                          type="button"
                          className="btn btn-danger btn-lg mb-3"
                        >
                          Eliminar Cuenta
                        </button>
                        <button
                          type="submit"
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
                    </div>
                  </Form>
                )}
              </Formik>
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
