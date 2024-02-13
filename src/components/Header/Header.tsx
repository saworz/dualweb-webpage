import React from "react";
import styled from "styled-components";
import HeaderBackground from "../../assets/header-background.png"
import LogoDW from "../../assets/logo.png"

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:no-repeat url(${HeaderBackground});
  background-size: cover;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;  
`

const Text = styled.h1`
  color: #888888;
  font-family: Open-sans, sans-serif;
  font-size: 36;
`

const Header: React.FC = () => {

  return (
    <Background>
      <ContentWrapper>
        <img src={LogoDW} />
        <Text>Programujemy, Wdrażamy, Udoskonalamy</Text>
      </ContentWrapper>
    </Background>
  );
}

export default Header;