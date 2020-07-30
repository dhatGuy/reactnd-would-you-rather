import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { handleSaveAnswerToUser } from "../actions/users";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;
const Button = styled.button`
  width: 100%;
  background: #8ac4ff;
  border: none;
  padding: 2px 0;
  font-size: 20px;
  align-self: center;
`;

const QuestionCard = ({authedUser, id, questions}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()
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
    <div>
      <h2>Would you rather...</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="optionOne">
          <input
            type="radio"
            name="option"
            id="optionOne"
            value="optionOne"
            onChange={handleChange}
          />
          {questions[id].optionOne.text} ?
        </label>
        <label htmlFor="optionTwo">
          <input
            type="radio"
            name="option"
            id="optionTwo"
            value="optionTwo"
            onChange={handleChange}
          />
          {questions[id].optionTwo.text} ?
        </label>
        <Button type="submit" disabled={value === ""}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default QuestionCard;
