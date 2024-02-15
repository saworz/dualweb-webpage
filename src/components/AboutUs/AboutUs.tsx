import React from "react";
import styled from "styled-components";
import LampContainer from "./Lamp";

const Background = styled.div`
  height: 100vh;
  width: 100%;
`;

const title = "O Nas";
const description =
  "Witaj w DualWeb - miejscu, gdzie pasja do tworzenia innowacyjnych rozwiązań spotyka się z zaangażowaniem w rozwijanie oblicza Twojego biznesu online. Jesteśmy zespołem kreatywnych entuzjastów, gotowych przekuć Twoje pomysły na funkcjonalne i estetyczne strony internetowe.";

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
