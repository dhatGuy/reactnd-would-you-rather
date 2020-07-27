import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const QuestionCard = styled.div`
  margin: 5px;
  background: #397298;
  color: #fff;
  padding: 10px 5px;
`;

const QuestionHeader = styled.header`
  /* margin: 10px 0; */
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const QuestionContainer = styled.div`
  display: flex;
  border-left: 1px solid black;
  flex-direction: column;
  padding-left: 5px;
  flex: 1 1 0;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid black;
`;

const Button = styled.button`
  width: 98%;
  background: #8ac4ff;
  border: none;
  padding: 2px 0;
  font-size: 20px;
  align-self: center;
  cursor: pointer;
`;

const QuestionTeaser = ({ id }) => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector(state=> state.users)
  const { author, optionOne } = questions[id];
  const { avatarURL } = users[author]
 
  
  return (
    <QuestionCard>
      <QuestionHeader>{users[author].name} asks:</QuestionHeader>
      <Main>
        <Img src={avatarURL} alt="" />
        <QuestionContainer>
          Would You Rather...
          <div >
            ...{optionOne.text}...
            <Link to={`/question/${id}`}>
              <Button type="submit">View Question</Button>
            </Link>
          </div>
        </QuestionContainer>
      </Main>
    </QuestionCard>
  );
};

export default QuestionTeaser;
