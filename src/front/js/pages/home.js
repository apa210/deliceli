import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Search } from "../component/search";
import { ProductCardVertical } from "../component/product-card-vertical";
import { KitchenCardProfile } from "../component/kitchen-card-profile";
import Footer_contact from "../component/footer_contact";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let num_max = 3;
  const map_products = store?.AllProducts.reverse().map((item, index) => {
    if (index < num_max) {
      return (
        <div className="col-lg-4 col-sm-12" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    }
  });

  const map_kitchens = store?.AllKitchens.reverse().map((item, index) => {
    if (index < num_max) {
      return (
        <div className="col-lg-4 col-sm-12" key={item + index}>
          <KitchenCardProfile obj={item} />
        </div>
      );
    }
  });

  return (
    <>
      <section>
        <div className="container-fluid bgimage text-center">
          <div className="container col-lg-6">
        
            <h1 className="p-5">
              <br/><br/>
              Encuentra en nuestra tienda ecológica alimentación bio sin
              añadidos, sin gluten, vegana.
            </h1>
            <p className="mb-5">
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias, y entregar lo mejor de nosotros
              mismos para atender cada desafío que la comunidad celíaca
              requiere, poniendo énfasis en ofrecer productos sanos y seguros.
            </p>

            {/* Trae componente search */}
            { <Search />}

          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 p-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://sintropia.com.uy/desarrollo/home2.png"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-6 p-5">
                <div className="card-body">
                  <h3 className="card-title">
                    Podes encontrar en nuestra tienda ecológica la alimentación
                    bio sin añadidos, sin gluten, vegana.
                  </h3>
                  <p className="card-text">
                    Buscamos facilitar la vida de las personas con Enfermedad
                    Celíaca, intolerancia al gluten o alergias, y entregar lo
                    mejor de nosotros mismos para atender cada desafío que la
                    comunidad celíaca requiere, poniendo énfasis en ofrecer
                    productos sanos y seguros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-light p-lg-5">
          <div className="p-5 text-center">
            <h1 className="p-2 ">
              Nuestros Perfiles de Cocina Sin Gluten, Sin Lactosa, Vegana.
            </h1>
            <p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias.
            </p>
            <div className="container text-center mt-5">
              <div className="row">
                {/* map de tres cocinas al azar */}
                {map_kitchens}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5">
          <div className="p-2 text-center">
            <h1 className="p-2 ">Productos Recientes</h1>
            <p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias.
            </p>
          </div>

          <div className="container mt-5 mb-5">
            <div className="row">
              {/* map de los últimos tres productos agregados. */}
              {map_products}
            </div>
          </div>
        </div>
      </section>
      <Footer_contact />
    </>
  );
};
