import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProductCardVertical } from "../component/product-card-vertical";
import Footer_contact from "../component/footer_contact";

export const SingleProduct = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  useEffect (() => {
    actions.getProduct(params?.id)
  }, 
  [params?.id])
  console.log(store?.product);
  return (
    <>
      <section>
        <div className="container bgimage-single-cocina p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-end">Medialunas Rellenas</h1>
          </div>
        </div>
      </section>

      <div className=" container">
        <div className="pt-5"></div>

        <div className="container mb-5">
          <div className="row">
            {/* single product  */}
<<<<<<< HEAD
            <div className="col"> 

          
          
             {/* producto  */}

  <div className="card border-0 mb-5 mt-5">
  <div className="row g-0">
    <div className="col-md-7">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1625248442085-10a1a2563dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1546069901-04dcb46a5e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className="col-md-5 p-3">
      <div className="card-body">
        <h1 className="card-title">Medialunas Rellenas  </h1>
      
        <p className="card-text">Medialunas sin gluten rellenas de jamon y queso. El precio es por
            docena. Las entregamos calentitas.</p>

            <div className="text-muted mb-2"> La Cocina de Milena Sin Gluten 
          <br/>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i>
          <i className="far fa-star text-warning"></i></div>


          
          <h2>$ 350</h2>
          <button type="button" className="btn btn-primary me-2 mb-3">
            <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i> Agregar al carrito
          </button>
  

          <button type="button" className="btn btn-light">
            <i className="fas fa-heart d-inline"></i> Agregar a Favoritos
          </button>
      </div>
    </div>
  </div>
</div>


   
      {/* producto  */}
          
          
          
          
          
          </div> {/* single product  */}
         

=======
            <div className="col">
              {/* producto  */}

              <div className="card border-0 mb-5 mt-5">
                <div className="row g-0">
                  <div className="col-md-7">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="true"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1625248442085-10a1a2563dd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="https://images.unsplash.com/photo-1546069901-04dcb46a5e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 p-3">
                    <div className="card-body">
                      <h1 className="card-title">Medialunas Rellenas </h1>

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
                      <button
                        type="button"
                        className="btn btn-primary me-2 mb-3"
                      >
                        <i className="fa fa-cart-plus d-inline mt-2 mb-2"></i>{" "}
                        Agregar al carrito
                      </button>

                      <button type="button" className="btn btn-light">
                        <i className="fas fa-heart d-inline"></i> Agregar a
                        Favoritos
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* producto  */}
            </div>{" "}
            {/* single product  */}
            {/* col-sidebar  */}
            <div className="col-3">
              {/* sidebar  */}

              <div className="card mt-4">
                <div className="card-body p-5">
                  <h5 className="card-title pb-4">Categorías </h5>

                  <form className="d-flex mt-2 mb-5" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Buscar"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Buscar
                    </button>
                  </form>

                  <li>SIN GLUTEN</li>
                  <li>SIN LACTOSA</li>
                  <li>SIN HUEVO</li>
                  <li>SIN AZÚCAR</li>
                  <li>VEGANO</li>
                  <li>VEGETARIANO</li>
                  <li>ECOLÓGICO</li>
                  <li>CONGELADOS</li>

                  <button type="button" className="btn btn-primary me-2 mt-5">
                    <i className="fa fa-cart-plus d-inline mx-2"></i> Ver
                    carrito{" "}
                  </button>
                </div>
              </div>

              {/* sidebar  */}
            </div>{" "}
            {/* col-sidebar  */}
>>>>>>> 7bed319b5aa6ba4156174c4e311f0760c6f0a3f5
          </div>
        </div>
      </div>
      <Footer_contact />
    </>
  );
};

SingleProduct.propTypes = {
  match: PropTypes.object,
};
