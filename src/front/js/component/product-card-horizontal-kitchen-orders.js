import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductCardHorizontalKitchenOrders = (props) => {
  console.log(props.obj);

  const { store, actions } = useContext(Context);
  const [cancelado, setCancelado] = useState("btn-outline-danger");
  const [pendiente, setPendiente] = useState("btn-outline-secondary");
  const [confirmado, setConfirmado] = useState("btn-outline-info");
  const [entregado, setEntregado] = useState("btn-outline-primary");

  const changeState = (button) => {
    if (props?.obj?.pedido?.estado == "cancelado_user") {
      alert("este pedido fue cancelado por el usuario");
    } else {
      if (button == "cancelado") {
        actions.modOrdersKitchen(props?.obj?.pedido?.id, button);
      } else if (button == "pendiente") {
        actions.modOrdersKitchen(props?.obj?.pedido?.id, button);
      } else if (button == "confirmado") {
        actions.modOrdersKitchen(props?.obj?.pedido?.id, button);
      } else if (button == "entregado") {
        actions.modOrdersKitchen(props?.obj?.pedido?.id, button);
      }
    }
  };

  useEffect(() => {
    if (
      props?.obj?.pedido?.estado == "cancelado" ||
      props?.obj?.pedido?.estado == "cancelado_user"
    ) {
      setCancelado("btn-danger");
      setPendiente("btn-outline-secondary");
      setConfirmado("btn-outline-info");
      setEntregado("btn-outline-primary");
    } else if (props?.obj?.pedido?.estado == "pendiente") {
      setPendiente("btn-secondary");
      setCancelado("btn-outline-danger");
      setConfirmado("btn-outline-info");
      setEntregado("btn-outline-primary");
    } else if (props?.obj?.pedido?.estado == "confirmado") {
      setConfirmado("btn-info");
      setCancelado("btn-outline-danger");
      setPendiente("btn-outline-secondary");
      setEntregado("btn-outline-primary");
    } else if (props?.obj?.pedido?.estado == "entregado") {
      setEntregado("btn-primary");
      setCancelado("btn-outline-danger");
      setPendiente("btn-outline-secondary");
      setConfirmado("btn-outline-info");
    }
  }, [props?.obj?.pedido?.estado]);

  return (
    <>
      <section>
        {/* producto  */}

        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body p-4">
                <h2 className="card-title">
                  Número de pedido: #R{props?.obj?.pedido?.id}
                </h2>

                <div className="text-muted mb-2">
                  <h6>{props?.obj?.pedido?.fecha}</h6>
                </div>
                <div className="col-12">
                  <h4 className="mb-2 col-6">
                    {" "}
                    Pedido de {props.obj?.cliente?.user_name}
                  </h4>
                  <div className="mb-2 col-6">
                    {" "}
                    Teléfono: {props.obj?.cliente?.telefono}{" "}
                  </div>
                </div>
                <ul className="card-text">
                  <li>Nombre del producto: {props?.obj?.producto?.nombre}</li>
                  <li>Cantidad: {props?.obj?.carrito?.cantidad_carrito}</li>
                  <li>
                    Precio unitario: {props?.obj?.carrito?.precio_unitario}
                  </li>
                </ul>

                <h4>Total del pedido - $ {props?.obj?.carrito?.total}</h4>
                <ul className="card-text">
                  <li>Detalles del Pedido:</li>
                  <li>
                    Método de Pago:{" "}
                    {props?.obj?.pedido?.metodo === "mercadoPago"
                      ? "Mercado Pago"
                      : props?.obj?.pedido?.metodo === "efectivo"
                      ? "Efectivo"
                      : "Trasferencia Bancaria"}
                  </li>
                  <li>Dirección de entrega: {props?.obj?.pedido?.destino}</li>
                  <li>
                    Comentario del Cliente: {props?.obj?.pedido?.comentario}
                  </li>
                </ul>

                <span> ESTADO DEL PEDIDO: </span>
                <button
                  onClick={() => changeState("cancelado")}
                  type="button"
                  className={"btn me-2 " + cancelado}
                >
                  Pedido Cancelado
                </button>

                <button
                  onClick={() => changeState("pendiente")}
                  type="button"
                  className={"btn me-2 " + pendiente}
                >
                  Pedido Pendiente
                </button>

                <button
                  onClick={() => changeState("confirmado")}
                  type="button"
                  className={"btn me-2 mt-2 mb-2 " + confirmado}
                >
                  Pedido Confirmado
                </button>
                <button
                  onClick={() => changeState("entregado")}
                  type="button"
                  className={"btn me-2 mt-2 mb-2 " + entregado}
                >
                  Pedido Entregado
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
