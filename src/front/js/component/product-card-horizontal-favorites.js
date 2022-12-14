import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontalFavorites = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <section>
        {/* producto  */}

        <div className="card mb-5 mt-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={props?.obj?.foto_producto}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props?.obj?.nombre}</h5>
                <p className="card-text">{props?.obj?.descripcion}</p>{" "}
                <Link
                  to={"/pages/single-kitchen/" + props.obj?.cocina_id}
                  className="text-muted mb-2"
                  style={{ textDecoration: "none" }}
                >
                  {props?.obj?.user_name}{" "}
                </Link>
                <h2>$ {props?.obj?.precio}</h2>
                <Link
                  to={"/pages/single-product/" + props?.obj?.id}
                  className="btn btn-outline-primary mt-2 mb-2"
                >
                  Leer mas{" "}
                </Link>
                <button onClick={() => actions?.removeFavorite(props?.obj?.id)} type="button" className="btn btn-light m-2">
                  {" "}
                  <i className="fas fa-heart mx-2"></i> ELIMINAR DE FAVORITOS{" "}
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
