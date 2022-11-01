import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProductCardVertical } from "../component/product-card-vertical";


export const SingleKitchen = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <section>
        <div className="container-fluid bgimage-single-cocina   p-5 align-baseline">
          <div className="container">
            <h1 className="mt-5 text-center">Nuestros Productos</h1>
          </div>
        </div>
      </section>

      <div className="p-5">
        <div className="p-2 text-center">
          <h1 className="p-2">Productos</h1>
          <p>
            Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
            intolerancia al gluten o alergias.
          </p>
        </div>

        <div class="container">
          <div class="row">
            {/* sidebar  */}
            <div class="col-4">
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
            </div>
            {/* sidebar  */}

            <div class="col">
           


            <section>
    
       
       

          <div className="container">
            <div className="row">
            

           
           
            </div>
          </div>
      
      </section>


              
   

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SingleKitchen.propTypes = {
  match: PropTypes.object,
};
