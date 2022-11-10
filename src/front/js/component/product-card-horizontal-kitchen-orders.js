import React from "react";
import { Link } from "react-router-dom";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontalKitchenOrders = () => {
  return (
  
  

      <>
      <section>
           {/* producto  */}

           <div className="card mb-5 mt-5">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://lookaside.fbsbx.com/elementpath/media/?media_id=457061438537956&version=1637849981"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h2 className="card-title">Pedido Nro #000345</h2>

                      <div className="text-muted mb-2">
                        {" "}
                        Pedido de Noelia Irace{" "}
                      </div>

                      <p className="card-text">
                        <li>Medialunas sin gluten rellenas de jamon y queso</li>
                        <li>Pascualina Sin Gluten</li>
                        <li>Brownie de Chocolate sin Gluten</li>
                      </p>

                      <h4>Total del pedido - $ 350</h4>
                      <button type="button" className="btn btn-danger me-2">
                        Pedido Pendiente
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning me-2 mt-2 mb-2"
                      >
                        Pedido Confirmado{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-success me-2 mt-2 mb-2"
                      >
                        Pedido Entregado{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* producto  */}

              </section>
    </>
  );
};

export default ProductCardHorizontalKitchenOrders;
