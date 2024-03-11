import React, { useState } from "react";
import styled from "styled-components";
import HeaderBackgroundLowRes from "../../assets/header-background-low-res.png";
import HeaderBackgroundHighRes from "../../assets/header-background.png";
import LogoDW from "../../assets/logo.png";
import { device } from "../../settings/deviceSize";
import { motion } from "framer-motion";

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;


const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -9999;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Text = styled.h1`
  width: 80%;
  color: #dadada;
  /* color: #888888; */
  /* font-family: Open-sans, sans-serif; */
  font-family: 'montserrat';
  font-size: 24px;
  font-weight: 600;
  text-align: center;

  @media ${device.laptop} {
    width: auto;
    font-size: 36px;
  }
`;

const Header: React.FC = () => {
  const [imageDownloaded, setImageDownloaded] = useState(false);

  const handleDownload = () => {
    setImageDownloaded(true);
  };

  return (
    <Background id="header">
      {!imageDownloaded && (<BackgroundImage
        src={HeaderBackgroundLowRes}
      />)}

      <BackgroundImage
        src={HeaderBackgroundHighRes}
        style={{ 
          display: imageDownloaded ? 'block' : 'none' }}
        onLoad={handleDownload}
        onError={() => console.error("Error loading image")}
      />

      <ContentWrapper>
        <motion.img
          src={LogoDW}
          alt="dualweb logo"
          initial={{ rotate: 360, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
        />
        <Text>Rozwiązania softwarowe dla Twojego biznesu</Text>
      </ContentWrapper>
    </Background>
  );
};

export default Header;
