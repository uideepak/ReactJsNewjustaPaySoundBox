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
import CardBlog from "./components/Blog/CardBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from "./components/Admin Routing/AdminRoute";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const user = localStorage.getItem("User");
  const userdata = JSON.parse(user);
  console.log(userdata, "FDFDF");
  return (
    <div className="App">
      <ToastContainer />
      {!isAdminRoute && <Navbar />}
      <Routes>
        {/* Non-admin routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/blog" element={<CardBlog />} />
      </Routes>
      <AdminRoute />
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
