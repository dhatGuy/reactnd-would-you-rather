import React from "react"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSaveNewQuestion, } from "../actions/";
import { Redirect } from "react-router-dom";
// import { saveQuestionToUser } from "../actions/users";

const NewQuestion = (props) => {
  const [options, setOptions ] = useState({
    optionOne: "",
    optionTwo: ""
  })
  const [toHome, setToHome] = useState(false)
  const dispatch = useDispatch()
  const authedUser = useSelector(state=> state.authedUser)
  const handleChange = (e) => {
    if(e.target.id === "1"){
      setOptions({
        ...options,
        optionOne: e.target.value
      })
    } else {
      setOptions({
        ...options,
        optionTwo: e.target.value
      })
    }
  }
  const handleSubmit = () => {
    const {optionOne, optionTwo} = options
    const question = {
      optionOneText:optionOne,
      optionTwoText:optionTwo,
      author:authedUser
    }
    dispatch(handleSaveNewQuestion(question))
    // dispatch(saveQuestionToUser(question))

    setOptions({
      optionOne: "",
      optionTwo: ""
    })
    setToHome(true)
  }

  if(toHome) return <Redirect to="/" />

  return (
    <div>
      <header>Create New Question</header>
      <div className="">
        <h3>Would you rather...</h3>
        <label htmlFor="optionOne">
          <input type="text" name="optionOne" id={1} onChange ={handleChange} value={options.optionOne}/>
        </label>
        <div>OR</div>
        <label htmlFor="optionTwo">
          <input type="text" name="optionTwo" id={2} onChange ={handleChange} value={options.optionTwo}/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
};

export default NewQuestion;

