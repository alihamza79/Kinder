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
        "/profile",
        "/edit-profile",
        "/register",
        "/lockscreen",
        "/changepassword",
        "/error",
        "/server-error",
        "/blankpage",
        "/gallery",
        "/blog",
        "/addblog",
        "/editblog",
        "/blogview",
        "/settings",
        "/localization",
        "/paymentsetting",
        "/settingsemail",
        "/settingssocialmedia",
        "/settingssociallinks",
        "/settingsseo",
        "/settingsthem",
        "/settingschangepassword",
        "/settingsothers",
        "/assests",
        "/addasset",
        "/edit-assets",
        "/doctorlist",
        "/add-doctor",
        "/editdoctor",
        "/doctorprofile",
        "/doctor-setting",
        "/patientslist",
        "/addpatients",
        "/editpatients",
        "/patientsprofile",
        "/patient-settings",
        "/appoinmentlist",
        "/addappoinments",
        "/editappoinments",
        "/schedulelist",
        "/addschedule",
        "/editschedule",
        "/departmentlist",
        "/add-department",
        "/editdepartment",
        "/stafflist",
        "/addstaff",
        "/editstaff",
        "/staffprofile",
        "/leave",
        "/add-leave",
        "/editleave",
        "/attendence",
        "/holiday",
        "/staff-settings",
        "/providentfund",
        "/add-providerfund",
        "/invoicelist",
        "/createinvoice",
        "/payments",
        "/addpayment",
        "/expenses",
        "/addexpense",
        "/taxes",
        "/edit-taxes",
        "/addtax",
        "/edit-provident",
        "/edit-payment",
        "/employeesalary",
        "/addsalary",
        "/editsalary",
        "/payslip",
        "/inbox",
        "/compose-mail",
        "/mail-view",
        "/user-activity",
        "/expense-Report",
        "/add-expense",
        "/invoice-report",
        "/edit-expenses",
        "/chat",
        "/voice-call",
        "/video-call",
        "/incoming-call",
        "/invoice-list",
        "/paid-invoice",
        "/overdue-invoice",
        "/draft-invoice",
        "/recurring-invoice",
        "/cancelled-invoice",
        "/invoice-grid",
        "/add-invoice",
        "/edit-invoice",
        "/invoice-details",
        "/invoice-settings",
        "/tax-settings",
        "/bank-settings",
        "/basic-input",
        "/inputgroup",
        "/horizontal-form",
        "/vertical-form",
        "/basic-table",
        "/data-table",
        "/ui-kit",
        "/typography",
        "/tab",
        "/calender",
        "/admin-dashboard",
        "/doctor-dashboard",
        "/patient-dashboard",
        "/herocarousel",
        "/herocarousel/addherocarousel",
        "/herocarousel/editherocarousel/:id",
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
