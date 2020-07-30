import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const QuestionCard = styled.div`
  margin: 5px;
  background: #397298;
  color: #fff;
  border: 3px solid #d4eae6;
`;

const QuestionHeader = styled.header`
  padding-left: 5px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding-right: 5px;
border-right: 3px solid #d4eae6;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  flex: 1 1 0;
`;

const Main = styled.main`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 3px solid #d4eae6;
`;

const Button = styled.button`
  width: 98%;
  background: #8ac4ff;
  border: none;
  padding: 2px 0;
  font-size: 20px;
  align-self: center;
  margin-bottom: 5px;
`;

const QuestionTeaser = ({ id }) => {
  const isEmpty = (obj) => Object.keys(obj).length === 0;
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector(state=> state.authedUser)

  if (isEmpty(users) || isEmpty(questions)) return null;
const isAnswered = questions[id].optionOne.votes.includes(authedUser) ||
questions[id].optionTwo.votes.includes(authedUser)
  const { author, optionOne } = questions[id];
  const { avatarURL } = users[author];

  return (
    <QuestionCard>
      <QuestionHeader>{users[author].name} asks:</QuestionHeader>
      <Main>
        <Img src={avatarURL} alt="" />
        <QuestionContainer>
          Would You Rather...
          <div>
            {optionOne.text} OR..
            <Link to={`/question/${id}`}>
              <Button type="submit">{isAnswered ? "Results" : "View"}</Button>
            </Link>
          </div>
        </QuestionContainer>
      </Main>
    </QuestionCard>
  );
};

export default QuestionTeaser;
