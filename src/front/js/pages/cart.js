import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const [total, setTotal] = useState("");

  const products = [];

  const pay = () => {
    console.log("has pagado");
  };

  const update_cart = () => {
    for (let index = 0; index < products.length; index++) {
      // const element = array[index];
      setTimeout(() => {
        actions.update_cart(
          products[index]?.id,
          products[index]?.quantity,
          products[index]?.price
        );
      }, 1000);
    }
  };

  const delete_product = (prod, prod_id) => {
    actions?.quit_product(prod, prod_id);
  };

  const mod_quantity = (prod, operation, value_1, max_quantity) => {
    if (operation === "add") {
      if (document.getElementById(prod).value < max_quantity) {
        return (
          document.getElementById(prod).value++,
          (products[prod].price =
            document.getElementById(prod).value * products[prod].price_unit),
          console.log(products[prod].price),
          (products[prod].quantity = document.getElementById(prod).value),
          console.log(products[prod].quantity)
        );
      }
    }
    if (operation === "remove") {
      if (document.getElementById(prod).value > 1) {
        return (
          document.getElementById(prod).value--,
          (products[prod].price =
            document.getElementById(prod).value * products[prod].price_unit),
          console.log(products[prod].price),
          (products[prod].quantity = document.getElementById(prod).value),
          console.log(products[prod].quantity)
        );
      }
    }
    if (operation === "initial") {
      let theInput = document.getElementById(prod);
      return (theInput.value = value_1);
    }
  };

  const map_products = store?.cart.map((item, index) => {
    if (store?.cart[0] !== [] && store?.cart.length > 0) {
      return (
        products.push({
          name: item?.nombre,
          price:
            item?.cantidad_carrito > item?.cantidad_producto
              ? item?.precio_unitario * item?.cantidad_producto
              : item?.total,
          price_unit: item?.precio_unitario,
          id: item?.id,
          quantity:
            item?.cantidad_carrito > item?.cantidad_producto
              ? item?.cantidad_producto
              : item?.cantidad_carrito,
        }),
        (
          <div key={index + item + index}>
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    // imgane del producto
                    src={item?.foto_producto}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item?.nombre}</h5>

                    <div className="text-muted mb-2">
                      {" "}
                      {/* nombre de la cocina */}
                      {item?.user_name}{" "}
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                      <i className="far fa-star text-warning"></i>
                    </div>

                    <h2>$ {item?.precio_unitario}</h2>

                    <div className="container">
                      <div className="row">
                        <div className="col-6 col-lg-4 mt-3">
                          <div className="col">
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button
                                  onClick={() => mod_quantity(index, "remove")}
                                  type="button"
                                  className="quantity-left-minus btn btn-danger btn-number"
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="fa fa-minus-circle"></i>
                                </button>
                              </span>
                              <input
                                id={index}
                                onChange={() => {}}
                                type="text"
                                // id="quantity"
                                name="quantity"
                                className="form-control input-number"
                                value={setTimeout(() => {
                                  mod_quantity(
                                    index,
                                    "initial",
                                    item?.cantidad_carrito >
                                      item?.cantidad_producto
                                      ? item?.cantidad_producto
                                      : item?.cantidad_carrito
                                  );
                                }, 200)}
                                min="1"
                                max="100"
                                disabled
                              />
                              <span className="input-group-btn">
                                <button
                                  onClick={() =>
                                    mod_quantity(
                                      index,
                                      "add",
                                      undefined,
                                      item?.cantidad_producto
                                    )
                                  }
                                  type="button"
                                  className="quantity-right-plus btn btn-success btn-number"
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="fas fa-plus-circle"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col mt-3 ">
                          <button
                            onClick={() => delete_product(index, item?.id)}
                            type="button"
                            className="btn btn-light me-2"
                          >
                            <i className="far fa-trash-alt d-inline mt-2"></i>{" "}
                            Eliminar del carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const map_price = products.map((item, index) => {
    return (
      <div key={index + item + item}>
        <li>
          {item?.name} $ <b>{item?.price}</b>
        </li>
      </div>
    );
  });

  useEffect(() => {
    setTotal(() => {
      let map_ = products.map((item) => {
        return item.price;
      });
      let total_aux = 0;
      for (let i of map_) {
        total_aux += i;
      }
      return total_aux;
    });
  }, [products]);

  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Carrito</h1>
          </div>
        </div>
      </section>

      <div className=" container">
        <div className="pt-5"></div>

        <div className="container mb-5">
          <div className="row">
            <div className="col">{map_products}</div> {/* col-sidebar  */}
            <div className="col-lg-4">
              {/* sidebar  */}
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
                    Actualizar carrito
                  </button>

                  <button
                    onClick={pay}
                    type="button"
                    className="btn btn-primary mt-3"
                  >
                    <i className="fas fa-money-check mx-2"></i>
                    Pagar
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer_contact />
    </>
  );
};

Cart.propTypes = {
  match: PropTypes.object,
};
