import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
