import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const SignUp = () => {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [user_name, set_user_name] = useState("");
  const [phone, set_phone] = useState("");
  const [password, set_password] = useState("");
  const [repitPassword, set_repitPassword] = useState("");

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const button_signup = () => {
    if (password == repitPassword) {
      if (
        first_name != "" &&
        last_name != "" &&
        email != "" &&
        user_name != "" &&
        phone != "" &&
        password != "" &&
        repitPassword != ""
      ) {
        actions.signup(
          first_name,
          last_name,
          email,
          user_name,
          phone,
          password
        );

        set_first_name("");
        set_last_name("");
        set_email("");
        set_user_name("");
        set_phone("");
        set_password("");
        set_repitPassword("");
      } else {
        alert("Completa todos los campos!");
      }
    } else {
      alert("Las contraseñas tienen que ser iguales");
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
              <label>
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  <b>Registrarte</b>
                </h1>
              </label>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <div className="modal-body text-center">
                <div className="input-group mb-3">
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
                </div>
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
                </div>
                <div className="input-group mb-3">
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
                </div>
                <div className="mb-3">
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
                </div>
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
