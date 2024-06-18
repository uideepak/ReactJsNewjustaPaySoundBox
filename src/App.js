import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./Responsive.css";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import PrivacyPolicy from "./components/Privacy Policy/PrivacyPolicy";
import TermsConditions from "./components/Terms/TermsConditions";
import Login from "./admin/Login";
import Signup from "./admin/Signup";
import DashBord from "./admin/DashBord";
import Home from "./admin/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlog from "./admin/AddBlog";
import AllBlog from "./admin/AllBlog";
import AllLeads from "./admin/AllLeads";
import EditBlog from "./admin/EditBlog";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      <ToastContainer />
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Non-admin routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />

        {/* Admin routes */}
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/signup" element={<Signup />} />
        
        <Route element={<Home />}>
          <Route path="admin/dashboard" element={<DashBord />} />
          <Route path="admin/addblog" element={<AddBlog />} />
          <Route path="admin/allblog" element={<AllBlog />} />
          <Route path="admin/allLeads" element={<AllLeads />} />
          <Route path="admin/editblog" element={<EditBlog />} />


        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
