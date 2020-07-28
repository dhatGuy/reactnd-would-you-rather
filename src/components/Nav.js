import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px 5px;
`
const NavBarLinks = styled.nav`
  display: flex;
`
const NavBarLink = styled.li`
  margin-left: 5px;
`
const Nav = () => {
  return (
    <NavBar>
      <NavBarLinks className="nav-links">
        <NavBarLink className="nav-link">
          <NavLink to="/" exact >Home</NavLink>
        </NavBarLink>
        <NavBarLink className="nav-link"><NavLink to="/new">Add Question</NavLink></NavBarLink>
        <NavBarLink className="nav-link">Leaderboard</NavBarLink>
      </NavBarLinks>

      <nav>
        <li><NavLink to="/login">Logout</NavLink></li>
      </nav>
    </NavBar>
  )
}

export default Nav;
