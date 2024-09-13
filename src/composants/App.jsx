import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Error from "../pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
          {/*une route generique pour les url invalides*/}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
