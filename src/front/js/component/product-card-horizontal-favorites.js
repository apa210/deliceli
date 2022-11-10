import React from "react";
import { Link } from "react-router-dom";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontalFavorites = () => {
  return (
  
  
    <>
    <section>


    {/* producto  */}

  <div className="card mb-5 mt-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
        className="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Medialunas Rellenas</h5>

        <p className="card-text">
          Medialunas sin gluten rellenas de jamon y queso. El
          precio es por docena. Las entregamos calentitas.
        </p>
        <div className="text-muted mb-2">
          {" "}
          La Cocina de Milena Sin Gluten{" "}
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
        </div>

        <h2>$ 350</h2>

        <button type="button" className="btn btn-primary me-2">
          <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
          Agregar al carrito
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mt-2 mb-2"
        >
          Leer mas{" "}
        </button>

        <button type="button" className="btn btn-light m-2">
          {" "}
          <i className="fas fa-heart mx-2"></i> ELIMINAR DE
          FAVORITOS{" "}
        </button>
      </div>
    </div>
  </div>
</div>

{/* producto  */}


    </section>
  </>
);
};

