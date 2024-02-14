import React from "react";
import styled from "styled-components";
import InfoGrid from "./InfoGrid";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(65, 65, 65);
`

const AboutUs: React.FC = () => {

  return (
    <>
      <Background>
        <InfoGrid /> 
      </Background>
    </>
  );
}

export default AboutUs;