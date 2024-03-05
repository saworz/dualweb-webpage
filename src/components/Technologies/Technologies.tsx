import React, { useState } from "react";
import styled from "styled-components";
// import LaptopBackgroundLowRes from "../../assets/laptop-low-res.jpeg"
// import LaptopBackgroundHighRes from "../../assets/laptop.jpeg"
import TechnologyIcons from "./Icons";

const LaptopBackgroundLowRes = require("../../assets/laptop-low-res.jpeg")
const LaptopBackgroundHighRes = require("../../assets/laptop.jpeg")

const RightSideContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 20%;
  left: 35%;
  width: 120vh;
  height: 70vh;
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  z-index: -200;
  /* background:no-repeat url(${LaptopBackgroundHighRes
  });
  background-size: cover;
  background-position-y: 25px; */
  background-color: #010503ff;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  
`

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 25px;
  z-index: -100;
`;

const BlackCover = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  height: 25px;
  width: 100%;
  background-color: #010503ff;
`

const TextContainer = styled.div`
  width: 100vh;
  color: white;
  font-size: 1.25rem;

  & p {
    font-family: "montserrat";
    text-align: justify;
    font-size: larger;
  }
`;

const BadgesContainer = styled.div`
  position: absolute;
  top: 65%;
  display: flex;
  flex-direction: column;
  & h1 {
    margin-bottom: 4vh;
    color: white;
    font-family: "montserrat";
    font-size: 3vh;
    text-align: center;
  }
`;

const Technologies = () => {
  const [imageDownloaded, setImageDownloaded] = useState(false);

  const handleDownload = () => {
    setImageDownloaded(true);
  };

  return (
    <Background>
        {!imageDownloaded && (<BackgroundImage
        src={LaptopBackgroundLowRes}
      />)}

      <BackgroundImage
        src={LaptopBackgroundHighRes}
        style={{ 
          display: imageDownloaded ? 'block' : 'none' }}
        onLoad={handleDownload}
      />

      <BlackCover/>
      <RightSideContainer>
      <TextContainer>
        <p>
          Inwestycja w indywidualne projektowanie to klucz do wyróżnienia się w sieci i przyciągnięcia uwagi klientów.
          Dzięki korzystaniu z nowoczesnych technologii i języków programowania jesteśmy w stanie zapewnić rozwiązania pokrywające się Twoimi pomysłami.
        </p>
      </TextContainer>
      
      <BadgesContainer>
        <h1>Technologie z których korzystamy</h1>
        <TechnologyIcons/>
      </BadgesContainer>

      </RightSideContainer>
    </Background>        
  )
}

export default Technologies;