import React from "react"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSaveNewQuestion, } from "../actions/";
import { saveQuestionToUser } from "../actions/users";

const NewQuestion = (props) => {
  const [options, setOptions ] = useState({
    optionOne: "yes",
    optionTwo: "no"
  })
  const dispatch = useDispatch()
  const authedUser = useSelector(state=> state.authedUser)
  
  const handleSubmit = () => {
    const {optionOne, optionTwo} = options
    const question = {
      optionOneText:optionOne,
      optionTwoText:optionTwo,
      author:authedUser
    }
    dispatch(handleSaveNewQuestion(question))
    dispatch(saveQuestionToUser(question))
  }
  return (
    <div>
      <header>Create New Question</header>
      <div className="">
        <h3>Would you rather...</h3>
        <label htmlFor="optionOne">
          <input type="text" name="" id="" value={options.optionOne}/>
        </label>
        <div>OR</div>
        <label htmlFor="optionTwo">
          <input type="text" name="" id="" value={options.optionTwo}/>
        </label>
        <button onClick={handleSubmit} >Submit</button>
      </div>
    </div>
  )
};

export default NewQuestion;

