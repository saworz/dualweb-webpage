import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { formBreak } from "../../settings/deviceSize";

const Background = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #3b3b41;

  @media(max-width: ${formBreak}) {
    flex-direction: column;
  }
`;

const bottomText =
  "Razem z nami otworzysz swój biznes na nowe środowisko. Dołącz do Dualweb i odkryj, jak możemy pomóc Ci osiągnąć sukces online.";

const ContactUs: React.FC = () => {
  return (
    <Background id="contact">
      <ContactInfo
        adres="Bydgoszcz, Polska"
        contact1="507 960 034 - Michał"
        contact2="603 436 546 - Jędrek"
        email="info@dualweb.pl"
        bottomText={bottomText}
      />
      <ContactForm />
    </Background>
  );
};

export default ContactUs;
