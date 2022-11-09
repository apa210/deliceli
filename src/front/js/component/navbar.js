import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import { Login } from "./login";
import { SignUp } from "./sign-up";
import { ForgetPassword } from "./forget-password";
import { Search } from "./search";

// Función que muestra el navbar principal de la página
export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("sin nombre");
  const [total, setTotal] = useState("");
  
  // Función para cerrar sesión
  const handleLogout = () => {
    let onLogged = actions.logout();
    if (!onLogged) {
      navigate("/");
    }
  };
  
  // activa función del flux.js, donde elimina un producto segú su ID
  const delete_product = (prod, prod_id) => {
    actions?.quit_product(prod, prod_id);
  };

  //  trae el total del carrito y lo guarda en el estado setTotal
  useEffect(() => {
    setTotal(store.total);
  }, [store.total]);


  // trae el nombre del perfil y lo guarda en el estado setName
  useEffect(() => {
    setName(store?.profile?.first_name);
  }, [store.profile]);

  // Se obtienen productos del carrito
  const map_cart = store.cart.map((item, index) => {
    return (
      <li key={index + item?.nombre + index + index}>
        <div className="d-flex justify-content-between">
          <Link
            className="dropdown-item "
            to={"/pages/single-product/" + item?.producto_id}
          >
            <div>
              {item?.nombre}: {item?.cantidad_carrito} ${" "}
              {item?.precio * item?.cantidad_carrito}{" "}
            </div>
          </Link>
          <i
            onClick={() => delete_product(index, item?.id)}
            className="far fa-trash-alt d-inline ms-2 pe-2 mt-2 align-items-center"
          ></i>
        </div>
      </li>
    );
  });

  return (
    <>
      {/* Inicio de Navbar */}

      {/* Inicio del navbar que se muestra a persona no logueada (Parte 1/2) */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DeliCeli.uy
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/about">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/products">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/kitchens">
                  Cocinas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pages/contact">
                  Contacto
                </Link>
              </li>
            </ul>
            {<Search />}
            {/* fIN del navbar que se muestra a persona no logueada (Parte 1/2) */}

            {store.auth ? (
              store?.profile?.rol == "cliente" ? (
                // Inicio del navbar de clientes
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fa fa-cart-plus d-inline mx-2"></i> Carrito
                    </Link>

                    <ul className="dropdown-menu dropdown-menu dropdown-menu-end">
                      {map_cart}

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="dropdown-item">Total - $ {total}</li>

                      <Link className="nav-link" to="pages/cart">
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary mt-2 ms-4 mb-2 ps-2 pe-4"
                        >
                          <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                          Ver carrito
                        </button>
                      </Link>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fas fa-user-circle d-inline mx-2"></i>
                      Hola, {name}!
                    </Link>
                    <ul className="dropdown-menu dropdown-menu dropdown-menu-end">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/pages/client-account"
                        >
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i>
                          Tu Cuenta
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pages/orders">
                          {" "}
                          <i className="fas fa-utensils d-inline mx-2"></i>
                          Tus pedidos
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/pages/favorites">
                          {" "}
                          <i className="fas fa-heart d-inline mx-2"></i>
                          Tus Favoritos
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="dropdown-item"
                          to=""
                          onClick={() => handleLogout()}
                        >
                          {" "}
                          <i className="fas fa-sign-out-alt d-inline mx-2"></i>
                          Cerrar Sesión
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                // fIN del navbar de clientes
                // Inicio del navbar de cocina
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fas fa-user-circle d-inline mx-2"></i>
                      Hola, {name}!
                    </Link>
                    <ul className="dropdown-menu dropdown-menu dropdown-menu-end">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/pages/kitchen-account"
                        >
                          {" "}
                          <i className="fas fa-cog d-inline mx-2"></i>
                          Tu Cuenta
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/pages/kitchen-plates"
                        >
                          {" "}
                          <i className="fas fa-store d-inline mx-2"></i>
                          Tu menú
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/pages/kitchen-orders"
                        >
                          {" "}
                          <i className="fas fa-utensils d-inline mx-2"></i>
                          Tus pedidos
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {" "}
                        <Link
                          className="dropdown-item"
                          to=""
                          onClick={() => handleLogout()}
                        >
                          {" "}
                          <i className="fas fa-sign-out-alt d-inline mx-2"></i>
                          Cerrar Sesión
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              )
            ) : (
              // fIN del navbar de cocina
              // Inicio del navbar que se muestra a persona no logueada (Parte 2/2)
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Iniciar Sesión
                </button>

                <button
                  type="button"
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropSignUp"
                >
                  Registrarse
                </button>

                {/* Boton de restablecer contraseña, está oculto porque está 
                conectado a modal de inicio de sesión pero es necesario para 
                que funcione modal */}
                <button
                  type="button"
                  className="btn btn-primary d-none"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropForgetPassword"
                >
                  Recuperar contraseña
                </button>
              </>
              // fIN del navbar que se muestra a persona no logueada (Parte 2/2)
            )}
          </div>
        </div>
      </nav>
      <Login />
      <SignUp />
      <ForgetPassword />
      {/* fIN de Navbar */}
    </>
  );
};
