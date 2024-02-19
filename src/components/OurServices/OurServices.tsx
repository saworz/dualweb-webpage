import React, { useRef } from "react";
import styled from "styled-components";
import Pipeline from "../PipelineBackground/Pipeline";
import useIsInViewport from "../../hooks/isInViewport";

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const CardsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 60%;
  height: 60%;
  background-color: grey;
  opacity: 0.2;
`;

const OurServices: React.FC = () => {
  const pipelineRef = useRef(null);

  return (
    <Background>
      <Pipeline animationSeconds={10} slowDownSteps={10} />
      <CardsContainer />
    </Background>
  )
}

export default OurServices;