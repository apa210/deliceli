import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

import { ProductCardVertical } from "../component/product-card-vertical";
import { KitchenCardProfile } from "../component/kitchen-card-profile";

export const SingleKitchen = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <section>
        <div className="container bgimage-single-cocina2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-light text-end">Nuestras Cocinas</h1>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container mt-5 mb-5 p-2 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://www.honestfoodtalks.com/wp-content/uploads/2021/11/Top-cooking-channels-1024x1024.jpeg"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-6 p-5 bg-light ">
                <div className="card-body  ">
                  <h1 className="card-title">Milena Sin Gluten</h1>
                  <hr />
                  <br />
                  <p className="card-text">
                    Milena Sin Gluten es una Gastropub que significa: Comida
                    casera con un toque gourmet.El lugar cuenta con dos sectores
                    definidos.{" "}
                  </p>

                  <p className="card-text">
                    {" "}
                    La planta baja, que recibe con un cómodo living como para
                    disfrutar de algún trago y picada, o por qué no una pizzeta
                    acompañada por alguna de la gran variedad de cervezas
                    heladas.{" "}
                  </p>

                  <p className="card-text">
                    {" "}
                    En su gran barra reinan los tragos con y sin alcohol,
                    variedad de licuados y happy hour diarias acompañadas de
                    música en vivo. En la planta alta se encuentra el sector
                    destinado más que nada a reservas de grupos y mesas de
                    comensales que buscan mayor intimidad y luz más tenue, ideal
                    para una cena romántica o una comida en grupo.{" "}
                  </p>
                  <h4 className="pt-4 pb-4">
                    Seguilos en Redes <i className="fab fa-facebook m-2"></i>{" "}
                    <i className="fab fa-instagram m-2"></i>{" "}
                    <i className="fab fa-linkedin m-2"></i>{" "}
                    <i className="fab fa-whatsapp m-2"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5 bg-light ">
          <div className="p-2 text-center">
            <h1 className="p-2 ">Productos de Milena Sin Gluten</h1>
            <p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias.
            </p>
          </div>

          <section>
            <div className="container">
              <div className="row">
                {/* card  */}
                <div className="col">
                  {/* producto  */}

                  <ProductCardVertical />

                  {/* producto  */}
                </div>

                {/* fin de card */}

                {/* card  */}
                <div className="col">
                  {/* producto  */}

                  <ProductCardVertical />

                  {/* producto  */}
                </div>

                {/* fin de card */}

                {/* card  */}
                <div className="col">
                  {/* producto  */}

                  <ProductCardVertical />

                  {/* producto  */}
                </div>

                {/* fin de card */}
              </div>
            </div>
          </section>

          <div className="container mt-5 mb-5">
            <div className="row"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-dark  p-5">
          <div className="p-5 text-center ">
            <h1 className="p-2 text-light ">
              Otras Cocinas que podés encontrar en DeliCeli
            </h1>
            <p className="text-light">
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
      <Footer_contact />
    </>
  );
};

SingleKitchen.propTypes = {
  match: PropTypes.object,
};
