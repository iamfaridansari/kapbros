import React, { useState, createContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Trails from "./pages/Trails";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./pages/ProductDetails";
//
import one from "./assets/images/1.png";
import two from "./assets/images/2.png";
import three from "./assets/images/3.png";
import four from "./assets/images/4.png";
import five from "./assets/images/5.png";
import six from "./assets/images/6.png";
import seven from "./assets/images/7.png";
import eight from "./assets/images/8.png";
import nine from "./assets/images/9.png";
import ten from "./assets/images/10.png";

export const myContext = createContext();

const App = () => {
  const [margin, setMargin] = useState(true);
  return (
    <myContext.Provider
      value={{
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        margin,
        setMargin,
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/trails" element={<Trails />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </myContext.Provider>
  );
};

export default App;
