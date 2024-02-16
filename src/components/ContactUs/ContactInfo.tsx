import React from "react";
import styled from "styled-components";

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  color: white;
  padding-top: 12vh;
  text-align: center;
  font-family: "Montserrat";

  & h2 {
    font-size: 8vh;
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
    max-width: 450px;
    width: 50%;
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
  phoneNumber,
  email,
  bottomText
}: {
  adres: string,
  phoneNumber: string,
  email: string,
  bottomText: string
}) => {
  return (
    <ContactInfoDiv>
      <h2>Kontakt</h2>
      <h3>Adres</h3>
      <p>{adres}</p>
      <h3>Numer Telefonu</h3>
      <p>{phoneNumber}</p>
      <h3>Email</h3>
      <p>{email}</p>

      <BottomText>
        {bottomText}
      </BottomText>

    </ContactInfoDiv>
  );
}

export default ContactInfo;