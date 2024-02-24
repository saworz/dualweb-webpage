import React from "react";
import styled from "styled-components";

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  color: white;
  padding-top: 9vh;

  @media (min-width: 640px) {
    padding-top: 8vh;
  }

  @media (min-width: 1024px) {
    padding-top: 12vh;
  }

  text-align: center;
  font-family: "Montserrat";

  & h2 {
    font-size: 8vh;

    @media (max-width: 640px) {
      font-size: 6vh;
    }

    @media (max-width: 420px) {
      font-size: 4vh;
    }

    margin-bottom: 5vh;
  }

  & h3 {
    font-size: 4vh;

    @media (max-width: 420px) {
      font-size: 3vh;
    }

    color: #dddddd;
    margin-bottom: 1vh;
  }

  & p {
    font-size: 2vh;
    color: #d6d6d6;
    max-width: 600px;
    width: 75%;

    @media (min-width: 768px) {
      max-width: 450px;
      width: 50%;
    }

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4vh;
  }
`;

const BottomText = styled.p`
  color: #d6d6d6;
  width: 30%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
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
  contact2: string
  email: string;
  bottomText: string;
}) => {
  return (
    <ContactInfoDiv>
      <h2>Kontakt</h2>
      <h3>Adres</h3>
      <p>{adres}</p>
      <h3>Numer Telefonu</h3>
      <p style={{ marginBottom: 5 }}> {contact1}</p>
      <p>{contact2}</p>
      <h3>Email</h3>
      <p>{email}</p>

      <BottomText>{bottomText}</BottomText>
    </ContactInfoDiv>
  );
};

export default ContactInfo;
