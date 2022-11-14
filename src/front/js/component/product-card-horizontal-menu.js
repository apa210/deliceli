import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontalMenu = (props) => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const buttonEdit = (prod_id, kit_id, value, operation) => {
    actions.editProduct(prod_id, kit_id, value, operation).then(() => {
      if (store.val_edit == true) {
        navigate("/pages/edit-product");
      }
    });
  };

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
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props?.obj?.nombre}</h5>

                <p className="card-text">{props?.obj?.descripcion}</p>

                <div className="text-muted mb-2">
                  {" "}
                  {store.profile?.user_name}{" "}
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="far fa-star text-warning"></i>
                  <i className="far fa-star text-warning"></i>
                </div>

                <h2>$ {props?.obj?.precio}</h2>
                {/* <Link to="/pages/edit-product" className="btn btn-primary me-2"> */}
                <button
                  onClick={() =>
                    buttonEdit(
                      props?.obj?.id,
                      props?.obj?.cocina_id,
                      props?.obj,
                      "edit"
                    )
                  }
                  className="btn btn-primary me-2"
                >
                  Editar Producto
                </button>
                {/* </Link> */}

                <button type="button" className="btn btn-danger me-2">
                  Eliminar Producto
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

export default ProductCardHorizontalMenu;
