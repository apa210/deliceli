import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { KitchenCardProfile } from "../component/kitchen-card-profile";

export const Kitchens = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <section>
        <div className="container-fluid bgimage-about   p-5 align-baseline">
          <div className="container">
            <h1 className="mt-5 text-center">Nuestras Cocinas</h1>
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
                {/* card  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Kitchens.propTypes = {
  match: PropTypes.object,
};
