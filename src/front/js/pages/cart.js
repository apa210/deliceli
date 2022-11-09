import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";
import InvoiceCart from "../component/cartInvoice";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const [products, setProducts] = useState([]);

  let aux_ = undefined;

  // Al mapear se llama esta función, sirve como auxiliar para actualizar la
  // variable products
  const updateItem = (productIndex) => {
    aux_ = products.map((item, index) => {
      if (productIndex == index) {
        item.precio_unitario = item?.precio;
        item.total =
          item?.cantidad_carrito > item?.cantidad_producto
            ? item?.precio_unitario * item?.cantidad_producto
            : item?.precio_unitario * item?.cantidad_carrito;
        item.cantidad_carrito =
          item?.cantidad_carrito > item?.cantidad_producto
            ? item?.cantidad_producto
            : item?.cantidad_carrito;
      }
      return item;
    });
  };
  // trae del flux.js para eliminar el producto según ID
  const delete_product = (prod, prod_id) => {
    actions?.quit_product(prod, prod_id);
  };

  // Modifica el producto y el input de la cantidad de producto
  const mod_products = (prod) => {
    aux_[prod].total =
    document.getElementById(prod).value * aux_[prod].precio_unitario;
    aux_[prod].cantidad_carrito = document.getElementById(prod).value;
    // Empieza la brujería
    setProducts(aux_);
    actions.update_cart(
      undefined,
      undefined,
      undefined,
      undefined,
      "update_flux",
      aux_
      );
    };
    // Termina la brujería
    
    // Modifica el valor de los input de los productos
    const mod_quantity = (prod, operation, value_1, max_quantity) => {
      if (operation === "add") {
        if (document.getElementById(prod).value < max_quantity) {
          return document.getElementById(prod).value++, mod_products(prod);
        }
      }
      if (operation === "remove") {
        if (document.getElementById(prod).value > 1) {
          return document.getElementById(prod).value--, mod_products(prod);
        }
      }
      if (operation === "initial") {
        let theInput = document.getElementById(prod);
        return (theInput.value = value_1);
      }
    };

    // trae los productos del carrito de la store y se guarda en el estado setProducts
    useEffect(() => {
      setProducts(store.cart);
    }, [store.cart]);
  
    // Al cargar la página, se desplaza hacia arriba
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  // trae los productos de la store
  const map_products = store?.cart.map((item, index) => {
    if (store?.cart[0] !== [] && store?.cart.length > 0) {
      updateItem(index);
      return (
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
      );
    }
  });

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
            <div className="col">{map_products}</div>
            <div className="col-lg-4">
              <InvoiceCart products={products} />
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
