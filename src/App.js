import React from "react";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    
    <Router>
     <Navbar />           {/* use this Navbar inside Router only   */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
