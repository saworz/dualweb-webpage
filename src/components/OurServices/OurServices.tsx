import React, { useRef } from "react";
import styled from "styled-components";
import Pipeline from "../PipelineBackground/Pipeline";
import useInViewport from "../../hooks/useInViewport";
import MediaCard from "./Card";
import { ourServicesData } from "../../constants/ourServicesDictionary";
import { device } from '../../settings/deviceSize';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { RxArrowTopRight } from "react-icons/rx";

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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  bottom: 0;
  height: 80vh;
  width: 100%;
  transform: translate(0, -50%);
  
  @media ${device.laptop} {
    top: 50%;
    height: auto;
    width:50%;
    transform: translate(50%, -50%);
  }
`;

let playAnimation = false;

const OurServices: React.FC = () => {
  const animationStartRef = useRef(null);
  const animationStopTopRef = useRef(null);
  const animationStopBotRef = useRef(null);

  const midInViewport = useInViewport(animationStartRef);
  const topInViewport = useInViewport(animationStopTopRef);
  const botInViewport = useInViewport(animationStopBotRef);

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

      <CardsContainer>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          grabCursor={true}
          loop={true}
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={true}
          modules={[Pagination, EffectCoverflow]}
          className="mySwiper"
        >
          {ourServicesData.map((item) => (
            <SwiperSlide key={item.title}>
              <MediaCard
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsContainer>
    </Background >
  );
};

export default OurServices;
