import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ProductCardVertical } from "../component/product-card-vertical";
import { Sidebar } from "../component/sidebar";
import Footer_contact from "../component/footer_contact";

export const Products = () => {
  const { store, actions } = useContext(Context);
  
  // Al cargar la página, se desplaza hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // trae los productos de la store del flux.js
  const map_products = store?.AllProducts.map((item, index) => {
    return (
      <div className="col-sm-12 col-lg-4" key={item + index + item}>
        <ProductCardVertical obj={item} />
      </div>
    );
  });

  // trae los productos según su categoría de la store del flux.js
  const map_products_Category = store?.AllProductsOfCategory.map(
    (item, index) => {
      return (
        <div className="col-sm-12 col-lg-4" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    }
  );

  return (
    <>
      <section>
        <div className="container-fluid bgimage-about   p-5 align-baseline">
          <div className="container">
            <h1 className="mt-5 text-center">Nuestros Productos</h1>
          </div>
        </div>
      </section>

      <div className="p-5">
        <div className="p-2 text-center">
          <h1 className="p-2">Productos</h1>
          <p>
            Buscamos facilitar la vida de las personas con celiaquía,
            intolerancia al gluten o alergias.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {/* col sidebar  */}
            <div className="col col-lg-3 me-2">
              <Sidebar />
            </div>
            {/* col sidebar  */}

            {/* col - productos  */}
            <div className="col">
              <div className="row">
                {/* Si se filtra aparecen los productos pertenecientes a esa categoría y
                   si no se filtra, aparecen todos los productos */}
                {store.val_category == false
                  ? map_products
                  : map_products_Category}
              </div>
            </div>
            {/* col - productos  */}
          </div>
        </div>
      </div>
      <Footer_contact />
    </>
  );
};

Products.propTypes = {
  match: PropTypes.object,
};
