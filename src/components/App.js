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

const App = () => {
  const dispatch = useDispatch();
  const authedUser = localStorage.getItem("authedUser");
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};

export default App;
