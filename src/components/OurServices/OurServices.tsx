import React from "react";
import styled from "styled-components";
import Pipeline from "../PipelineBackground/Pipeline";

const Background = styled.div`
  height: 100vh;
  width: 100%;
`;


const OurServices: React.FC = () => {
  return (
    // <Background>
      <Pipeline animationSeconds={10} slowDownSteps={10}/>
    // </Background>
  )
}

export default OurServices;