import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CardContainer = styled.div`
  opacity: 0.85;
  width: 260px;
  height: 400px;
  margin: 3vh;
  background-color: white;
  border-radius: 10px;

  &:hover {
    background-color: #dfdc5d;
    transform: translate(0%, -5%);
  }
`;
const Image = styled.img`
  max-width: 70px;
`;

const MediaCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardContainer>
  );
};

export default MediaCard;
