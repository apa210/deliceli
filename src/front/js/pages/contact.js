import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = (props) => {
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
                 <div className="col mt-4">
                  <div className="card">
                    <img
                      src="https://cdn.winsightmedia.com/platform/files/public/800x420/chef-demo-cooking-saucing-dish.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body p-5">
                      <h5 className="card-title">La Cocina de Romi</h5>
                      <p className="card-text">
                        La Cocina de Romi es una Gastropub que significa: Comida
                        casera con un toque gourmet. Cocina Sin Gluten, Sin
                        Lactosa, Vegana.
                      </p>
                      <button type="button" className="btn btn-primary me-2">
                        Leer mas...
                      </button>
                    </div>
                  </div>
                </div>


                 <div className="col-8 mt-4">
                  
                 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>





    </>
  );
};

Contact.propTypes = {
  match: PropTypes.object,
};
