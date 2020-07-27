import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";

const User = styled.div``;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column
`

const Login = () => {
  const users = useSelector((state) => state.users);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(userId));
  };

  return (
    <>
      <div className="header">Welcome</div>
      <div className="login-container">
        <div className="login-header">Login As</div>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Img src={userId === "" ? "" : users[userId].avatarURL} />
          <select
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
          </select>
          <Link to="/">
          <button disabled={userId === ""} type="submit">
            Login
          </button>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
