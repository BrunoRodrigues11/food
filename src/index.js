import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import Rotas from "./rotas";
import { CartProvider } from "./contexts/cart-context.jsx";

// JSX => Mescla de HTML com JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Rotas />
  </CartProvider>
);
