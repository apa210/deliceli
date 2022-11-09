import React from "react";
import { Link } from "react-router-dom";

// actualmente no se esta usando
// pensado usar para: la cuenta de usuario -> historial de pedidos y favoritos -> platos del producto, etc
export const ProductCardHorizontal = () => {
  return (
    <div className="container">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Product Card Horizontal</span>
      </Link>
    </div>
  );
};
