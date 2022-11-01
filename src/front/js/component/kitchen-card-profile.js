import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const KitchenCardProfile = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props?.obj?.foto} className="card-img-top" />
      <div className="card-body p-5">
        <h5 className="card-title">{props?.obj?.user_name}</h5>
        <p className="card-text">
          {/* esto a desarrollar en la tabla Usuarios */}
          {props?.obj?.descripcion}
          {/* texto(abajo) de ejemplo mientras no se desarrolle la descripcion de la cocina en el back */}
          Milena Sin Gluten es una Gastropub que significa: Comida casera con un
          toque gourmet. Cocina Sin Gluten, Sin Lactosa, Vegana.
        </p>
        <button type="button" className="btn btn-primary me-2">
          Leer mas...
        </button>
      </div>
    </div>
  );
};
