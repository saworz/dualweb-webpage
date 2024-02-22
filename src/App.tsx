// import React, { Component } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
// import "./index.css";
// import ScrollSnap from "scroll-snap"

import React, { useRef, LegacyRef } from "react";
import { useScrollSnap } from "./hooks/uesScrollSnap";

const App = () => {
  const scrollRef = useRef<HTMLElement>();
  const snappedIndex = useScrollSnap({
    scrollRef,
    itemHeight: window.innerHeight,
    initialSnappedIndex: 2
  });

  console.log("snappedIndex:", snappedIndex);

  const list = Array(10).fill(1);

  return (
    <div className="App">
      <div
        className="scroll-container"
        ref={scrollRef as LegacyRef<HTMLDivElement>}
        style={{ height: window.innerHeight }}
      >
        <Header />
        <AboutUs />
      </div>
    </div>
  );
}


// const App: React.FC = () => {
  
//   return (
//     <>
//       <Menu />
//         <Header />
//         <AboutUs />
//         <OurServices />
//         <ContactUs />
//     </>

//   );
// };
export default App;
