import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

export const OrderRejected = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">
              El pedido no se ha podido completar!
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
                  <h2>DeliCeli.uy </h2>
                  <h5> Alimentación bio sin añadidos, sin gluten, vegana.</h5>
                  <p className="card-text">
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

            <div className="col-8 mt-4">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div>
                    <div className="card p-5">
                      <div className="text-left">
                        <div className="alert alert-danger" role="alert">
                          Algo salió mal con tu pedido!
                        </div>
                        <p>
                          <h5>Vuleve a intentar completar la compra. </h5>
                         
                     
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer_contact />
    </>
  );
};

OrderRejected.propTypes = {
  match: PropTypes.object,
};
