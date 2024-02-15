import React from "react";
import styled from "styled-components";
import Devices from "../../assets/devices.png"

const TECHNOLOGIES = {
  logoCss: require("../../assets/technologies/css.png"),
  logoHtml: require("../../assets/technologies/html.png"),
  logoReact: require("../../assets/technologies/react.png"),
  logoPython: require("../../assets/technologies/python.png"),
  logoVue: require("../../assets/technologies/vue.png"),
  logoMySql: require("../../assets/technologies/mysql.png"),
  logoTs: require("../../assets/technologies/ts.png"),
  logoNodeJs: require("../../assets/technologies/nodejs.png"),
}

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 50% 50%;
//   grid-template-rows: auto auto;
//   place-items: center;
//   height: 100%;
//   width: 100%;
// `;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 62% 38%;
  grid-template-rows: auto;
  place-items: center;
  height: 50%;
  width: 100%;
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 38% 62%;
  grid-template-rows: auto;
  place-items: center;
  height: 50%;
  width: 100%;
`;

const Image = styled.img`

`;

const AboutUsText = styled.div`
  & p {
    color: black;
    width: 75%;
    font: bold;
    margin-left: auto;
    margin-right: auto;
  }

  & h2 {
    color: black;
    text-align: center;
  }
`;

const TechnologiesText = styled.text`
  color: black;
`;

const TechnologiesImages = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto auto auto auto;
`;

const SingleTech = styled.div`
  & h3 {
    margin: 0;
    text-align: center;
  }
  & img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
    margin: 10px;

  }
`;
const InfoGrid: React.FC = () => {
  return (
    <>
      <FirstRow>
        <Image src={Devices} />
        <AboutUsText>
          <h2>O nas</h2>
          <p>Witaj w DualWeb - miejscu, gdzie pasja do tworzenia innowacyjnych rozwiązań spotyka się z 
            zaangażowaniem w rozwijanie oblicza Twojego biznesu online. Jesteśmy zespołem kreatywnych 
            entuzjastów, gotowych przekuć Twoje pomysły na funkcjonalne i estetyczne strony internetowe.</p>
        </AboutUsText>
        </FirstRow>
        <SecondRow>
        <TechnologiesText>
          <h2>Technologie</h2>
        </TechnologiesText>
        <TechnologiesImages>

        </TechnologiesImages>
      </SecondRow>
    </>
  );
};

export default InfoGrid;
