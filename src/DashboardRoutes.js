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
import InformationCardList from "./Pages/AdminDashboard/InformationCard/InformationCardList";
import EditInformationCard from "./Pages/AdminDashboard/InformationCard/EditInformationCard";
import AddInformationCard from "./Pages/AdminDashboard/InformationCard/AddInformationCard";
import AboutList from "./Pages/AdminDashboard/about/AboutList";
import EditAboutItem from "./Pages/AdminDashboard/about/EditAboutItem";
import ServicesList from "./Pages/AdminDashboard/services/ServicesList";
import EditService from "./Pages/AdminDashboard/services/EditService";
import AddService from "./Pages/AdminDashboard/services/AddService";
import ServiceHeaderList from "./Pages/AdminDashboard/services/ServiceHeaderList";
import EditServiceHeader from "./Pages/AdminDashboard/services/EditServiceHeader";
import AddServiceHeader from "./Pages/AdminDashboard/services/AddServiceHeader";
import TeamHeaderList from "./Pages/AdminDashboard/team/TeamHeaderList";
import EditTeamHeader from "./Pages/AdminDashboard/team/EditTeamHeader";
import TeamBodyList from "./Pages/AdminDashboard/team/TeamBodyList";
import AddTeamMember from "./Pages/AdminDashboard/team/AddTeamMember";
import EditTeamMember from "./Pages/AdminDashboard/team/EditTeamMember";
import LinksList from "./Pages/AdminDashboard/links/LinksList";
import EditLink from "./Pages/AdminDashboard/links/EditLink";
import AddLink from "./Pages/AdminDashboard/links/AddLink";
import EditLinkHeader from "./Pages/AdminDashboard/links/EditLinkHeader";
import LinksHeaderList from "./Pages/AdminDashboard/links/LinksHeaderList";
import AddMonthlyRepresentation from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/AddMonthlyRepresentation";
import LocationAutocomplete from "./Components/LocationAutocomplete";
import RepresentationDates from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/RepresentationDates";
import AddRepresentationDate from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/AddRepresentationDate";
import RepresentativeList from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/RepresentativeList";
import AddRepresentative from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/AddRepresentative";
import EditRepresentative from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/EditRepresentative";
import Addblog from "./Pages/AdminDashboard/blogs/Addblog";
import Editblog from "./Pages/AdminDashboard/blogs/Editblog";
import BlogView from "./Pages/AdminDashboard/blogs/BlogView";
import RepresentationData from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/RepresentationData";

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
        <Route
          path="/informationcard/editinformationcard/:id"
          element={<EditInformationCard />}
        />
        <Route
          path="/informationcard/addinformationcard"
          element={<AddInformationCard />}
        />

        {/* About list */}

        <Route path="/aboutlist" element={<AboutList />} />
        <Route
          path="/aboutlist/editaboutitem/:id"
          element={<EditAboutItem />}
        />

        {/* Services */}

        <Route path="/serviceslist" element={<ServicesList />} />
        <Route path="/serviceslist/editservice/:id" element={<EditService />} />
        <Route path="/serviceslist/addservice" element={<AddService />} />

        {/* Service Header */}

        <Route path="/serviceheader" element={<ServiceHeaderList />} />
        <Route
          path="/serviceheader/editserviceheader/:id"
          element={<EditServiceHeader />}
        />
        <Route
          path="/serviceheader/addserviceheader"
          element={<AddServiceHeader />}
        />

        {/* Team Header */}

        <Route path="/teamheader" element={<TeamHeaderList />} />
        <Route
          path="/teamheader/editteamheader/:id"
          element={<EditTeamHeader />}
        />

        {/* Team Body */}

        <Route path="/teamlist" element={<TeamBodyList />} />
        <Route
          path="/teamlist/editteammember/:id"
          element={<EditTeamMember />}
        />
        <Route path="/teamlist/addteammember" element={<AddTeamMember />} />

        {/* Links */}

        <Route path="/linkslist" element={<LinksList />} />
        <Route path="/linkslist/editlink/:id" element={<EditLink />} />
        <Route path="/linkslist/addlink" element={<AddLink />} />

        {/* Links Header */}

        <Route path="/linkheader" element={<LinksHeaderList />} />
        <Route
          path="/linkheader/editlinkheader/:id"
          element={<EditLinkHeader />}
        />

        {/* Representation */}
        {/* Monthly Repserentation */}
        <Route
          path="/monthlyrepresentation/addmonthlyrepresentation"
          element={<AddMonthlyRepresentation />}
        />

        <Route path="/representationdates" element={<RepresentationDates />} />

        <Route
          path="/representationdates/addrepresentationdate"
          element={<AddRepresentationDate />}
        />

        <Route
          path="/representationdates/:id/representatives"
          element={<RepresentativeList />}
        />

        <Route
          path="/representationdates/:id/representatives/addrepresentative"
          element={<AddRepresentative />}
        />

        <Route
          path="/representationdates/:id/representatives/editrepresentative/:id1"
          element={<EditRepresentative />}
        />

        <Route path="representationdata" element={<RepresentationData />} />

        {/* Location Autocomplete Component */}
        <Route
          path="/locationautocomplete"
          element={<LocationAutocomplete />}
        />

        {/* Blogs */}

        <Route path="/blogview" element={<BlogView />} />
        <Route path="/blogview/addblog" element={<Addblog />} />
        <Route path="/blogview/edit/:id" element={<Editblog />} />
      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default DashboardRoutes;
