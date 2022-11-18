import React from "react";
import { Link } from "react-router-dom";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontalOrders = () => {
  return (
    <>
      <section>
        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src="https://www.honestfoodtalks.com/wp-content/uploads/2021/11/Top-cooking-channels-1024x1024.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-9">
              <div className="card-body p-4">
                <h3 className="card-title">Número de pedido: #R562904483</h3>
                <div className="text-muted mb-2">
                  <h4> La Cocina de Milena Sin Gluten</h4>
                </div>
                <p className="card-text">
                  <li>Medialunas sin gluten rellenas de jamon y queso</li>
                  <li>Pascualina Sin Gluten</li>
                  <li>Brownie de Chocolate sin Gluten</li>
                </p>
                <h4>Total del pedido - $ 350</h4>
                {/* <button type="button" className="btn btn-primary me-2">
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>
                        Repetir pedido
                      </button> */}
                <span> ESTADO DEL PEDIDO:  </span>
                <button type="button" className="btn btn-danger me-2" disabled>
                  Pedido Cancelado
                </button>
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  disabled
                >
                  Pedido Pendiente
                </button>
                <button
                  type="button"
                  className="btn btn-success me-2 mt-2 mb-2 text-light"
                  disabled
                >
                  Pedido Confirmado
                </button>
                <button
                  type="button"
                  className="btn btn-primary me-2 mt-2 mb-2"
                  disabled
                >
                  Pedido Entregado
                </button>
                <button type="button" className="btn btn-outline-danger">
                  
                  Cancelar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCardHorizontalOrders;
