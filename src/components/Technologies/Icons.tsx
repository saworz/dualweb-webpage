import React from "react";
import styled from "styled-components";
import Tech from "./Languages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SingleTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & h3 {
    margin: 0;
    text-align: center;
    font-family: "montserrat";
    color: white;
  }

  & img {
    max-width: 12vh;
    width: auto;
    height: auto;
    margin: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const TechnologyIcons: React.FC = () => {
  return (
    //ZROBIĆ WIDTH AUTO DLA SWIPER SLIDE I ZROBIC ABY AUTOMATYCZNIE SIĘ PORUSZAŁO BĘDZIE FAJNIE TO WYGLĄDAĆ :D 
    <IconsContainer>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {Object.keys(Tech).map((key) => (
          <SwiperSlide key={key}>
            <SingleTech>
              <h3>{Tech[key as keyof typeof Tech].text}</h3>
              <img
                src={Tech[key as keyof typeof Tech].img}
                alt={Tech[key as keyof typeof Tech].text}
              />
            </SingleTech>
          </SwiperSlide>
        ))}
      </Swiper>
    </IconsContainer>
  );
};

export default TechnologyIcons;
