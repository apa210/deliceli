import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ProductCardVertical = (props) => {
  const { store, actions } = useContext(Context);
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

  return (
    <>
      {/* producto  */}

      <div className="card mt-4">
        <img src={props?.obj?.foto} className="card-img-top" />
        <div className="card-body p-3">
          <h5 className="card-title">{props?.obj?.nombre}</h5>
          <button type="button" className="btn btn-light">
            {" "}
            <i className="fas fa-heart mx-2"></i>AGREGAR A FAVORITOS{" "}
          </button>

          <p className="card-text">{props?.obj?.descripcion}</p>

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
          <button type="button" className="btn btn-primary me-2">
            <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Agregar al
            carrito
          </button>
          <button type="button" className="btn btn-outline-primary mt-2 mb-2">
            Leer mas{" "}
          </button>
        </div>
      </div>
    </>
  );
};
