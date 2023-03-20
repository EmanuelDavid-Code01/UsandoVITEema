import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />


      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default App;
