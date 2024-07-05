import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import Dashboard CSS and Bootstrap



import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/bootstrap.min.css";

import "./Assets/css/style.css";

import "./Assets/css/select2.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

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
import Blogdetails from "./Pages/BlogAdmin/Blogdetails";
import Addblog from "./Pages/BlogAdmin/Addblog";
import Editblog from "./Pages/BlogAdmin/Editblog";
import BlogView from "./Pages/BlogAdmin/BlogView";
import Setting from "./Components/settings/Setting";
import Localization from "./Components/settings/Localization";
import Paymentsetting from "./Components/settings/Paymentsetting";
import Settingsemail from "./Components/settings/Settingsemail";
import Settingssocialmedia from "./Components/settings/Settingssocialmedia";
import Settingssociallinks from "./Components/settings/Settingssociallinks";
import Settingsseo from "./Components/settings/Settingsseo";
import SettingsThem from "./Components/settings/SettingsThem";
import SettingsChangePassword from "./Components/settings/SettingsChangePassword";
import SettingsOthers from "./Components/settings/SettingsOthers";
import Assests from "./Components/assests/Assests";
import AddAsset from "./Components/assests/AddAsset";
import Edit_Assets from "./Components/assests/Edit_Assets";
import DoctorList from "./Components/doctor/DoctorList";
import AddDoctor from "./Components/doctor/AddDoctor";
import EditDoctor from "./Components/doctor/EditDoctor";
import DoctorProfile from "./Components/doctor/DoctorProfile";
import PatientsList from "./Components/patients/PatientsList";
import AddPatients from "./Components/patients/AddPatients";
import EditPatients from "./Components/patients/EditPatients";
import PatientsProfile from "./Components/patients/PatientsProfile";
import AppoinmentList from "./Components/appoinments/AppoinmentList";
import AddAppoinments from "./Components/appoinments/AddAppoinments";
import EditAppoinments from "./Components/appoinments/EditAppoinments";
import ScheduleList from "./Components/doctorschedule/ScheduleList";
import AddSchedule from "./Components/doctorschedule/AddSchedule";
import EditSchedule from "./Components/doctorschedule/EditSchedule";
import DepartmentList from "./Components/department/DepartmentList";
import AddDepartment from "./Components/department/AddDepartment";
import EditDepartment from "./Components/department/EditDepartment";
import StaffList from "./Components/staff/StafList";
import AddStaff from "./Components/staff/Add-Staff";
import EditStaff from "./Components/staff/EditStaff";
import StaffProfile from "./Components/staff/StaffProfile";
import ProvidentFund from "./Components/accounts/ProvidentFund";
import Add_ProviderFund from "./Components/accounts/Add_ProviderFund";
import Invoice from "./Components/accounts/Invoice";
import Create_Invoice from "./Components/accounts/Create_Invoice";
import Payments from "./Components/accounts/Payments";
import Add_Payment from "./Components/accounts/Add_Payment";
import Expenses from "./Components/accounts/Expenses";
import Add_Expense from "./Components/accounts/Add_Expense";
import Taxes from "./Components/accounts/Taxes";
import Add_Tax from "./Components/accounts/Add_Tax";
import Edit_Taxes from "./Components/accounts/Edit_Taxes";
import Edit_Provident from "./Components/accounts/Edit_Provident";
import Edit_Payment from "./Components/accounts/Edit_Payment";
import EmployeeSalary from "./Components/Payroll/EmployeeSalary/EmployeeSalary";
import AddEmployeeSalary from "./Components/Payroll/EmployeeSalary/AddEmployeeSalary";
import EditEmployeeSalery from "./Components/Payroll/EmployeeSalary/EditEmployeeSalery";
import Payslip from "./Components/Payroll/Payslip";
import Inbox from "./Components/email/Inbox";
import ComposeMail from "./Components/email/ComposeMail";
import MailView from "./Components/email/MailView";
import AddLeave from "./Components/staff/AddLeave";
import Attendence from "./Components/staff/Attendence";
import Leave from "./Components/staff/Leave";
import EditLeave from "./Components/staff/EditLeave";
import Holiday from "./Components/staff/Holiday";
import UserActivity from "./Components/activity/UserActivity";
import ExpensesReport from "./Components/ExpenseReport/Expenses/ExpensesReport";
import AddExpenses from "./Components/ExpenseReport/Expenses/AddExpenses";
import Invoice_Report from "./Components/ExpenseReport/Invoice-report/Invoice_Report";
import Edit_Expenses from "./Components/ExpenseReport/Expenses/Edit_Expenses";
import Chat from "./Components/Chat/Chat";
import VoiceCall from "./Components/Call/VoiceCall";
import VideoCall from "./Components/Call/VideoCall";
import IncomingCall from "./Components/Chat/IncomingCall";
import InvoiceList from "./Components/Invoice/Invoice-List/InvoiceList";
import Paid_Invoice from "./Components/Invoice/Invoice-List/Paid-Invoice/Paid_Invoice";
import OverDue from "./Components/Invoice/Invoice-List/Overdue-Invoice/OverDue";
import Draft_Invoice from "./Components/Invoice/Invoice-List/Draft_Invoice/Draft_Invoice";
import Recurring_Invoice from "./Components/Invoice/Invoice-List/Recurring_Invoice/Recurring_Invoice";
import Cancelled_Invoice from "./Components/Invoice/Invoice-List/Cancelled_Invoice/Cancelled_Invoice";
import Invoice_Grid from "./Components/Invoice/Invoices_Grid/Invoice_Grid";
import Add_Invoices from "./Components/Invoice/Add_Invoices/Add_Invoices";
import Edit_Invoices from "./Components/Invoice/Edit_Invoices/Edit_Invoices";
import Invoice_Details from "./Components/Invoice/Invoice_Details/Invoice_Details";
import Invoice_GeneralSettings from "./Components/Invoice/Invoice_Settings/General_Settings/Invoice_GeneralSettings";
import Tax_Settings from "./Components/Invoice/Invoice_Settings/Tax_Settings/Tax_Settings";
import Bank_Settings from "./Components/Invoice/Invoice_Settings/Bank_Settings/Bank_Settings";
import BasicInput from "./Components/Forms/BasicInput";
import InputGroups from "./Components/Forms/InputGroups";
import HorizontalForm from "./Components/Forms/HorizontalForm";
import VerticalForm from "./Components/Forms/VerticalForm";
import BasicTable from "./Components/Tables/BasicTable";
import DataTable from "./Components/Tables/DataTable";
import UiKit from "./Components/Ui_Elements/UiKit";
import Typography from "./Components/Ui_Elements/Typography";
import Tab from "./Components/Ui_Elements/Tab";
import Calender from "./Components/calender/Calender";
import Doctor_Dashboard from "./Components/Dashboard/Doctor_Dashboard/Doctor_Dashboard";
import Admin_Dashboard from "./Components/Dashboard/Admin_Dashboard/Admin_Dashboard";
import Patient_Dashboard from "./Components/Dashboard/Patient_Dashboard/Patient_Dashboard";
import Doctor_Settings from "./Components/Dashboard/Doctor_Dashboard/Doctor_Settings";
import Patient_Settings from "./Components/patients/Patient_Settings";
import Staff_Settings from "./Components/staff/Staff-Settings";

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
        <Route path="/blog" element={<Blogdetails />} />
        <Route path="/addblog" element={<Addblog />} />
        <Route path="/editblog" element={<Editblog />} />
        <Route path="/blogview" element={<BlogView />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/paymentsetting" element={<Paymentsetting />} />
        <Route path="/settingsemail" element={<Settingsemail />} />
        <Route path="/settingssocialmedia" element={<Settingssocialmedia />} />
        <Route path="/settingssociallink" element={<Settingssociallinks />} />
        <Route path="/settingsseo" element={<Settingsseo />} />
        <Route path="/settingsthem" element={<SettingsThem />} />
        <Route path="/settingschangepassword" element={<SettingsChangePassword />} />
        <Route path="/settingsothers" element={<SettingsOthers />} />
        <Route path="/assests" element={<Assests />} />
        <Route path="/addasset" element={<AddAsset />} />
        <Route path="/edit-assets" element={<Edit_Assets />} />
        <Route path="/doctorlist" element={<DoctorList />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/editdoctor" element={<EditDoctor />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        <Route path="/doctor-setting" element={<Doctor_Settings />} />
        <Route path="/patientslist" element={<PatientsList />} />
        <Route path="/addpatients" element={<AddPatients />} />
        <Route path="/editpatients" element={<EditPatients />} />
        <Route path="/patientsprofile" element={<PatientsProfile />} />
        <Route path="/patient-settings" element={<Patient_Settings />} />
        <Route path="/appoinmentlist" element={<AppoinmentList />} />
        <Route path="/addappoinments" element={<AddAppoinments />} />
        <Route path="/editappoinments" element={<EditAppoinments />} />
        <Route path="/schedulelist" element={<ScheduleList />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/editschedule" element={<EditSchedule />} />
        <Route path="/departmentlist" element={<DepartmentList />} />
        <Route path="/add-department" element={<AddDepartment />} />
        <Route path="/editdepartment" element={<EditDepartment />} />
        <Route path="/stafflist" element={<StaffList />} />
        <Route path="/addstaff" element={<AddStaff />} />
        <Route path="/editstaff" element={<EditStaff />} />
        <Route path="/staffprofile" element={<StaffProfile />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/add-leave" element={<AddLeave />} />
        <Route path="/editleave" element={<EditLeave />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/staff-settings" element={<Staff_Settings />} />
        <Route path="/providentfund" element={<ProvidentFund />} />
        <Route path="/add-providerfund" element={<Add_ProviderFund />} />
        <Route path="/invoicelist" element={<Invoice />} />
        <Route path="/createinvoice" element={<Create_Invoice />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/addpayment" element={<Add_Payment />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/addexpense" element={<Add_Expense />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/edit-taxes" element={<Edit_Taxes />} />
        <Route path="/addtax" element={<Add_Tax />} />
        <Route path="/edit-provident" element={<Edit_Provident />} />
        <Route path="/edit-payment" element={<Edit_Payment />} />
        <Route path="/employeesalary" element={<EmployeeSalary />} />
        <Route path="/addsalary" element={<AddEmployeeSalary />} />
        <Route path="/editsalary" element={<EditEmployeeSalery />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/compose-mail" element={<ComposeMail />} />
        <Route path="/mail-view" element={<MailView />} />
        <Route path="/user-activity" element={<UserActivity />} />
        <Route path="/expense-Report" element={<ExpensesReport />} />
        <Route path="/add-expense" element={<AddExpenses />} />
        <Route path="/invoice-report" element={<Invoice_Report />} />
        <Route path="/edit-expenses" element={<Edit_Expenses />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/voice-call" element={<VoiceCall />} />
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/incoming-call" element={<IncomingCall />} />
        <Route path="/invoice-list" element={<InvoiceList />} />
        <Route path="/paid-invoice" element={<Paid_Invoice />} />
        <Route path="/overdue-invoice" element={<OverDue />} />
        <Route path="/draft-invoice" element={<Draft_Invoice />} />
        <Route path="/recurring-invoice" element={<Recurring_Invoice />} />
        <Route path="/cancelled-invoice" element={<Cancelled_Invoice />} />
        <Route path="/invoice-grid" element={<Invoice_Grid />} />
        <Route path="/add-invoice" element={<Add_Invoices />} />
        <Route path="/edit-invoice" element={<Edit_Invoices />} />
        <Route path="/invoice-details" element={<Invoice_Details />} />
        <Route path="/invoice-settings" element={<Invoice_GeneralSettings />} />
        <Route path="/tax-settings" element={<Tax_Settings />} />
        <Route path="/bank-settings" element={<Bank_Settings />} />
        <Route path="/basic-input" element={<BasicInput />} />
        <Route path="/inputgroup" element={<InputGroups />} />
        <Route path="/horizontal-form" element={<HorizontalForm />} />
        <Route path="/vertical-form" element={<VerticalForm />} />
        <Route path="/basic-table" element={<BasicTable />} />
        <Route path="/data-table" element={<DataTable />} />
        <Route path="/ui-kit" element={<UiKit />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/doctor-dashboard" element={<Doctor_Dashboard />} />
        <Route path="/patient-dashboard" element={<Patient_Dashboard />} />
      </Routes>
    </Suspense>
  </AnimatePresence>
);

export default DashboardRoutes;
