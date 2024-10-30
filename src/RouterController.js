import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Topbar from "./Dashboard/Topbar";
import Sidebar from "./Dashboard/Sidebar";
import Login from "./Pages/Login";
import Signup from "./Pages/Registration";
import UserDashboard from "./UserDashboard/UserDashboard";
import UserSubmitProperty from "./UserDashboard/UserSubmitProperty";
import UserManageListing from "./UserDashboard/UserManageListing";
import UserPropertyLeads from "./UserDashboard/UserPropertyLeads";
import UserSponsorYourAd from "./UserDashboard/UserSponsorYourAd";
import UserViewProfile from "./UserDashboard/UserViewProfile";
import UserChangePassword from "./UserDashboard/UserChangePassword";
import UserLogOut from "./UserDashboard/UserLogOut";
import Dashboard from "./Dashboard/Analytics";
import User from "./Dashboard/User/User.jsx";
import Property from "./Dashboard/Properties/Property";
import Sales from "./Dashboard/Sales";
import Transaction from "./Dashboard/Transaction";
import ContentManagement from "./Dashboard/ContentManagement";
import BookingManage from "./Dashboard/BookingManage";
import PropertyCreate from "./Dashboard/Properties/propertycreate";
import PropertyEdit from "./Dashboard/Properties/PropertyUpdate.jsx";
import PropertyDetele from "./Dashboard/Properties/PropertyDetele.jsx";
import UserSidebar from "./UserDashboard/UserSidebar";
import UserTopbar from "./UserDashboard/UserTopbar";
import UserFooter from "./UserDashboard/UserFooter";
import Apartments from "./Pages/Apartments";
import IndividualHouse from "./Pages/IndividualHouse";
import LandPlots from "./Pages/LandPlots";
import OngoingProject from "./Pages/OngoingProjects";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage";
import Footer from "./Components/Footer";

export const DashboardLayout = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="pl-[220px] pt-[75px] h-screen w-full ">
        <Outlet />
      </div>
    </>
  );
};

export const UserLayout = () => {
  return (
    <>
      <UserSidebar /> <UserTopbar />
      <div className="pl-[285px] pt-[80px] h-screen ">
        <Outlet />
      </div>
      <UserFooter />
    </>
  );
};

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="individual-house" element={<IndividualHouse />} />
          <Route path="land-plots" element={<LandPlots />} />
          <Route path="ongoing-projects" element={<OngoingProject />} />
          <Route path="apartments" element={<Apartments />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Signup />} />
        </Route>

        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="submit-property" element={<UserSubmitProperty />} />
          <Route path="manage-listing" element={<UserManageListing />} />
          <Route path="property-leads" element={<UserPropertyLeads />} />
          <Route path="sponsor-ad" element={<UserSponsorYourAd />} />
          <Route path="view-profile" element={<UserViewProfile />} />
          <Route path="change-password" element={<UserChangePassword />} />
          <Route path="logout" element={<UserLogOut />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin-dashboard" element={<Dashboard />} />

          <Route path="sales" element={<Sales />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="contentmanagement" element={<ContentManagement />} />
          <Route path="analytics" element={<Dashboard />} />
          <Route path="booking" element={<BookingManage />} />
          <Route path="user" element={<User />} />
          <Route path="property" element={<Property />} >
          <Route path="delete/:id" element={<PropertyDetele />} />
          <Route path="edit/:id" element={<PropertyEdit />} />
          <Route path="create" element={<PropertyCreate />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
