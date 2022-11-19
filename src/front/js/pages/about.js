import React, { useEffect } from "react";
import "../../styles/home.css";
import Footer_contact from "../component/footer_contact";

export const About = () => {
  // Al cargar la página, se desplaza hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid bgimage-about text-center p-5 align-baseline mb-5">
          <div className="container">
            <h1 className="mt-5">Sobre Nosotros</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-5 p-2 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://sintropia.com.uy/desarrollo/home2.png"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-6 p-5">
                <div className="card-body ">
                  <h3 className="card-title">
                    Podes encontrar en nuestra tienda ecológica la alimentación
                    bio sin añadidos, sin gluten, vegana.
                  </h3>
                  <p className="card-text">
                    Buscamos facilitar la vida de las personas con celiaquía, intolerancia al gluten o alergias, y entregar lo
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

      <section>
        <div className="bg-light p-5">
          <div className="p-5 text-center">
            <h1 className="p-2 ">Nuestro Equipo de Desarrollo</h1>
            <p>
              Buscamos facilitar la vida de las personas con celiaquía,
              intolerancia al gluten o alergias.
            </p>
          </div>

          <div className="container text-center mt-5 mb-5">
            <div className="row mt-5">
              <div className="col-lg-3 mb-5 ">
                {/* Inicio de perfil de Analía */}

                <div className="card border-0">
                  <img
                    src="https://sintropia.design/wp-content/uploads/2022/08/analia.png"
                    className="card-img-top p-4 rounded-circle"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Analía Corcino</h5>
                    <p className="card-text">
                      Diseñadora Industrial especializada en Branding, Diseño
                      Web y Experiencias Digitales. Actualmente cursando una
                      especialización en Full Stack Developer.
                    </p>

                    <p className="card-text">
                      <small className="text-muted">Seguir en Github</small>
                    </p>
                  </div>
                </div>

                {/* fIN de perfil de Analía  */}
              </div>
              <div className="col-lg-3 mb-5">
                {/* Inicio de perfil de Aparicio  */}

                <div className="card border-0">
                  <img
                    src="https://ca.slack-edge.com/T0BFXMWMV-U04202NMD99-af3997d0b29b-512"
                    className="card-img-top p-4 rounded-circle"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Aparicio Baptista</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In congue consequat diam, sed dictum nisl molestie ac.
                    </p>

                    <p className="card-text">
                      <small className="text-muted">Seguir en Github</small>
                    </p>
                  </div>
                </div>

                {/* fIN de perfil de Aparicio  */}
              </div>
              <div className="col-lg-3 mb-5">
                {/* Inicio de perfil de Noelia  */}

                <div className="card border-0">
                  <img
                    src="https://talentosremotos.uy/wp-content/uploads/avatars/348/60e338e57840d-bpfull.jpg"
                    className="card-img-top p-4 rounded-circle"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Noelia Irace</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In congue consequat diam, sed dictum nisl molestie ac.
                    </p>

                    <p className="card-text">
                      <small className="text-muted">Seguir en Github</small>
                    </p>
                  </div>
                </div>

                {/*  fIN de perfil de Noelia  */}
              </div>
              <div className="col-lg-3 mb-5">
                {/*  Inicio de perfil de Elías  */}

                <div className="card border-0">
                  <img
                    src="https://sintropia.com.uy/desarrollo/elias.png"
                    className="card-img-top p-4 rounded-circle"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Elías Fernández</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In congue consequat diam, sed dictum nisl molestie ac.
                    </p>

                    <p className="card-text">
                      <small className="text-muted">Seguir en Github</small>
                    </p>
                  </div>
                </div>

                {/* fIN de perfil de Elías  */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer_contact />
    </>
  );
};
