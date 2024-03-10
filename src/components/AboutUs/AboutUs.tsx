import React from "react";
import styled from "styled-components";
import LampContainer from "./Lamp";

const Background = styled.div`
  height: 100vh;
  width: 100%;
`;

const title = "O Nas";
const description =
  "Witaj w Dualweb - miejscu gdzie wierzymy, że współpraca jest kluczowym elementem sukcesu. Jesteśmy gotowi być Twoim partnerem w transformacji cyfrowej, oferując nowoczesne, spersonalizowane rozwiązania IT, które napędzają postęp i pozwalają otworzyć się na nowych klientów."
const AboutUs: React.FC = () => {
  return (
    <>
      <Background id="aboutUs">
        <LampContainer title={title}>{description}</LampContainer>
      </Background>
    </>
  );
};

export default AboutUs;
