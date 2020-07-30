import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import media from "styled-media-query"
import { setAuthedUser } from "../actions/authedUser";
import { useHistory } from "react-router-dom";
import redux from "../images/redux.svg"

const Header = styled.header`
  text-align: center;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #31867d;
`;
const LoginContainer = styled.div`
  width: 50%;
  ${media.lessThan("small")`
    width: 90%
  `}
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 100%;

  > * {
    margin-bottom: 5px;
  }

  .link{
    width: 100%;
  }
`;

const Select = styled.select`
  width: 100%;
`

const Button = styled.button`
  color: #d4eae6;
  width: 100%;
  background-color: #31867d;
  border: none;

`

const Logged = styled.h3`
  margin-top: 50px;
  text-align: center;
`

const Login = () => {
  const users = useSelector((state) => state.users);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()
  const authedUser = localStorage.getItem("authedUser") === "null" || localStorage.getItem("authedUser") === null

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const onSubmit = (e) => {
    localStorage.setItem("authedUser", userId)
    dispatch(setAuthedUser(userId))
    history.push("/")
  };

  return (
    <>
    {authedUser === false?
     <Logged>You're already logged in</Logged> 
     :  
         <LoginContainer>
        <Header>
          <p>Welcome to Would You Rather App</p>
          <h6 className="login-header">Login As</h6>
        </Header>
        <Form >
          <Img src={userId === "" ? redux :  users[userId].avatarURL} />
          <Select
            value={userId}
            onChange={handleChange}
            name="users"
            id="users"
          >
            <option value={null}>Choose an option...</option>
            {Object.keys(users).map((key) => {
              return (
                <option key={key} value={users[key].id}>
                  {users[key].name}
                </option>
              );
            })}
          </Select>
            <Button onClick={onSubmit} disabled={userId === ""} type="submit">
              Login
            </Button>
        </Form>
  </LoginContainer>
  }
    </>
  );
};

export default Login;
