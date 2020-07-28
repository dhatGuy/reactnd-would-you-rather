import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <nav className="nav-links">
        <li className="nav-link">
          <NavLink to="/" exact >Home</NavLink>
        </li>
        <li className="nav-link"><NavLink to="/new">Add Question</NavLink></li>
        <li className="nav-link">Leaderboard</li>
      </nav>

      <nav>
        <li><NavLink to="/login">Logout</NavLink></li>
      </nav>
    </div>
  )
}

export default Nav;
