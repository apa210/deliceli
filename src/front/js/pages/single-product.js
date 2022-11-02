import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import axios from "axios";
import Footer_contact from "../component/footer_contact";

export const SingleProduct = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [kitchen, setKitchen] = useState("");

  let kitchen_api = async () => {
    try {
      const response = await axios.get(
        store.api_url + "kitchen/" + store?.product?.cocina_id
      );
      setKitchen(response?.data?.user_name);
    } catch (error) {
      // console.log(error);
    }
  };

useEffect(() => {
  actions.getProduct(params?.id);
}, [params?.id]);

kitchen_api()

  return (
    <>
      <section>
        <div className="container bgimage-single-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-end">{store?.product?.nombre}</h1>
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

              <div className="card border-0 mb-5 mt-5">
                <div className="row g-0">
                  <div className="col-md-7">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="true"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1625248442085-10a1a2563dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-04dcb46a5e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-5 p-3">
                    <div className="card-body">
                      <h1 className="card-title">{store?.product?.nombre}</h1>

                      <p className="card-text">
                        {store?.product?.descripcion}
                      </p>

                      <div className="text-muted mb-2">
                        {" "}
                        {kitchen}
                        <br />
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ {store?.product?.precio}</h2>
                      <button
                        type="button"
                        className="btn btn-primary me-2 mb-3"
                      >
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                        Agregar al carrito
                      </button>

                      <button type="button" className="btn btn-light">
                        <i className="fas fa-heart d-inline"></i> Agregar a
                        Favoritos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* producto  */}
            </div>{" "}
            {/* single product  */}
          </div>
        </div>
      </div>
      <Footer_contact />
    </>
  );
};

SingleProduct.propTypes = {
  match: PropTypes.object,
};
