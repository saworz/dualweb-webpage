import React from "react";
import styled from "styled-components";
import HeaderBackground from "../../assets/header-background.png";
import LogoDW from "../../assets/logo.png";
import { device } from '../../settings/deviceSize';
import { motion } from "framer-motion";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:no-repeat url(${HeaderBackground});
  background-size: 100% 100%;
`
const ContentWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`

const Text = styled.h1`
  width: 80%;
  color: #888888;
  font-family: Open-sans, sans-serif;
  font-size: 24px;
  text-align: center;
  
  @media ${device.laptop} {
    width: auto;
    font-size: 36px;
  }
`

const Header: React.FC = () => {
  return (
    <Background>
      <ContentWrapper>
        <motion.img src={LogoDW} alt="dualweb logo"
          initial={{ rotate: 360, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            duration: .7,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              stiffness: 260,
              damping: 20
            }
          }}
        />
        <Text>Programujemy, Wdrażamy, Udoskonalamy</Text>
      </ContentWrapper>
    </Background>
  );
};

export default Header;
