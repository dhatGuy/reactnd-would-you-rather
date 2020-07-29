import React, {useEffect} from "react";
import handleInitialData from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Question from "./Question";
import LoadingBar from "react-redux-loading";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import GlobalStyle from "../GlobalStyle";
import Leaderboard from "./Leaderboard";

const App = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      authedUser: state.authedUser,
      questions: state.questions,
      users: state.users,
    };
  });
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <LoadingBar />
      <Router>
        {state.authedUser !== null ? (
          <>
            <Nav />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/login" component={Login} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/question/:id" component={Question} />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
