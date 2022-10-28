import React, {useContext} from "react";
import {Context} from "../store/appContext";
import "../../styles/home.css";

export const About = () => {
    const {store, actions} = useContext(Context);

    return (<>
        <section>
            <div className="container-fluid bgimage-about text-center p-5 align-baseline">
                <div className="container">
                    <h1 className="mt-5">
                        Sobre Nosotros
                    </h1>
                </div>
            </div>
        </section>

        <section>
            <div className="container mt-5 p-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://sintropia.com.uy/desarrollo/home2.png" className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-6 p-5">
                            <div className="card-body">
                                <h3 className="card-title">
                                    Podes encontrar en nuestra tienda ecológica la alimentación
                                                        bio sin añadidos, sin gluten, vegana.
                                </h3>
                                <p className="card-text">
                                    Buscamos facilitar la vida de las personas con Enfermedad
                                                        Celíaca, intolerancia al gluten o alergias, y entregar lo
                                                        mejor de nosotros mismos para atender cada desafío que la
                                                        comunidad celíaca requiere, poniendo énfasis en ofrecer
                                                        productos sanos y seguros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            </>
            );
            };
