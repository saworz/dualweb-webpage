import React from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default App;
