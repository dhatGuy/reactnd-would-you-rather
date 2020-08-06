import React from "react"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSaveNewQuestion, } from "../actions/";
import { Redirect } from "react-router-dom";
import styled from "styled-components"
// import { saveQuestionToUser } from "../actions/users";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 3px solid #d4eae6;

  .btn {
    width: 100%;
    background-color: #8ac4ff;
    font-weight: bold;
  }

  label, input{
    width: 100%;
  }
`

const New = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NewQuestion = (props) => {
  const [options, setOptions ] = useState({
    optionOne: "",
    optionTwo: ""
  })
  const {optionOne, optionTwo} = options
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
    <New>
      <h2>Create New Question</h2>
      <Form className="">
        <h2>Would you rather...</h2>
        <label htmlFor="optionOne">
          <input type="text" placeholder="Use Redux" name="optionOne" id={1} onChange ={handleChange} value={options.optionOne}/>
        </label>
        <div>OR</div>
        <label htmlFor="optionTwo">
          <input type="text" placeholder="Use React Context API" name="optionTwo" id={2} onChange ={handleChange} value={options.optionTwo}/>
        </label>
        <button className="btn" onClick={handleSubmit} disabled={optionOne === "" || optionTwo === ""} >Submit</button>
      </Form>
    </New>
  )
};

export default NewQuestion;

