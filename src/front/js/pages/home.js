import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <section>
        <div className="container-fluid bgimage text-center p-5 align-baseline">
          <div className="container col-6 p-5 pt-5 mt-5">
            <h1 className="p-2">
              Encuentra en nuestra tienda ecológica alimentación bio sin
              añadidos, sin gluten, vegana.
            </h1>
            <p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias, y entregar lo mejor de nosotros
              mismos para atender cada desafío que la comunidad celíaca
              requiere, poniendo énfasis en ofrecer productos sanos y seguros.
            </p>
            <form className="d-flex mt-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 p-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://sintropia.com.uy/desarrollo/home2.png"
                  className="img-fluid rounded-start"
                />
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

                <div className="col">
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

                <div className="col">
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
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-5">
          <div className="p-2 text-center">
            <h1 className="p-2 ">Productos Recientes</h1>
 				<p>
              Buscamos facilitar la vida de las personas con Enfermedad Celíaca,
              intolerancia al gluten o alergias.
            </p>
			</div>
            
			<div className="container mt-5 mb-5">
              <div className="row">
          
		        {/* card  */}
                <div className="col">
                  <div className="card">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body p-5">
                      <h5 className="card-title">Medialunas Rellenas</h5>
                      <p className="card-text">
                      Medialunas sin gluten rellenas de jamon y queso. El precio es por docena. Las entregamos calentitas.
                      </p>
					  <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="far fa-star text-warning"></i><i className="far fa-star text-warning"></i>
					  <h2>$ 350</h2>
					  <button type="button" className="btn btn-primary me-2">
					  <i className="fa fa-cart-plus d-inline mx-2"></i> Agregar al carrito </button>
                    </div>
                  </div>
                </div>

				{/* fin de card */}

             		        {/* card  */}
							 <div className="col">
                  <div className="card">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body p-5">
                      <h5 className="card-title">Medialunas Rellenas</h5>
                      <p className="card-text">
                      Medialunas sin gluten rellenas de jamon y queso. El precio es por docena. Las entregamos calentitas.
                      </p>
                      <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="far fa-star text-warning"></i><i className="far fa-star text-warning"></i>
					  <h2>$ 350</h2>
					  <button type="button" className="btn btn-primary me-2">
					  <i className="fa fa-cart-plus d-inline mx-2"></i> Agregar al carrito </button>
                    </div>
                  </div>
                </div>

				{/* fin de card */}

               		        {/* card  */}
							   <div className="col">
                  <div className="card">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body p-5">
                      <h5 className="card-title">Medialunas Rellenas</h5>
                      <p className="card-text">
                      Medialunas sin gluten rellenas de jamon y queso. El precio es por docena. Las entregamos calentitas.
                      </p>
                      <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="far fa-star text-warning"></i><i className="far fa-star text-warning"></i>
					  <h2>$ 350</h2>
					  <button type="button" className="btn btn-primary me-2">
					  <i className="fa fa-cart-plus d-inline mx-2"></i> Agregar al carrito </button>
                    </div>
                  </div>
                </div>

				{/* fin de card */}


						        {/* card  */}
								<div className="col">
                  <div className="card">
                    <img
                      src="https://www.cronista.com/files/image/362/362962/6148bafa0b969.jpg"
                      className="card-img-top"
                    />
                    <div className="card-body p-5">
                      <h5 className="card-title">Medialunas Rellenas</h5>
                      <p className="card-text">
                      Medialunas sin gluten rellenas de jamon y queso. El precio es por docena. Las entregamos calentitas.
                      </p>
                      <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="far fa-star text-warning"></i><i className="far fa-star text-warning"></i>
					  <h2>$ 350</h2>
					  <button type="button" className="btn btn-primary me-2">
					  <i className="fa fa-cart-plus d-inline mx-2"></i> Agregar al carrito </button>
                    </div>
                  </div>
                </div>

				{/* fin de card */}
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
