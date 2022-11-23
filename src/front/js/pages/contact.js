import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  departamento: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  telefono: Yup.string()
    .min(9, "Muy corto!")
    .max(10, "Muy extenso!")
    .required("Este campo es obligatorio"),
  mail: Yup.string()
    .email("Email invalido")
    .required("Este campo es obligatorio"),
  mensaje: Yup.string().max(250, "Muy extenso!"),
});

export const Contact = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  const [opcion, setOpcion] = useState("");

  // estado que guarda mensaje de error
  const [loginError, setLoginError] = useState("");

  // useRef que acciona alerta de error
  const showAlert = useRef("");

  // estado que guarda mensaje de éxito
  const [loginEnd, setLoginEnd] = useState("");

  // useRef que acciona alerta de éxito
  const showAlertEnd = useRef("");

  const button_submit = (value) => {
    if (opcion != "") {
      actions
        .savedContact(
          value.nombre,
          value.departamento,
          value.telefono,
          value.mail,
          opcion,
          value.mensaje
        )
        .then(() => {
          if (store.val_contact == true) {
            // Mensaje de alerta de éxito por el registro
            setTimeout(() => {
              showAlertEnd.current.classList.add("d-none");
              navigate("/");
            }, 5000);
            showAlertEnd.current.classList.remove("d-none");
            setLoginEnd("Se ha registrado exitosamente su contacto");
          }
          // Mensaje de alerta por email ya registrado
          else {
            setTimeout(() => {
              showAlert.current.classList.add("d-none");
            }, 3000);
            showAlert.current.classList.remove("d-none");
            setLoginError(
              "Este email ya ha enviado su contacto y sigue en revisión"
            );
          }
        });
    } else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 3000);
      showAlert.current.classList.remove("d-none");
      setLoginError("Tienes que elegir una opcion!!");
    }
  };

  // Al cargar la página, se desplaza hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Contactanos!</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-5">
          <div className="row">
            {/* Inicio de datos de DeliCeli  */}
            <div className="col-12 col-md-4 col-lg-4 mt-4">
              <div className="card">
                <img
                  src="https://cdn.winsightmedia.com/platform/files/public/800x420/chef-demo-cooking-saucing-dish.jpg"
                  className="card-img-top"
                />
                <div className="card-body p-5">
                  <h3 className="card-title">DeliCeli.uy</h3>
                  <p className="card-text">
                    Alimentación bio sin añadidos, sin gluten, vegana.
                    <br />
                    Rivera 3344, Apto 103, Oficina 134
                    <br />
                    Tel. +598 33 44 66
                    <br />
                    Mail. hola@deliceli.uy
                  </p>
                  <div className="col">
                    <h4 className="pt-4 pb-4">
                      <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                          <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook m-2"></i>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="https://instagram.com" target="_blank">
                            <i className="fab fa-instagram m-2"></i>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="https://linkedin.com" target="_blank">
                            <i className="fab fa-linkedin m-2"></i>
                          </a>
                        </li>
                        <li className="list-group-item">
                          <a href="https://web.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp m-2"></i>
                          </a>
                        </li>
                      </ul>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* fIN de datos de DeliCeli  */}
            <div className="col-lg-8 mt-4">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div>
                    <div className="card p-5">
                      <div className="text-left">
                        <h2>¿Cómo podemos ayudarte?</h2>
                        <p>
                          Por favor, cuéntanos un poco sobre ti para que podamos
                          personalizar tu experiencia de bienvenida.
                        </p>
                      </div>

                      {/* Inicio de mensaje de alerta */}
                      <div
                        className="alert alert-danger d-none"
                        ref={showAlert}
                        role="alert"
                      >
                        {loginError}
                      </div>

                      {/* Inicio de mensaje de registro exitoso */}
                      <div
                        className="alert alert-success d-none"
                        ref={showAlertEnd}
                        role="alert"
                      >
                        {loginEnd}
                      </div>

                      {/* Contacto */}
                      <div className="mt-3 d-flex flex-row gap-2">
                        <label className="radio">
                          <input
                            onChange={() => {
                              setOpcion("0");
                            }}
                            type="radio"
                            name="flexRadioDefault"
                            className="form-check-input"
                          />
                          <span>
                            <i className="fas fa-heart d-inline mx-2"></i>
                            Quiero vender mis platos
                          </span>
                        </label>
                        <label className="radio">
                          <input
                            onChange={() => {
                              setOpcion("1");
                            }}
                            type="radio"
                            name="flexRadioDefault"
                            className="form-check-input"
                          />
                          <span>
                            <i className="fas fa-utensils d-inline mx-2"></i>
                            Quiero comprar un plato
                          </span>
                        </label>
                      </div>

                      <hr />

                      <Formik
                        initialValues={{
                          nombre: "",
                          departamento: "",
                          telefono: "",
                          mail: "",
                          mensaje: "",
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={(values) => {
                          button_submit(values);
                        }}
                      >
                        {({ errors, touched }) => (
                          <Form>
                            <div className="mt-2">
                              <div className="form pb-3">
                                <label>
                                  <i className="fa fa-user  d-inline mx-2 "></i>
                                  Nombre Completo
                                </label>
                                <Field name="nombre" className="form-control" />
                                {errors.nombre && touched.nombre ? (
                                  <div className="text-danger">
                                    {errors.nombre}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div className="mt-2 pb-3">
                              <div className="form">
                                <label>
                                  <i className="fa fa-map  d-inline mx-2"></i>
                                  Departamento
                                </label>
                                <Field
                                  name="departamento"
                                  className="form-control"
                                />
                                {errors.departamento && touched.departamento ? (
                                  <div className="text-danger">
                                    {errors.departamento}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div className="mt-2 pb-3">
                              <div className="form">
                                <label>
                                  <i className="fa fa-phone  d-inline mx-2"></i>
                                  Teléfono
                                </label>
                                <div className="phone">
                                  <Field
                                    name="telefono"
                                    className="form-control"
                                  />
                                  {errors.telefono && touched.telefono ? (
                                    <div className="text-danger">
                                      {errors.telefono}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>

                            <div className="mt-2 pb-3">
                              <div className="form">
                                <label>
                                  <i className="fa fa-envelope  d-inline mx-2"></i>
                                  Correo Electrónico
                                </label>
                                <div className="mail pb-3">
                                  <Field name="mail" className="form-control" />
                                  {errors.mail && touched.mail ? (
                                    <div className="text-danger">
                                      {errors.mail}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12 pb-2">
                              <label>
                                <i className="fa fa-comment  d-inline mx-2"></i>
                                Mensaje
                              </label>
                              <Field
                                name="mensaje"
                                className="form-control"
                                placeholder="Escribe un mensaje"
                              />
                              {errors.mensaje && touched.mensaje ? (
                                <div className="text-danger">
                                  {errors.mensaje}
                                </div>
                              ) : null}
                            </div>

                            <button
                              className="btn btn-primary text-center"
                              type="submit"
                            >
                              Enviar Contacto
                            </button>
                          </Form>
                        )}
                      </Formik>

                      {/* Contacto */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

Contact.propTypes = {
  match: PropTypes.object,
};
