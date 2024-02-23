import React, { useRef } from "react";
import styled from "styled-components";
import Pipeline from "../PipelineBackground/Pipeline";
import useIsInViewport from "../../hooks/isInViewport";
import MediaCard from "./Card";
import ComputerIMG from "../../assets/services/computer.png";
import WrenchIMG from "../../assets/services/wrench.png";
import EngineerIMG from "../../assets/services/engineers.png";
import HandshakeIMG from "../../assets/services/handshake.png";
import ShoppingCartIMG from "../../assets/services/shopping_cart.png";

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const PipelineStartTrigger = styled.div`
  position: absolute;
  top: 50%;
`;

const PipelineResetTriggerTop = styled.div`
  position: absolute;
  top: 1%;
`;

const PipelineResetTriggerBot = styled.div`
  position: absolute;
  top: 99%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }
`;

let playAnimation = false;

const OurServices: React.FC = () => {
  const animationStartRef = useRef(null);
  const animationStopTopRef = useRef(null);
  const animationStopBotRef = useRef(null);

  const midInViewport = useIsInViewport(animationStartRef);
  const topInViewport = useIsInViewport(animationStopTopRef);
  const botInViewport = useIsInViewport(animationStopBotRef);

  if (!playAnimation && midInViewport) {
    playAnimation = true;
  } else if (playAnimation && !botInViewport && !topInViewport) {
    playAnimation = false;
  }

  return (
    <Background>
      <Pipeline
        animationSeconds={10}
        slowDownSteps={10}
        animationTrigger={playAnimation}
      />
      <PipelineStartTrigger ref={animationStartRef} />
      <PipelineResetTriggerTop ref={animationStopTopRef} />
      <PipelineResetTriggerBot ref={animationStopBotRef} />

      <CardsContainer>
        <MediaCard
          title="Strony www i aplikacje internetowe"
          description="Realizujemy projekty oparte na nowoczesnych technologiach, 
          gwarantując interaktywne i atrakcyjne rozwiązania, dostosowane do dynamicznie zmieniającego się środowiska online."
          image={ComputerIMG}
        />
        <MediaCard
          title="Rozbudowa systemów"
          description="Działamy na rzecz naszych klientów, dostosowując systemy do nowych wymagań i standardów branżowych. 
          Przeprowadzamy analizę istniejących rozwiązań, identyfikując obszary poprawy i proponując skuteczne strategie rozbudowy."
          image={WrenchIMG}
        />
        <MediaCard
          title="Doświadczony zespół"
          description="Rozumiemy unikalne potrzeby i wymagania co pozwala nam dostarczyć rozwiązania odpowiadające najwyższym standardom 
          jakości. Współpracujemy harmonijnie, wykorzystując kreatywność i zdolności techniczne, aby tworzyć innowacyjne i skuteczne produkty."
          image={EngineerIMG}
        />
        <MediaCard
          title="Sklepy internetowe"
          description="Realizujemy projekty sklepów internetowych zapewniając intuicyjne i bezproblemowe doświadczenie zakupowe dla klientów. Nasze podejście opiera się na 
          wykorzystaniu najnowszych technologii e-commerce, optymalizacji procesów płatności oraz integracji z systemami logistycznymi."
          image={ShoppingCartIMG}
        />
        <MediaCard
          title="Wsparcie techniczne"
          description=" Oferujemy zarówno wsparcie online, jak i telefoniczne, zapewniając klientom szybki dostęp do niezbędnej pomocy. Nasza obsługa techniczna obejmuje 
          monitorowanie wydajności systemów, aktualizacje oprogramowania oraz naprawy awarii."
          image={HandshakeIMG}
        />
      </CardsContainer>
    </Background>
  );
};

export default OurServices;
