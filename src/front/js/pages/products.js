import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ProductCardVertical } from "../component/product-card-vertical";
import { Sidebar } from "../component/sidebar";
import Footer_contact from "../component/footer_contact";

export const Products = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const map_products = store?.AllProducts.map((item, index) => {
    return (
      <div className="col" key={item + index + item}>
        <ProductCardVertical obj={item} />
      </div>
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
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
            Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
            intolerancia al gluten o alergias.
          </p>
        </div>

        <div className="container">
          <div className="d-flex">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="row">{map_products}</div>
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
