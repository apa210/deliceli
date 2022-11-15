import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import axios from "axios";
import Footer_contact from "../component/footer_contact";
import { ProductCardVertical } from "../component/product-card-vertical";

export const SingleProduct = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  // estado que guarda mensaje de error
  const [error, setError] = useState("");

  // estado que guarda mensaje de éxito
  const [success, setSuccess] = useState("");

  // useRef que acciona alerta
  const showAlert = useRef("");

  // useRef que acciona alerta de éxito
  const showSuccess = useRef("");

  const addCart = () => {
    if (store?.auth == true) {
      actions.buy_product(
        store.product?.product?.id,
        store.product?.product?.cocina_id,
        store.product?.product?.precio
      );
      setTimeout(() => {
        showSuccess.current.classList.add("d-none");
      }, 3000);
      showSuccess.current.classList.remove("d-none");
      setSuccess("Se han añadido los productos exitosamente!");
    } else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 3000);
      showAlert.current.classList.remove("d-none");
      setError("Debes estar logueado para añadir productos al carrito.");
    }
  };

  const map_products = store?.AllProductsOfKitchen.map((item, index) => {
    if (store?.AllProductsOfKitchen != []) {
      return (
        <div className="col-4" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    } else {
      return false;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    actions
      .getProduct(params?.id)
      .then(() =>
        actions.getAllProductsOfKitchen(store.product?.User?.id_usuario)
      );
  }, [params?.id]);

  return (
    <>
      <section>
        <div className="container bgimage-single-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-end">{store?.product?.product?.nombre}</h1>
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
                    <img
                      src={store?.product?.product?.foto_producto}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-5 p-3">
                    <div className="card-body">
                      <h1 className="card-title">
                        {store?.product?.product?.nombre}
                      </h1>

                      <p className="card-text">
                        {store?.product?.product?.descripcion}
                      </p>

                      <div className="text-muted mb-2">
                        {" "}
                        {store.product?.User?.user_name}
                        <br />
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="fa fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                        <i className="far fa-star text-warning"></i>
                      </div>

                      <h2>$ {store?.product?.product?.precio}</h2>

                      {/* alerta de error */}
                      <div
                        className="alert alert-danger d-none"
                        ref={showAlert}
                        role="alert"
                      >
                        {error}
                      </div>
                      {/* Alerta de éxito */}
                      <div
                        className="alert alert-success d-none"
                        ref={showSuccess}
                        role="alert"
                      >
                        {success}
                      </div>

                      <button
                        onClick={addCart}
                        type="button"
                        className="btn btn-primary me-2 mb-3"
                      >
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                        Agregar al carrito
                      </button>

                      <button type="button" className="btn btn-light mb-3">
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
      <hr className="m-auto" style={{ width: "80%" }} />
      <section>
        <div className="p-5 bg-light ">
          <div className="p-2 text-center">
            <h1 className="p-2 ">
              Productos de {store.product?.User?.user_name}
            </h1>
            <p>
              Encuentra las comidas que {store.product?.User?.user_name} ha
              preparado especialmente para ti
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">{map_products}</div>
        </div>
      </section>
      <Footer_contact />
    </>
  );
};

SingleProduct.propTypes = {
  match: PropTypes.object,
};
