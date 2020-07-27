import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { handleSaveAnswer } from "../actions/questions";
import { handleSaveAnswerToUser } from "../actions/users";

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

const Question = ({ match }) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch()
  const [value, setValue] = useState("");
  const { id } = match.params;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSaveAnswer({
      authedUser,
      qid: id,
      answer: value,
    }))
    dispatch(handleSaveAnswerToUser({
      authedUser,
      qid: id,
      answer: value,
    }))
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {questions[id] === undefined ? (
        <div>Question doesnt not exit</div>
      ) : (
        // null
        <QuestionCard>
          <QuestionHeader>{users[questions[id].author].name} asks:</QuestionHeader>
          <Main>
            <Img src={`../${users[questions[id].author].avatarURL}`} alt="" />
            <QuestionDiv>
              Would You Rather...
              <Form onSubmit={handleSubmit}>
                <label htmlFor="optionOne">
                  <input
                    type="radio"
                    name="option"
                    id="optionOne"
                    value="optionOne"
                    onChange={handleChange}
                  />
                  {questions[id].optionTwo.text}...
                </label>
                <label htmlFor="optionTwo">
                  <input
                    type="radio"
                    name="option"
                    id="optionTwo"
                    value="optionTwo"
                    onChange={handleChange}
                  />
                  {questions[id].optionOne.text}...
                </label>
                <Button type="submit" disabled={value === ""}>
                  Submit
                </Button>
              </Form>
            </QuestionDiv>
          </Main>
        </QuestionCard>
      )}
    </>
  );
};

export default Question;
