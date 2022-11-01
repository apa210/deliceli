import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Muestra alerta si hay campos vacios o incorrectos
  const [loginError, setLoginError] = useState("");
  const showAlert = useRef("");
  const closeModal = useRef();
  // 

  const { store, actions } = useContext(Context);

  const button_login = () => {
    actions.login(email, password);

    setTimeout(() => {
      if (store.auth === true) {
        navigate("/");
        closeModal.current.click();
        setEmail("");
        setPassword("");
      } else if (email == "" || password == "") {
        // Mensaje de alerta si hay campos vacíos
        setTimeout(() => {
          showAlert.current.classList.add("d-none");
        }, 3000);
        showAlert.current.classList.remove("d-none");
        setLoginError("Hay campos vacíos.");
      } else {
        // Mensaje de alerta si hay campos incorrectos
        setTimeout(() => {
          showAlert.current.classList.add("d-none");
        }, 3000);
        showAlert.current.classList.remove("d-none");
        setLoginError("Usuario y/o contraseña incorrectos.");
      }
    }, 1000);
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
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
                  <b>Inicio de Sesión</b>
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
                <img
                  className="w-25"
                  src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                  alt="Imagen de usuario"
                />
                {/* Inicio de campo Email */}
                <div className="input-group mt-3 w-75 mx-auto">
                  <label
                    className="input-group-text"
                    htmlFor="inputUserName"
                    id="inputGroup-sizing-lg"
                  >
                    <i className="fas fa-user"></i>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                    id="inputUserName"
                    placeholder="Email"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
                {/* fIN de campo Email */}

                {/* Inicio de campo contraseña */}
                <div className="input-group my-2 w-75 mx-auto">
                  <label
                    className="input-group-text"
                    htmlFor="inputPassword"
                    id="inputGroup-sizing-lg"
                  >
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Contraseña"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
                {/* fIN de campo contraseña */}
                
                <Link to="" className="text-center text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="text-center m-3">
                <button
                  onClick={button_login}
                  className="btn btn-primary w-75 col-12"
                  type="button"
                  aria-label="Close"
                >
                  Ingresar
                </button>
                <label className="mt-2">¿No estás registrado aún?</label>{" "}
                <Link
                  data-bs-target="#staticBackdropSignUp"
                  data-bs-toggle="modal"
                  to=""
                  className="text-decoration-none"
                >
                  ¡Regístrate ahora!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
