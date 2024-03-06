import React, { useState } from "react";
import styled from "styled-components";
// import LaptopBackgroundLowRes from "../../assets/laptop-low-res.jpeg"
// import LaptopBackgroundHighRes from "../../assets/laptop.jpeg"
import TechnologyIcons from "./Icons";
import { device } from '../../settings/deviceSize';

const LaptopBackgroundLowRes = require("../../assets/laptop-low-res.jpeg")
const LaptopBackgroundHighRes = require("../../assets/laptop.jpeg")


const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-color: #010503ff;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  
  @media ${device.laptop} {
    position: relative;
    z-index: -200;
    background:no-repeat url(${LaptopBackgroundHighRes});
    background-size: cover;
  }
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

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80vw;
  height: 70vh;

@media ${device.laptop} {
    position: absolute;
    top: 20%;
    left: 40%;
    width: 55vw;
  }
`;

const TextContainer = styled.div`
  width: 80vw;
  color: white;
  margin-bottom: 40px;
  
  @media ${device.laptop} {
    width: 100%;
    margin-bottom: 100px;
  }
  
  & p {
    font-size: 12px;
    font-family: "montserrat";
    text-align: justify;

    @media ${device.mobileL} {
      font-size: 16px;
    }

    @media ${device.laptop} {
      font-size: 24px;
    }
  }
`;

const BadgesContainer = styled.div`
  // position: absolute;
  // top: 65%;
  display: flex;
  flex-direction: column;

  & h1 {
    margin-bottom: 20px;
    color: white;
    font-family: "montserrat";
    font-size: 20px;
    text-align: center;
    font-weight: bold;

    @media ${device.laptop} {
      font-size: 26px;
    }
  }
`;

const Technologies = () => {
  const [imageDownloaded, setImageDownloaded] = useState(false);

  const handleDownload = () => {
    setImageDownloaded(true);
  };

  return (
    <Background>
      {/* {!imageDownloaded && (<BackgroundImage
        src={LaptopBackgroundLowRes}
      />)}

      <BackgroundImage
        src={LaptopBackgroundHighRes}
        style={{
          display: imageDownloaded ? 'block' : 'none'
        }}
        onLoad={handleDownload}
      /> */}

      {/* <BlackCover /> */}
      <RightSideContainer>
        <TextContainer>
          <p>Odwiedź naszą stronę już dziś i skorzystaj z naszych usług tworzenia stron internetowych!
            Nasz doświadczony zespół projektantów dostosuje witrynę do Twoich unikalnych potrzeb, zapewniając
            profesjonalny i atrakcyjny wygląd. Inwestycja w indywidualne projektowanie to klucz do wyróżnienia
            się w sieci i przyciągnięcia uwagi klientów. Rozpocznij swoją podróż online z naszymi ekspertami ds. projektowania stron.</p>
        </TextContainer>

        <BadgesContainer>
          <h1>Technologie z których korzystamy</h1>
          <TechnologyIcons />
        </BadgesContainer>

      </RightSideContainer>
    </Background>
  )
}

export default Technologies;