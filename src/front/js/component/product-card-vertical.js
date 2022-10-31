import React from "react";
import { Link } from "react-router-dom";

export const ProductCardVertical = () => {
  return (
    <>
      {/* producto  */}

      <div className="card mt-4">
        <img
          src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
          className="card-img-top"
        />
        <div className="card-body p-3">
          <h5 className="card-title">Medialunas Rellenas</h5>
          <button type="button" className="btn btn-light">
            {" "}
            <i className="fas fa-heart mx-2"></i> FAVORITOS{" "}
          </button>

          <p className="card-text">
            Medialunas sin gluten rellenas de jamon y queso. El precio es por
            docena. Las entregamos calentitas.
          </p>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <h2>$ 350</h2>
          <button type="button" className="btn btn-primary me-2">
            <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Agregar al carrito
          </button>
          <button type="button" className="btn btn-outline-primary mt-2 mb-2">
            Leer mas{" "}
          </button>
        </div>
      </div>

      {/* producto  */}
    </>
  );
};
