import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

export const OrderConfirmed = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const button_submit = () => {
    console.log("formulario enviado");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">
              Tu pedido se realizó con éxito!
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-5 pt-5 pb-5">
          <div className="row">
            {/* card  */}
            <div className="col mt-4">
              <div className="card">
                <img
                  src="https://www.gizchina.com/wp-content/uploads/images/2022/07/delivery-riders.jpg"
                  className="card-img-top"
                />
                <div className="card-body p-5">
                  <h2>¡ Gracias por tu pedido en deliceli.uy! </h2>
                  <h5>Está en camino! </h5>
                  <p className="card-text">
                    Alimentación bio sin añadidos, sin gluten, vegana.
                    <br />
                    Rivera 3344, Apto 103, Oficina 134
                    <br />
                    Tel. +598 33 44 66
                    <br />
                    Mail. hola@deliceli.uy
                  </p>
                  <h4 className="pt-4 pb-4">
                    <i className="fab fa-facebook m-2"></i>
                    <i className="fab fa-instagram m-2"></i>
                    <i className="fab fa-linkedin m-2"></i>
                    <i className="fab fa-whatsapp m-2"></i>
                  </h4>
                </div>
              </div>
            </div>

            <Link to="/pages/orders" className="col-8 mt-4 text-decoration-none">
              Tu pedido se realizó con éxito!!
              <br/>
              Puedes verlo presionando esta alerta
            </Link>
            {/* <div className="col-8 mt-4">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div>
                    <div className="card p-5">
                      <div className="text-left">
                        <h2> Número de pedido: #R562904483</h2>
                        <div>
                          Tenemos una noticia que te va a encantar: nuestra
                          paloma mensajera se dirige rauda y veloz a su destino.
                          Ahora mismo está viajando hacia la dirección de envío
                          y debería llegar el:
                          <br />
                          <br />
                          <div className="alert alert-primary" role="alert">
                            2 de marzo de 2022. Pedido #R562904483
                          </div>
                          <br />
                          <h2> Dirección de envío de tu pedido.</h2>
                          Enviaremos tu pedido a:
                          <br />
                          <br />
                          <div className="alert alert-primary" role="alert">
                            Aparicio Baptista
                            <br />
                            Calle 13 - Numero 34 - Piso 2, esq. Calle 4
                            <br/>La Paloma , Rocha Uruguay
                          </div>
                          <br />
                          Precio: $48.98 <br />
                          Subtotal: $97.96<br/>
                          Gastos de envío: $7.99
                          <br />
                          Descuento: $-24.50 <br/>
                          <hr />
                          Total: $81.45 <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer_contact />
    </>
  );
};

OrderConfirmed.propTypes = {
  match: PropTypes.object,
};
