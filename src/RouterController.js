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

import Dashboard from "./Dashboard/Analytics";
import User from "./Dashboard/User/User.jsx";
import Property from "./Dashboard/Properties/Property";
import Sales from "./Dashboard/Sales";
import Transaction from "./Dashboard/Transaction";
import ContentManagement from "./Dashboard/ContentManagement";
import BookingManage from "./Dashboard/BookingManage";
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
import SingleIndividualHouse from "./Pages/IndividualHouseSinglePage";
import SingleApartments from "./Pages/ApartmentSinglePage.jsx";
import SingleLandPlots from "./Pages/LandPlotSinglePage.jsx";
import SingleOngoingProject from "./Pages/OngoingProjectSinglePage";
import NotFoundPage from "./Pages/NotFoundPage.jsx";










import { Navigate } from "react-router-dom";
import {AuthProvider} from './MyProvider.js'

export const PrivateRoute = ({ children }) => {


  const userId = localStorage.getItem("userId");

  
  const { isAuthenticated } = AuthProvider();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

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
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Signup />} />
          <Route path="/apartments" element={<Apartments />}>
            <Route path=":id" element={<SingleApartments />} />
          </Route>

          <Route path="/ongoing-projects" element={<OngoingProject />}>
            <Route path=":id" element={<SingleOngoingProject />} />
          </Route>

          <Route path="/individual-house" element={<IndividualHouse />}>
            <Route path=":id" element={<SingleIndividualHouse />} />
          </Route>

          <Route path="/land-plots" element={<LandPlots />}>
            <Route path=":id" element={<SingleLandPlots />} />
          </Route>
        </Route>
        {/* <PrivateRoute></PrivateRoute> */}
        
        <Route path="/user" element={<UserLayout /> }>
          <Route path="dashboard/:id" element={<UserDashboard />} />
          <Route path="submit-property/:id" element={<UserSubmitProperty />} />
          <Route path="manage-listing/:id" element={<UserManageListing />} />
          <Route path="property-leads/:id" element={<UserPropertyLeads />} />
          <Route path="sponsor-ad/:id" element={<UserSponsorYourAd />} />
          <Route path="view-profile/:id" element={<UserViewProfile />} />
          <Route path="change-password/:id" element={<UserChangePassword />} />
       
        </Route>
        {/* <PrivateRoute></PrivateRoute> */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="admin" element={<Dashboard />} />

          <Route path="sales" element={<Sales />} />
          <Route path="transactions" element={<Transaction />} />
          <Route path="contentmanagement" element={<ContentManagement />} />
          <Route path="analytics" element={<Dashboard />} />
          <Route path="booking" element={<BookingManage />} />
          <Route path="user" element={<User />} />
          <Route path="property" element={<Property />}>
           </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
