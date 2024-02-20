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
  top: 1%;
`;

const PipelineResetTriggerBot = styled.div`
  position: absolute;
  top: 99%;
`;

let playAnimation = false;

const OurServices: React.FC = () => {
  const animationStartRef = useRef(null);
  const animationStopTopRef = useRef(null);
  const animationStopBotRef = useRef(null);

  const midInViewport = useIsInViewport(animationStartRef);
  const topInViewport = useIsInViewport(animationStopTopRef);
  const botInViewport = useIsInViewport(animationStopBotRef);

  if (!playAnimation && midInViewport) {
    playAnimation = true;
  } else if (playAnimation && !botInViewport && !topInViewport) {
    playAnimation = false;
  }

  return (
    <Background>
      <Pipeline
        animationSeconds={10}
        slowDownSteps={10}
        animationTrigger={playAnimation}
      />
      <PipelineStartTrigger ref={animationStartRef} />
      <PipelineResetTriggerTop ref={animationStopTopRef} />
      <PipelineResetTriggerBot ref={animationStopBotRef} /> 
    </Background>
  );
};

export default OurServices;
