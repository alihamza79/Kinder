import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Libraries
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domMax } from "framer-motion";

// css
import "./Assets/css/icons.css";
import "./Assets/css/global.css";
import "./Assets/css/pages.css";
import "./index.scss";

// Dashboard css and Bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/bootstrap.min.css";

import "./Assets/css/style.css";

import "./Assets/css/select2.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LazyMotion features={domMax}>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </LazyMotion>
);
