import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 20vh;

  & button {
    font-size: 2vh;
  }
`;

const FormButton = () => {
  return (
    <ButtonDiv>
      <button className="shadow-[inset_0_0_0_2px_#616467] px-6 py-2 rounded-full tracking-widest bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
        Wyślij
      </button>
    </ButtonDiv>
  );
};

export default FormButton;
