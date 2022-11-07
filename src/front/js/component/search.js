import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const searchButton = () => {
    if (searchProduct == "") {
      navigate("/");
    } else {
      actions.search(searchProduct);
      setSearchProduct("");
      navigate("/pages/search-results");
    }
  };

  return (
    <div className="d-flex " role="search">
      <input
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        className="form-control me-2 rounded-pill ps-5 pe-5 p-2"
        type="text"
        placeholder="Buscar"
        aria-label="Buscar"
      />
      <button onClick={searchButton} className="btn btn-outline-success me-5 rounded-pill ps-4 pe-4">
      <i class="fas fa-search"></i> 
      </button>


       
    </div>
  );
};
