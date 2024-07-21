import React, { Suspense, useEffect, useState,lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { checkAuth } from "./appwrite/Services/authServices";
import Login from "./Pages/login";
import ForgotPassword from "./Pages/login/ForgotPassword";

import AddCarouselItem from "./Pages/AdminDashboard/HeroSection/Carousels/AddCarouselItem";
import CarouselList from "./Pages/AdminDashboard/HeroSection/Carousels/CarouselList";
import EditCarouselItem from "./Pages/AdminDashboard/HeroSection/Carousels/EditCarouselItem";
import InformationCardList from "./Pages/AdminDashboard/InformationCard/InformationCardList";
import EditInformationCard from "./Pages/AdminDashboard/InformationCard/EditInformationCard";
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
import Categories from "./Pages/AdminDashboard/gallery/Categories";
import GalleryHeaderList from "./Pages/AdminDashboard/gallery/GalleryHeaderList";
import EditGalleryHeader from "./Pages/AdminDashboard/gallery/EditGalleryHeader";
import GalleryBodyList from "./Pages/AdminDashboard/gallery/GalleryBodyList";
import EditGalleryItem from "./Pages/AdminDashboard/gallery/EditGalleryItem";
import AddGalleryItem from "./Pages/AdminDashboard/gallery/AddGalleryItem";
import NotFoundPage from "./Pages/404";
// Landing page Imports 
import HomeStartupPage from "./Pages/Home/Startup/Startup";
import Vertretung from "./Pages/Vertretung/Vertretung";
import WichtigeInfo from "./Pages/WichtigeInfo/WichtigeInfo";
import ContactUsClassicPage from "./Pages/Contact/ContactUsClassicPage";
import TeamDetail from "./Pages/TeamDetail";
import Contactlist from "./Components/Contact/contactlist";

const Privacy = lazy(() => import("./Pages/Privacy"));

const BlogSimplePage = lazy(() => import("./Pages/Blogs/BlogSimple"));

const BlogStandardPostPage = lazy(() =>
  import("./Pages/Blogs/PostTypes/BlogStandardPostPage")
);

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

        {/* Landing page Routes  */}
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



        {/* Dashboard Routes  */}





        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

       


        {/* Hero Section */}
        {/* Hero Carousel */}
        <Route path="/herocarousel" element={<ProtectedRoute element={<CarouselList />} />} />
        <Route path="/herocarousel/addherocarousel" element={<ProtectedRoute element={<AddCarouselItem />} />} />
        <Route path="/herocarousel/editherocarousel/:id" element={<ProtectedRoute element={<EditCarouselItem />} />} />

        {/* InformationCard */}
        <Route path="/informationcard" element={<ProtectedRoute element={<InformationCardList />} />} />
        <Route path="/informationcard/editinformationcard/:id" element={<ProtectedRoute element={<EditInformationCard />} />} />

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
      
        {/* Contacts  */}
        <Route path="/contactlist" element={<ProtectedRoute element={<Contactlist />} />} />
         {/* Suscribers */}

        <Route path="/subscribers" element={<ProtectedRoute element={<SubscriberList />} />} />

        {/* Categories  */}

        <Route path="/categories" element={<ProtectedRoute element={<Categories />} />} />

        {/* Gallery  */}

        <Route path="/galleryheader" element={<ProtectedRoute element={<GalleryHeaderList />} />} />
        <Route path="/galleryheader/editgalleryheader/:id" element={<ProtectedRoute element={<EditGalleryHeader />} />} />

        <Route path="/gallerylist" element={<ProtectedRoute element={<GalleryBodyList />} />} />
        <Route path="/gallerylist/addgalleryitem" element={<ProtectedRoute element={<AddGalleryItem />} />} />
        <Route path="/gallerylist/editgalleryitem/:id" element={<ProtectedRoute element={<EditGalleryItem />} />} />

        <Route path="*" element={<NotFoundPage />} /> 

      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default DashboardRoutes;
