import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const QuestionDiv = styled.div`
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
`;

const Question = ({ id, author, avatarURL, optionOne, optionTwo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <QuestionCard>
      <QuestionHeader>{author} asks:</QuestionHeader>
      <Main>
        <Img src={avatarURL} alt="" />
        <QuestionDiv>
          Would You Rather...
          <Form onSubmit={handleSubmit}>
            <label htmlFor="option1">
              <input type="radio" name="option" id="optionOne" />
              {optionTwo}...
            </label>
            <label htmlFor="option2">
              <input type="radio" name="option" id="optionTwo" />
              {optionOne}...
            </label>
            <Button type="submit">Submit</Button>
          </Form>
        </QuestionDiv>
      </Main>
    </QuestionCard>
  );
};

export default Question;
