import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Footer_contact from "../component/footer_contact";
import { ProductCardVertical } from "../component/product-card-vertical";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const map_products = store?.searchResults.map((item, index) => {
    return (
      <div className="col" key={item + index + item}>
        <ProductCardVertical obj={item} />
      </div>
    );
  });
  return (
    <>
      <section>
        <div className="container-fluid bgimage-about text-center p-5 align-baseline mb-5">
          <div className="container">
            <h1 className="mt-5">Resultados de la búsqueda: {store.search}</h1>
          </div>
        </div>
      </section>
      <section className="container">
        {map_products.length == 0 ? (
          <div className="text-center pb-5">
            <h5>
              No hemos encontrado ningún resultado que coincida con la búsqueda.
            </h5>
          </div>
        ) : (
          <div className="row p-5">{map_products}</div>
        )}
      </section>

      <Footer_contact />
    </>
  );
};
