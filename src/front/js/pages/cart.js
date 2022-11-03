import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

export const Cart = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
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
            {/* single product  */}
            <div className="col">
              {/* producto  */}

              <div className="card mb-5">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Medialunas Rellenas</h5>

                      <div className="text-muted mb-2">
                        {" "}
                        La Cocina de Milena Sin Gluten{" "}
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ 350</h2>

                      <div className="container">
                        <div className="row">
                          <div className="col-4 mt-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="quantity-left-minus btn btn-danger btn-number"
                                    data-type="minus"
                                    data-field=""
                                  >
                                    <i className="fa fa-minus-circle"></i>
                                  </button>
                                </span>
                                <input
                                  onChange={() => {}}
                                  type="text"
                                  // id="quantity"
                                  name="quantity"
                                  className="form-control input-number"
                                  value={"10"}
                                  min="1"
                                  max="100"
                                />
                                <span className="input-group-btn">
                                  <button
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

              {/* producto  */}

              {/* producto  */}

              <div className="card mb-5">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://www.196flavors.com/wp-content/uploads/2021/10/croquetas-de-pollo-2fp.jpg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Medialunas Rellenas</h5>

                      <div className="text-muted mb-2">
                        La Cocina de Milena Sin Gluten
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ 350</h2>

                      <div className="container">
                        <div className="row">
                          <div className="col-4 mt-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button
                                    type="button"
                                    className="quantity-left-minus btn btn-danger btn-number"
                                    data-type="minus"
                                    data-field=""
                                  >
                                    <i className="fa fa-minus-circle"></i>
                                  </button>
                                </span>
                                <input
                                  onChange={() => {}}
                                  type="text"
                                  // id="quantity"
                                  name="quantity"
                                  className="form-control input-number"
                                  value={"10"}
                                  min="1"
                                  max="100"
                                />
                                <span className="input-group-btn">
                                  <button
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
                          <div className="col mt-3">
                            <button
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

              {/* producto  */}
            </div>{" "}
            {/* single product  */}
            {/* col-sidebar  */}
            <div className="col-4">
              {/* sidebar  */}

              <div className="card">
                <div className="card-body p-4">
                  <h3 className="card-title pb-4">Resumen del Total</h3>
                  <hr />
                  <li>Total $ 34500</li>
                  <li>Descuento -20% - 233</li>
                  <li>Cargo por envio $ 190</li>
                  <hr />
                  <li>Total $ 4000</li>

                  <button type="button" className="btn btn-light me-2 mt-3 ">
                    <i className="fa fa-cart-plus d-inline mx-2"></i>Seguir
                    comprando
                  </button>

                  <button type="button" className="btn btn-primary mt-3">
                    <i className="fas fa-money-check mx-2"></i>Pagar
                  </button>
                </div>
              </div>

              {/* sidebar  */}
            </div>{" "}
            {/* col-sidebar  */}
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
