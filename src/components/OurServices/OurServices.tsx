import React, { useRef } from "react";
import styled from "styled-components";
import Pipeline from "../PipelineBackground/Pipeline";
import useIsInViewport from "../../hooks/isInViewport";

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const PipelineStartTrigger = styled.div`
  position: absolute;
  top: 50%;
`;

const PipelineResetTriggerTop = styled.div`
  position: absolute;
  top: 0%;
`;

const PipelineResetTriggerBot = styled.div`
  position: absolute;
  top: 100%;
`;

const OurServices: React.FC = () => {
  const animationStartRef = useRef(null);
  const animationStopTopRef = useRef(null);
  const animationStopBotRef = useRef(null);

  const isInViewport = useIsInViewport(animationStartRef);
  const topInViewport = useIsInViewport(animationStopTopRef);
  const botInViewport = useIsInViewport(animationStopBotRef);

  console.log(isInViewport);
  return (
    <Background>
      <Pipeline
        animationSeconds={10}
        slowDownSteps={10}
        animationTrigger={isInViewport}
        animationReset={topInViewport || botInViewport}
      />
      <PipelineStartTrigger ref={animationStartRef} />
      <PipelineResetTriggerTop ref={animationStopTopRef} />
      <PipelineResetTriggerBot ref={animationStopBotRef} /> 
    </Background>
  );
};

export default OurServices;
