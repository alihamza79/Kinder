import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Dashboard CSS and Bootstrap

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Assets/css/bootstrap.min.css";

// import "./Assets/css/style.css";

// import "./Assets/css/select2.min.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Dashboard Components
import Login from "./Pages/login";
import ForgotPassword from "./Pages/login/ForgotPassword";
import Signup from "./Pages/login/Signup";
import Profile from "./Pages/login/Profile";
import EditProfile from "./Pages/login/EditProfile";
import Register from "./Pages/login/Register";
import LockScreen from "./Pages/login/LockScreen";
import ChangePassword from "./Pages/login/ChangePassword";
import Error from "./Pages/login/Error";
import ServerError from "./Pages/login/ServerError";
import BlankPage from "./Pages/login/BlankPage";
import GalleryImage from "./Pages/Gallery/Gallery";

import Admin_Dashboard from "./Components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import AddCarouselItem from "./Pages/AdminDashboard/HeroSection/Carousels/AddCarouselItem";
import CarouselList from "./Pages/AdminDashboard/HeroSection/Carousels/CarouselList";
import EditCarouselItem from "./Pages/AdminDashboard/HeroSection/Carousels/EditCarouselItem";
import InformationCardList from "./Pages/InformationCard/InformationCardList";
import EditInformationCard from "./Pages/InformationCard/EditInformationCard";
import AddInformationCard from "./Pages/InformationCard/AddInformationCard";
import AboutList from "./Pages/about/AboutList";
import EditAboutItem from "./Pages/about/EditAboutItem";
const DashboardRoutes = () => (
  <AnimatePresence mode="wait">
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lockscreen" element={<LockScreen />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/error" element={<Error />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/blankpage" element={<BlankPage />} />
        <Route path="/gallery" element={<GalleryImage />} />

        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />

        {/* Hero Section */}
        {/* Hero Carousel */}
        <Route path="/herocarousel" element={<CarouselList />} />

        <Route
          path="/herocarousel/addherocarousel"
          element={<AddCarouselItem />}
        />

        <Route
          path="/herocarousel/editherocarousel/:id"
          element={<EditCarouselItem />}
        />

        {/* InformationCard */}

        <Route path="/informationcard" element={<InformationCardList />} />
        <Route path="/informationcard/editinformationcard/:id" element={<EditInformationCard />} />
        <Route path="/informationcard/addinformationcard" element={<AddInformationCard />} />
        
        {/* About list */}

        <Route path="/aboutlist" element={<AboutList />} />
        <Route path="/aboutlist/editaboutitem/:id" element={<EditAboutItem />} />


      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default DashboardRoutes;
