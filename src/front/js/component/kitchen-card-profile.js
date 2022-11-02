import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const KitchenCardProfile = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props?.obj?.foto} className="card-img-top img-thumbnail" />
      <div className="card-body p-5">
        <h5 className="card-title">{props?.obj?.user_name}</h5>
        <p className="card-text">
          {/* esto a desarrollar en la tabla Usuarios */}
          {props?.obj?.descripcion}
          {/* texto(abajo) de ejemplo mientras no se desarrolle la descripcion de la cocina en el back */}
          Milena Sin Gluten es una Gastropub que significa: Comida casera con un
          toque gourmet. Cocina Sin Gluten, Sin Lactosa, Vegana.
        </p>
        <Link to={"/pages/single-kitchen/" + props?.obj?.id} className="btn btn-primary me-2">
          Leer mas...
        </Link>
      </div>
    </div>
  );
};
