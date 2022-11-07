import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const KitchenCardProfile = (props) => {
  return (
    <div className="card mb-5">
      <img
        src={props?.obj?.foto_usuario}
        className="card-img-top img-thumbnail"
      />
      <div className="card-body p-5">
        <h5 className="card-title">{props?.obj?.user_name}</h5>
        <p className="card-text">{props?.obj?.descripcion}</p>
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
