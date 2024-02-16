import React from "react";
import styled from "styled-components";
import { BackgroundGradient } from "./BackgroundGradient";
import FormButton from "./FormButton";

const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
`;

const FormField = styled.div`
  width: 75%;
  height: 85%;

  & textarea,
  & input[type="text"] {
    outline: none;
    resize: none;
    padding: 1vh;
    font-size: 2vh;
    background-color: rgb(229 231 235);
    color: black;
  }

  & textarea {
    border: 2px solid black;
    border-radius: 5px;
    height: 25vh;
    margin-bottom: 5vh;
  }

  & textarea::placeholder,
  & input[type="text"]::placeholder {
    color: black;
  }

  & button {
    margin-top: 5vh;
    border: 1px solid black;
    font-size: 2vh;
  }
`;

const InputsField = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlackLine = styled.div`
  border-top: 2px solid black;
  margin-bottom: 6vh;
`;


const ContactForm: React.FC = () => {
    return (
        <ContactFormDiv>
          <FormField>
            <BackgroundGradient className="flex flex-col rounded-[22px] p-5v bg-gray-200 dark:bg-zinc-900">
              <InputsField>
                <input id="name" type="text" placeholder="Imię i nazwisko"></input>               
                <BlackLine />
                <input id="email" type="text" placeholder="Email"></input>
                <BlackLine />
                <input id="phoneNumber" type="text" placeholder="Numer telefonu"></input>
                <BlackLine />
                <textarea id="description" placeholder="W czym możemy Ci pomóc?"></textarea>
              </InputsField>
              
              <FormButton />

            </BackgroundGradient>
          </FormField>

        </ContactFormDiv>
    );
}

export default ContactForm;