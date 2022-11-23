import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ProductCardHorizontalOrders = (props) => {
  const { store, actions } = useContext(Context);

  const cancelOrder = () => {
    actions?.cancelOrderClient(props?.obj?.pedido?.id);
  };
  return (
    <>
      <section>
        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-9 col-lg-12">
              <div className="card-header bg-dark text-light">
                <h4 className="card-title">
                  Número de pedido: #R{props?.obj?.pedido?.id}
                </h4>
              </div>

              <div className="card-body p-4">
                <div class="container">
                  <div class="row">
                    <div class="col-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
                        width="80"
                      />
                    </div>
                    <div class="col">
                    
                      <Link
                        to={"/pages/single-kitchen/" + props.obj?.cocina?.id}
                        className="text-muted mb-2"
                        style={{ textDecoration: "none" }}
                      >
                        <h4>La Cocina de {props?.obj?.cocina?.user_name}</h4>
                      </Link>
                      Teléfono: {props.obj?.cocina?.telefono}{" "}
                    </div>


                    <div className="col-4">
                      <div className="alert alert-success" role="alert">
                      <h6>{props?.obj?.pedido?.fecha}</h6>
                      </div>
                    </div>



                  </div>
                </div>

                <hr/>

                <ul className="card-text">
                  <li>Nombre del producto: {props?.obj?.producto?.nombre}</li>
                  <li>Cantidad: {props?.obj?.carrito?.cantidad_carrito}</li>
                  <li>
                    Precio unitario: {props?.obj?.carrito?.precio_unitario}
                  </li>
                  {/* <li>Medialunas sin gluten rellenas de jamon y queso</li>
                  <li>Pascualina Sin Gluten</li>
                  <li>Brownie de Chocolate sin Gluten</li> */}
                </ul>

                {/* <button type="button" className="btn btn-primary me-2">
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>
                        Repetir pedido
                      </button> */}
                <span> ESTADO DEL PEDIDO: </span>
                {props?.obj?.pedido?.estado === "pendiente" ? (
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    disabled
                  >
                    Pedido Pendiente
                  </button>
                ) : null}
                {props?.obj?.pedido?.estado === "cancelado" ||
                props?.obj?.pedido?.estado === "cancelado_user" ? (
                  <button
                    type="button"
                    className="btn btn-danger me-2"
                    disabled
                  >
                    Pedido Cancelado
                  </button>
                ) : null}
                {props?.obj?.pedido?.estado === "confirmado" ? (
                  <button
                    type="button"
                    className="btn btn-success me-2 mt-2 mb-2 text-light"
                    disabled
                  >
                    Pedido Confirmado
                  </button>
                ) : null}
                {props?.obj?.pedido?.estado === "entregado" ? (
                  <button
                    type="button"
                    className="btn btn-primary me-2 mt-2 mb-2"
                    disabled
                  >
                    Pedido Entregado
                  </button>
                ) : null}

                {props?.obj?.pedido?.estado === "cancelado_user" ||
                props?.obj?.pedido?.estado !== "pendiente" ? null : (
                  <button
                    onClick={() => cancelOrder()}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Cancelar
                  </button>
                )}
              </div>

              <div class="card-footer text-end">
                <h4>Total del pedido - $ {props?.obj?.carrito?.total}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCardHorizontalOrders;
