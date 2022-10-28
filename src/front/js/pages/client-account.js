import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ClientAccount = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <section>
        <div className="container-fluid bgimage-about   p-5 align-baseline">
          <div className="container">
            <h1 className="mt-5 text-center">Tu Cuenta!!!!!!!</h1>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};

ClientAccount.propTypes = {
  match: PropTypes.object,
};
