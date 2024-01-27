import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";
import Home from "./pages/home/home.jsx";

// JSX => Mescla de HTML com JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
