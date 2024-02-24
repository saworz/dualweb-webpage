import React from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import ScrollSnap from "./components/ScrollSnap/ScrollSnap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer theme="dark"/>
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
