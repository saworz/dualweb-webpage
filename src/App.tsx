import React, { Component } from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import Pipeline from "./components/PipelineBackground/Pipeline";
import "./index.css";

// class App extends Component {
//   render() {
//       return (
//           <div className="App">
//               <Pipeline animationSeconds={10} slowDownSteps={5}/>
//               <h1>Hello, World!</h1>
//           </div>
//       );
//   }
// }

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <AboutUs />
      <OurServices />
       
    </>
  );
};
export default App;
