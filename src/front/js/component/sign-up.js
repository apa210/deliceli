import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SignUp = () => {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [user_name, set_user_name] = useState("");
  const [phone, set_phone] = useState("");
  const [password, set_password] = useState("");
  const [repitPassword, set_repitPassword] = useState("");

  // Muestra alerta si hay campos vacios o incorrectos
  const [loginError, setLoginError] = useState("");
  const [loginEnd, setLoginEnd] = useState("");
  const showAlert = useRef("");
  const showAlertEnd = useRef("");
  const closeModal = useRef();
  //

  const { store, actions } = useContext(Context);

  const button_signup = () => {
    if (password == repitPassword || password == "" || repitPassword == "") {
      if (
        first_name != "" &&
        last_name != "" &&
        email != "" &&
        user_name != "" &&
        phone != "" &&
        password != "" &&
        repitPassword != ""
      ) {
        actions
          .signup(first_name, last_name, email, user_name, phone, password)
          .then(() => {
            if (store.val == true) {
              set_first_name("");
              set_last_name("");
              set_email("");
              set_user_name("");
              set_phone("");
              set_password("");
              set_repitPassword("");

              // Mensaje de alerta por registro exitoso
              setTimeout(() => {
                showAlertEnd.current.classList.add("d-none");
              }, 3000);
              showAlertEnd.current.classList.remove("d-none");
              setLoginEnd("Registro exitoso.");
              setTimeout(() => {
                closeModal.current.click();
                location.reload();
              }, 2000);
            } else {
              // Mensaje de alerta por email ya registrado
              setTimeout(() => {
                showAlert.current.classList.add("d-none");
              }, 3000);
              showAlert.current.classList.remove("d-none");
              setLoginError("El email ya está registrado.");
            }
          });
      } else {
        // Mensaje de alerta si hay campos vacíos
        setTimeout(() => {
          showAlert.current.classList.add("d-none");
        }, 3000);
        showAlert.current.classList.remove("d-none");
        setLoginError("Debe completar todos los campos.");
      }
    } else {
      // Mensaje de alerta si hay campos incorrectos
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
                {/* Inicio de mensaje de alerta */}
                <div
                  className="alert alert-danger d-none"
                  ref={showAlert}
                  role="alert"
                >
                  {loginError}
                </div>
                {/* fIN de mensaje de alerta */}
                {/* Inicio de mensaje de registro exitoso */}
                <div
                  className="alert alert-success d-none"
                  ref={showAlertEnd}
                  role="alert"
                >
                  {loginEnd}
                </div>
                {/* fIN de mensaje de registro exitoso */}
                <div className="input-group mb-3">
                  {/* Inicio de campo Nombre */}
                  <input
                    value={first_name}
                    onChange={(e) => set_first_name(e.target.value)}
                    required
                    type="text"
                    className="form-control me-3"
                    id="inputFirstName"
                    placeholder="Nombre"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo Nombre */}

                  {/* Inicio de campo Apellido */}
                  <input
                    value={last_name}
                    onChange={(e) => set_last_name(e.target.value)}
                    required
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Apellido"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo Apellido */}
                </div>
                {/* Inicio de campo Email */}
                <div className="mb-3">
                  <input
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                    required
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Correo electrónico"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo Email */}
                </div>
                <div className="input-group mb-3">
                  {/* Inicio de campo Nombre de usuario */}
                  <input
                    value={user_name}
                    onChange={(e) => set_user_name(e.target.value)}
                    required
                    type="text"
                    className="form-control me-3"
                    id="inputUserNameSignUp"
                    placeholder="Nombre de usuario"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo Nombre de usuario */}

                  {/* Inicio de campo Teléfono */}
                  <input
                    value={phone}
                    onChange={(e) => set_phone(e.target.value)}
                    required
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Teléfono"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo Teléfono */}
                </div>
                <div className="mb-3">
                  {/* Inicio de campo contraseña */}
                  <input
                    value={password}
                    onChange={(e) => set_password(e.target.value)}
                    required
                    type="password"
                    className="form-control"
                    id="inputPasswordSignUp"
                    placeholder="Contraseña"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                  {/* fIN de campo contraseña */}
                </div>
                {/* Inicio de campo repetir contraseña */}
                <input
                  value={repitPassword}
                  onChange={(e) => set_repitPassword(e.target.value)}
                  required
                  type="password"
                  className="form-control"
                  id="inputConfirmationPassword"
                  placeholder="Repita la contraseña"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
                {/* fIN de campo repetir contraseña */}
                <label className="mt-2">¿Ya tienes una cuenta?</label>{" "}
                {/* Inicio de link para abrir modal de inicio sesión */}
                <Link
                  data-bs-target="#staticBackdrop"
                  data-bs-toggle="modal"
                  to=""
                  className="text-decoration-none"
                >
                  Ingresa ahora
                </Link>
                {/* fIN de link para abrir modal de inicio sesión */}
              </div>
              <div className="text-center m-3 mb-4">
                <button
                  onClick={button_signup}
                  className="btn btn-primary w-25 col-12"
                >
                  Registrarte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
