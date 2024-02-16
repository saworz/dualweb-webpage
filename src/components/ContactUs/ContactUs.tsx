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

const bottomText =
  "Razem z nami przełamiesz granice online i stworzysz trwałe wrażenie w sieci. Dołącz do Dualweb i odkryj, jak możemy pomóc Ci osiągnąć sukces online.";
const ContactUs: React.FC = () => {
  return (
    <Background>
      <ContactInfo
        adres="Bydgoszcz, Polska"
        phoneNumber="111-111-111"
        email="info@dualweb.pl"
        bottomText={bottomText}
      />
      <ContactForm />
    </Background>
  );
};

export default ContactUs;
