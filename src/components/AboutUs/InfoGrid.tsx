import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  height: 100%;
  width: 100%;
`;

const InfoGrid: React.FC = () => {
  return (
    <>
      <Grid>
        <div>111</div>
        <div>222</div>
        <div>333</div>
        <div>444</div>
      </Grid>
    </>
  );
};

export default InfoGrid;
