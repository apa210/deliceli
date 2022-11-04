import React from "react";
import { Link } from "react-router-dom";

const Footer_contact = () => {
  return (
    <>
      <section>
        <div className="p-2 main-color-bg p-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-light mt-4 px-5 mx-5 p-3">
                Buscamos facilitar la vida de las personas con Enfermedad
                Celíaca, intolerancia al gluten o alergias.
              </h2>
            </div>
            <div className="col">
              <Link
                to="/pages/contact"
                className="btn btn-light btn-lg m-5 p-4"
              >
                Contactanos para afiliarte!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer_contact;
