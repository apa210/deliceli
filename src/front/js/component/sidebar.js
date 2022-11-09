import React, { useContext } from "react";
import { Context } from "../store/appContext";

// este componete se visualiza unicamente en la Vista que muestra a todos los productos (products.js)
// su funcion es de hacer de "filtro" para mostrar segun una accion del usuario los productos
// relacionados a su busqueda.
export const Sidebar = () => {
  const { store, actions } = useContext(Context);

  // hace una llamada a una funcion dentro del flux.js... consigue los productos vinculados a una
  // categoria determinada. Esta relacion está declarada en la Base de Datos.
  const button_category = (category) => {
    actions.getProductsOfCategory(category);
  };

  // mapea un elemento del flux.js... este guarada las categorias ya establecidas
  // que se registraron en la Base de Datos.
  const map_categories = store?.categories.map((item, index) => {
    return (
      <li
        onClick={() => button_category(item?.id)}
        className="mt-2"
        type="button"
        key={item + index + index}
      >
        {item?.nombre}
      </li>
    );
  });

  return (
    <>
      {/* sidebar  */}
      <div>
        <div className="card mt-4">
          <div className="card-body p-5">
            <h5 className="card-title pb-4">Categorías </h5>

            {/* el map */}
            {map_categories}

            <li
              // este boton llama a la funcion de categorias para modificar un booleano y que se muestre el
              // map que contiene a "todos" los productos
              onClick={() => button_category(0)}
              className="btn btn-primary mt-4"
              type="button"
            >
              Mostrar todos
            </li>
          </div>
        </div>
      </div>
      {/* sidebar  */}
    </>
  );
};
