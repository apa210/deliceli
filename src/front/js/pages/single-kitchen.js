import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";

import { ProductCardVertical } from "../component/product-card-vertical";
import { KitchenCardProfile } from "../component/kitchen-card-profile";

export const SingleKitchen = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [dribble, setDribble] = useState("");
  const [pinterest, setPinterest] = useState("");

  let num_max = 3;

  useEffect(() => {
    // Al cargar la página, se desplaza hacia arriba
    window.scrollTo(0, 0);
    // usa la funcion del flux.js para traer los datos de una cocina con el ID
    actions.getKitchen(params?.id);
    // usa la funcion del flux.js para traer los productos de una cocina con el ID
    actions.getAllProductsOfKitchen(params?.id);
  }, [params?.id]);

  useEffect(() => {
    setTimeout(() => {
      setFacebook(store?.kitchen?.facebook);
      setInstagram(store?.kitchen?.instagram);
      setLinkedin(store?.kitchen?.linkedin);
      setTwitter(store?.kitchen?.twitter);
      setDribble(store?.kitchen?.dribble);
      setPinterest(store?.kitchen?.pinterest);
    }, 100);
  }, [store.kitchen]);

  const map_products = store?.AllProductsOfKitchen.map((item, index) => {
    if (store?.AllProductsOfKitchen != []) {
      return (
        <div className="col-lg-4" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    } else {
      return false;
    }
  });

  const map_kitchens = store?.AllKitchens.reverse().map((item, index) => {
    if (index < num_max) {
      return (
        <div className="col-lg-4" key={item + index}>
          <KitchenCardProfile obj={item} />
        </div>
      );
    }
  });

  return (
    <>
      <section>
        <div className="container bgimage-single-cocina2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-light text-end">
              Cocina de {store?.kitchen?.user_name}
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container mt-3 mb-5 p-4 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={store?.kitchen?.foto_usuario}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-6 p-5 bg-light ">
                <div className="card-body  ">
                  <h1 className="card-title">{store?.kitchen?.user_name}</h1>
                  <hr />

                  <p className="card-text">{store?.kitchen?.descripcion}</p>
                  <br />
                  {facebook === "" &&
                  instagram === "" &&
                  linkedin === "" &&
                  twitter === "" ? null : (
                    <div>
                      <h4>Sigue a {store?.kitchen?.user_name} en redes</h4>
                      <br />
                      <h1>
                        {facebook === "" ? null : (
                          <a href={facebook} target="_blank">
                            <i className="fab fa-facebook m-2"></i>
                          </a>
                        )}
                        {instagram === "" ? null : (
                          <a href={instagram} target="_blank">
                            <i className="fab fa-instagram m-2"></i>
                          </a>
                        )}
                        {linkedin === "" ? null : (
                          <a href={linkedin} target="_blank">
                            <i className="fab fa-linkedin m-2"></i>
                          </a>
                        )}
                        {twitter === "" ? null : (
                          <a href={twitter} target="_blank">
                            <i className="fab fa-twitter-square m-2"></i>
                          </a>
                        )}
                        {dribble === "" ? null : (
                          <a href={dribble} target="_blank">
                            <i className="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>
                          </a>
                        )}
                        {pinterest === "" ? null : (
                          <a href={pinterest} target="_blank">
                            <i className="fab fa-fw fa-pinterest text-pinterest"></i>
                          </a>
                        )}
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5 bg-light ">
          <div className="p-2 text-center">
            <h1 className="p-2 ">Productos de {store?.kitchen?.user_name}</h1>
            <p>
              Encuentra las comidas que {store?.kitchen?.user_name} ha preparado
              especialmente para ti
            </p>
          </div>

          <section>
            <div className="container">
              <div className="row">{map_products}</div>
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
              <div className="row">{map_kitchens}</div>
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
