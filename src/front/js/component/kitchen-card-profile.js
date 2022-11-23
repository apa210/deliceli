import React from "react";
import { Link } from "react-router-dom";

// es una card que se imprime atraves de map's situados en varias Vistas
// esta card se llena con el perfil del cocinero o chef o empresa que vende.
export const KitchenCardProfile = (props) => {
  return (
    <div className="card mb-5">
      <img
        src={props?.obj?.foto_usuario}
        className="card-img-top img-thumbnail"
      />
      <div className="card-body p-5">
        <h5 className="card-title">{props?.obj?.user_name}</h5>
        <p className="card-text">
          {props?.obj?.descripcion === null
            ? null
            : props?.obj?.descripcion.substring(0, 70)}
          {props?.obj?.descripcion === null
            ? null
            : props?.obj?.descripcion.length < 70
            ? null
            : "..."}
        </p>
        <Link
          to={"/pages/single-kitchen/" + props?.obj?.id}
          className="btn btn-primary me-2"
        >
          Leer mas...
        </Link>
      </div>
    </div>
  );
};
