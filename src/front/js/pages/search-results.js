import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Footer_contact from "../component/footer_contact";

export const SearchResults = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <section>
        <div className="container-fluid bgimage-about text-center p-5 align-baseline mb-5">
          <div className="container">
            <h1 className="mt-5">Resultados de la búsqueda</h1>
          </div>
        </div>
      </section>

   

  
      <Footer_contact />
    </>
  );
};
