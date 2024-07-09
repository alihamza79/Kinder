import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LazyMotion, domMax } from "framer-motion";

const LoadStyles = () => {
  const location = useLocation();

  React.useEffect(() => {
    const loadStyles = async (path) => {
      const dashboardPaths = [
        "/login",
        "/forgotpassword",
        "/signup",  
        "/register",
        "/lockscreen",
        "/changepassword",
        "/error",
        "/server-error",
        "/blankpage",
        "/admin-dashboard",
        "/herocarousel",
        "/herocarousel/addherocarousel",
        "/herocarousel/editherocarousel/:id",
        "/informationcard",
        "/informationcard/addinformationcard",
        "/informationcard/editinformationcard/:id",
        "/aboutlist",
        "/aboutlist/editaboutitem/:id",
        "/about/addaboutitem",
        "/serviceslist",
        "/serviceslist/editservice/:id",
        "/serviceslist/addservice",
        "/serviceheader",
        "/serviceheader/editserviceheader/:id",
        "/serviceheader/addserviceheader",
        "/teamheader",
        "/teamheader/editteamheader/:id",
        "/teamlist",
        "/teamlist/editteammember/:id",
        "/teamlist/addteammember",
        "/linkslist",
        "/linkslist/editlink/:id" ,
        "/linkslist/addlink",
        "/linkheader",
        "/linkheader/editlinkheader/:id",
        "/blogview",
        "/blogview/addblog",
        "/blogview/edit/:id"
      ];

      try {
        if (
          dashboardPaths.some((dashboardPath) => path.includes(dashboardPath))
        ) {
          await import("bootstrap/dist/css/bootstrap.min.css");
          await import("./Assets/css/bootstrap.min.css");
          await import("./Assets/css/style.css");
          await import("./Assets/css/select2.min.css");
          await import("../node_modules/bootstrap/dist/css/bootstrap.min.css");
          await import("../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
        } else {
          await import("./Assets/css/global.css");
          await import("./index.scss");
          await import("./Assets/css/icons.css");
          await import("./Assets/css/global.css");
          await import("./Assets/css/pages.css");
        }
        console.log(`Styles loaded for path: ${path}`);
      } catch (error) {
        console.error(`Error loading styles for path: ${path}`, error);
      }
    };

    loadStyles(location.pathname);
  }, [location.pathname]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LazyMotion features={domMax}>
    <ParallaxProvider>
      <BrowserRouter>
        <LoadStyles />
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </LazyMotion>
);
