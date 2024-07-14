import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Home
import HomeStartupPage from "./Pages/Home/Startup/Startup";
import Vertretung from "./Pages/Vertretung/Vertretung";
import WichtigeInfo from "./Pages/WichtigeInfo/WichtigeInfo";
import ContactUsClassicPage from "./Pages/Contact/ContactUsClassicPage";
import TeamDetail from "./Pages/TeamDetail";

const Privacy = lazy(() => import("./Pages/Privacy"));

const BlogSimplePage = lazy(() => import("./Pages/Blogs/BlogSimple"));

const BlogStandardPostPage = lazy(() =>
  import("./Pages/Blogs/PostTypes/BlogStandardPostPage")
);

const LandingRoutes = () => (
  <AnimatePresence mode="wait">
    <Suspense fallback={<></>}>
      <Routes>
        <Route
          path="/"
          element={<HomeStartupPage style={{ "--base-color": "#24AE60" }} />}
        />
        <Route path="/vertretung" element={<Vertretung />} />
        <Route path="/wichtigeinfo" element={<WichtigeInfo />} />

        <Route path="/allnews" element={<BlogSimplePage />} />

        <Route path="blogdetail">
          <Route
            path=":id"
            element={
              <BlogStandardPostPage style={{ "--base-color": "#24AE60" }} />
            }
          />
        </Route>
        <Route
          path="/contactus"
          element={<ContactUsClassicPage style={{ "--base-color": "#24AE60" }} />}
        />
        <Route
          path="/privacy"
          element={<Privacy style={{ "--base-color": "#24AE60" }} />}
        />
        <Route
          path="/teamdetail"
          element={<TeamDetail />}
        />
      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default LandingRoutes;
