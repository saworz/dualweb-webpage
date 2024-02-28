import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BackgroundGradient } from "./BackgroundGradient";
import FormButton from "./FormButton";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { formBreak } from "../../settings/deviceSize";
import "./toast.css";

const ContactFormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  font-family: "Montserrat";

  margin-top: 25px;

  @media(max-width: ${formBreak}) {
    height: 50%;
    width: 100%;
    margin-top: 0;
  }
`;

const FormField = styled.div`
  width: 75%;

  @media (max-width: 1270px) {
    width: 95%;
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

  @media(max-width: ${formBreak}) {
    width: 80%;

    & textarea {
      height: 10vh;
      margin-bottom: 2vh;
    }

    & button {
      margin-top: 0;
    }
  }
`;

const InputsField = styled.form`
  display: flex;
  flex-direction: column;
`;

const BlackLine = styled.div`
  border-top: 2px solid black;
  margin-bottom: 6vh;

  @media(max-width: ${formBreak}) {
    margin-bottom: 1vh;
  }
`;

const ContactForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string),
    []
  );

  const sendEmail = async (e: any) => {
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    ) {
      toast.error("Wypełnij pola oznaczone gwiazdką.", {
        className: "toast-position",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // !!!!!! uncomment to test messages without sending email 
    toast.success("🦄 Wow so easy!", {
      className: "toast-position",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // !!!!!! and comment this part till last bracket
  //     const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
  //     const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;
  //     try {
  //       setLoading(true);
  //       const sendPromise = new Promise((resolve, reject) => {
  //         emailjs.send(serviceId, templateId, {
  //           name: nameRef.current?.value,
  //           email: emailRef.current?.value,
  //           phoneNumber: phoneNumberRef.current?.value,
  //           message: messageRef.current?.value,
  //         })
  //           .then((response) => resolve(response))
  //           .catch((error) => reject(error));
  //       });

  //       toast.promise(
  //         sendPromise,
  //         {
  //           pending: "Wysyłanie wiadomości...",
  //           success: "Wiadomość wysłana!",
  //           error: "Coś poszło nie tak :(",
  //         }
  //       )
  //     } finally {
  //       setLoading(false);
  //     }
  };

  return (
    <ContactFormDiv>
      <FormField>
        <BackgroundGradient className="flex flex-col rounded-[22px] pl-3v pr-3v pt-2v pb-2v formBreak:p-5v bg-gray-200 dark:bg-zinc-900">
          <InputsField>
            <input
              id="name"
              type="text"
              placeholder="Imię*"
              ref={nameRef}
            ></input>
            <BlackLine />
            <input
              id="email"
              type="text"
              placeholder="Email*"
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
              placeholder="W czym możemy Ci pomóc?*"
              ref={messageRef}
            ></textarea>
          </InputsField>

          <FormButton clickEvent={sendEmail} />
        </BackgroundGradient>
      </FormField>
    </ContactFormDiv>
  );
};

export default ContactForm;
