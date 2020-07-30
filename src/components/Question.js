import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

const QuestionContainer = styled.div`
  border: 3px solid whitesmoke;
  background: #397298;
  color: #fff;
`;

const QuestionHeader = styled.header`
  padding-left: 5px;
`;

const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100%;
  }
`;

const QuestionDiv = styled.div`
  display: flex;
  border-left: 3px solid #d4eae6;
  flex-direction: column;
  padding-left: 5px;
  flex: 1 1 0;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid #d4eae6;
`;

const Question = ({ match }) => {
  const isEmpty = (obj) => Object.keys(obj).length === 0;
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const { id } = match.params;

  if (isEmpty(users)) return null;
  
  return (
    <>
      {questions[id] === undefined ? (
        <div>Question doesnt not exit</div>
      ) : (
        <QuestionContainer>
          <QuestionHeader>
            {users[questions[id].author].name} asks:
          </QuestionHeader>
          <Main>
            <ImgWrapper>
              <img src={`${users[questions[id].author].avatarURL}`} alt="" />
            </ImgWrapper>
            <QuestionDiv>
              {questions[id].optionOne.votes.includes(authedUser) ||
              questions[id].optionTwo.votes.includes(authedUser) ? (
                <ResultCard
                  optionOne={questions[id].optionOne}
                  optionTwo={questions[id].optionTwo}
                  authedUser={authedUser}
                />
              ) : (
                <QuestionCard
                  authedUser={authedUser}
                  id={id}
                  questions={questions}
                />
              )}
            </QuestionDiv>
          </Main>
        </QuestionContainer>
      )}
    </>
  );
};

export default Question;
