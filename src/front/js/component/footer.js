import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container pt-5 pb-5">
          <div className="row p-3">
            <div className="col-5">
              <h3>DeliCeli.uy</h3>
              <p> Alimentación bio sin añadidos, sin gluten, vegana.</p>
              <p>
                Rivera 3344, Apto 103, Oficina 134
                <br />
                Tel. +598 33 44 66
                <br />
                Mail. hola@deliceli.uy
              </p>
            </div>

            <div className="col">
              <h5> CUENTA</h5> <br />
              <p> Mi Cuenta</p>
              <p> Favoritos</p>
            </div>

            <div className="col">
              <h5> SOBRE</h5> <br />
              <p> Preguntas Frecuentes</p>
              <p> Contacto</p>
            </div>

            <div className="col">
              <h5> POLÍTICAS </h5> <br />
              <p> Política de Privacidad </p>
              <p> Términos y Condiciones</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="container ">
          <div className="row">
            <div className="col-10">
              <p className="pt-4 pb-4">
                Hecho con <i className="fa fa-heart text-danger" /> por{" "}
                <Link to="/pages/about">Noelia, Analía, Elías y Aparicio.</Link>
              </p>
            </div>

            <div className="col text-right">
              <h4 className="pt-4 pb-4">
                <i className="fab fa-facebook m-2"></i>{" "}
                <i className="fab fa-instagram m-2"></i>{" "}
                <i className="fab fa-linkedin m-2"></i>{" "}
                <i className="fab fa-whatsapp m-2"></i>
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
