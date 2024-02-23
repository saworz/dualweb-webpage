import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BackgroundGradient } from "./BackgroundGradient";
import FormButton from "./FormButton";
import emailjs from "@emailjs/browser";

const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  font-family: "Montserrat";
`;

const FormField = styled.div`
  width: 75%;

  @media (max-width: 420px) {
    width: 90%;
  }

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

const InputsField = styled.form`
  display: flex;
  flex-direction: column;
`;

const BlackLine = styled.div`
  border-top: 2px solid black;
  margin-bottom: 6vh;
`;

const ContactForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string), []);
  
  const sendEmail = async (e: any) => {
    const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
    const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: nameRef.current?.value,
        email: emailRef.current?.value,
        phoneNumber: phoneNumberRef.current?.value,
        message: messageRef.current?.value,
      });
      console.log("email sent successfully")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <ContactFormDiv>
      <FormField>
        <BackgroundGradient className="flex flex-col rounded-[22px] p-2v sm:p-5v bg-gray-200 dark:bg-zinc-900">
          <InputsField>
            <input
              id="name"
              type="text"
              placeholder="Imię i nazwisko"
              ref={nameRef}
            ></input>
            <BlackLine />
            <input
              id="email"
              type="text"
              placeholder="Email"
              ref={emailRef}
            ></input>
            <BlackLine />
            <input
              id="phoneNumber"
              type="text"
              placeholder="Numer telefonu"
              ref={phoneNumberRef}
            ></input>
            <BlackLine />
            <textarea
              id="description"
              placeholder="W czym możemy Ci pomóc?"
              ref={messageRef}
            ></textarea>
          </InputsField>

          <FormButton clickEvent={sendEmail}/>
        </BackgroundGradient>
      </FormField>
    </ContactFormDiv>
  );
};

export default ContactForm;
