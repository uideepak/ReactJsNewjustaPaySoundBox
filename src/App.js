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
import CardBlog from "./components/Blog/CardBlog";
import BlogCount from "./admin/BlogCount";
import OpenRoute from "./admin/OpenRoute";

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
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/blog" element={<CardBlog />} />

        {/* Admin routes */}
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/signup" element={<Signup />} />

        <Route
          element={
            <OpenRoute>
              <Home />
            </OpenRoute>
          }
        >
          <Route
            path="admin/dashboard"
            element={
              <OpenRoute>
                <DashBord />
              </OpenRoute>
            }
          />
          <Route
            path="admin/addblog"
            element={
              <OpenRoute>
                <AddBlog />
              </OpenRoute>
            }
          />
          <Route
            path="admin/allblog"
            element={
              <OpenRoute>
                <AllBlog />
              </OpenRoute>
            }
          />
          <Route
            path="admin/allLeads"
            element={
              <OpenRoute>
                <AllLeads />
              </OpenRoute>
            }
          />
          <Route
            path="admin/editblog"
            element={
              <OpenRoute>
                <EditBlog />
              </OpenRoute>
            }
          />
          <Route
            path="admin/blogcount"
            element={
              <OpenRoute>
                <BlogCount />
              </OpenRoute>
            }
          />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
