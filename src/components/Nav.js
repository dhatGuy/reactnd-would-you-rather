import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px 5px;
`;
const NavBarRight = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .user-details {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const NavBarLeft = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarLink = styled.li`
  margin-left: 5px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Nav = () => {
  const authedUser = useSelector(({ authedUser, users }) => users[authedUser]);
  const dispatch = useDispatch();

  if (!authedUser) return null;

  return (
    <NavBar>
      <NavBarLeft>
        <NavBarLink>
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </NavBarLink>
        <NavBarLink>
          <NavLink to="/new" activeClassName="active">
            Add Question
          </NavLink>
        </NavBarLink>
        <NavBarLink>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </NavBarLink>
      </NavBarLeft>

      <NavBarRight>
        <li className="user-details">
          <Img
            src={authedUser.avatarURL}
            alt={authedUser.id}
            title={authedUser.name}
          />
          <span>{authedUser.name}</span>
        </li>
        <NavBarLink>
          <NavLink to="/login" onClick={() => 
            {
              localStorage.setItem("authedUser", null)
              dispatch(setAuthedUser(null))
          }}>
            Logout
          </NavLink>
        </NavBarLink>
      </NavBarRight>
    </NavBar>
  );
};

export default Nav;
