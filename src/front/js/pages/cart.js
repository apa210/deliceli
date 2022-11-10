import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Footer_contact from "../component/footer_contact";
import InvoiceCart from "../component/cartInvoice";
import ProductsCart from "../component/productsCart";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const [products, setProducts] = useState([]);

  // trae los productos del carrito de la store y se guarda en el estado setProducts
  useEffect(() => {
    setProducts(store.cart);
  }, [store.cart]);

  // Al cargar la página, se desplaza hacia arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // trae los productos de la store
  const map_products = store?.cart.map((item, index) => {
    if (store?.cart[0] !== [] && store?.cart.length > 0) {
      // updateItem(index);
      return (
        <div key={index + index + item?.nombre}>
          <ProductsCart
            img={item?.foto_producto}
            name={item?.nombre}
            unitPrice={item?.precio_unitario}
            index={index}
            id={item?.id}
            nameKitchen={item?.user_name}
            quantityProduct={item?.cantidad_producto}
            quantityCart={item?.cantidad_carrito}
          />
        </div>
      );
    }
  });

  return (
    <>
      <section>
        <div className="container bgimage-contacto p-5 align-baseline mt-5">
          <div className="container">
            <h1 className="mt-5 text-center">Carrito</h1>
          </div>
        </div>
      </section>

      <div className=" container">
        <div className="pt-5"></div>

        <div className="container mb-5">
          <div className="row">
            <div className="col">{map_products}</div>
            <div className="col-lg-4">
              <InvoiceCart products={products} />
            </div>{" "}
          </div>
        </div>
      </div>
      <Footer_contact />
    </>
  );
};

Cart.propTypes = {
  match: PropTypes.object,
};
