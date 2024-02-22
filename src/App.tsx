import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import ScrollSnap from "./components/ScrollSnap/ScrollSnap";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Menu />
      
      <ScrollSnap>
        <Header />
        <AboutUs />
        <OurServices />
        <ContactUs />
      </ScrollSnap>
    </div>
  );
};

export default App;
