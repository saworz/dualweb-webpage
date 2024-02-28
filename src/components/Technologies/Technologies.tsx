import styled from "styled-components";
import BackgroundIMG from "../../assets/laptop.jpeg"
import TechnologyIcons from "./Icons";

const RightSideContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 20%;
  left: 35%;
  width: 120vh;
  height: 70vh;
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  background:no-repeat url(${BackgroundIMG});
  background-size: 100% 100%;
`

const TextContainer = styled.div`
  width: 100vh;
  color: white;

  & p {
    font-family: "montserrat";
    text-align: justify;
    font-size: larger;
  }
`;

const BadgesContainer = styled.div`
  position: absolute;
  top: 65%;
  display: flex;
  flex-direction: column;
  & h1 {
    margin-bottom: 4vh;
    color: white;
    font-family: "montserrat";
    font-size: 3vh;
    text-align: center;
  }
`;

const Technologies = () => {
  return (
    <Background>
      <RightSideContainer>
      <TextContainer>
        <p>Odwiedź naszą stronę już dziś i skorzystaj z naszych usług tworzenia stron internetowych! 
          Nasz doświadczony zespół projektantów dostosuje witrynę do Twoich unikalnych potrzeb, zapewniając 
          profesjonalny i atrakcyjny wygląd. Inwestycja w indywidualne projektowanie to klucz do wyróżnienia 
          się w sieci i przyciągnięcia uwagi klientów. Rozpocznij swoją podróż online z naszymi ekspertami ds. projektowania stron.</p>
      </TextContainer>
      
      <BadgesContainer>
        <h1>Technologie z których korzystamy</h1>
        <TechnologyIcons/>
      </BadgesContainer>

      </RightSideContainer>
    </Background>        
  )
}

export default Technologies;