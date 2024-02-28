import React from "react";
import styled from "styled-components";
import Tech from "./Languages";

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SingleTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2vh;
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
    <IconsContainer>
      {Object.keys(Tech).map((key) => (
        <SingleTech key={key}>
          <h3>{Tech[key as keyof typeof Tech].text}</h3>
          <img
            src={Tech[key as keyof typeof Tech].img}
            alt={Tech[key as keyof typeof Tech].text}
          />
        </SingleTech>
      ))}
    </IconsContainer>
  );
};

export default TechnologyIcons;
