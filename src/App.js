import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/ContactUs/Contact";
// import COMMUNITY from './community/COMMUNITY';
import NotFound from "./pages/Error/404";
import FrameCommunity from "./community/COMMUNITY";
// import { useLocation } from "react-router-dom";

function App() {
  const [online, setOnline] = useState(navigator.onLine);
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    <Router>
      {online && <Navbar />}
      {online ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/COE" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Community" element={<FrameCommunity />} />
          <Route path="/Contact" element={<Contact />} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <div>You are offline</div>
      )}
      {online && <Footer />}
    </Router>
  );
}

export default App;
