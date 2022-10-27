import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart";
import { ClientAccount } from "./pages/client-account.js";
import { KitchenAccount } from "./pages/kitchen-account.js";
import { Kitchens } from "./pages/kitchens.js";
import { Products } from "./pages/products.js";
import { SingleKitchen } from "./pages/single-kitchen.js";
import { SingleProduct } from "./pages/single-product.js";



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
                        <Route element={<Products />} path="/products" />
                        <Route element={<Kitchens />} path="/kitchen" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<SingleKitchen />} path="/single-kitchen" />
                        <Route element={<SingleProduct />} path="/single-product" />
                        <Route element={<Cart />} path="/cart" />
                        <Route element={<ClientAccount />} path="/client-account" />
                        <Route element={<KitchenAccount />} path="/kitchen-account" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
