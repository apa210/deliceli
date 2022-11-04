import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Sidebar = () => {
  const { store, actions } = useContext(Context);

  const button_category = (category) => {
    console.log(category);
    actions.getProductsOfCategory(category);
  };

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

            <li
              onClick={() => button_category(0)}
              className="mt-2"
              type="button"
            >
              Mostrar todos
            </li>
            {map_categories}

            <button type="button" className="btn btn-primary me-2 mt-5">
              <i className="fa fa-cart-plus d-inline mx-2"></i> Ver carrito{" "}
            </button>
          </div>
        </div>
      </div>
      {/* sidebar  */}
    </>
  );
};
