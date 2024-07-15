import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { checkAuth } from "./appwrite/Services/authServices";
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
import Addblog from "./Pages/AdminDashboard/blogs/Addblog";
import Editblog from "./Pages/AdminDashboard/blogs/Editblog";
import BlogView from "./Pages/AdminDashboard/blogs/BlogView";
import RepresentationData from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/RepresentationData";
import HospitalKontakteHeaderList from "./Pages/AdminDashboard/Hospital_Kontakte/HospitalKontakteHeaderList";
import EditHospitalKontakteHeader from "./Pages/AdminDashboard/Hospital_Kontakte/EditHospitalKontakteHeader";
import HospitalKontakteList from "./Pages/AdminDashboard/Hospital_Kontakte/HospitalKontakteList";
import EditHospitalKontakte from "./Pages/AdminDashboard/Hospital_Kontakte/EditHospitalKontakte";
import AddHospitalKontakte from "./Pages/AdminDashboard/Hospital_Kontakte/AddHospitalKontakte";
import FormBodyList from "./Pages/AdminDashboard/form/FormBodyList";
import EditFormBody from "./Pages/AdminDashboard/form/EditFormBody";
import AddFormBody from "./Pages/AdminDashboard/form/AddFormBody";
import FormHeaderList from "./Pages/AdminDashboard/form/FormHeaderList";
import EditFormHeader from "./Pages/AdminDashboard/form/EditFormHeader";
import ResetPassword from "./Pages/login/ResetPassword";
import ScheduleHeaderList from "./Pages/AdminDashboard/schedule/ScheduleHeaderList";
import EditScheduleHeader from "./Pages/AdminDashboard/schedule/EditScheduleHeader";
import ScheduleBodyList from "./Pages/AdminDashboard/schedule/ScheduleBodyList";
import EditScheduleBody from "./Pages/AdminDashboard/schedule/EditScheduleBody";
import WeeklyRepresentationHeaderList from "./Pages/AdminDashboard/weekly_representation/WeeklyRepresentationHeaderList";
import EditWeeklyRepresentationHeader from "./Pages/AdminDashboard/weekly_representation/EditWeeklyRepresentationHeader";
import WeeklyRepresentationList from "./Pages/AdminDashboard/weekly_representation/WeeklyRepresentationList";
import AddWeeklyRepresentation from "./Pages/AdminDashboard/weekly_representation/AddWeeklyRepresentation";
import EditWeeklyRepresentation from "./Pages/AdminDashboard/weekly_representation/EditWeeklyRepresentation";
import ImportantInformationHeaderList from "./Pages/AdminDashboard/Important_information/ImportantInformationHeaderList";
import EditImportantInformationHeader from "./Pages/AdminDashboard/Important_information/EditImportantInformationHeader";
import ImportantInformationList from "./Pages/AdminDashboard/Important_information/ImportantInformationList";
import EditImportantInformation from "./Pages/AdminDashboard/Important_information/EditImportantInformation";
import AddImportantInformation from "./Pages/AdminDashboard/Important_information/AddImportantInformation";
import Preloader from "./Components/Preloader";
import EditRepresentationDate from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/EditRepresentationDate";
import EditRepresentative from "./Pages/AdminDashboard/Representation/MonthlyRepresentation/EditRepresentative";
import SocialLinks from "./Pages/AdminDashboard/SocialLinks";
import SubscriberList from "./Pages/AdminDashboard/SuscriberList";

const ProtectedRoute = ({ element }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const authenticate = async () => {
      const authStatus = await checkAuth();
      setIsAuth(authStatus);
    };

    authenticate();
  }, []);

  if (isAuth === null) {
    // You can show a loader here while checking authentication
    return <Preloader/>;
  }

  return isAuth ? element : <Navigate to="/login" />;
};

