import React from "react";
import styled from "styled-components";
// import InfoGrid from "./InfoGrid";
import { Lamp } from "./Lamp";
import Technologies from "./TechnologiesList";
const Background = styled.div`
  height: 100vh;
  width: 100%;
`

const AboutUs: React.FC = () => {

  return (
    <>
      <Background>
        <Lamp />
      </Background>
    </>
  );
}

export default AboutUs;