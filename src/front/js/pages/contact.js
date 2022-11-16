import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [opcion, setOpcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  // estado que guarda mensaje de error
  const [loginError, setLoginError] = useState("");

  // useRef que acciona alerta de error
  const showAlert = useRef("");

  // estado que guarda mensaje de éxito
  const [loginEnd, setLoginEnd] = useState("");

  // useRef que acciona alerta de éxito
  const showAlertEnd = useRef("");

  const button_submit = () => {
    // Verifica si hay campos vacíos
    if (
      nombre != "" &&
      departamento != "" &&
      telefono != "" &&
      mail != "" &&
      opcion != "" &&
      mensaje != ""
    ) {
      console.log(nombre, departamento, telefono, mail, opcion, mensaje);
      actions
        .savedContact(nombre, departamento, telefono, mail, opcion, mensaje)
        .then(() => {
          if (store.val_contact == true) {
            // limpieza de inputs
            setNombre("");
            setDepartamento("");
            setTelefono("");
            setMail("");
            setOpcion("");
            setMensaje("");

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
            setLoginError("Este email ya ha enviado su contacto");
          }
        });
    } 
    // Mensaje de alerta si hay campos sin completar
    else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 3000);
      showAlert.current.classList.remove("d-none");
      setLoginError("Hay campos sin completar!");
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
            <div className="col mt-4">
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

                      <div className="mt-2">
                        <div className="form pb-3">
                          <label>
                            <i className="fa fa-user  d-inline mx-2 "></i>Nombre
                            Completo
                          </label>
                          <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-map  d-inline mx-2"></i>
                            Departamento
                          </label>
                          <input
                            value={departamento}
                            onChange={(e) => setDepartamento(e.target.value)}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-phone  d-inline mx-2"></i>
                            Teléfono
                          </label>
                          <div className="phone">
                            <input
                              value={telefono}
                              onChange={(e) => setTelefono(e.target.value)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 pb-3">
                        <div className="form">
                          <label>
                            <i className="fa fa-envelope  d-inline mx-2"></i>
                            Mail
                          </label>
                          <div className="mail pb-3">
                            <input
                              value={mail}
                              onChange={(e) => setMail(e.target.value)}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 pb-2">
                        <label>
                          <i className="fa fa-comment  d-inline mx-2"></i>
                          Mensaje
                        </label>
                        <textarea
                          value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          type="text"
                          className="form-control"
                          aria-label="Descripcion"
                          placeholder="Escribi acá tu mensaje ..."
                        />
                      </div>

                      <div className="mt-3">
                        <button
                          onClick={button_submit}
                          className="button btn btn-primary w-100 d-flex justify-content-center align-items-center"
                        >
                          <span>Enviar mensaje</span>
                        </button>
                      </div>
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
