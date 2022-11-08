import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
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

  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    actions.getKitchen(params?.id);
    actions.getAllProductsOfKitchen(params?.id);
  }, [params?.id]);

  useEffect(() => {
    setTimeout(() => {
      setFacebook(store?.kitchen?.facebook);
      setInstagram(store?.kitchen?.instagram);
      setLinkedin(store?.kitchen?.linkedin);
      setTwitter(store?.kitchen?.twitter);
    }, 1000);
  }, [store.kitchen]);

  const map_products = store?.AllProductsOfKitchen.map((item, index) => {
    if (store?.AllProductsOfKitchen != []) {
      return (
        <div className="col" key={item + index + item}>
          <ProductCardVertical obj={item} />
        </div>
      );
    } else {
      return false;
    }
  });

  let num_max = 3;
  const map_kitchens = store?.AllKitchens.reverse().map((item, index) => {
    if (index < num_max) {
      return (
        <div className="col" key={item + index}>
          <KitchenCardProfile obj={item} />
        </div>
      );
    }
  });

  return (
    <>
      <section ref={scrollRef}>
        <div className="container bgimage-single-cocina2 p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-light text-end">
              Cocina de {store?.kitchen?.user_name}
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container mt-3 mb-5 p-5 p-2 ">
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
                  <br />
            
                  <p className="card-text">
                  {store?.kitchen?.descripcion}
                  </p>
                  <h4 className="pt-4 pb-4">
                    Sigue a {store?.kitchen?.user_name} en redes
                    <br />
                    <a href={facebook}>
                      <i className="fab fa-facebook m-2"></i>
                    </a>
                    <a href={instagram}>
                      <i className="fab fa-instagram m-2"></i>
                    </a>
                    <a href={linkedin}>
                      <i className="fab fa-linkedin m-2"></i>
                    </a>
                    <a href={twitter}>
                      <i className="fab fa-twitter-square m-2"></i>
                    </a>
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
