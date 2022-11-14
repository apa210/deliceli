import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProductCardHorizontalMenu } from "../component/product-card-horizontal-menu";

export const KitchenPlates = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  const buttonEdit = (operation) => {
    actions.editProduct(undefined, undefined, undefined, operation).then(() => {
      if (store.val_edit == true) {
        navigate("/pages/add-product");
      }
    });
  };

  // trae los productos de la store
  const map_products = store?.menuKitchen.map((item, index) => {
    return (
      <div key={index + index + index + item}>
        <ProductCardHorizontalMenu obj={item} />
      </div>
    );
  });

  // Función para cerrar sesión
  const handleLogout = () => {
    let onLogged = actions.logout();
    if (!onLogged) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  };

  useEffect(() => {
    // No da acceso a los platos sin estar logueado
    if (store.auth == false) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
    // Al cargar la página, se desplaza hacia arriba
    if (store.historyNav == "/pages/kitchen-account") {
      actions.modHistoryNav(window.location.pathname);
    } else if (store.historyNav == "/pages/kitchen-plates") {
      actions.modHistoryNav(window.location.pathname);
    } else if (store.historyNav == "/pages/kitchen-orders") {
      actions.modHistoryNav(window.location.pathname);
    } else {
      window.scrollTo(0, 0);
      actions.modHistoryNav(window.location.pathname);
    }
  }, []);
  let prevUrl = document.referrer;
  console.log(prevUrl);

  return (
    <>
      <section>
        <div className="container bgimage-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Tu cocina</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* titulo  */}
              <div className="my-5">
                <h3>
                  {" "}
                  <i className="fas fa-store d-inline mx-2"></i>Tu menú
                </h3>
                <hr />
              </div>
              {/* navegación de usuario */}
              <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Hola, {store?.profile?.first_name}!
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fas fa-bars"></i>
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-account">
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i> Tu Cuenta
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-plates">
                          <i className="fas fa-store d-inline mx-2"></i>
                          Tu menú
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/pages/kitchen-orders">
                          <i className="fas fa-utensils d-inline mx-2"></i> Tus
                          Pedidos
                        </Link>
                      </li>

                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="#"
                          onClick={() => handleLogout()}
                        >
                          {" "}
                          <i className="fas fa-sign-out-alt d-inline mx-2"></i>
                          Cerrar Sesión
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="d-flex btn btn-primary mt-3 mb-3 align-items-end"
                    onClick={() =>
                      buttonEdit(
                        "add"
                      )
                    }
                  >
                    Agregar nuevo producto
                  </button>
                </div>
              </nav>
              {/* navegación de usuario */}
              {/* Detalle de favoritos */}
              {map_products}
              {/* <ProductCardHorizontalMenu />
              <ProductCardHorizontalMenu />
              <ProductCardHorizontalMenu /> */}
            </div>
          </div>
        </div>
      </section>
      <hr style={{ width: "100%" }} />
    </>
  );
};

KitchenPlates.propTypes = {
  match: PropTypes.object,
};
