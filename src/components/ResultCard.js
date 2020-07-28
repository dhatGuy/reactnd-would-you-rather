import React from "react";
import styled from "styled-components";

const Header = styled.header``;
const ResultCard = ({optionOne, optionTwo}) => {
  const total = optionOne.votes.length + optionTwo.votes.length
  return (
    <div>
      <Header>Results:</Header>
      <div>
        <p>{optionOne.text}?</p>
        <meter value={optionOne.votes.length} max={total}>40%</meter>
        <p>{optionOne.votes.length} out of {total} votes</p>
      </div>
      <div>
        <p>{optionTwo.text}</p>
        <meter value={optionTwo.votes.length} max={total}>40%</meter>
        <p>{optionTwo.votes.length} out of {total} votes</p>
      </div>
    </div>
  );
};

export default ResultCard;
