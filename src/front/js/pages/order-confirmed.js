import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer_contact from "../component/footer_contact";

export const OrderConfirmed = () => {
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

            <Link to="/pages/orders" className="alert alert-success col-8 mt-4 text-decoration-none p-5" style={{maxHeight: "280px"}}  role="alert">
              <h4 className="alert-heading">Tu pedido se realizó con éxito!</h4><hr/>
              <p>
                Hemos recibido tu pedido, puedes verificar su estado y conseguir
                el contacto de la cocina en la vista de tus pedidos
              </p>

              <button className="btn btn-primary btn-lg mb-3 mt-1">
                    Ver detalles del pedido.
                    </button> 
              


           

            </Link>
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
