import React from "react";
import styled from "styled-components";

const SingleTech = styled.div`
  & h3 {
    margin: 0;
    text-align: center;
  }
  & img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
    margin: 10px;
  }
`;

const Images = {
  logoCss: require("../../assets/technologies/css.png"),
  logoHtml: require("../../assets/technologies/html.png"),
  logoReact: require("../../assets/technologies/react.png"),
  logoPython: require("../../assets/technologies/python.png"),
  logoVue: require("../../assets/technologies/vue.png"),
  logoMySql: require("../../assets/technologies/mysql.png"),
  logoTs: require("../../assets/technologies/ts.png"),
  logoNodeJs: require("../../assets/technologies/nodejs.png"),
};

const TechnologiesIcons: React.FC = () => {
  return (
    <>
      <SingleTech>
        {" "}
        <h3>Html5</h3> <img src={Images.logoHtml} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>Css3</h3> <img src={Images.logoCss} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>React</h3> <img src={Images.logoReact} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>Python</h3> <img src={Images.logoPython} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>Vue</h3> <img src={Images.logoVue} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>MySQL</h3> <img src={Images.logoMySql} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>TypeScript</h3> <img src={Images.logoTs} />{" "}
      </SingleTech>
      <SingleTech>
        {" "}
        <h3>NodeJS</h3> <img src={Images.logoNodeJs} />{" "}
      </SingleTech>
    </>
  );
};

export default TechnologiesIcons;
