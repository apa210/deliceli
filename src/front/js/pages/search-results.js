import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Footer_contact from "../component/footer_contact";
import { ProductCardVertical } from "../component/product-card-vertical";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);

  // Al cargar la página, se desplaza hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // trae los productos de la store del flux.js que coincidan con la búsqueda
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
        <div className="container-fluid bgimage-about text-end p-5 align-baseline mb-5">
          <div className="container">
            <h1 className="mt-5">Resultados de la búsqueda: {store.search}</h1>
          </div>
        </div>
      </section>
      <section className="container mt-lg-5 mb-lg-5 pt-lg-5 pb-lg-5">
        {/* El map devuelve 0, si en el buscador se ingresa algo que no existe en productos. 
          Si existe devuelve el resultado del map*/}
        {map_products.length == 0 ? (
          <div className="text-center m-lg-5 p-lg-5">
            <h1 className="text-center p-lg-5" >
              No hemos encontrado ningún resultado que coincida con la búsqueda.
            </h1>
          </div>
        ) : (
          <div className="row p-5">{map_products}</div>
        )}
      </section>

      <Footer_contact />
    </>
  );
};
