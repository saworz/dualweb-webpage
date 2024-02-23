import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 10vh;
  max-height: 100px;

  @media (max-width: 1400px) or (max-height: 630px) {
    margin: 30px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  opacity: 0.85;
  width: 35vh;
  height: 65vh;
  max-width: 260px;
  max-height: 400px;
  margin: 3vh;
  background-color: white;
  border-radius: 10px;

  &:hover {
    background-color: #dfdc5d;
    transform: translate(0%, -5%);
  }

  @media (max-width: 1400px) or (max-height: 630px) {
    width: 32vh;
    height: 36vh;
    max-height: 250px;
    min-width: 180px;
    min-height: 205px;
  }
`;
const Image = styled.img`
  max-width: 70px;
`;

const TypographyDescription = styled(Typography)`
  @media (max-width: 1400px) or (max-height: 630px) {
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
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <TypographyDescription variant="body2" color="text.secondary" textAlign="center">
          {description}
        </TypographyDescription>
      </CardContent>
    </CardContainer>
  );
};

export default MediaCard;
