import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { ProductCardVertical } from "../component/product-card-vertical";
import { KitchenCardProfile } from "../component/kitchen-card-profile";

export const Home = () => {
  const { store, actions } = useContext(Context);

  let num_max = 3;
  const map_products = store?.AllProducts.reverse().map((item, index) => {
    if (index < num_max) {
      return (
        <div className="col" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    }
  });

  return (
    <>
      <section>
        <div className="container-fluid bgimage text-center p-5 align-baseline">
          <div className="container col-6 p-5 pt-5 mt-5">
            <h1 className="p-2">
              Encuentra en nuestra tienda ecológica alimentación bio sin
              añadidos, sin gluten, vegana.
            </h1>
            <p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias, y entregar lo mejor de nosotros
              mismos para atender cada desafío que la comunidad celíaca
              requiere, poniendo énfasis en ofrecer productos sanos y seguros.
            </p>
            <form className="d-flex mt-5" role="search">
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
        <div className="bg-light p-5">
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

                {/* card  */}
                <div className="col">
                  <KitchenCardProfile />
                </div>
                {/* card  */}
                <div className="col">
                  <KitchenCardProfile />
                </div>
                {/* card  */}
                <div className="col">
                  <KitchenCardProfile />
                </div>
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
    </>
  );
};
