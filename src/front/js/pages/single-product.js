import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
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
      actions
        .buy_product(
          store.product?.product?.id,
          store.product?.product?.cocina_id,
          store.product?.product?.precio
        )
        .then(() => {
          if (store.val_cartAdd === false) {
            setTimeout(() => {
              showAlert.current.classList.add("d-none");
            }, 3000);
            showAlert.current.classList.remove("d-none");
            setError("Este producto ya esta en su carrito!");
          } else if (store.val_cartAdd === true) {
            setTimeout(() => {
              showSuccess.current.classList.add("d-none");
            }, 3000);
            showSuccess.current.classList.remove("d-none");
            setSuccess("El producto fue añadido al carrito correctamente!");
          }
        });
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
        <div className="col-lg-4" key={item + index + item}>
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

                      <Link
                        to={
                          "/pages/single-kitchen/" +
                          store.product?.product?.cocina_id
                        }
                        className="text-muted mb-2"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        La Cocina de <h3> {store.product?.User?.user_name} </h3>
                      </Link>

                      <h1 className="text-success">
                        $ {store?.product?.product?.precio}
                      </h1>
                      <br />
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
                      {store?.profile?.rol == "cocina" ? (
                        null
                      ) : 
                        <>
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
                        </>
                      }
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

      <section className="bg-light pb-5">
        <div className="mt-5">
          <div className="p-2 pt-5 text-center">
            <h1 className="p-2 pt-5">
              Otros productos de {store.product?.User?.user_name}
            </h1>
            <p>
              Encuentra las comidas que {store.product?.User?.user_name} ha
              preparado especialmente para ti
            </p>
          </div>
        </div>
        <div className="container p-5">
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
