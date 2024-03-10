import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
  }
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

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

  useEffect(() => {
    const img = new Image();
    img.src = LaptopBackgroundHighRes;
    img.onload = () => {
      setImageDownloaded(true);
    };
  }, []);

  return (
    <Background id="technologies">
      <BackgroundImage src={imageDownloaded ? LaptopBackgroundHighRes : LaptopBackgroundLowRes} />
      <RightSideContainer>
        <TextContainer>
          <p>
            Inwestycja w indywidualne projektowanie to klucz do wyróżnienia się w sieci i przyciągnięcia uwagi klientów.
            Dzięki korzystaniu z nowoczesnych technologii i języków programowania jesteśmy w stanie zapewnić rozwiązania pokrywające się Twoimi pomysłami.
          </p>
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