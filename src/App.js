import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/product" element={<Products />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
