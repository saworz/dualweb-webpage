import React from "react";
import styled from "styled-components";
import { BackgroundGradient } from "./BackgroundGradient";

const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

const FormField = styled.div`
  width: 75%;
  height: 80%;

  & textarea {
    outline: none;
    resize: none;
    padding: 3vh;
    font-size: 2vh;
    background-color: rgb(229 231 235);
    color: black;
  }

  & textarea::placeholder {
    color: black;
  }

  & button {
    margin-top: 22vh;
    margin-bottom: 5vh;
  }
`;


const ContactForm: React.FC = () => {
    return (
        <ContactFormDiv>
          <FormField>
            <BackgroundGradient className="flex flex-col rounded-[22px] p-4 bg-gray-200 dark:bg-zinc-900">
             <textarea placeholder="Imię i nazwisko"></textarea>
             <textarea placeholder="Email"></textarea>
             <textarea placeholder="Numer telefonu"></textarea>
             <textarea placeholder="(Opcjonalnie) Opis projektu"></textarea>

             <button>Wyślij!</button>
            </BackgroundGradient>
          </FormField>

        </ContactFormDiv>
    );
}

export default ContactForm;