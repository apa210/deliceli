import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
<>
      {/* sidebar  */}
      <div>
        <div className="card mt-4">
          <div className="card-body p-5">
          

           

			<h5 className="card-title pb-4">Categorías </h5>
            <li>SIN GLUTEN</li>
            <li>SIN LACTOSA</li>
            <li>SIN HUEVO</li>
            <li>SIN AZÚCAR</li>
            <li>VEGANO</li>
            <li>VEGETARIANO</li>
            <li>ECOLÓGICO</li>
            <li>CONGELADOS</li>

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
