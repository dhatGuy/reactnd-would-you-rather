import React from "react";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = styled.header``;
const ProgressContainer = styled.div``;

const ResultCard = ({ optionOne, optionTwo, authedUser }) => {
  const total = optionOne.votes.length + optionTwo.votes.length;
  const isOptionOne = optionOne.votes.includes(authedUser);
  const isOptionTwo = optionTwo.votes.includes(authedUser);
  return (
    <div>
      <Header>Results:</Header>
      <div>
        <p>
          {optionOne.text}? {isOptionOne && <span title="Your vote">✔</span>}
        </p>
        <ProgressContainer>
          <ProgressBar
            variant="info"
            now={(optionOne.votes.length / total) * 100}
            label={`${(optionOne.votes.length / total) * 100}% `}
          />
        </ProgressContainer>
        <p>
          {optionOne.votes.length} out of {total} votes
        </p>
      </div>
      <div>
        <p>
          {optionTwo.text}? {isOptionTwo && <span title="Your vote">✔</span>}
        </p>
        <ProgressContainer>
          <ProgressBar
            variant="info"
            now={(optionTwo.votes.length / total) * 100}
            label={`${(optionTwo.votes.length / total) * 100}% `}
          />
        </ProgressContainer>
        <p>
          {optionTwo.votes.length} out of {total} votes
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
