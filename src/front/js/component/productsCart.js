import React, { useState, useContext } from "react";
import "../../styles/visibility.css";
import { Context } from "../store/appContext";

const ProductsCart = (props) => {
  const { store, actions } = useContext(Context);
  const [quantity, setQuantity] = useState(
    String(
      props?.quantityCart > props?.quantityProduct
        ? props?.quantityProduct
        : props?.quantityCart
    )
  );

  const [showAlert, setShowAlert] = useState("hidden");

  // trae del flux.js para eliminar el producto según ID
  const delete_product = (prod, prod_id) => {
    actions?.quit_product(prod, prod_id);
  };

  const mod_quantity = (operation) => {
    if (operation == "addition") {
      if (quantity < props.quantityProduct) {
        setQuantity(String(parseInt(quantity) + 1));
        actions.update_cart(
          props?.id,
          parseInt(quantity) + 1,
          (parseInt(quantity) + 1) * props?.unitPrice,
          props?.unitPrice,
          "update"
        );
      } else {
        if (showAlert != "show") {
          setShowAlert("show");
          setTimeout(() => {
            setShowAlert("hidden");
          }, 3500);
        }
      }
    }
    if (operation == "subtraction") {
      if (quantity > 1) {
        setQuantity(String(parseInt(quantity) - 1));
        actions.update_cart(
          props?.id,
          parseInt(quantity) - 1,
          (parseInt(quantity) - 1) * props?.unitPrice,
          props?.unitPrice,
          "update"
        );
      }
    }
  };

  return (
    <>
      <div>
        <p className={"ms-3 text-danger " + showAlert}>
          Se ha puesto un limite de pedidos a este producto por cliente
        </p>
        <div className="card mb-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                // imgane del producto
                src={props?.img}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props?.name}</h5>

                <div className="text-muted mb-2">
                  {" "}
                  {/* nombre de la cocina */}
                  {props?.nameKitchen}{" "}
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="far fa-star text-warning"></i>
                  <i className="far fa-star text-warning"></i>
                </div>

                <h2>$ {props?.unitPrice}</h2>

                <div className="container">
                  <div className="row">
                    <div className="col-6 col-lg-4 mt-3">
                      <div className="col">
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button
                              onClick={() => mod_quantity("subtraction")}
                              type="button"
                              className="quantity-left-minus btn btn-danger btn-number"
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-minus-circle"></i>
                            </button>
                          </span>
                          <input
                            id={props.index}
                            // onChange={(e) => setQuantity(e.target.value)}
                            type="text"
                            className="form-control input-number"
                            value={quantity}
                            min="1"
                            disabled
                          />
                          <span className="input-group-btn">
                            <button
                              onClick={() => mod_quantity("addition")}
                              type="button"
                              className="quantity-right-plus btn btn-success btn-number"
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fas fa-plus-circle"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col mt-3 ">
                      <button
                        onClick={() => delete_product(props?.index, props?.id)}
                        type="button"
                        className="btn btn-light me-2"
                      >
                        <i className="far fa-trash-alt d-inline mt-2"></i>{" "}
                        Eliminar del carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCart;
