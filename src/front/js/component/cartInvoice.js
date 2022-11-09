import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// este componente es la factura de la Vista Carrito que va actualizando segun la cantidad de productos
// que contiene el carrito el precio total de los mismos y el precio total del conjunto de los productos.
const InvoiceCart = (props) => {
  const { store, actions } = useContext(Context);

  // el total (que va a pagar el usuario por su compra) de la suma del total de cada producto
  const [total, setTotal] = useState("");

  const update_cart = () => {
    // esta funcion envia a la base el registro de como esta actualmente el carrito del usuario
    // esta definida en el flux.js
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

  // este map imprime el nombre del producto y su precio "total" segun la cantidad que especifique el usuario
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

  // este useEffect esta pendiente de los cambios en la variable "products" (cart.js)
  // al este cambiar llama al setTotal para actualizar el total que muestra en pantalla
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

  // actualiza el total mostrado en el carrito del navbar.js
  useEffect(() => {
    actions.update_total("update", total);
  }, [total]);

  return (
    <>
      <div className="card">
        <div className="card-body p-4">
          <h3 className="card-title pb-4">Resumen del Total</h3>
          <hr />
          {/* el mapa */}
          {map_price}
          <hr />
          <li>
            {/* el estado "total" */}
            Total $ <b>{total}</b>
          </li>

          <Link to="/pages/products">
            <button type="button" className="btn btn-light me-2 mt-3 ">
              <i className="fa fa-cart-plus d-inline mx-2"></i>
              Seguir comprando
            </button>
          </Link>

          <Link
            to="/pages/checkout"
            // llamada a una funcion
            onClick={() => update_cart()}
            type="button"
            className="btn btn-primary mt-3 text-light"
          >
            <i className="fas fa-money-check mx-2"></i>
            Pagar
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceCart;
