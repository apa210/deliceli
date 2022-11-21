import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ProductCardHorizontalOrders = (props) => {
  console.log(props.obj);
  const { store, actions } = useContext(Context);

  const cancelOrder = () => {
    actions?.cancelOrderClient(props?.obj?.pedido?.id)
  }
  return (
    <>
      <section>
        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-9">
              <div className="card-body p-4">
                <h3 className="card-title">
                  Número de pedido: #R{props?.obj?.pedido?.id}
                </h3>
                <div className="text-muted mb-2">
                  <h6>{props?.obj?.pedido?.fecha}</h6>
                </div>
                <Link
                  to={"/pages/single-kitchen/" + props.obj?.cocina?.id}
                  className="text-muted mb-2"
                  style={{ textDecoration: "none" }}
                >
                  <h4>{props?.obj?.cocina?.user_name}</h4>
                </Link>
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
                <h4>Total del pedido - $ {props?.obj?.carrito?.total}</h4>
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

                {props?.obj?.pedido?.estado === "cancelado_user" ? null : (
                  <button onClick={() => cancelOrder() } type="button" className="btn btn-outline-danger">
                    Cancelar Pedido
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCardHorizontalOrders;
