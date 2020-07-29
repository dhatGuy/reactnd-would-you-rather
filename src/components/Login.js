import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setAuthedUser } from "../actions/authedUser";
import { Link, Redirect } from "react-router-dom";
import redux from "../images/redux.svg"

const Header = styled.h6`
  text-align: center;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #31867d;
`;
const LoginContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;
const LoginHeader = styled.h3`
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

  > * {
  /* color: #31867d !important; */

  }
`

const Login = () => {
  const users = useSelector((state) => state.users);
  const [userId, setUserId] = useState("");
  const [toHome, setToHome] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const onSubmit = (e) => {
    dispatch(setAuthedUser(userId));
    setToHome(true);
  };

  if (toHome) return <Redirect to="/" />;

  return (
    <>
      <LoginContainer>
        <Header>
          Welcome to Would You Rather App
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
          <Link to="/" className="link">
            <Button onClick={onSubmit} disabled={userId === ""} type="submit">
              Login
            </Button>
          </Link>
        </Form>
      </LoginContainer>
    </>
  );
};

export default Login;
