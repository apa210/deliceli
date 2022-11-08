import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const InvoiceCart = (props) => {
  const { store, actions } = useContext(Context);
  const [total, setTotal] = useState("");

  const pay = () => {
    console.log("has pagado");
  };

  const update_cart = () => {
    console.log("que se prenda todo >.<");
    for (let index = 0; index < props.products.length; index++) {
      setTimeout(() => {
        actions.update_cart(
          props.products[index]?.producto_id,
          props.products[index]?.cantidad_carrito,
          props.products[index]?.total,
          props.products[index]?.precio,
          "update"
        );
      }, 2000);
    }
  };

  const map_price = props.products.map((item, index) => {
    return (
      <div key={index + item + item}>
        <li>
          {item?.nombre} ${" "}
          <b>{item?.precio_unitario * item?.cantidad_carrito}</b>
        </li>
      </div>
    );
  });

  useEffect(() => {
    setTotal(() => {
      let map_ = props.products.map((item) => {
        return item.total;
      });
      let total_aux = 0;
      for (let i of map_) {
        total_aux += i;
      }
      return total_aux;
    });
  }, [props.products]);

  useEffect(() => {
    actions.update_total("update", total);
  }, [total]);

  return (
    <>
      <div className="card">
        <div className="card-body p-4">
          <h3 className="card-title pb-4">Resumen del Total</h3>
          <hr />
          {map_price}
          <hr />
          <li>
            Total $ <b>{total}</b>
          </li>

          <Link to="/pages/products">
            <button type="button" className="btn btn-light me-2 mt-3 ">
              <i className="fa fa-cart-plus d-inline mx-2"></i>
              Seguir comprando
            </button>
          </Link>

          <button
            onClick={() => update_cart()}
            className="btn me-2 mt-3 border-success"
          >
            Guardar borrador
          </button>

          <button onClick={pay} type="button" className="btn btn-primary mt-3">
            <i className="fas fa-money-check mx-2"></i>
            Pagar
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceCart;
