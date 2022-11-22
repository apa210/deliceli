import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// este componente de la pagina es el que se llena en varias Vistas para "mostrar"
// varios productos en la misma. Permite interacciones con el usuario, como agregar al carrito
// y a favoritos.
export const ProductCardVertical = (props) => {
  const { store, actions } = useContext(Context);
  // estado que guarda mensaje de error
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // useRef que acciona alerta
  const showAlert = useRef("");
  const showSuccess = useRef("");

  const uploadFavorite = (product_id) => {
    if (store.auth == true) {
      actions.uploadFavorites(product_id)
        .then(() => {
          if (store.val_favoriteAdd === false) {
            setTimeout(() => {
              showAlert.current.classList.add("d-none");
            }, 3000);
            showAlert.current.classList.remove("d-none");
            setError("Este producto ya esta en su lista de favoritos!");
          } else if (store.val_favoriteAdd === true) {
            setTimeout(() => {
              showSuccess.current.classList.add("d-none");
            }, 3000);
            showSuccess.current.classList.remove("d-none");
            setSuccess("El producto fue añadido a favoritos correctamente!");
          }
        });
    } else {
      setTimeout(() => {
        showAlert.current.classList.add("d-none");
      }, 3000);
      showAlert.current.classList.remove("d-none");
      setError("Debe estar logueado para añadir productos a favoritos!");
    }
    
  }


  // este "boton" llama a una funcion del flux.js... añade un producto al carrito
  // más detallado en el flux.js
  const addCart = () => {
    if (store.auth == true) {
      actions
        .buy_product(props?.obj?.id, props?.obj?.cocina_id, props?.obj?.precio)
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
      setError("Debe estar logueado para añadir productos al carrito!");
    }
  };

  return (
    <>
      {/* producto  */}

      <div className="card mt-4">
        <img src={props?.obj?.foto_producto} className="card-img-top" />
        <div className="card-body p-3">
          <h5 className="card-title">{props?.obj?.nombre}</h5>

          {store?.profile?.rol == "cocina" ? null : (
            <button onClick={() => uploadFavorite(props?.obj?.id)} type="button" className="btn btn-light">
              {" "}
              <i className="fas fa-heart mx-2"></i>AGREGAR A FAVORITOS{" "}
            </button>
          )}
          <p className="card-text">
          {props?.obj?.descripcion.substring(0, 50)}
           {props?.obj?.descripcion.length <
          50
            ? null
            : "..."}</p>

          <Link
            to={"/pages/single-kitchen/" + props.obj?.cocina_id}
            className="text-muted mb-2"
            style={{ textDecoration: "none" }}
          >
            {" "}
            La Cocina de <h3>{props.obj?.user_name}</h3>
          </Link>

          <h2 className="text-success">$ {props?.obj?.precio}</h2>

          <div
            className="d-none alert alert-danger"
            ref={showAlert}
            role="alert"
          >
            {error}
          </div>

          <div
            className="d-none alert alert-success"
            ref={showSuccess}
            role="alert"
          >
            {success}{" "}
          </div>
          {store?.profile?.rol == "cocina" ? null : (
            <button
              onClick={addCart}
              type="button"
              className="btn btn-primary me-2"
            >
              <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Agregar al
              carrito
            </button>
          )}
          <Link
            to={"/pages/single-product/" + props?.obj?.id}
            className="btn btn-outline-primary mt-2 mb-2"
          >
            Leer mas{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
