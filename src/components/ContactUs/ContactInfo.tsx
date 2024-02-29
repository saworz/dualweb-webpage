import React from "react";
import styled from "styled-components";
import { formBreak } from "../../settings/deviceSize";

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  margin-top: 25px;
  color: white;
  padding-top: 8vh;

  text-align: center;
  font-family: "Montserrat";

  & h2 {
    font-size: 6vh;
    margin-bottom: 5vh;
  }

  & h3 {
    font-size: 4vh;
    color: #dddddd;
    margin-bottom: 1vh;
  }

  & p {
    font-size: 2vh;
    color: #d6d6d6;
    max-width: 600px;
    width: 75%;

    @media (min-width: 1270px) {
      max-width: 450px;
      width: 50%;
    }

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4vh;
  }

  @media (max-width: ${formBreak}) {
    height: 40%;
    width: 100%;
    margin-top: 1vh;
    padding-top: 6vh;
    margin-bottom: 20px;
    
    & h2 {
      display: none;
    }

    & h3 {
      margin-top: 1vh;
      margin-bottom: 0;
    }
    
    & p {
      margin-bottom: 0;
    }
  }
`;

const BottomText = styled.p`
  color: #d6d6d6;
  width: 50%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 2vh;
  
  @media (max-width: ${formBreak}) {
    display: none;
  }
`;

const ContactInfo = ({
  adres,
  contact1,
  contact2,
  email,
  bottomText,
}: {
  adres: string;
  contact1: string;
  contact2: string;
  email: string;
  bottomText: string;
}) => {
  return (
    <ContactInfoDiv>
      <h2>Kontakt</h2>
      <h3>Adres</h3>
      <p>{adres}</p>
      <h3>Numer Telefonu</h3>
      <p>{contact1}</p>
      <p>{contact2}</p>
      <h3>Email</h3>
      <p>{email}</p>

      <BottomText>{bottomText}</BottomText>
    </ContactInfoDiv>
  );
};

export default ContactInfo;
