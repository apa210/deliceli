import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  lastName: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Email invalido")
    .required("Este campo es obligatorio"),
  user_name: Yup.string()
    .min(2, "Muy corto!")
    .max(20, "Muy extenso!")
    .required("Este campo es obligatorio"),
  phone: Yup.string()
    .min(9, "Muy corto!")
    .max(10, "Muy extenso!")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .min(8, "Muy corto!")
    .max(50, "Muy extenso!")
    .required("Este campo es obligatorio"),
  repitPassword: Yup.string().required("Este campo es obligatorio"),
});

//  Función que abre modal para registrar un nuevo usuario
export const SignUp = () => {
  const { store, actions } = useContext(Context);

  // estado que guarda mensaje de error
  const [loginError, setLoginError] = useState("");

  // estado que guarda mensaje de éxito
  const [loginEnd, setLoginEnd] = useState("");

  // useRef que acciona alerta de error
  const showAlert = useRef("");

  // useRef que acciona alerta de éxito
  const showAlertEnd = useRef("");

  // useRef que acciona boton de cerrar modal
  const closeModal = useRef();

  const button_signup = (value) => {
    // Verifica si las contraseñas coinciden
    if (value.password === value.repitPassword) {
      actions
        .signup(
          value?.firstName,
          value?.lastName,
          value?.email,
          value?.user_name,
          value.phone,
          value.password
        )
        .then(() => {
          // Verifica si el email no está registrado
          if (store.val == true) {
            // Mensaje de alerta de éxito por registro y cierre de modal
            setTimeout(() => {
              showAlertEnd.current.classList.add("d-none");
            }, 3000);
            showAlertEnd.current.classList.remove("d-none");
            setLoginEnd("Registro exitoso.");
            setTimeout(() => {
              closeModal.current.click();
              location.reload();
            }, 2000);
          }
          // Mensaje de alerta de error, si el email ya está registrado
          else {
            setTimeout(() => {
              showAlert.current.classList.add("d-none");
            }, 3000);
            showAlert.current.classList.remove("d-none");
            setLoginError("El email ya está registrado.");
          }
        });
    }
    // Mensaje de alerta de error, si las contraseñas no son iguales
    else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 5000);
      showAlert.current.classList.remove("d-none");
      setLoginError("Las contraseñas deben ser iguales.");
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdropSignUp"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* Inicio de Título */}
              <label>
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  <b>Registrarte</b>
                </h1>
              </label>
              {/* fIN de Título */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                ref={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div>
              <div className="modal-body text-center">
                {/* Inicio de mensaje de alerta de error */}
                <div
                  className="alert alert-danger d-none"
                  ref={showAlert}
                  role="alert"
                >
                  {loginError}
                </div>
                {/* fIN de mensaje de alerta de error */}
                {/* Inicio de alerta de éxito */}
                <div
                  className="alert alert-success d-none"
                  ref={showAlertEnd}
                  role="alert"
                >
                  {loginEnd}
                </div>
                {/* fIN de alerta de éxito */}
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    user_name: "",
                    phone: "",
                    password: "",
                    repitPassword: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    button_signup(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="input-group mb-3">
                        <div className="me-3">
                          <Field
                            name="firstName"
                            placeholder="Nombre"
                            className="form-control me-3"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="text-danger">
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <Field
                            name="lastName"
                            placeholder="Apellido"
                            className="form-control"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="text-danger">{errors.lastName}</div>
                          ) : null}
                        </div>
                      </div>
                      <Field
                        name="email"
                        type="email"
                        className="form-control mb-3"
                        placeholder="Correo electrónico"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}

                      <div className="input-group mb-3">
                        <div className="me-3">
                          <Field
                            name="user_name"
                            placeholder="Nombre de Usuario"
                            className="form-control"
                          />
                          {errors.user_name && touched.user_name ? (
                            <div className="text-danger">
                              {errors.user_name}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <Field
                            name="phone"
                            placeholder="Telefono"
                            className="form-control"
                          />
                          {errors.phone && touched.phone ? (
                            <div className="text-danger">{errors.phone}</div>
                          ) : null}
                        </div>
                      </div>

                      <Field
                        name="password"
                        type="password"
                        className="form-control mb-3"
                        placeholder="Contraseña"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-danger">{errors.password}</div>
                      ) : null}

                      <Field
                        name="repitPassword"
                        type="password"
                        className="form-control mb-3"
                        placeholder="Repita la contraseña"
                      />
                      {errors.repitPassword && touched.repitPassword ? (
                        <div className="text-danger">
                          {errors.repitPassword}
                        </div>
                      ) : null}

                      {/* Inicio de link para abrir modal de inicio sesión */}
                      <div>
                        <label className="mt-2">¿Ya tienes una cuenta?</label>{" "}
                        <Link
                          data-bs-target="#staticBackdrop"
                          data-bs-toggle="modal"
                          to=""
                          className="text-decoration-none"
                        >
                          Ingresa ahora
                        </Link>
                      </div>
                      {/* fIN de link para abrir modal de inicio sesión */}
                      <div className="text-center m-3 mb-4">
                        <button
                          className="btn btn-primary col-12 text-center"
                          type="submit"
                        >
                          Registrarse
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
