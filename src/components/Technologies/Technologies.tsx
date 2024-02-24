import styled from "styled-components";
import BackgroundIMG from "../../assets/laptop.jpeg"

const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:no-repeat url(${BackgroundIMG});
  background-size: 100% 100%;
`

const Technologies = () => {
  return (
    <Background />        
  )
}

export default Technologies;