import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PaySchema = Yup.object().shape({
  direccion: Yup.string().min(3, "Dirreccion muy corta").required(),
  mensaje: Yup.string().max(250, "Mensaje muy largo!").required(),
});

export const Checkout = () => {
  const { store, actions } = useContext(Context);

  // estado que guarda mensaje de error
  const [loginError, setLoginError] = useState("");

  // useRef que acciona alerta de error
  const showAlert = useRef("");

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [option, setOption] = useState("");

  const pay = async (value) => {
    if (option != "") {
      console.log(option);
      console.log(value);

      if (option == "mercadoPago") {
        await actions.pagoMercadoPago();
        await actions.confirmPurchase(value.mensaje, option, value.direccion)
        window.location.href = store.mercadopago?.init_point;
      }
      else if (option == "efectivo") {
        await actions.confirmPurchase(value.mensaje, option, value.direccion)
        navigate("/pages/order-confirmed")
      }
      else if (option == "transferenciaBancaria") {
        await actions.confirmPurchase(value.mensaje, option, value.direccion)
        navigate("/pages/order-confirmed")
      }
      //

      //
    } else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 3000);
      showAlert.current.classList.remove("d-none");
      setLoginError("Tienes que elegir una opcion de pago!!");
    }
  };

  useEffect(() => {
    if (store.auth == false) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    } else {
      setFirstName(store.profile.first_name);
      setLastName(store.profile.last_name);
      setPhone(store.profile.telefono);
      setEmail(store.profile.email);
    }
    // Al cargar la página, se desplaza hacia arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-about2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Página de pago</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
          
            <div className="col-12 col-md-6 col-lg-6">
              <h4 className="mb-4 mt-5">Formas de pago</h4>

              {/* _________ */}

              <div className="container mt-3">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <div
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                        id="accordion1btn"
                      >
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          name="tipos-pago"
                          id="chkAccordion1All"
                          onChange={() => {
                            setOption("mercadoPago");
                          }}
                        />
                        Pago con tarjetas mediante MERCADO PAGO
                      </button>
                    </div>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body ms-3">
                        <img src="https://sintropia.com.uy/desarrollo/mpago.png" />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        <div className="form-check mt-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="tipos-pago"
                            id="chkAccordion2All"
                            onChange={() => {
                              setOption("efectivo");
                            }}
                          />
                        </div>
                        Pago Efectivo
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body ms-3">
                        Pago Efectivo es el medio de pago para comprar por
                        internet y pagar sin tarjeta. <br />
                        <br /> Realiza depósitos en efectivo en agencias o
                        agentes o pagá tu entrega al repartidor.
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        <div className="form-check mt-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="tipos-pago"
                            id="chkAccordion3All"
                            onChange={() => {
                              setOption("transferenciaBancaria");
                            }}
                          />
                        </div>
                        Transferencia bancaria directa
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body ms-3">
                        Realiza tu pago directamente en nuestra cuenta bancaria.
                        Tienes tiempo de hacerlo hasta 30 minutos después del
                        pedido. <br />
                        <br />
                        Por favor, usa el número del pedido como referencia de
                        pago y envía foto del comprobante de depósito a nuestro
                        whatsapp. <br /> <br />
                        Tu pedido no se procesará hasta que se haya recibido el
                        importe en nuestra cuenta.
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Detalles de contacto */}


              {/* Detalles de contacto */}
              <div className="col-12 col-md-6 col-lg-6">
              {/*Contacto  */}

              <h4 className="mb-4 mt-5">Detalles de contacto</h4>

              {/* Nombre  */}

              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                defaultValue={firstName}
                disabled
              />

              {/* Apellido  */}

              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                defaultValue={lastName}
                disabled
              />

              {/* Nombre de usuario  */}

              {/* Celular  */}

              <label className="form-label">Celular</label>
              <input
                type="text"
                className="form-control"
                defaultValue={phone}
                disabled
              />

              {/* Mail  */}

              <label htmlFor="inputEmail4" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                defaultValue={email}
                disabled
              />

              {/*  Dirección  */}

              <Formik
                initialValues={{
                  direccion: store?.profile?.direccion,
                  mensaje: "",
                }}
                validationSchema={PaySchema}
                onSubmit={(values) => {
                  pay(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <label className="form-label">Dirección *</label>
                    <Field
                      name="direccion"
                      type="text"
                      className="form-control"
                    />
                    {errors.direccion && touched.direccion ? (
                      <div className="text-danger">{errors.direccion}</div>
                    ) : null}

                    <label className="form-label">
                      Comentarios del envio *
                    </label>
                    <Field
                      name="mensaje"
                      type="text"
                      className="form-control"
                      placeholder="Escribi acá tu mensaje ..."
                    />
                    {errors.mensaje && touched.mensaje ? (
                      <div className="text-danger">{errors.mensaje}</div>
                    ) : null}

                   <div className="text-end"> <button
                      type="submit"
                      className="btn btn-primary btn-lg mb-3 mt-4"
                    >
                      Realizar pago
                    </button> 

                    </div>

                      {/* alerta */}
            <div
              className="alert alert-danger d-none"
              ref={showAlert}
              role="alert"
            >
              {loginError}
            </div>

                  </Form>
                )}
              </Formik>
            </div>

          
            {/* Detalles de contacto */}


          </div>
        </div>
      </section>

      <div className="gap-3 d-md-flex justify-content-md-end text-center mb-5"></div>

      <hr style={{ width: "100%" }} />
    </>
  );
};

Checkout.propTypes = {
  match: PropTypes.object,
};
