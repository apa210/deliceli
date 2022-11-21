import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart";
import { ClientAccount } from "./pages/client-account.js";
import { KitchenAccount } from "./pages/kitchen-account.js";
import { KitchenPlates } from "./pages/kitchen-plates.js";
import { KitchenOrders } from "./pages/kitchen-orders.js";
import { Kitchens } from "./pages/kitchens.js";
import { Products } from "./pages/products.js";
import { SingleKitchen } from "./pages/single-kitchen.js";
import { SingleProduct } from "./pages/single-product.js";
import { Favorites } from "./pages/favorites.js";
import { Orders } from "./pages/orders.js";
import { SearchResults } from "./pages/search-results.js";
import { Politicas } from "./pages/politicas.js";
import { Terminos } from "./pages/terminos.js";
import { OrderConfirmed } from "./pages/order-confirmed.js";
import { Checkout } from "./pages/checkout";
import { EditProduct } from "./pages/edit-product.js";
import { ChangePass } from "./pages/change-pass.js";
import { OrderRejected } from "./pages/order-rejected.js";



import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<About />} path="/pages/about" />
                        <Route element={<Products />} path="/pages/products" />
                        <Route element={<Kitchens />} path="/pages/kitchens" />
                        <Route element={<Contact />} path="/pages/contact" />

                        <Route element={<SingleKitchen />} path="/pages/single-kitchen/:id" />
                        <Route element={<SingleProduct />} path="/pages/single-product/:id" />
                        <Route element={<Cart />} path="/pages/cart" />

                        <Route element={<ClientAccount />} path="/pages/client-account" />
                        <Route element={<Favorites />} path="/pages/favorites" />
                        <Route element={<Orders />} path="/pages/orders" />

                        <Route element={<KitchenAccount />} path="/pages/kitchen-account" />
                        <Route element={<KitchenPlates />} path="/pages/kitchen-plates" />
                        <Route element={<KitchenOrders />} path="/pages/kitchen-orders" />
                        <Route element={<SearchResults />} path="/pages/search-results" />

                        <Route element={<Politicas />} path="/pages/politicas" />
                        <Route element={<Terminos />} path="/pages/terminos" />
                        <Route element={<OrderConfirmed />} path="/pages/order-confirmed" />
                        <Route element={<Checkout />} path="/pages/checkout" />
                        <Route element={<EditProduct />} path="/pages/edit-product" />
                        <Route element={<EditProduct />} path="/pages/add-product" />
                        <Route element={<ChangePass />} path="/pages/change-pass" />
                        <Route element={<OrderRejected />} path="/pages/order-rejected" />
                        
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
