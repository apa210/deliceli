import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Checkout = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
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
            {/* Detalles de contacto */}
            <div className="col-6">
              {/*Contacto  */}

              <h4 className="mb-4 mt-5">Detalles de contacto</h4>

              {/* Nombre  */}

              <label className="form-label">Nombre *</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Nombre"
                defaultValue={store.profile.first_name}
              />

              {/* Apellido  */}

              <label className="form-label">Apellido *</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Apellido"
                defaultValue={store.profile.last_name}
              />

              {/* Nombre de usuario  */}

              {/* Celular  */}

              <label className="form-label">Celular *</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Celular"
                defaultValue={store.profile.telefono}
              />

              {/* Mail  */}

              <label htmlFor="inputEmail4" className="form-label">
                Mail *
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                defaultValue={store.profile.email}
              />

              {/*  Dirección  */}

              <label className="form-label">Dirección *</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Direccion"
                defaultValue={store.profile.direccion}
              />

              <label className="form-label">Departamento *</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Direccion"
                defaultValue={store.profile.direccion}
              />

              <label className="form-label">Comentarios del envio </label>
              <textarea
                type="text"
                className="form-control"
                aria-label="Descripcion"
                placeholder="Escribi acá tu mensaje ..."
              />

              {/* fin del formulario  */}
            </div>
            {/* Detalles de contacto */}

            {/* Detalles de contacto */}
            <div className="col">
              <h4 className="mb-4 mt-5">Envío y datos de pago</h4>

              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Pago en efectivo
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      PagoEfectivo es el medio de pago para comprar por internet
                      y pagar sin tarjeta. Realiza depósitos en efectivo en
                      agencias o agentes o pagá tu entrega al repartidor.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Transferencia bancaria directa
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Realiza tu pago directamente en nuestra cuenta bancaria.
                      Tienes tiempo de hacerlo hasta 30 minutos después del
                      pedido. Por favor, usa el número del pedido como
                      referencia de pago y envía foto del comprobante de
                      depósito a nuestro whatsapp. Tu pedido no se procesará
                      hasta que se haya recibido el importe en nuestra cuenta.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Pago con tarjetas mediante MERCADO PAGO
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <img src="https://sintropia.com.uy/desarrollo/mpago.png" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg mb-3 mt-4"
              >
                Realizar pago
              </button>
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
