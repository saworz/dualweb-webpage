import React, { useState } from "react";
import styled from "styled-components";
import LogoDW from "../../assets/logo.png";
import { device } from '../../settings/deviceSize';
import { motion } from "framer-motion";

const ContentWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.9);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`

const LogoImage = styled(motion.img)`
  height: 50px;
  width: 80px;
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: fixed;
  top: 49px;
  right: -300px;
  width: 250px;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
  padding: 40px 0 0 10px;
  transition: 0.3s ease-in-out;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: relative;
    top: 0;
    left: 0;
    height: auto;
    width: auto;
    padding: 10px 0;
  }
  
  &.active {
    right: 0;
  }

`

const NavItem = styled.li`
  list-style: none;
  padding: 15px 20px;
  position: relative;

  @media ${device.laptop} {
    padding: 0 30px;
  }
`

const NavItemLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #17cf97;
  }

  &:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #17cf97;
    position: absolute;
    bottom: -4px;
    left: 20px;

    @media ${device.laptop} {
      left: 30px;
    }
  }
`

const Mobile = styled.div`
  display:block;
  margin-right: 15px;

  @media ${device.laptop} {
    display: none;
  }
`

const MobileIcon = styled.i`
  font-size: 24px;
  cursor: pointer;
`

const Menu: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <ContentWrapper>
      <LogoImage src={LogoDW} alt="dualweb logo"
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
      <NavBar className={clicked ? 'active' : ''}>
        <NavItem><NavItemLink>O Nas</NavItemLink></NavItem>
        <NavItem><NavItemLink>Technologie</NavItemLink></NavItem>
        <NavItem><NavItemLink>Projekty</NavItemLink></NavItem>
        <NavItem><NavItemLink>Kontakt</NavItemLink></NavItem>
        <NavItem><NavItemLink>Lorem</NavItemLink></NavItem>
      </NavBar>
      <Mobile onClick={handleClick}>
        <MobileIcon
          className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></MobileIcon>
      </Mobile>
    </ContentWrapper>
  );
};

export default Menu;
