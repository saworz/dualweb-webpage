import React from "react";
import styled from "styled-components";
import LampContainer from "./Lamp";

const Background = styled.div`
  height: 100vh;
  width: 100%;
`;

const title = "O Nas";
const description =
 "Witaj w Dualweb - miejscu gdzie wierzymy, że nasza wizja technologicznego postępu może stać się kluczowym elementem Twojego sukcesu. Jesteśmy gotowi być Twoim partnerem w transformacji cyfrowej, oferując nowoczesne, spersonalizowane rozwiązania IT, które napędzają postęp i pozwalają osiągnąć sukces w dynamicznym środowisku biznesowym."
const AboutUs: React.FC = () => {
  return (
    <>
      <Background>
        <LampContainer title={title}>{description}</LampContainer>
      </Background>
    </>
  );
};

export default AboutUs;
