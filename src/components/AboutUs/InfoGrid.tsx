import React from "react";
import styled from "styled-components";
import Devices from "../../assets/devices.png"

const TECHNOLOGIES = {
  logoCss: require("../../assets/technologies/css.png"),
  logoHtml: require("../../assets/technologies/html.png"),
  logoReact: require("../../assets/technologies/react.png"),
  logoPython: require("../../assets/technologies/python.png"),
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  place-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`

`;

const AboutUsText = styled.div`
  & p {
    color: white;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  & h2 {
    color: white;
    text-align: center;
  }
`;

const TechnologiesText = styled.text`
  color: white;
`;

const TechnologiesImages = styled.div`
  & img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const InfoGrid: React.FC = () => {
  return (
    <>
      <Grid>
        <Image src={Devices} />
        <AboutUsText>
          <h2>O nas</h2>
          <p>Witaj w DualWeb - miejscu, gdzie pasja do tworzenia innowacyjnych rozwiązań spotyka się z 
            zaangażowaniem w rozwijanie oblicza Twojego biznesu online. Jesteśmy zespołem kreatywnych 
            entuzjastów, gotowych przekuć Twoje pomysły na funkcjonalne i estetyczne strony internetowe.</p>
        </AboutUsText>
        <TechnologiesText>
          <h2>Technologie</h2>
        </TechnologiesText>
        <TechnologiesImages>
          <img src= {TECHNOLOGIES.logoHtml} />
          <img src= {TECHNOLOGIES.logoCss} />
          <img src= {TECHNOLOGIES.logoReact} />
          <img src= {TECHNOLOGIES.logoPython} />
        </TechnologiesImages>
      </Grid>
    </>
  );
};

export default InfoGrid;
