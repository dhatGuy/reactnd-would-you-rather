import React, { useEffect } from "react";
import handleInitialData from "../actions";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Question from "./Question";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import GlobalStyle from "../GlobalStyle";
import Leaderboard from "./Leaderboard";
import styled from "styled-components"
import media from "styled-media-query"

const App = () => {
  const dispatch = useDispatch();
  const authedUser = localStorage.getItem("authedUser");
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const AppContainer = styled.div`
    width: 50%;
    margin: 0 auto;

    ${media.lessThan("medium")`
      width: 95%;
    `}
  `

  return (
    <AppContainer>
      <GlobalStyle />
      <LoadingBar />
      <Router>
        {authedUser === null || authedUser === "null" ? (
          <>
            <Login />
            <Redirect to="/login" />
          </>
        ) : (
          <>
            <Nav />
            <Route path="/login" component={Login} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/question/:id" component={Question} />
          </>
        )}
      </Router>
    </AppContainer>
  );
};

export default App;
