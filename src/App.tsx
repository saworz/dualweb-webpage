import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import "./index.css";


const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Header />
      <AboutUs />
      <OurServices />
      <ContactUs />
    </>
  );
};
export default App;