const DashboardRoutes = () => (
  <AnimatePresence mode="wait">
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/edit-profile" element={<ProtectedRoute element={<EditProfile />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lockscreen" element={<ProtectedRoute element={<LockScreen />} />} />
        <Route path="/changepassword" element={<ProtectedRoute element={<ChangePassword />} />} />
        <Route path="/error" element={<Error />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/blankpage" element={<ProtectedRoute element={<BlankPage />} />} />
        <Route path="/gallery" element={<ProtectedRoute element={<GalleryImage />} />} />

        <Route path="/admin-dashboard" element={<ProtectedRoute element={<Admin_Dashboard />} />} />

        {/* Hero Section */}
        {/* Hero Carousel */}
        <Route path="/herocarousel" element={<ProtectedRoute element={<CarouselList />} />} />
        <Route path="/herocarousel/addherocarousel" element={<ProtectedRoute element={<AddCarouselItem />} />} />
        <Route path="/herocarousel/editherocarousel/:id" element={<ProtectedRoute element={<EditCarouselItem />} />} />

        {/* InformationCard */}
        <Route path="/informationcard" element={<ProtectedRoute element={<InformationCardList />} />} />
        <Route path="/informationcard/editinformationcard/:id" element={<ProtectedRoute element={<EditInformationCard />} />} />
        <Route path="/informationcard/addinformationcard" element={<ProtectedRoute element={<AddInformationCard />} />} />

        {/* About list */}
        <Route path="/aboutlist" element={<ProtectedRoute element={<AboutList />} />} />
        <Route path="/aboutlist/editaboutitem/:id" element={<ProtectedRoute element={<EditAboutItem />} />} />

        {/* Services */}
        <Route path="/serviceslist" element={<ProtectedRoute element={<ServicesList />} />} />
        <Route path="/serviceslist/editservice/:id" element={<ProtectedRoute element={<EditService />} />} />
        <Route path="/serviceslist/addservice" element={<ProtectedRoute element={<AddService />} />} />

        {/* Service Header */}
        <Route path="/serviceheader" element={<ProtectedRoute element={<ServiceHeaderList />} />} />
        <Route path="/serviceheader/editserviceheader/:id" element={<ProtectedRoute element={<EditServiceHeader />} />} />
        <Route path="/serviceheader/addserviceheader" element={<ProtectedRoute element={<AddServiceHeader />} />} />

        {/* Team Header */}
        <Route path="/teamheader" element={<ProtectedRoute element={<TeamHeaderList />} />} />
        <Route path="/teamheader/editteamheader/:id" element={<ProtectedRoute element={<EditTeamHeader />} />} />

        {/* Team Body */}
        <Route path="/teamlist" element={<ProtectedRoute element={<TeamBodyList />} />} />
        <Route path="/teamlist/editteammember/:id" element={<ProtectedRoute element={<EditTeamMember />} />} />
        <Route path="/teamlist/addteammember" element={<ProtectedRoute element={<AddTeamMember />} />} />

        {/* Links */}
        <Route path="/linkslist" element={<ProtectedRoute element={<LinksList />} />} />
        <Route path="/linkslist/editlink/:id" element={<ProtectedRoute element={<EditLink />} />} />
        <Route path="/linkslist/addlink" element={<ProtectedRoute element={<AddLink />} />} />

        {/* Links Header */}
        <Route path="/linkheader" element={<ProtectedRoute element={<LinksHeaderList />} />} />
        <Route path="/linkheader/editlinkheader/:id" element={<ProtectedRoute element={<EditLinkHeader />} />} />

        {/* Representation */}
        {/* Monthly Representation */}
        <Route path="/monthlyrepresentation/addmonthlyrepresentation" element={<ProtectedRoute element={<AddMonthlyRepresentation />} />} />
        <Route path="/representationdates" element={<ProtectedRoute element={<RepresentationDates />} />} />
        <Route path="/representationdates/addrepresentationdate" element={<ProtectedRoute element={<AddRepresentationDate />} />} />
        <Route path="/representationdates/editrepresentationdate/:id" element={<ProtectedRoute element={<EditRepresentationDate />} />} />

        <Route path="/representationdates/:id/representatives" element={<ProtectedRoute element={<RepresentativeList />} />} />
        <Route path="/representationdates/:id/representatives/addrepresentative" element={<ProtectedRoute element={<AddRepresentative />} />} />
        <Route path="/representationdates/:id/representatives/editrepresentative/:repId"  element={<ProtectedRoute element={<EditRepresentative />} />} />

        <Route path="representationdata" element={<ProtectedRoute element={<RepresentationData />} />} />

        {/* Location Autocomplete Component */}
        <Route path="/locationautocomplete" element={<ProtectedRoute element={<LocationAutocomplete />} />} />

        {/* Blogs */}
        <Route path="/blogview" element={<ProtectedRoute element={<BlogView />} />} />
        <Route path="/blogview/addblog" element={<ProtectedRoute element={<Addblog />} />} />
        <Route path="/blogview/edit/:id" element={<ProtectedRoute element={<Editblog />} />} />

        {/* Hospital Kontakte Header */}
        <Route path="/hospitalkontakteheader" element={<ProtectedRoute element={<HospitalKontakteHeaderList />} />} />
        <Route path="/hospitalkontakteheader/edithospitalkontakteheader/:id" element={<ProtectedRoute element={<EditHospitalKontakteHeader />} />} />

        {/* Hospital Kontakte Body */}
        <Route path="/hospitalkontakteliste" element={<ProtectedRoute element={<HospitalKontakteList />} />} />
        <Route path="/hospitalkontakteliste/addhospitalkontakte" element={<ProtectedRoute element={<AddHospitalKontakte />} />} />
        <Route path="/hospitalkontakteliste/edithospitalkontakte/:id" element={<ProtectedRoute element={<EditHospitalKontakte />} />} />

        {/* Form Header */}
        <Route path="/formheader" element={<ProtectedRoute element={<FormHeaderList />} />} />
        <Route path="/formheader/editformheader/:id" element={<ProtectedRoute element={<EditFormHeader />} />} />

        {/* Form Body */}
        <Route path="/formbody" element={<ProtectedRoute element={<FormBodyList />} />} />
        <Route path="/formbody/addformbody" element={<ProtectedRoute element={<AddFormBody />} />} />
        <Route path="/formbody/editformbody/:id" element={<ProtectedRoute element={<EditFormBody />} />} />

        {/* Schedule Header  */}

        <Route path="/scheduleheader" element={<ProtectedRoute element={<ScheduleHeaderList />} />} />
        <Route path="/scheduleheader/editscheduleheader/:id" element={<ProtectedRoute element={<EditScheduleHeader />} />} />

        {/* Schedule Body */}

        <Route path="/schedulebody" element={<ProtectedRoute element={<ScheduleBodyList />} />} />
        <Route path="/schedulebody/editschedule/:id" element={<ProtectedRoute element={<EditScheduleBody />} />} />

        {/* Weekly Representation  */}

        <Route path="/weeklyrepresentationheader" element={<ProtectedRoute element={<WeeklyRepresentationHeaderList />} />} />
        <Route path="/weeklyrepresentationheader/editweeklyrepresentationheader/:id" element={<ProtectedRoute element={<EditWeeklyRepresentationHeader />} />} />

        {/* Weekly Representation Body  */}
        <Route path="/weeklyrepresentationbody" element={<ProtectedRoute element={<WeeklyRepresentationList />} />} />
        <Route path="/weeklyrepresentationbody/addweeklyrepresentation" element={<ProtectedRoute element={<AddWeeklyRepresentation />} />} />
        <Route path="/weeklyrepresentationbody/editweeklyrepresentation/:id" element={<ProtectedRoute element={<EditWeeklyRepresentation />} />} />

        {/* Important Information  */}

        <Route path="/importantinformationheader" element={<ProtectedRoute element={<ImportantInformationHeaderList />} />} />
        <Route path="/importantinformationheader/editimportantinformationheader/:id" element={<ProtectedRoute element={<EditImportantInformationHeader />} />} />

        <Route path="/importantinformationbody" element={<ProtectedRoute element={<ImportantInformationList />} />} />
        <Route path="/importantinformationbody/addimportantinformation" element={<ProtectedRoute element={<AddImportantInformation />} />} />
        <Route path="/importantinformationbody/editimportantinformation/:id" element={<ProtectedRoute element={<EditImportantInformation />} />} />

        {/* Social Links  */}

        <Route path="/sociallinks" element={<ProtectedRoute element={<SocialLinks />} />} />
      
         {/* Suscribers */}

        <Route path="/subscribers" element={<ProtectedRoute element={<SubscriberList />} />} />



      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default DashboardRoutes;
