import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Search = () => {
    return (
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
            />
            <button className="btn btn-outline-success me-5" type="submit">
                Buscar
            </button>
        </form>
    );
};