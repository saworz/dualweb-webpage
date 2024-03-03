import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { device } from '../../settings/deviceSize';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 10vh;
  max-height: 100px;

  @media (max-width: 1500px) or (max-height: 630px) {
    margin: 30px;
    margin-bottom: 0px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  margin: 30px 20px;
  background-color: rgba(255,255,255, 1);
  border-radius: 10px;
  
  // &:hover {
    //   background-color: #dfdc5d;
    //   transform: translate(0%, -5%);
    // }
    
    @media ${device.laptop} {
      height: 400px;
      width: 500px;
      background-color: rgba(255,255,255, .85);

  }
`;
const Image = styled.img`
  max-width: 70px;
`;

const TypographyDescription = styled(Typography)`
  @media (max-width: 1500px) or (max-height: 630px) {
    display: none;
  }
`;

const MediaCard: React.FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
      </CardContent>
    </CardContainer >
  );
};

export default MediaCard;
