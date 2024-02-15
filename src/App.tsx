import React from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import { createGlobalStyle } from "styled-components";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <AboutUs />
    </div>
  );
};

export default App;
