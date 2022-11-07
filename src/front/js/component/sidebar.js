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

         
            {map_categories}

            <li
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
