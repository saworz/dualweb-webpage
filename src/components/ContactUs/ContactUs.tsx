import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Background = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #3b3b41;
`;



const ContactUs: React.FC = () => {
  return (
    <Background>
      <ContactInfo />
      <ContactForm />
    </Background>
  )
}

export default ContactUs;