import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDetails from "./pages/ServiceDetails";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import TeamPage from "./pages/TeamPage";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 650,
    });

    const aosRefresh = setInterval(() => {
      AOS.refresh();
    }, 500);
    return () => {
      clearInterval(aosRefresh);
    };
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services/:page" exact element={<ServiceDetails />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/team" exact element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
