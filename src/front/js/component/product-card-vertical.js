import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

// este componente de la pagina es el que se llena en varias Vistas para "mostrar"
// varios productos en la misma. Permite interacciones con el usuario, como agregar al carrito
// y a favoritos.
export const ProductCardVertical = (props) => {
  const { store, actions } = useContext(Context);

  // A CAMBIAR - pasarlo al flux; es una peticion a la API... consigue el nombre de la cocina
  const [kitchen, setKitchen] = useState();
  let kitchen_api = async () => {
    try {
      const response = await axios.get(
        store.api_url + "kitchen/" + props?.obj?.cocina_id
      );
      setKitchen(response?.data?.user_name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    kitchen_api();
  }, [kitchen]);
  // mudar al flux.js   ^^^^^^^^^^^

  // este "boton" llama a una funcion del flux.js... añade un producto al carrito
  // más detallado en el flux.js
  const addCart = () => {
    actions.buy_product(
      props?.obj?.id,
      props?.obj?.cocina_id,
      props?.obj?.precio
    );
  };

  return (
    <>
      {/* producto  */}

      <div className="card mt-4">
        <img src={props?.obj?.foto_producto} className="card-img-top" />
        <div className="card-body p-3">
          <h5 className="card-title">{props?.obj?.nombre}</h5>
          <button type="button" className="btn btn-light">
            {" "}
            <i className="fas fa-heart mx-2"></i>AGREGAR A FAVORITOS{" "}
          </button>

          <p className="card-text text-about">{props?.obj?.descripcion}</p>

          <div className="text-muted mb-2">
            {" "}
            {kitchen}
            <div>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="fa fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
            </div>
          </div>

          <h2>$ {props?.obj?.precio}</h2>
          <button
            onClick={addCart}
            type="button"
            className="btn btn-primary me-2"
          >
            <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Agregar al
            carrito
          </button>
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
